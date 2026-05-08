import React from "react";
import "../styles.css"; 

type SumadorProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

export default function Sumador({
  value,
  onChange,
  min = 1,
  max = 99,
}: SumadorProps) {

  const incrementar = () => {
    if (value >= max) return;
    onChange(value + 1);
  };

  const decrementar = () => {
    if (value <= min) return;
    onChange(value - 1);
  };

  return (
    <div className="sumador">
      
      <button
        className="sumador-btn"
        onClick={decrementar}
        disabled={value <= min}
      >
        -
      </button>
      {/* muestra el valor actual del sumador */}
      <span className="sumador-value">{value}</span>

      <button
        className="sumador-btn"
        onClick={incrementar}
        disabled={value >= max}
      >
        +
      </button>

    </div>
  );
}