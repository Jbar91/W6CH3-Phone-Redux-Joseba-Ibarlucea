/* eslint-disable jsx-a11y/anchor-is-valid */
export function Action(props: { actionClass: string | undefined }) {
  return (
    <a href="#" className={props.actionClass}>
      {props.actionClass}
    </a>
  );
}
