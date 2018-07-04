require 'test_helper'

class RegistrosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @registro = registros(:one)
  end

  test "should get index" do
    get registros_url
    assert_response :success
  end

  test "should get new" do
    get new_registro_url
    assert_response :success
  end

  test "should create registro" do
    assert_difference('Registro.count') do
      post registros_url, params: { registro: { apellidos: @registro.apellidos, contraseña: @registro.contraseña, direccion: @registro.direccion, edad: @registro.edad, email: @registro.email, nombres: @registro.nombres, nro_tarjeta: @registro.nro_tarjeta, pais: @registro.pais, telefono: @registro.telefono, usuario: @registro.usuario } }
    end

    assert_redirected_to registro_url(Registro.last)
  end

  test "should show registro" do
    get registro_url(@registro)
    assert_response :success
  end

  test "should get edit" do
    get edit_registro_url(@registro)
    assert_response :success
  end

  test "should update registro" do
    patch registro_url(@registro), params: { registro: { apellidos: @registro.apellidos, contraseña: @registro.contraseña, direccion: @registro.direccion, edad: @registro.edad, email: @registro.email, nombres: @registro.nombres, nro_tarjeta: @registro.nro_tarjeta, pais: @registro.pais, telefono: @registro.telefono, usuario: @registro.usuario } }
    assert_redirected_to registro_url(@registro)
  end

  test "should destroy registro" do
    assert_difference('Registro.count', -1) do
      delete registro_url(@registro)
    end

    assert_redirected_to registros_url
  end
end
