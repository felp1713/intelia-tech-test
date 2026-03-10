# 🚀 Teste Técnico - Evento Intelia

Bem-vindo ao repositório do teste técnico para a vaga de Desenvolvedor Ruby on Rails.
O objetivo desta aplicação é Desenvolver uma aplicação onde o usuário irá realizar o cadastro usando um “formulário”. Este cadastro
terá finalidade de registrar o interesse em participar em um evento fictício chamado *"Utilizando as soluções da Intelia para vender mais através do telefone e whatsapp"*.

## 🛠️ Tecnologias Utilizadas

- **Backend:** Ruby on Rails (API Mode) + SQLite
- **Frontend:** React + Vite
- **UI/UX:** Material UI (MUI) customizado com o Design System da Intelia
- **Infraestrutura:** Docker & Docker Compose

## ✨ Funcionalidades

- **Landing Page de Conversão:** O usuário é recebido por uma página contextualizando os benefícios do evento como primeira experiencia.
- **Formulário em 3 Passos:** Quando clica no botão, pode acessar o formulário para o registro.
- **Rascunho:** Usando o `localStorage` atrelado à API Rails para buscar os dados salvos, podemos retormar o cadastro de um formulário já iniciado e te devolver no passo exato onde você parou.

## 📐 Decisões de construção

- O projeto foi construído respeitando o princípio **KISS**: sem bibliotecas desnecessárias de formatação ou rotas complexas. Tudo resolvido com React puro e hooks fundamentais.
- A decisão de **não** integrar com o API de busca de CEP foi uma escolha deliberada para respeitar o escopo sugerido no requisito do teste, tentando investir o tempo em outros recursos.

## 🐳 Como rodar a aplicação localmente

A aplicação foi totalmente "dockerizada" para facilitar a avaliação. Não é necessário ter Ruby ou Node instalados na sua máquina, apenas o **Docker** e o **Docker Compose**.

1. Clone o repositório:
```
git clone git@github.com:felp1713/intelia-tech-test.git
cd intelia-tech-test
```

2. Suba os containers (o comando já instala dependências, cria o banco e roda as migrations automaticamente):
```
docker-compose up --build
```

3. Acesse no seu navegador:
- **Frontend (Aplicação):** [http://localhost:5173](http://localhost:5173)
- **Backend (API):** [http://localhost:3000](http://localhost:3000)