@Smartbox
Feature: Navigating to smartbox homepage and select box
  @smoke @test
  Scenario: Navigate
    Given I open the smartbox url
    Then I verify title of web page as 'Smartbox'
    When I click on the PamperTreats box
    Then I verify title of web page as 'Pamper Treats'
    And I click on the pamperbox add to cart button
    Then I verify pamperbox added to cart
