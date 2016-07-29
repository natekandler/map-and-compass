class CategoriesController < ApplicationController
  def index
    categories = ActiveModel::ArraySerializer.new(Category.all, root: false)
    render json: { success: true, pages: pages }
  end

  def show
    page = Category.find(params[:id])
    render json: page 
  end
end
