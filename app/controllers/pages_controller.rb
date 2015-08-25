class PagesController < ApplicationController
  def home
    @user = User.new
  end

  def app
  end
  
end
