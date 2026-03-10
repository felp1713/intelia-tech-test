import { Box, Typography, Button } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const feedbackConfig = {
    success: {
        icon: CheckCircleOutlineOutlinedIcon,
        color: 'primary',
    },
    error: {
        icon: CancelOutlinedIcon,
        color: 'error',
    },
    warning: {
        icon: ErrorOutlineOutlinedIcon,
        color: 'warning',
    }
};

export default function EndStep({ title, text, response = 'success' }) {
    const config = feedbackConfig[response] || feedbackConfig.warning;
    const IconComponent = config.icon;

    const handleNewRegistration = () => {
        window.location.reload();
    };

    return (
        <Box sx={{ textAlign: 'center', py: 6, px: 2 }}>
            <IconComponent color={config.color} sx={{ fontSize: 120, mb: 3 }} />

            <Typography variant="h4" color="text.primary" fontWeight="700" gutterBottom>
                {title}
            </Typography>

            <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: '400px', mx: 'auto', lineHeight: 1.6 }}
            >
                {text}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', pt: 4 }}>
                <Button
                    type="button"
                    variant="outlined"
                    color="primary"
                    size='large'
                    onClick={handleNewRegistration}
                >
                    Registrar novo interesse
                </Button>
            </Box>
        </Box>
    );
}