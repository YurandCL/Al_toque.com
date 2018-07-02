Rails.application.routes.draw do
  resources :al_toques

  root 'al_toques#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
