require 'test_helper'

class AlToquesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @al_toque = al_toques(:one)
  end

  test "should get index" do
    get al_toques_url
    assert_response :success
  end

  test "should get new" do
    get new_al_toque_url
    assert_response :success
  end

  test "should create al_toque" do
    assert_difference('AlToque.count') do
      post al_toques_url, params: { al_toque: {  } }
    end

    assert_redirected_to al_toque_url(AlToque.last)
  end

  test "should show al_toque" do
    get al_toque_url(@al_toque)
    assert_response :success
  end

  test "should get edit" do
    get edit_al_toque_url(@al_toque)
    assert_response :success
  end

  test "should update al_toque" do
    patch al_toque_url(@al_toque), params: { al_toque: {  } }
    assert_redirected_to al_toque_url(@al_toque)
  end

  test "should destroy al_toque" do
    assert_difference('AlToque.count', -1) do
      delete al_toque_url(@al_toque)
    end

    assert_redirected_to al_toques_url
  end
end
