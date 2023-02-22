import { deleteCreator, numberCreator } from "./phone.actions.creator";
import { phoneReducer } from "./phone.reducer";

describe("Given the phoneReducer", () => {
  describe("When we set an initial state", () => {
    test("Then if the user clicks a number it should display", () => {
      let result = phoneReducer("", numberCreator("2"));
      expect(result).toBe("2");
    });
    test("Then if the user clicks delete it should clean the display", () => {
      let result = phoneReducer("123", deleteCreator());
      expect(result).toBe("");
    });
  });
});
