class Pickup < ApplicationRecord
  has_many :guitar_pickups
  has_many :guitars, through: :guitar_pickups
end
