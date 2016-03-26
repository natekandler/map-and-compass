class Admin::PagesController < ApplicationController
  def index
    @pages = Page.all
  end

  def new 
    @page = Page.new
  end

  def create
    @page = Page.new(params_page)
    if @page.save
      redirect_to edit_admin_page_path(@page)
    else
      render :new
    end
  end

  def edit
  end

  def update
  end

end
