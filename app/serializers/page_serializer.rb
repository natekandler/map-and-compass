class PageSerializer < ActiveModel::Serializer
  attributes :id, :excerpt, :content, :title, :feature_image
end
