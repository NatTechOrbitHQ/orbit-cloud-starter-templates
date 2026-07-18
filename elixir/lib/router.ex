defmodule OrbitElixirStarter.Router do
  use Plug.Router

  plug :match
  plug :dispatch

  get "/health" do
    send_resp(conn, 200, "ok")
  end

  get "/" do
    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Jason.encode!(%{service: "orbit-elixir-starter", status: "ok"}))
  end

  match _ do
    send_resp(conn, 404, "not found")
  end
end
