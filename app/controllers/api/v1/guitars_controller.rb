class Api::V1::GuitarsController < ActionController::Base
  def index
    # @guitars = Guitar.where(user_id: current_user.id).order(name: :asc).group_by(&:brand);
    @guitars = Guitar.where(user_id: current_user.id).order(brand: :asc).order(name: :asc)
    render json: @guitars
  end

  def show
    @guitar = Guitar.find(params[:id])
    render json: @guitar
  end

  def create
    @guitar = Guitar.create(guitar_params)
    render json: @guitar
  end

  private

  def guitar_params
    params.require(:guitar).permit(:name, :brand, :year, :user_id, :photos)
  end
end
