class PagesController < ApplicationController
  def index
    pages = ActiveModel::ArraySerializer.new(Page.all, root: false)
    render json: { success: true, pages: pages }
  end
end
