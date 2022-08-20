class AddPickupsToGuitars < ActiveRecord::Migration[6.1]
  def change
    add_column :guitars, :photo_id, :string
    add_column :guitars, :serial_number, :string
    add_column :guitars, :made_in, :string
    add_column :guitars, :color, :string
    add_column :guitars, :body_wood, :string
    add_column :guitars, :body_finish, :string
    add_column :guitars, :neck_wood, :string
    add_column :guitars, :body_top_wood, :string
    add_column :guitars, :fingerboard_wood, :string
    add_column :guitars, :bridge, :string
    add_column :guitars, :scale_length, :float
    add_column :guitars, :frets_number, :integer
    add_column :guitars, :frets_type, :string
    add_column :guitars, :neck_shape, :string
    add_column :guitars, :neck_radius, :float
    add_column :guitars, :neck_width_nut, :integer
    add_column :guitars, :neck_width_last_fret, :integer
    add_column :guitars, :neck_finish, :string
    add_column :guitars, :neck_attachment, :string
    add_column :guitars, :nut_material, :string
    add_column :guitars, :tuning_machines, :string
    add_column :guitars, :inlays, :string
    add_column :guitars, :pickups_configuration, :string
    add_column :guitars, :artist, :string
    add_column :guitars, :price, :integer
    add_column :guitars, :purchase_date, :integer
  end
end
