import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Box, Button, TextField, Alert, Grow } from '@mui/material';
import FormStep from './FormStep';
import EndStep from './EndStep';
import { formConfig } from '../config/formSteps';
import { endStepConfig } from '../config/formEndText';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({});
    const [currentStep, setCurrentStep] = useState(1);
    const [registrationId, setRegistrationId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [hasErrors, setHasErrors] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('success');

    useEffect(() => {
        const savedId = localStorage.getItem('registrationId');
        if (savedId) {
            setLoading(true);
            fetch(`http://localhost:3000/registrations/${savedId}`)
                .then(res => {
                    if (!res.ok) throw new Error('Not found');
                    return res.json();
                })
                .then(data => {
                    setRegistrationId(data.id);
                    const { id, created_at, updated_at, ...cleanData } = data;
                    setFormData(cleanData);
                    setCurrentStep(data.current_step);
                })
                .catch(() => localStorage.removeItem('registrationId'))
                .finally(() => setLoading(false));
        }
    }, []);

    const applyMask = (name, value) => {
        if (!value) return value;
        const numericValue = value.replace(/\D/g, '');
        if (name === 'zip_code') return numericValue.replace(/^(\d{5})(\d)/, '$1-$2').slice(0, 9);
        if (name === 'phone') return numericValue.replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2').slice(0, 14);
        if (name === 'cell_phone') return numericValue.replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2').slice(0, 15);
        return value;
    };

    const validateField = (name, value, field) => {
        if (field.required && (!value || value.trim() === '')) return 'Este campo é obrigatório';
        if (field.type === 'email' && value && !/\S+@\S+\.\S+/.test(value)) return 'Digite um email válido';
        if (value) {
            if (name === 'zip_code' && value.length < 9) return 'CEP incompleto';
            if (name === 'cell_phone' && value.length < 15) return 'Celular incompleto';
        }
        return null;
    };

    const validateStep = () => {
        let newErrors = {};
        let isValid = true;
        currentStepConfig.fields.forEach(field => {
            const error = validateField(field.name, formData[field.name], field);
            if (error) {
                newErrors[field.name] = error;
                isValid = false;
            }
        });
        setErrors(newErrors);
        setHasErrors(!isValid);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const maskedValue = applyMask(name, value);
        setFormData((prev) => ({ ...prev, [name]: maskedValue }));

        if (errors[name]) {
            const fieldConfig = currentStepConfig.fields.find(f => f.name === name);
            const fieldError = validateField(name, maskedValue, fieldConfig);
            if (!fieldError) {
                setErrors((prev) => ({ ...prev, [name]: null }));
                setHasErrors(false);
            }
        }
    };

    const handleNext = async (e) => {
        e.preventDefault();
        if (!validateStep()) return;
        setLoading(true);

        try {
            const url = currentStep === 1
                ? 'http://localhost:3000/registrations'
                : `http://localhost:3000/registrations/${registrationId}`;
            const method = currentStep === 1 ? 'POST' : 'PATCH';

            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ registration: { ...formData, current_step: currentStep } }),
            });

            if (!response.ok) {
                setIsFinished(true);
                setSubmitStatus('error');
                setLoading(false);
                return;
            }

            const data = await response.json();

            if (currentStep === 1) {
                setRegistrationId(data.id);
                localStorage.setItem('registrationId', data.id);
            }

            if (currentStep === formConfig.length) {
                setIsFinished(true);
                setSubmitStatus('success');
                localStorage.removeItem('registrationId');
            } else {
                setCurrentStep(prev => prev + 1);
            }
        } catch (error) {
            setIsFinished(true);
            setSubmitStatus('error');
        } finally {
            setLoading(false);
        }
    };

    const currentStepConfig = formConfig.find(c => c.step === currentStep);

    if (isFinished) {
        return <EndStep {...endStepConfig[submitStatus]} />;
    }

    return (
        <>
            <Stepper activeStep={currentStep - 1} alternativeLabel sx={{ mb: 8 }}>
                {formConfig.map((config) => (
                    <Step key={config.step}>
                        <StepLabel>{config.title}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <form onSubmit={handleNext} noValidate>
                <Grow in={true} key={currentStep} timeout={300}>
                    <Box>
                        <FormStep title={currentStepConfig.title}>
                            {currentStepConfig.fields.map((field) => (
                                <TextField
                                    key={field.name}
                                    fullWidth
                                    label={field.label}
                                    name={field.name}
                                    type={field.type}
                                    required={field.required}
                                    value={formData[field.name] || ''}
                                    onChange={handleChange}
                                    InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
                                    variant="outlined"
                                    error={!!errors[field.name]}
                                    helperText={errors[field.name]}
                                />
                            ))}
                        </FormStep>
                    </Box>
                </Grow>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto', pt: 4 }}>
                    <Button
                        disabled={currentStep === 1}
                        onClick={() => setCurrentStep(prev => prev - 1)}
                        size='large'
                    >
                        Voltar
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size='large'
                        disabled={loading}
                    >
                        {currentStep === formConfig.length ? 'Finalizar' : 'Próximo'}
                    </Button>
                </Box>
            </form>

            {hasErrors && (
                <Alert variant="outlined" severity="error" sx={{ mt: 2, borderRadius: '8px' }} onClose={() => setHasErrors(false)}>
                    Por favor, corrija os campos em vermelho antes de prosseguir.
                </Alert>
            )}
        </>
    );
}