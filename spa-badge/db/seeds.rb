# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

people = [{name: 'Brick'},
  {name: 'Hunter'},
  {name: 'Jared'},
  {name: 'Jen'},
  {name: 'Jordan'},
  {name: 'Julian'},
  {name: 'Shambhavi'},
  {name: 'Walker'}
]

people.each do |person|
  Person.create(name: person[:name])
end


