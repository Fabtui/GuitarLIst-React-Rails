class AddPhotoToGuitars < ActiveRecord::Migration[6.1]
  def change
    add_column :guitars, :photo_id, :string
  end
end
