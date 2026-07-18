require "sinatra"
require "json"

set :bind, "0.0.0.0"
set :port, ENV.fetch("PORT", 3000)

get "/" do
  content_type :json
  { service: "orbit-ruby-sinatra-starter", status: "ok" }.to_json
end

get "/health" do
  "ok"
end
