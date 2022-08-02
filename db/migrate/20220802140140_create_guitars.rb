class CreateGuitars < ActiveRecord::Migration[6.1]
  def change
    create_table :guitars do |t|
      t.string :brand
      t.string :name
      t.integer :year
      t.integer :user_id
      t.timestamps
    end
  end
end
