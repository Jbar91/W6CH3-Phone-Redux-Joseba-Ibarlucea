import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Info } from "../../feature/phone/components/info/info";
import { store } from "../store/store";
import App from "./App";

jest.mock("../../feature/phone/components/info/info");

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(Info).toHaveBeenCalled();
});
