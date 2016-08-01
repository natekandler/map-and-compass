class PagesController < ApplicationController
  def index
    pages = ActiveModel::ArraySerializer.new(Page.all, root: false)
    render json: { success: true, pages: pages }
  end

  def show
    page = Page.find_by(slug: params[:slug])
    render json: page 
  end
end
