import React, { useState } from "react";

const Semaforo = () => {

    const [cambiarColor, setCambiarColor] = useState("red");


    //ternario
    return (
        <div className="contenedor">
            <div className="palo"></div>

            <div className="conSemaforo">

                

                <div onClick={() => setCambiarColor("red")}
                    className={"luz red" + ((cambiarColor === "red") ? " brillo" : "")}></div>

                <div onClick={() => setCambiarColor("yellow")}
                    className={"luz yellow" + ((cambiarColor === "yellow") ? " brillo" : "")}></div>

                <div onClick={() => setCambiarColor("green")}
                    className={"luz green" + ((cambiarColor === "green") ? " brillo" : "")}></div>
            </div>
        </div>

    )
}

export default Semaforo