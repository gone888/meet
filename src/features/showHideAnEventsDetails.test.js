import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import App from "../App";
import Event from "../components/Event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppComponent;
    given("the user opens the events app", () => {
      AppComponent = render(<App />);
    });

    when("the user is viewing a list of events", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then(
      "each of the event elements should be collapsed by default.",
      async () => {
        const AppDOM = AppComponent.container.firstChild;
        const eventDetails = AppDOM.querySelector(".details");
        expect(eventDetails).not.toBeInTheDocument();
      }
    );
  });

  test("User can expand an event to see details.", ({ given, when, then }) => {
    let allEvents = [];
    let EventComponent;
    given("the user is viewing a list of events", async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
    });

    when("the user clicks the expand details button", async () => {
      const user = userEvent.setup();
      const showDetails = EventComponent.queryByText("Show details");
      await user.click(showDetails);
    });

    then("the event expands to show more details.", async () => {
      const description = EventComponent.container.querySelector(".details");
      expect(description).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide details.", ({
    given,
    when,
    then,
  }) => {
    given("the user is viewing the details of an event", async () => {
      const user = userEvent.setup();
      const allEvents = await getEvents();
      const EventComponent = render(<Event event={allEvents[0]} />);
      const showDetails = EventComponent.queryByText("Show details");
      await user.click(showDetails);
    });

    when("the user clicks the hide details button", async () => {
      const user = userEvent.setup();
      const allEvents = await getEvents();
      const EventComponent = render(<Event event={allEvents[0]} />);
      const hideDetails = EventComponent.queryByText("Hide details");
      await user.click(hideDetails);
    });

    then("the event collapses to hide the details.", async () => {
      let AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector(".eventDetails");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
});
