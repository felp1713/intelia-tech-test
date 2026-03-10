class CreateRegistrations < ActiveRecord::Migration[7.1]
  def change
    create_table :registrations do |t|
      t.string :full_name
      t.string :email
      t.date :birth_date

      t.string :street
      t.string :house_number
      t.string :zip_code
      t.string :city
      t.string :state

      t.string :phone
      t.string :cell_phone

      t.integer :current_step, default: 1

      t.timestamps
    end
  end
end
