defmodule BaselinePhoenixWeb.Admin.ArticleController do
  use BaselinePhoenixWeb, :controller

  def index(conn, _params) do
    render(conn, :index)
  end
end