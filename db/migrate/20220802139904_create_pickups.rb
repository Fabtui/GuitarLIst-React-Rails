class CreatePickups < ActiveRecord::Migration[6.1]
  def change
    create_table :pickups do |t|
      t.string :brand
      t.string :name
      t.string :product_name
      t.integer :output
      t.float :resistance
      t.float :bass
      t.float :low_middle
      t.float :high_middle
      t.float :treble
      t.string :pickup_type
      t.string :magnet
      t.boolean :active
      t.text :description
      t.timestamps
    end
  end
end
