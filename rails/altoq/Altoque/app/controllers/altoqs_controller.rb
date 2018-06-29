class AltoqsController < ApplicationController
  before_action :set_altoq, only: [:show, :edit, :update, :destroy]

  # GET /altoqs
  # GET /altoqs.json
  def index
    @altoqs = Altoq.all
  end

  # GET /altoqs/1
  # GET /altoqs/1.json
  def show
  end

  # GET /altoqs/new
  def new
    @altoq = Altoq.new
  end

  # GET /altoqs/1/edit
  def edit
  end

  # POST /altoqs
  # POST /altoqs.json
  def create
    @altoq = Altoq.new(altoq_params)

    respond_to do |format|
      if @altoq.save
        format.html { redirect_to @altoq, notice: 'Altoq was successfully created.' }
        format.json { render :show, status: :created, location: @altoq }
      else
        format.html { render :new }
        format.json { render json: @altoq.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /altoqs/1
  # PATCH/PUT /altoqs/1.json
  def update
    respond_to do |format|
      if @altoq.update(altoq_params)
        format.html { redirect_to @altoq, notice: 'Altoq was successfully updated.' }
        format.json { render :show, status: :ok, location: @altoq }
      else
        format.html { render :edit }
        format.json { render json: @altoq.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /altoqs/1
  # DELETE /altoqs/1.json
  def destroy
    @altoq.destroy
    respond_to do |format|
      format.html { redirect_to altoqs_url, notice: 'Altoq was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_altoq
      @altoq = Altoq.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def altoq_params
      params.fetch(:altoq, {})
    end
end
