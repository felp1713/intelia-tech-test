class Registration < ApplicationRecord
  with_options if: -> { current_step >= 1 } do
    validates :full_name, :email, :birth_date, presence: true
  end

  with_options if: -> { current_step >= 2 } do
    validates :street, :house_number, :zip_code, :city, :state, presence: true
  end

  with_options if: -> { current_step >= 3 } do
    validates :phone, :cell_phone, presence: true
  end
end