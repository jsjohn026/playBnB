@listings.each do |listing|
  json.set! listing.id do
    json.partial! 'listing', listing: listing
    json.reviewIds []
  end
end

@benches.each do |bench|
  json.set! bench.id do
    json.partial! 'bench', bench: bench
    json.reviewIds []
  end
end
