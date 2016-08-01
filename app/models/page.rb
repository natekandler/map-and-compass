class Page < ActiveRecord::Base
  belongs_to :category
  has_many :page_tags
  has_many :tags, through: :page_tags
  has_many :category_pages
  has_many :categories, through: :category_pages
end
