class Badge < ActiveRecord::Base
    has_many :votes
    belongs_to :people
    validate :people_id, :text, presence: true
end
