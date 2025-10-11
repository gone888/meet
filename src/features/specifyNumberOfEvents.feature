Feature: Specify Number of Events
  Scenario: When user hasn't specified a number, 32 events are shown by default.
    Given the user is on the page the shows a list of events
    When the user hasnt entered how many events they want displayed
    Then display 32 events by default

  Scenario: User can change the number of events displayed.
    Given the user is on the page the shows a list of events
    When the user enters how many events they want displayed
    Then display the specified amount of events to the user.