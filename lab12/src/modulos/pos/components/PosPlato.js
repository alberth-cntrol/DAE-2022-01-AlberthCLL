import React from 'react';

const PosPlato = ({ objPlato }) => {

    return (
        <div className="carta__plato">
            <img src={objPlato.imagen} alt="" />
            <h4 className="carta__titulo">{objPlato.nombre}</h4>
            <span className="carta__precio">S/ {objPlato.precio}</span>
            <div className="carta__botones">
                <button className="boton boton-outline-primary boton-restar">-1</button>
                <button className="boton boton-outline-primary boton-restar">+1</button>
            </div>
        </div>
    );
};

export default PosPlato;
