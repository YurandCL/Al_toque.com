
var usuariosSchema = new Schema({
    id_usuario: Schema.Type.ObjectId,
    usuarios: String,
    contraseña: String
});

var personasSchema = new Schema({
    id_persona: Schema.Types.ObjectId,
    pais: String,
    nickname: String
    email: String,
});

var productosSchema = new Schema({
  id_producto: Schema.Types.ObjectId,
  nombre: String,
  foto: Buffer,
  precio: Number,
  categoria: String,
  descripcion: String,
  origen_producto: String
});

var enviosSchema = new Schema({
  id_envio: Schema.Types.ObjectId,
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
  direccion: String
});

var pagosSchema = new Schema({
  id_pago: Schema.Types.ObjectId,
  metodo: String,
  cantidad: Number
})

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
})

var personal = new Schema({
  id_personal = Schema.Types.ObjectId,
  nombres: String,
  apellidos: String,
  edad: Number,
  fecha_nac: Date,
  direccion: String,
  email: String
})
