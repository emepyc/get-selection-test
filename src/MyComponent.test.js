import React from "react";
import ReactDOM from "react-dom";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MyComponent from "./MyComponent";

it("renders with ReactDOM", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <MyComponent/>,
    div,
  );
});

it("renders with testing-library", () => {
  const {container} = render(
    <MyComponent/>
  );
});

it("contains a button", () => {
  const {getByText} = render(
    <MyComponent/>
  );

  const button = getByText("Click me");
  console.log(button);
  userEvent.click(button);
});
