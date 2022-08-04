class CreatePickups < ActiveRecord::Migration[6.1]
  def change
    create_table :pickups do |t|
      t.string :brand
      t.string :name
      t.integer :output
      t.boolean :neck
      t.boolean :center
      t.boolean :bridge
      t.float :resistance
      t.float :bass
      t.float :middle
      t.float :treble
      t.string :type
      t.string :magnet
      t.boolean :active
      t.text :description
      t.timestamps
    end
  end
end
