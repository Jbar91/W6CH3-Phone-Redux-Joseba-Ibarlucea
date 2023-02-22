/* eslint-disable jsx-a11y/anchor-is-valid */

import { Action } from "../action/action";
import { Display } from "../display/display";

export function Actions() {
  const classes = ["call", "hang"];
  return (
    <div className="actions">
      <Display></Display>
      {classes.map((item) => (
        <Action actionClass={item} key={item}></Action>
      ))}
    </div>
  );
}
