import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0070FF',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#000000',
        },
        background: {
            default: '#F4F4F4',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#242424',
            secondary: '#666666',
        }
    },
    typography: {
        fontFamily: '"League Spartan", sans-serif',
        h4: {
            fontWeight: 700,
        },
        button: {
            fontWeight: 600,
            letterSpacing: '0.5px',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    padding: '10px 24px',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#F4F6F8',
                    minHeight: '100vh',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '& input[type="date"]': {
                        cursor: 'text',

                    }
                }
            }
        },
    },
});

export default theme;