class PageSerializer < ActiveModel::Serializer
  attributes :id, :excerpt, :content, :title
end
