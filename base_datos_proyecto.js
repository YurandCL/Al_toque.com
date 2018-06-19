
var usuariosSchema = new Schema({
    id_usuario: Schema.Type.ObjectId,
    nikname: String,
    contraseña: String
});

var personasSchema = new Schema({
	usuario_id: Schema.Type.ObjectId,
    pais: String,
    nombre: String
	apellido: String,
    email: String
});

var productosSchema = new Schema({
  
  nombre: String,
  foto: Buffer,
  precio: Number,
  categoria: String,
  descripcion: String,
  origen_producto: String
});

var enviosSchema = new Schema({
  producto:{
    id_producto: Schema.Types.ObjectId,
    nombre: String,
    foto: Buffer,
    precio: Number,
    categoria: String,
    descripcion: String,
    origen_producto: String
  }
  usuario: String,
  direccion: String,
  fecha: String,
  estado: String
});

var pagosSchema = new Schema({
  id_pago: Schema.Types.ObjectId,
  metodo: String,
  cantidad: Number
});

var proveedores = new Schema({
  id_proveedor: Schema.Types.ObjectId,
  nombre_empresa: String,
  numero_empresa: Number,
  ruc: Number,
  producto:{
    nombre: String,
    foto: Buffer,
    categoria: String,
    origen_producto: String
  }
  cantidad_otogada: Number,
  precio_unidad: Number
});

var personal = new Schema({
  id_personal = Schema.Types.ObjectId,
  nombres: String,
  apellidos: String,
  edad: Number,
  fecha_nac: Date,
  direccion: String,
  email: String
});
