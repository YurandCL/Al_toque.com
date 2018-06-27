class AlToquesController < ApplicationController
  before_action :set_al_toque, only: [:show, :edit, :update, :destroy]

  # GET /al_toques
  # GET /al_toques.json
  def index
    @al_toques = AlToque.all
  end

  # GET /al_toques/1
  # GET /al_toques/1.json
  def show
  end

  # GET /al_toques/new
  def new
    @al_toque = AlToque.new
  end

  # GET /al_toques/1/edit
  def edit
  end

  # POST /al_toques
  # POST /al_toques.json
  def create
    @al_toque = AlToque.new(al_toque_params)

    respond_to do |format|
      if @al_toque.save
        format.html { redirect_to @al_toque, notice: 'Al toque was successfully created.' }
        format.json { render :show, status: :created, location: @al_toque }
      else
        format.html { render :new }
        format.json { render json: @al_toque.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /al_toques/1
  # PATCH/PUT /al_toques/1.json
  def update
    respond_to do |format|
      if @al_toque.update(al_toque_params)
        format.html { redirect_to @al_toque, notice: 'Al toque was successfully updated.' }
        format.json { render :show, status: :ok, location: @al_toque }
      else
        format.html { render :edit }
        format.json { render json: @al_toque.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /al_toques/1
  # DELETE /al_toques/1.json
  def destroy
    @al_toque.destroy
    respond_to do |format|
      format.html { redirect_to al_toques_url, notice: 'Al toque was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_al_toque
      @al_toque = AlToque.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def al_toque_params
      params.fetch(:al_toque, {})
    end
end
