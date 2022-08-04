class CreateGuitarPickups < ActiveRecord::Migration[6.1]
  def change
    create_table :guitar_pickups do |t|
      t.references :guitar
      t.references :pickup

      t.timestamps
    end
  end
end
