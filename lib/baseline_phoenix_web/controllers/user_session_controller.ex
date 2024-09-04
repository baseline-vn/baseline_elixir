defmodule BaselinePhoenixWeb.UserSessionController do
  use BaselinePhoenixWeb, :controller

  alias BaselinePhoenix.Accounts
  alias BaselinePhoenix.Otp
  alias BaselinePhoenixWeb.UserAuth

  def new(conn, _params) do
    render(conn, :new, error_message: nil)
  end

  def delete(conn, _params) do
    conn
    |> put_flash(:info, "Logged out successfully.")
    |> UserAuth.log_out_user()
  end

  def create(conn, %{"user" => %{"phone_number" => phone_number} = user_params}) do
    if Map.has_key?(user_params, "otp") do
      verify_otp(conn, user_params)
    else
      handle_user_creation(conn, phone_number, user_params)
    end
  end

  defp verify_otp(conn, %{"phone_number" => phone_number, "otp" => otp} = user_params) do
    case Accounts.get_user_by_phone_number(phone_number) do
      nil ->
        conn
        |> put_flash(:error, "Invalid phone number")
        |> render(:otp, changeset: user_params)

      user ->
        if Otp.verify_otp(phone_number, otp) do
          conn
          |> put_flash(:info, "Logged in successfully.")
          |> UserAuth.sign_in_user(user, user_params)
          |> redirect(to: "/")
        else
          conn
          |> put_flash(:error, "Invalid OTP")
          |> render(:otp, changeset: user_params)
        end
    end
  end

  defp handle_user_creation(conn, phone_number, user_params) do
    case Accounts.get_or_insert_user_by_phone_number(phone_number) do
      {:ok, _user} ->
        otp = Otp.generate_otp(phone_number)
        # TODO: Send OTP to user's phone (implement this part separately)
        send_otp_to_phone(phone_number, otp)

        conn
        |> put_flash(:info, "OTP sent to your phone")
        |> render(:otp, changeset: user_params)

      {:error, _reason} ->
        conn
        |> put_flash(:error, "Error processing request")
        |> render(:new, changeset: user_params)
    end
  end

  defp send_otp_to_phone(phone_number, otp) do
    # Implement the logic to send OTP via SMS
    # This is a placeholder function
    IO.puts("Sending OTP #{otp} to #{phone_number}")
  end
end
