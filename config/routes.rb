Rails.application.routes.draw do
  # Mount the action cable server
  mount ActionCable.server => '/cable'
  get 'draw', to: 'pages#draw'
  root 'pages#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
