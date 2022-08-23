class Pickup < ApplicationRecord
  has_many :guitars

  CATEGORIES = [["brand", 'Brand'], ["name", 'Name'], ["product_name", 'Product Name'], ["output", 'Output'], ["resistance", 'Resistance'], ["bass", 'Bass'], ["low_middle", 'Low Middle'], ["high_middle", 'High Middle'], ["treble", 'Trebble'], ["pickup_type", 'Pickup Type'], ["magnet", 'Magnet'], ["active", 'Active']].freeze
end
