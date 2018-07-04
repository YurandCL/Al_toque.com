Rails.application.routes.draw do
  resources :altoqs do
	collection do

          get :registro
	end
  end
  get 'altoqs/index'

<<<<<<< HEAD
  root 'altoqs#login' 
=======
  root 'altoqs#login'
>>>>>>> 179cc583be6ce181aa21ebd69a50ecd88ad0cfed
 # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
