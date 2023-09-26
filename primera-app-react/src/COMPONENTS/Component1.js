import "../COMPONENTS/Component1.css";
import React, { createRef, useRef } from "react"; //se tiene que importar esto para que se pueda modificar el DOM haciendo referencias
import ReactDOM from "react-dom";

import bombilla from "../image/bombilla.png";
import bombillaOn from "../image/bombillaOn.png";
import logo from "../image/patitaslogo.png";
// las imagenes se tienen que importar no se puede poner la ruta directamente como en un html normal

export default function Component1() {

    /*  estas ref ayudan para poder editar el dom en las funciones de javaScript, se pone la referencia en los tags ej: en los div y eso viene a remplazar el id */
    let estadoBombillo = false;
    let refBombillo = useRef(),
        refbody = useRef(),
        refletras = useRef(),
        refregistrarse = useRef();

    return (
        <div className="padre" ref={refbody}>
            <header ref={refletras}>



                <div className="logodiv">

                    <img 

                        id="bombillo"
                        src={logo}
                        alt=""
                        width="10%"

                    />



                    <h1>patitas app</h1>
                </div>

                <div className="btn-sesion">
                    <img className="img-bombillo"
                        onClick={prueba}
                        id="bombillo"
                        src={bombillaOn}
                       
                        width="12%"
                       
                        ref={refBombillo}
                    />


                    {/* en este img el id bombillo queda obsoleto y se remplaza con las referencias */}

                    <h4>Iniciar sesión</h4>



                    <div className="btn-registrarse" ref={refregistrarse}>


                        <h4>Registrarse</h4>

                    </div>
                </div>
            </header>

        </div>
    );

    function prueba() {
        if (estadoBombillo == false) {

            /* no olvidar el .current */

            refbody.current.style.backgroundColor = "rgb(44, 43, 43)";
            refregistrarse.current.style.backgroundColor = "#917cc5";
            refletras.current.style.backgroundColor = "#0078e3";
            refBombillo.current.src = bombilla;
            console.log("se apagó el bombillo");
            estadoBombillo = true;
        } else {
            refbody.current.style.backgroundColor = "white";
            refregistrarse.current.style.backgroundColor = "chocolate";
            refletras.current.style.color = "white";
            refletras.current.style.backgroundColor = "#034A68";
            refBombillo.current.src = bombillaOn;
            console.log("se prendió el bombillo");
            estadoBombillo = false;
        }
    }
}
