import React, { useState } from "react";

// Este es el componente Counter que recibe como props el nombre del candidato y el color del contador
function Counter({ name, color }) {
  // Este es el estado que guarda el valor del contador, que se inicializa en 0
  const [count, setCount] = useState(0);

  // Esta es la función que incrementa el contador en 1
  function increment() {
    setCount(count + 1);
  }

  // Esta es la función que decrementa el contador en 1, pero solo si es mayor que 0
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  // Este es el código JSX que devuelve el componente, que usa el color y el nombre recibidos como props
  return (
    <div className="counter" style={{ backgroundColor: color }}>
      <h2>{name}</h2>
      <div className="buttons">
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

// Esta es la exportación del componente para que pueda ser usado en otros archivos
export default Counter;