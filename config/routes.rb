Rails.application.routes.draw do
  resources :guitars
  resources :pickups
  devise_for :users
  root to: "guitars#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :guitars, only: %i[index show create]
    end
  end
end
