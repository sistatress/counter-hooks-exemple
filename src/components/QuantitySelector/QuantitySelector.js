import React from "react";
import "./QuantitySelector.css";
import useQuantitySelector from "./useQuantitySelector";

// Presentational component
const QuantitySelector = () => {
  const { onClickPlus, onClickMinus, state } = useQuantitySelector();
  const { message, value } = state;
  return (
    <div className="quantity-selector">
      <button onClick={onClickMinus} className="button">
        -
      </button>
      <div className="number">{value}</div>
      <button onClick={onClickPlus} className="button">
        +
      </button>
      <div className="message">{message}</div>
    </div>
  );
};

export default QuantitySelector;
