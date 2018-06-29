require "application_system_test_case"

class AltoqsTest < ApplicationSystemTestCase
  setup do
    @altoq = altoqs(:one)
  end

  test "visiting the index" do
    visit altoqs_url
    assert_selector "h1", text: "Altoqs"
  end

  test "creating a Altoq" do
    visit altoqs_url
    click_on "New Altoq"

    click_on "Create Altoq"

    assert_text "Altoq was successfully created"
    click_on "Back"
  end

  test "updating a Altoq" do
    visit altoqs_url
    click_on "Edit", match: :first

    click_on "Update Altoq"

    assert_text "Altoq was successfully updated"
    click_on "Back"
  end

  test "destroying a Altoq" do
    visit altoqs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Altoq was successfully destroyed"
  end
end
