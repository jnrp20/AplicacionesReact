import "../COMPONENTS/Component1.css";
import React, { createRef, useRef } from "react"; //se tiene que importar esto para que se pueda modificar el DOM haciendo referencias
import ReactDOM from "react-dom";

import bombilla from "../image/bombilla.png";
import bombillaOn from "../image/bombillaOn.png";
// las imagenes se tienen que importar no se puede poner la ruta directamente como en un html normal

export default function Component1() {
    let refBombillo = useRef(),
        refbody = useRef(),
        refletras = useRef();
    let estadoBombillo = false;

    return (
        <div className="padre" ref={refbody}>
            <header ref={refletras}>
                <img className="logo"
                    width="8%"
                    height="auto"
                    src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
                    alt=""
                />
                <h1>Patitas APP</h1>
                <div className="btn-sesion">
                    <img
                        onClick={prueba}
                        id="bombillo"
                        src={bombillaOn}
                        alt=""
                        width="15%"
                        ref={refBombillo}
                    />
                    {/* en este img el id bombillo queda obsoleto y se remplaza con las referencias */}

                    <h4>Iniciar sesión</h4>
                    <h4>Registrarse</h4>
                </div>
            </header>
            
        </div>
    );

    function prueba() {
        if (estadoBombillo == false) {
            refbody.current.style.backgroundColor = "rgb(44, 43, 43)";
            refletras.current.style.color="#c1c1c1";
            refletras.current.style.backgroundColor="#0078e3";
            refBombillo.current.src = bombilla;
            console.log("se apagó el bombillo");
            estadoBombillo = true;
        } else {
            refbody.current.style.backgroundColor = "white";
            refletras.current.style.color="white";
            refletras.current.style.backgroundColor="rgb(66, 147, 212)";
            refBombillo.current.src = bombillaOn;
            console.log("se prendió el bombillo");
            estadoBombillo = false;
        }
    }
}
