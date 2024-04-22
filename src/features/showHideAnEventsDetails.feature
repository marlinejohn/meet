Feature: Show/Hide Event Details
  Scenario: Details of events are hidden by default
    Given the user is viewing a list of events
    When the main page open
    Then the event details should be hidden for all events
    And the "Show Details" button should be displayed for each event

  Scenario: User clicks on "Show Details" button to view event details
    Given the user is viewing a list of events
    When the user clicks on the "Show Details" button for a specific event
    Then the event details should be displayed

  Scenario: User clicks on "Hide Details" button to hide event details
    Given the user is viewing a list of events with details displayed
    When the user clicks on the "Hide Details" button for a specific event
    Then the event details should be hidden