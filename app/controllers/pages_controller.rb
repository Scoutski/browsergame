class PagesController < ApplicationController
  def home
    @user = User.new
  end

  def app
    # If there is no user logged in, will automatically redirect the user back to the login screen.
    if @current_user.nil?
      redirect_to root_path
    end
  end
  
end
