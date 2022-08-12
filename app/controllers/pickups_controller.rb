class PickupsController < ApplicationController
  # GET /guitars/new
  def new
    require_relative "../assets/data/pickup_brands"
    @pickup = Pickup.new
  end

  # POST /guitars or /guitars.json
  def create
    @pickup = Pickup.new(pickup_params)
    if @pickup.save
      redirect_to guitars_path, notice: "Pickup was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def pickup_params
    params.require(:pickup).permit(:brand, :name, :product_name, :output, :neck, :center, :bridge, :resistance, :bass, :middle, :treble, :type, :magnet, :active, :description)
  end
end
