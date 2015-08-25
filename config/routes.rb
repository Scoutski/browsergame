Rails.application.routes.draw do


  #Login routes
  root :to => 'pages#home'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  #Main app routes
  get '/app' => 'pages#app', :as => :app

  #User routes
  post '/users' => 'users#create'

end
