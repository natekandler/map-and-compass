Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  namespace :admin do
    resources :pages
  end
  
end
