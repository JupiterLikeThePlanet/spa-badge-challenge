class BadgesController < ApplicationController

  def create
    @badge = Badge.new(badge_params)
  end

private
  def badge_params
    permit.params(:text, :people_id)
  end
end
