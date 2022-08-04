class Api::V1::PickupsController < ActionController::Base
  def index
    @pickups = Pickup.order(created_at: :desc)
    render json: @pickups
  end
end
