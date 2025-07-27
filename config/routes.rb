Rails.application.routes.draw do
  root "products#index"

  resources :products, only: [:index] do
    member do
      get :product_details
    end
  end

  get "up" => "rails/health#show", as: :rails_health_check
end
