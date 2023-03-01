import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/reduxDemo";

export default function Counter() {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <span style={{margin: '0 10px'}}>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
      </div>
    </div>
  );
}
