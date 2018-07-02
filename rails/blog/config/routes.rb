Rails.application.routes.draw do
  get 'bienvenida/index'
  resources :articulos
  root 'bienvenida#index'
end
