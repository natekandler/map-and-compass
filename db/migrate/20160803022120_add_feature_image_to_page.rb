class AddFeatureImageToPage < ActiveRecord::Migration
  def up
    add_attachment :pages, :feature_image
  end

  def down
    remove_attachment :pages, :feature_image
  end
end
