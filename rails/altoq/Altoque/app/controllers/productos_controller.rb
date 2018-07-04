class ProductosController < AplicationController

#GET /productos
#GET /productos.json
def index
  @productos = Producto.all
end
def _form2
end
GET /productos/1
#GET /productos/1.json
def show
end

#PATCH/PUT /productos/1
#PATCH/PUT /productos/1.json
def update
  respod_to do |format|
    format.html { redirect_to productos_url, notice: '¿Esta seguro de querer comprar este produco?' }
    format.json { head :no_content }
    if @producto.update(producto_params)
	format.html { redirect_to @producto, notice: 'El producto ah sido comprado correctamente.' }
	format.json { render :show, status: :ok, location: @producto }
    else
	format.html { render :edit }
	format.json { render json: @producto.errors, status: :unprocessable_entity }
    end
  end
end

private
  #Use calbacks to share common setup or constraints between actions.
  def set_producto
    @proucto = Producto.find(params[:id])
  end
  
  def producto_params
    params.fetch(:altoq, {})
  end
end
