Rails.application.routes.draw do
  # Mount the action cable server
  mount ActionCable.server => '/cable'
  root 'pages#home'
  get 'draw', to: 'pages#draw'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
