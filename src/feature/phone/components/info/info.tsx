import { Actions } from "../actions/actions";
import { Keyboard } from "../keyboard/keyboard";

export function Info() {
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </div>
  );
}
