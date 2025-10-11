Feature: Show/Hide Event Details
  Scenario: An event element is collapsed by default.
    Given the user opens the events app
    When the user is viewing a list of events
    Then each of the event elements should be collapsed by default.

  Scenario: User can expand an event to see details.
    Given the user is viewing a list of events
    When the user clicks the expand details button
    Then the event expands to show more details.

  Scenario: User can collapse an event to hide details.
    Given the user is viewing the details of an event
    When the user clicks the hide details button
    Then the event collapses to hide the details.