class CreateGuitars < ActiveRecord::Migration[6.1]
  def change
    create_table :guitars do |t|
      t.string :brand
      t.string :name
      t.integer :year
      t.integer :user_id
      t.references :neck_pickup, foreign_key: { to_table: :pickups }, index: true
      t.references :center_pickup, foreign_key: { to_table: :pickups }, index: true
      t.references :bridge_pickup, foreign_key: { to_table: :pickups }, index: true
      t.timestamps
    end
  end
end
