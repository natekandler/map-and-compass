class Page < ActiveRecord::Base
  belongs_to :category
  has_many :page_tags
  has_many :tags, through: :page_tags
  has_many :category_pages
  has_many :categories, through: :category_pages
  has_attached_file :feature_image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :feature_image, content_type: /\Aimage\/.*\Z/
end
