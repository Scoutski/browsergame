require 'rails_helper'
require 'pp'

RSpec.describe PagesController, type: :controller do
  describe 'the login page (GET /)' do
    before do
      get :home
    end

    it "should respond with a status 200 OK" do
      expect(response).to be_success
      expect(response.status).to eq 200
    end
      
    it "should create a new user for the page" do
      expect(assigns(:user)).to be_a User
    end
  end

  describe 'the main application page (GET /app) with no user signed in' do
    before do
      get :app
    end

    it "should redirect to the login page if there is no user logged in" do
      expect(assigns(:user)).to eq nil
      expect(response).to redirect_to(root_path)
    end
  end

  describe 'the main application page (GET /app) with a user signed in' do
    before do
      @current_user = User.create :username => "test", :id => 1, :password_digest => 'password'
      @current_user.save
      get :app
    end

    it "should render the app correctly if there is a user logged in" do
      # I HAVE NO IDEA HOW TO TEST THIS :(
      # pp response.status
      # expect(@current_user.nil?).to eq false
      # expect(response).to redirect_to(app_path)
    end
  end
end
