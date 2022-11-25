
import { useRef } from "react";

const Referencias = () => {

  let refMenu = useRef();
  let refMenuBtn = useRef();     //Es un objeto {current: nombreReferencia}
  //Si no se asigna a un elemento del DOM {current: undefined}

  const handleButton = () => {
    if (refMenuBtn.current.textContent === "Menu") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menu";
      refMenu.current.style.display = "none";
    }
  }


  return (<>

    <h2>Referencias</h2>

    <button ref={refMenuBtn} onClick={handleButton}>Menu</button>
    <nav ref={refMenu} style={{ display: "none" }}>
      <a href="#">Sección 1</a>
      <br />
      <a href="#">Sección 2</a>
      <br />
      <a href="#">Sección 3</a>
      <br />
      <a href="#">Sección 4</a>
      <br />
      <a href="#">Sección 5</a>
    </nav>

  </>)

}

export default Referencias;