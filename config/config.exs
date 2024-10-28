# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :baseline_phoenix,
  ecto_repos: [BaselinePhoenix.Repo],
  generators: [timestamp_type: :utc_datetime]

# Configures the endpoint
config :baseline_phoenix, BaselinePhoenixWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [
    formats: [html: BaselinePhoenixWeb.ErrorHTML, json: BaselinePhoenixWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: BaselinePhoenix.PubSub,
  live_view: [signing_salt: "fnOFiyiC"]

# Configures the mailer
#
# By default it uses the "Local" adapter which stores the emails
# locally. You can see the emails in your browser, at "/dev/mailbox".
#
# For production it's recommended to configure a different adapter
# at the `config/runtime.exs`.
config :baseline_phoenix, BaselinePhoenix.Mailer, adapter: Swoosh.Adapters.Local

# Commented out for Svelte configuration
# # Configure esbuild (the version is required)
# config :esbuild,
#   version: "0.17.11",
#   baseline_phoenix: [
#     args:
#       ~w(js/app.js js/storybook.js --bundle --target=es2017 --outdir=../priv/static/assets --external:/fonts/* --external:/images/*),
#     cd: Path.expand("../assets", __DIR__),
#     env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
#   ]

# Configure tailwind (the version is required)
config :tailwind,
  version: "3.4.3",
  baseline_phoenix: [
    args: ~w(
      --config=tailwind.config.js
      --input=css/app.css
      --output=../priv/static/assets/app.css
    ),
    cd: Path.expand("../assets", __DIR__)
  ],
  storybook: [
    args: ~w(
      --config=tailwind.config.js
      --input=css/storybook.css
      --output=../priv/static/assets/storybook.css
    ),
    cd: Path.expand("../assets", __DIR__)
  ]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :git_hooks,
  auto_install: true,
  verbose: true,
  hooks: [
    pre_commit: [
      tasks: [
        {:cmd, "mix format"},
        {:cmd, "git diff --name-only --cached -- | xargs git add"}
      ]
    ]
  ]

config :baseline_phoenix, BaselinePhoenixWeb.Gettext, default_locale: "en", locales: ["en", "vi"]

# config :baseline_phoenix, BaselinePhoenixWeb.Setlocale,
#   cookie_key: "locale",
#   default_locale: "en",
#   supported_locales: ["en", "vi"]

config :baseline_phoenix, :telegram,
  bot_token: "7074710677:AAETNGxr4LlV2D9uyiQRXIpVIECx6a2G8n4",
  dev_group_chat_id: -4_590_586_218

config :flop, repo: BaselinePhoenix.Repo
config :flop_phoenix, repo: BaselinePhoenix.Repo

config :waffle,
  storage: Waffle.Storage.S3,
  bucket: System.get_env("WAFFLE_BUCKET"),
  asset_host: System.get_env("WAFFLE_ASSET_HOST")

config :ex_aws,
  json_codec: Jason,
  access_key_id: System.get_env("AWS_ACCESS_KEY_ID"),
  secret_access_key: System.get_env("AWS_SECRET_ACCESS_KEY"),
  region: "auto",
  s3: [
    scheme: "https://",
    host: System.get_env("AWS_S3_HOST"),
    region: "auto"
  ]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
