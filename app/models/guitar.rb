class Guitar < ApplicationRecord
  has_one_attached :photo
  belongs_to :neck_pickup, class_name: 'Pickup', foreign_key: :neck_pickup_id, optional: true
  belongs_to :bridge_pickup, class_name: 'Pickup', foreign_key: :bridge_pickup_id, optional: true
  belongs_to :center_pickup, class_name: 'Pickup', foreign_key: :center_pickup_id, optional: true
  validates :name, presence: true
  validates :brand, presence: true
  CATEGORIES = [ ['brand', 'Brand'], ['name', 'Name'], ['year', 'Year'], ['serial_number', 'Serial Number'], ['made_in', 'Country'], ['color', 'Color'], ['artist', 'Artist'], ['price', 'Price'], ['purchase_date', 'Purchase Date'], ['body_wood', 'Body Wood'], ['body_top_wood', 'Body Top Wood'], ['body_finish', 'Body Finish'], ['neck_wood', 'Neck Wood'], ['fingerboard_wood', 'Fingerboard Wood'], ['scale_length', 'Scale Length'], ['frets_number', 'Frets Number'], ['frets_type', 'Frets Type'], ['neck_shape', 'Neck Shape'], ['neck_radius', 'Neck Radius'], ['neck_width_nut', 'Neck Width Nut'], ['neck_width_last_fret', 'Neck Width Last Fret'], ['neck_finish', 'Neck Finish'], ['neck_attachment', 'Neck Attachment'], ['nut_material', 'Nut Material'], ['inlays', 'Inlays'], ['pickups_configuration', 'Pickups Configuration'], ['neck_pickup_id', 'Neck Pickup'], ['center_pickup_id', 'Center Pickup'], ['bridge_pickup_id', 'Bridge Pickup'], ['bridge', 'Bridge'], ['tuning_machines', 'Tuning Machines']].freeze
end
