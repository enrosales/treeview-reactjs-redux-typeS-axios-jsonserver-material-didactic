import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { Provider } from "react-redux";

import store from "./store";

test("renders Welcome message", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = getByText(/Welcome!/i);
  expect(linkElement).toBeInTheDocument();
});
