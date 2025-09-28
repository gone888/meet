# Meet App

## Features:

1. Filter Events By City

- As a user,
- I should be able to filter events by city
- So that I can see the events taking place in that city

> Scenario 1: When user hasn't searched for a city, show upcoming events from all cities.

- Given user hasn't searched for any city;
- When the user opens the app;
- Then the user should see a list of upcoming events.

> Scenario 2: User should see a list of suggestions when they search for a city.

- Given the main page is open;
- When user starts typing in the city textbox;
- Then the user should receive a list of cities (suggestions) that match what they've typed.

> Scenario 3: User can select a city from the suggested list.

- Given user was typing "Berlin" in the city textbox AND the list of suggested cities is showing;
- When the user selects a city (e.g., "Berlin, Germany") from the list;
- Then their city should be changed to that city (i.e., "Berlin, Germany") AND the user should receive a list of upcoming events in that city.

2. Show/Hide Event Details

- As a user,
- I should be able to show/hide event details
- So that I can learn more about an event and hide the details when I am done.

> Scenario 1: An event element is collapsed by default.

- Given user hasn't opened any event elements;
- When the user is viewing a list of events;
- Then each of the event elements should be collapsed by default.

> Scenario 2: User can expand an event to see details.

- Given the user is viewing a list of events;
- When the user clicks the expand details button;
- Then the event expands to show more details.

> Scenario 3: User can collapse an event to hide details.

- Given the user is viewing the details of an event;
- When the user clicks the hide details button;
- Then the event collapses to hide the details.

3. Specify Number of Events

- As a user,
- I should be able to specify the number of events displayed
- So that It only displays the number of events I want to see

> Scenario 1: When user hasn't specified a number, 32 events are shown by default.

- Given the user is on the page the shows a list of events;
- When the user hasnt entered how many events they want displayed;
- Then display 32 events by default.

> Scenario 2: User can change the number of events displayed.

- Given the user is on the page the shows a list of events;
- When the user enters how many events they want displayed;
- Then display the specified amount of events to the user.

4. Use the App When Offline

- As a user,
- I should be able to use the app when offline
- So that I am still able to view events on the calender even when I have no internet connection

> Scenario 1: Show cached data when there's no internet connection.

- Given the user has no internet connection;
- When the user is in the app;
- Then display cached data.

> Scenario 2: Show error when user changes search settings (city, number of events).

- Given the user has no internet connection;
- When the user attempts to change search settings;
- Then give them an error telling them they must be connected to the internet to change and apply their desired search settings.

5. Add an App Shortcut to the Home Screen

- As a user,
- I should be able to add an app shortcut to the home screen
- So that I have easy access to the app

> Scenario 1: User can install the meet app as a shortcut on their device home screen.

- Unable to test this feature as this is handled by the users OS.

6. Display Charts Visualizing Event Details

- As a user,
- I should be able to see a chart visualizing the event details
- So that I am well informed about the event details

> Scenario 1: Show a chart with the number of upcoming events in each city.

- Given the user is on the events page;
- When they aren't making any searches;
- Then show a chart with the number of upcoming events in each city.
