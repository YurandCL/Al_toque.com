require "application_system_test_case"

class RegistrosTest < ApplicationSystemTestCase
  setup do
    @registro = registros(:one)
  end

  test "visiting the index" do
    visit registros_url
    assert_selector "h1", text: "Registros"
  end

  test "creating a Registro" do
    visit registros_url
    click_on "New Registro"

    fill_in "Apellidos", with: @registro.apellidos
    fill_in "Contraseña", with: @registro.contraseña
    fill_in "Direccion", with: @registro.direccion
    fill_in "Edad", with: @registro.edad
    fill_in "Email", with: @registro.email
    fill_in "Nombres", with: @registro.nombres
    fill_in "Nro Tarjeta", with: @registro.nro_tarjeta
    fill_in "Pais", with: @registro.pais
    fill_in "Telefono", with: @registro.telefono
    fill_in "Usuario", with: @registro.usuario
    click_on "Create Registro"

    assert_text "Registro was successfully created"
    click_on "Back"
  end

  test "updating a Registro" do
    visit registros_url
    click_on "Edit", match: :first

    fill_in "Apellidos", with: @registro.apellidos
    fill_in "Contraseña", with: @registro.contraseña
    fill_in "Direccion", with: @registro.direccion
    fill_in "Edad", with: @registro.edad
    fill_in "Email", with: @registro.email
    fill_in "Nombres", with: @registro.nombres
    fill_in "Nro Tarjeta", with: @registro.nro_tarjeta
    fill_in "Pais", with: @registro.pais
    fill_in "Telefono", with: @registro.telefono
    fill_in "Usuario", with: @registro.usuario
    click_on "Update Registro"

    assert_text "Registro was successfully updated"
    click_on "Back"
  end

  test "destroying a Registro" do
    visit registros_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Registro was successfully destroyed"
  end
end
