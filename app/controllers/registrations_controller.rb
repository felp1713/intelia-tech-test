class RegistrationsController < ApplicationController
  def create
    @registration = Registration.new(registration_params)
    @registration.current_step = 1

    if @registration.save
      render json: @registration, status: :created
    else
      render json: { errors: @registration.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @registration = Registration.find(params[:id])

    if @registration.update(registration_params)
      render json: @registration, status: :ok
    else
      render json: { errors: @registration.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @registration = Registration.find(params[:id])
    render json: @registration, status: :ok
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Registration not found' }, status: :not_found
  end

  private

  def registration_params
    params.require(:registration).permit(
      :id, :full_name, :email, :birth_date,
      :street, :house_number, :zip_code, :city, :state,
      :phone, :cell_phone, :current_step
    )
  end
end