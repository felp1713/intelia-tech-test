require 'rails_helper'

RSpec.describe Registration, type: :model do
  describe 'Validações do Passo 1' do
    subject { Registration.new(current_step: 1) }

    it 'exige nome completo, email e data de nascimento' do
      subject.valid?

      expect(subject.errors[:full_name]).to include("can't be blank")
      expect(subject.errors[:email]).to include("can't be blank")
      expect(subject.errors[:birth_date]).to include("can't be blank")
    end

    it 'não exige os campos do passo 2 ou 3' do
      subject.valid?

      expect(subject.errors[:street]).to be_empty
      expect(subject.errors[:phone]).to be_empty
    end
  end

  describe 'Validações do Passo 2' do
    subject { Registration.new(current_step: 2) }

    it 'exige os dados de endereço' do
      subject.valid?

      expect(subject.errors[:street]).to include("can't be blank")
      expect(subject.errors[:house_number]).to include("can't be blank")
      expect(subject.errors[:zip_code]).to include("can't be blank")
      expect(subject.errors[:city]).to include("can't be blank")
      expect(subject.errors[:state]).to include("can't be blank")
    end
  end

  describe 'Validações do Passo 3' do
    subject { Registration.new(current_step: 3) }

    it 'exige os dados de contato telefônico' do
      subject.valid?

      expect(subject.errors[:phone]).to include("can't be blank")
      expect(subject.errors[:cell_phone]).to include("can't be blank")
    end
  end
end