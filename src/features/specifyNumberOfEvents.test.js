import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn't specified a number, 32 events are shown by default.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user is on the page the shows a list of events", () => {
      AppComponent = render(<App />);
    });

    when(
      "the user hasnt entered how many events they want displayed",
      () => {}
    );

    then("display 32 events by default", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test("User can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let EventListItems;

    given("the user is on the page the shows a list of events", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    when("the user enters how many events they want displayed", async () => {
      const numberInput = AppDOM.querySelector("#number-of-events-input");
      const user = userEvent.setup();
      await user.type(numberInput, "{backspace}{backspace}10");
      expect(numberInput).toHaveValue("10");
    });

    then("display the specified amount of events to the user.", async () => {
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(10);
      });
    });
  });
});
