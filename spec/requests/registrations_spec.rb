require 'rails_helper'

RSpec.describe "Registrations API", type: :request do
  describe "POST /registrations (Passo 1)" do
    context "com dados válidos" do
      it "cria uma nova inscrição e retorna o JSON com status 201" do
        post "/registrations", params: {
          registration: {
            full_name: "Felipe Ferreira",
            email: "felp@example.com",
            birth_date: "1990-01-01"
          }
        }

        expect(response).to have_http_status(:created)

        json_response = JSON.parse(response.body)
        expect(json_response["id"]).to be_present
        expect(json_response["current_step"]).to eq(1)
        expect(json_response["full_name"]).to eq("Felipe Ferreira")
      end
    end

    context "com dados inválidos" do
      it "não cria a inscrição e retorna os erros com status 422" do
        post "/registrations", params: {
          registration: { full_name: "", email: "" }
        }

        expect(response).to have_http_status(:unprocessable_entity)
        json_response = JSON.parse(response.body)
        expect(json_response["errors"]).to include("Full name can't be blank")
      end
    end
  end

  describe "PATCH /registrations/:id (Passo 2)" do
    let(:registration) do
      Registration.create!(
        full_name: "Felipe", email: "felipe@teste.com",
        birth_date: "1990-01-01", current_step: 1
      )
    end

    context "avançando para o Passo 2 com endereço válido" do
      it "atualiza os dados, muda o current_step e retorna status 200" do
        patch "/registrations/#{registration.id}", params: {
          registration: {
            current_step: 2,
            street: "Rua Teste",
            house_number: "123",
            zip_code: "12345-000",
            city: "Nova Odessa",
            state: "SP"
          }
        }

        expect(response).to have_http_status(:ok)

        registration.reload
        expect(registration.current_step).to eq(2)
        expect(registration.city).to eq("Nova Odessa")
      end
    end
  end
end