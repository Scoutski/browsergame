class UsersController < ApplicationController

  def create
    @user = User.new user_params
    if @user.save
      @current_user = @user
      redirect_to app_path
    else
      redirect_to root_path
    end
  end

  def edit
    @user = @current_user
  end

  def update
    user = @current_user
    user.update user_params
    redirect_to root_path
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :id, :email)
  end
end