# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Pickup.destroy_all
Guitar.destroy_all
User.destroy_all

user = User.create!(email: 'toto@mail.com', password: 'azerty')

Pickup.create!(brand: 'DiMarzio', name:'Paf Pro')
Pickup.create!(brand: 'DiMarzio', name:'Tone Zone')

Guitar.create!(name: 'Stratocaster', brand: 'Fender', year:'2002', user_id: user.id)
Guitar.create!(name: 'JP6', brand: 'Music Man', year:'2001', user_id: user.id)
Guitar.create!(name: 'JEM77BFP', brand: 'Ibanez', year:'1991', user_id: user.id)

p Guitar.count
p User.count
p Pickup.count
