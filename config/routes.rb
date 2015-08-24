Rails.application.routes.draw do
  # get '/login' => 'pages#home'

  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  root :to => 'pages#home'
  # root directory is also the login page.

end
