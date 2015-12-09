class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :text
      t.references :people
      t.timestamps null: false
    end
  end
end
