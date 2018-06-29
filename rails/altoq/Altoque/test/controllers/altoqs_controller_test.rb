require 'test_helper'

class AltoqsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @altoq = altoqs(:one)
  end

  test "should get index" do
    get altoqs_url
    assert_response :success
  end

  test "should get new" do
    get new_altoq_url
    assert_response :success
  end

  test "should create altoq" do
    assert_difference('Altoq.count') do
      post altoqs_url, params: { altoq: {  } }
    end

    assert_redirected_to altoq_url(Altoq.last)
  end

  test "should show altoq" do
    get altoq_url(@altoq)
    assert_response :success
  end

  test "should get edit" do
    get edit_altoq_url(@altoq)
    assert_response :success
  end

  test "should update altoq" do
    patch altoq_url(@altoq), params: { altoq: {  } }
    assert_redirected_to altoq_url(@altoq)
  end

  test "should destroy altoq" do
    assert_difference('Altoq.count', -1) do
      delete altoq_url(@altoq)
    end

    assert_redirected_to altoqs_url
  end
end
