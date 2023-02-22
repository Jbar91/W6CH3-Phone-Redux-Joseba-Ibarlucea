/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { store } from "../../../../core/store/store";
import { Key } from "./key";

describe("Given the Key component", () => {
  beforeEach(() => {
    act(() => {
      render(
        <Provider store={store}>
          <Key></Key>
        </Provider>
      );
    });
  });
  describe("When it's rendered", () => {
    test("Then the delete button should appear", () => {
      const deleteBtn = screen.getByText(/delete/i);
      expect(deleteBtn).toBeInTheDocument();
    });
  });
  describe("When the user clicks a number", () => {
    test("Then the handleNumber should be called", () => {
      const btn = screen.getByText(/0/i);
      const btnNum = userEvent.click(btn);
      expect(btnNum).toHaveBeenCalled();
    });
  });
});
