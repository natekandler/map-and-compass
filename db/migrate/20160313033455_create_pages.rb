class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :title
      t.text :excerpt
      t.text :content
      t.string :slug

      t.timestamps null: false
    end
  end
end
