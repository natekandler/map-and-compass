class Page < ActiveRecord::Base
  belongs_to :category
  has_many :page_tags
  has_many :tags, through: :page_tags
end
