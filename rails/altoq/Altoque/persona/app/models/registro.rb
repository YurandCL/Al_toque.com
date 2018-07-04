class Registro
  include Mongoid::Document
  include Mongoid::Timestamps
  field :pais, type: String
  field :usuario, type: String
  field :nombres, type: String
  field :apellidos, type: String
  field :edad, type: Float
  field :email, type: String
  field :direccion, type: String
  field :telefono, type: Float
  field :nro_tarjeta, type: Float
  field :contraseña, type: String
end
