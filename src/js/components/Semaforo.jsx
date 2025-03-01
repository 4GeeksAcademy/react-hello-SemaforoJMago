import React,{useState} from "react";


const Semaforo = () =>{ 
    const [ color, setColor] = useState("red");
 
    return (
        <div>
            <div className="poste"></div>
            <div className = "App">
                <div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " brillo-rojo" : "" )}></div>
                <div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " brillo" : "" )}></div>
                <div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " brillo-verde" : "" )}></div>
            </div>
        </div>
    );
};


export default Semaforo;