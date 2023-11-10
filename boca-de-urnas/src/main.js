import React from "react";
import Counter from "./Counter"; // Importa el componente Counter que acabas de crear
import "./main.css"; // Importa el archivo de estilos que crearás luego

// Este es el componente App que representa la página web completa
function main() {
  // Este es el código JSX que devuelve el componente, que usa el componente Counter varias veces con diferentes props
  return (
    <div className="main">
      <h1>Boca de urnas</h1>
      <div className="counters">
        <Counter name="Candidato A" color="blue" />
        <Counter name="Candidato B" color="red" />
        <Counter name="Candidato C" color="green" />
      </div>
    </div>
  );
}

// Esta es la exportación del componente para que pueda ser renderizado en el index.js
export default main;