import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../state/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Icnrement By Amount
      </button>
    </div>
  );
}
