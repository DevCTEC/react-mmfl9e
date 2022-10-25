import React from "react";
import "./style.css";

// export function App() {
//   return (
//     <div className="App">
//       <h1>Bienvenidos</h1>
//       <h2>Este es lo primero que hago con ReactJS!</h2>
//     </div>
//   );
// }
function Foto(){
  return(
    <img 
    src="https://phantom-elmundo.unidadeditorial.es/ce2e3dd0239aa67b8e9f6f9d360fe922/crop/0x0/1394x929/resize/473/f/webp/assets/multimedia/imagenes/2019/12/19/15767431609537.jpg" 
    alt="Texto de la foto"
    className="photo"/>
  );
}
export default function App(){
  return(
    <div className="App">
      <h1> Nombre</h1>
      < Foto />
    </div>
  );
}
