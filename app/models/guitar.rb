class Guitar < ApplicationRecord
  has_one_attached :photo
  belongs_to :neck_pickup, :class_name => "Pickup", foreign_key: :neck_pickup_id, optional: true
  belongs_to :bridge_pickup, :class_name => "Pickup", foreign_key: :bridge_pickup_id, optional: true
  belongs_to :center_pickup, :class_name => "Pickup", foreign_key: :center_pickup_id, optional: true
end
