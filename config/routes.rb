Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'cagtegories/:slug' => 'categories#display_category'

  resources :pages, :categories
end
