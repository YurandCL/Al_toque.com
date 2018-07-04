Rails.application.routes.draw do
  resources :altoqs do
	collection do

          get :registro
	end
  end
  get 'altoqs/index'

  root 'altoqs#login'
  end
