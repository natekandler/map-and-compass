class CategoriesController < ApplicationController
  def index
    categories = ActiveModel::ArraySerializer.new(Category.all, root: false)
    render json: { success: true, categories: categories }
  end

  def display_category
    page = Category.find_by(slug: params[:slug])
    render json: category 
  end

  def show
    page = Category.find_by(slug: params[:id])
    render json: category
  end
end
