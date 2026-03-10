import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Typography, Paper, Box, Button, Grid, Stack, Grow, Chip, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CallIcon from '@mui/icons-material/Call';
import ForumIcon from '@mui/icons-material/Forum';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RegistrationForm from './components/RegistrationForm';
import './components/InteliaFooter';

const highlights = [
  {
    icon: <ForumIcon color="primary" fontSize="small" />,
    title: 'Fluxos práticos para WhatsApp',
    description: 'Construa conversas que qualificam, engajam e aceleram decisões de compra.',
  },
  {
    icon: <CallIcon color="primary" fontSize="small" />,
    title: 'Roteiros de alta conversão por telefone',
    description: 'Use inteligência conversacional para entender objeções e vender com mais consistência.',
  },
  {
    icon: <TrendingUpIcon color="primary" fontSize="small" />,
    title: 'Escala com dados e previsibilidade',
    description: 'Transforme cada interação em indicador para otimizar seu funil comercial.',
  },
];

function App() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('registrationId')) {
      setShowForm(true);
    }
  }, []);

  return (
    <Container maxWidth={showForm ? 'md' : 'lg'} sx={{ mt: { xs: 4, md: 8 }, mb: 8 }}>
      {!showForm ? (
        <Grow in timeout={800}>
          <Paper
            elevation={5}
            sx={{
              p: { xs: 3, sm: 4, md: 6 },
              borderRadius: 5,
              background: 'linear-gradient(150deg, #FFFFFF 5%, #F4F8FF 95%)',
              border: '1px solid rgba(0, 112, 255, 0.12)',
            }}
          >
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid item xs={12} md={7}>
                <Stack spacing={3}>
                  <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" useFlexGap>
                    <Chip color="primary" label="Evento Intelia • Edição especial" size="small" />
                    <Divider orientation="vertical" flexItem />
                    <Typography variant="caption" color="text.secondary" fontWeight={600}>
                      Vagas limitadas para profissionais de vendas e atendimento
                    </Typography>
                  </Stack>

                  <Box>
                    <Typography variant="h3" component="h1" color="text.primary" fontWeight={800} sx={{ lineHeight: 1.15 }}>
                      Utilize as soluções da Intelia para vender mais pelo Telefone e WhatsApp
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mt: 2.5, fontWeight: 400, lineHeight: 1.55 }}>
                      Um encontro prático para quem quer transformar atendimento em receita: você vai descobrir como
                      estruturar abordagens mais inteligentes, elevar a produtividade da operação e aumentar sua taxa de
                      conversão usando conversas orientadas por dados.
                    </Typography>
                  </Box>

                  <Stack spacing={2}>
                    {[
                      'Estratégias prontas para captar e nutrir leads em canais de voz e WhatsApp',
                      'Demonstrações de fluxos que diminuem tempo de resposta e aumentam fechamento',
                      'Checklist de implementação para aplicar já no dia seguinte com sua equipe',
                    ].map((item) => (
                      <Stack direction="row" spacing={1.5} alignItems="flex-start" key={item}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.3 }} />
                        <Typography variant="body1" color="text.primary" fontWeight={500}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => setShowForm(true)}
                      sx={{ py: 1.8, px: 4.5, fontSize: '1.05rem', borderRadius: 30 }}
                    >
                      Quero me cadastrar no evento
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => setShowForm(true)}
                      sx={{ py: 1.8, px: 4.5, borderRadius: 30 }}
                    >
                      Ver formulário de inscrição
                    </Button>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item xs={12} md={5}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 3.2 },
                    borderRadius: 4,
                    bgcolor: 'background.paper',
                    border: '1px solid rgba(0, 112, 255, 0.15)',
                  }}
                >
                  <Stack spacing={2.5}>
                    <Stack direction="row" spacing={1.2} alignItems="center">
                      <AutoAwesomeIcon color="primary" />
                      <Typography variant="h6" fontWeight={700}>
                        O que você vai encontrar
                      </Typography>
                    </Stack>

                    {highlights.map((highlight) => (
                      <Box key={highlight.title}>
                        <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 0.8 }}>
                          {highlight.icon}
                          <Typography variant="subtitle1" fontWeight={700}>
                            {highlight.title}
                          </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary" sx={{ pl: 3.6 }}>
                          {highlight.description}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grow>
      ) : (
        <RegistrationForm />
      )}

      <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
        <intelia-footer></intelia-footer>
      </Box>
    </Container>
  );
}

export default App;
