class CreateCategoryPages < ActiveRecord::Migration
  def change
    create_table :category_pages do |t|
      t.integer :category_id
      t.integer :page_id
      t.timestamps null: false
    end
  end
end
