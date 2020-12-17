import { useState } from "react";

//counter
// Business logic. Pure, testable, atomic functions
const increase = (prevValue, max) => {
  return {
    value: prevValue < max ? prevValue + 1 : prevValue,
    message: prevValue < max ? "" : "Max!"
  };
};

const decrease = (prevValue, min) => {
  return {
    value: prevValue > min ? prevValue - 1 : prevValue,
    message: prevValue > min ? "" : "Min!"
  };
};

// Implementation/framework logic. Encapsulating state and effects here
//List
const useQuantitySelector = () => {
  const [state, setState] = useState({
    value: 0,
    message: ""
  });
  const onClickPlus = () => {
    setState(increase(state.value, 10));
  };
  const onClickMinus = () => {
    setState(decrease(state.value, 0));
  };
  return { onClickPlus, onClickMinus, state };
};

export default useQuantitySelector;
