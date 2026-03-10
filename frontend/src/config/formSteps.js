export const formConfig = [
    {
        step: 1,
        title: "Dados Pessoais",
        fields: [
            { name: "full_name", label: "Nome Completo", type: "text", required: true },
            { name: "birth_date", label: "Data de Nascimento", type: "date", required: true },
            { name: "email", label: "Email", type: "email", required: true },
        ]
    },
    {
        step: 2,
        title: "Endereço",
        fields: [
            { name: "zip_code", label: "CEP", type: "text", required: true },
            { name: "street", label: "Rua", type: "text", required: true },
            { name: "house_number", label: "Número", type: "text", required: true },
            { name: "city", label: "Cidade", type: "text", required: true },
            { name: "state", label: "Estado", type: "text", required: true },
        ]
    },
    {
        step: 3,
        title: "Contato",
        fields: [
            { name: "phone", label: "Telefone Fixo", type: "tel", required: false },
            { name: "cell_phone", label: "Telefone Celular", type: "tel", required: true },
        ]
    }
];