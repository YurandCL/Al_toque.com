json.extract! registro, :id, :pais, :usuario, :nombres, :apellidos, :edad, :email, :direccion, :telefono, :nro_tarjeta, :contraseña, :created_at, :updated_at
json.url registro_url(registro, format: :json)
