import React from 'react';

const PosMesa = ({ objMesa }) => {

    return (
        // <li className="mesas__mesa activo">
        <li className="mesas__mesa activo">
            <span className="mesas__titulo">Mesa</span>
            <span className="mesas__numero">{objMesa.nro}</span>
        </li>
    );
};

export default PosMesa;
