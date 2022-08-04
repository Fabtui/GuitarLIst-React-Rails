class GuitarsController < ApplicationController
  before_action :set_guitar, only: %i[ show edit update destroy ]

  # GET /guitars or /guitars.json
  def index
    @guitars = Guitar.all
  end

  # GET /guitars/1 or /guitars/1.json
  def show
  end

  # GET /guitars/new
  def new
    require_relative "../assets/data/brands"
    @guitar = Guitar.new
  end

  # GET /guitars/1/edit
  def edit
  end

  # POST /guitars or /guitars.json
  def create
    @guitar = Guitar.new(guitar_params)
    @guitar.user_id = current_user.id
    @guitar.photo_id = @guitar.photo.key
    respond_to do |format|
      if @guitar.save
        format.html { redirect_to guitars_path, notice: "Guitar was successfully created." }
        format.json { render :show, status: :created, location: @guitar }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @guitar.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /guitars/1 or /guitars/1.json
  def update
    respond_to do |format|
      if @guitar.update(guitar_params)
        format.html { redirect_to guitar_url(@guitar), notice: "Guitar was successfully updated." }
        format.json { render :show, status: :ok, location: @guitar }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @guitar.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /guitars/1 or /guitars/1.json
  def destroy
    @guitar.destroy

    respond_to do |format|
      format.html { redirect_to guitars_url, notice: "Guitar was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_guitar
      @guitar = Guitar.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def guitar_params
      params.require(:guitar).permit(:name, :brand, :year, :photo)
    end
end
