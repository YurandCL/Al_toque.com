require "application_system_test_case"

class AlToquesTest < ApplicationSystemTestCase
  setup do
    @al_toque = al_toques(:one)
  end

  test "visiting the index" do
    visit al_toques_url
    assert_selector "h1", text: "Al Toques"
  end

  test "creating a Al toque" do
    visit al_toques_url
    click_on "New Al Toque"

    click_on "Create Al toque"

    assert_text "Al toque was successfully created"
    click_on "Back"
  end

  test "updating a Al toque" do
    visit al_toques_url
    click_on "Edit", match: :first

    click_on "Update Al toque"

    assert_text "Al toque was successfully updated"
    click_on "Back"
  end

  test "destroying a Al toque" do
    visit al_toques_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Al toque was successfully destroyed"
  end
end
