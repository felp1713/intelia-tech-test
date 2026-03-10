import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Typography, Paper, Box, Button, Grid, Stack, Grow } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RegistrationForm from './components/RegistrationForm';
import './components/InteliaFooter';

function App() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('registrationId')) {
      setShowForm(true);
    }
  }, []);

  return (
    <Container maxWidth={showForm ? "md" : "lg"} sx={{ mt: { xs: 4, md: 8 }, mb: 8 }}>

      {!showForm ? (
        <Grow in={true} timeout={800}>
          <Grid container spacing={6} alignItems="center" sx={{ minHeight: '60vh' }}>
            <Grid item xs={12} md={6}>
              <Typography variant="overline" color="primary" fontWeight="bold" sx={{ letterSpacing: 1.5 }}>
                Masterclass Exclusiva
              </Typography>
              <Typography variant="h3" component="h1" color="text.primary" fontWeight="800" sx={{ mt: 2, mb: 3, lineHeight: 1.2 }}>
                Venda mais através do Telefone e WhatsApp
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400, lineHeight: 1.6 }}>
                Descubra como utilizar as soluções de inteligência conversacional da Intelia para maximizar suas taxas de conversão e revolucionar a jornada de atendimento do seu cliente.
              </Typography>

              <Stack spacing={2} sx={{ mb: 5 }}>
                {['Automações inteligentes para WhatsApp', 'Qualificação de leads de voz', 'Métricas e insights em tempo real'].map((item, index) => (
                  <Stack direction="row" spacing={2} alignItems="center" key={index}>
                    <CheckCircleIcon color="primary" />
                    <Typography variant="body1" color="text.primary" fontWeight="500">
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                variant="contained"
                size="large"
                onClick={() => setShowForm(true)}
                sx={{ py: 2, px: 6, fontSize: '1.1rem', borderRadius: 30 }}
              >
                Garantir Minha Vaga Gratuita
              </Button>
            </Grid>
          </Grid>
        </Grow>
      ) : (
        <Grow in={true} timeout={500}>
          <Paper elevation={4} sx={{ p: { xs: 4, md: 6 }, borderRadius: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Typography variant="h4" component="h1" color="primary" fontWeight="700" gutterBottom>
                Inscrição no Evento
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Preencha os passos abaixo para registrar o seu interesse. Leva menos de 1 minuto!
              </Typography>
            </Box>

            <RegistrationForm />

          </Paper>
        </Grow>
      )}

      <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
        <intelia-footer></intelia-footer>
      </Box>

    </Container>
  );
}

export default App;