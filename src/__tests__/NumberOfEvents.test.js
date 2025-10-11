import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents
        currentNOE={32}
        setCurrentNOE={() => {}}
        setErrorAlert={() => {}}
      />
    );
  });

  test("component contains an element with the role of the textbox", () => {
    const numberOfEvents = NumberOfEventsComponent.queryByRole("textbox");
    expect(numberOfEvents).toBeInTheDocument();
  });

  test("ensure that the default value of the input field is 32.", () => {
    const numberOfEvents = NumberOfEventsComponent.queryByRole("textbox");
    expect(numberOfEvents).toHaveValue("32");
  });

  test("the value of the NumberOfEventstextbox changes when a user types in it", async () => {
    const input = NumberOfEventsComponent.getByTestId("numberOfEventsInput");
    const user = userEvent.setup();
    await user.type(input, "{backspace}{backspace}10");
    expect(input).toHaveValue("10");
  });
});
