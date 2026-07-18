defmodule OrbitElixirStarter.Application do
  use Application

  @impl true
  def start(_type, _args) do
    port = String.to_integer(System.get_env("PORT", "3000"))

    children = [
      {Plug.Cowboy, scheme: :http, plug: OrbitElixirStarter.Router, options: [port: port, ip: {0, 0, 0, 0}]}
    ]

    IO.puts("listening on #{port}")
    Supervisor.start_link(children, strategy: :one_for_one, name: OrbitElixirStarter.Supervisor)
  end
end
