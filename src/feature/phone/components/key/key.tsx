import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../core/store/store";
import {
  deleteCreator,
  numberCreator,
} from "../../reducer/phone.actions.creator";

export function Key() {
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const dispatch = useDispatch<AppDispatch>();

  const handleNumber = (num: string) => {
    dispatch(numberCreator(num));
  };

  const handleDelete = () => {
    dispatch(deleteCreator());
  };

  return (
    <ol className="keyboard">
      {nums.map((num) => (
        <li key={num}>
          <button
            className="key"
            onClick={() => {
              handleNumber(num);
            }}
          >
            {num}
          </button>
        </li>
      ))}
      <li>
        <button
          className="key big"
          onClick={() => {
            handleDelete();
          }}
        >
          delete
        </button>
      </li>
    </ol>
  );
}
