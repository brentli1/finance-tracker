class WelcomeController < ApplicationController
  def index
    if current_user
      redirect_to my_portfolio_path
    end
  end
end
