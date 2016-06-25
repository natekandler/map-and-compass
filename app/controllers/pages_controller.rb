class PagesController < ApplicationController
  def index
    pages = ActiveModel::ArraySerializer.new(Page.all, root: false)
    render json: { success: true, pages: pages }
  end

  def show
    page = Page.find(params[:id])
    render json: page 
  end
end
