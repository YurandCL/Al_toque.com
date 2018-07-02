class Altoq
  include Mongoid::Document
  field :nombre, type: String
  field :categoria, type: String
  field :precio, type:  Float
end
