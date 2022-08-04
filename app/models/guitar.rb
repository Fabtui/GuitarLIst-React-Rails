class Guitar < ApplicationRecord
  has_one_attached :photo
  has_many :guitar_pickups
  has_many :pickups, through: :guitar_pickups
end
