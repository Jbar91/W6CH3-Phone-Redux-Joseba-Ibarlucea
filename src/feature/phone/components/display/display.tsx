import { useSelector } from "react-redux";
import { RootState } from "../../../../core/store/store";

export function Display() {
  const display = useSelector((state: RootState) => state.phone);

  return <span className="number">{display}</span>;
}
