class AddPhotosToGuitar < ActiveRecord::Migration[6.1]
  def change
    add_column :guitars, :photos_ids, :text, array: true, default: []
  end
end
