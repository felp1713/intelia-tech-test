import { Stack, Typography } from '@mui/material';

export default function FormStep({ title, children }) {
    return (
        <Stack spacing={3}>
            <Typography variant="h6" color="primary" gutterBottom>
                {title}
            </Typography>

            {children}
        </Stack>
    );
}