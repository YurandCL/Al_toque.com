Rails.application.routes.draw do
  resources :altoqs do
	collection do

          get :registro
	end
  end
  get 'altoqs/index'

  root 'altoqs#login'
 # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
