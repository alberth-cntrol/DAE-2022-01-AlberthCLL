import React, { useState } from 'react';
import PosMesa from './PosMesa';


const PosMesas = () => {

    const [mesas, setMesa] = useState([
        { id: '1', nro: '1' },
        { id: '2', nro: '2' },
        { id: '3', nro: '3' }
    ]);

    return (
        <div className="mesas">
            <ul className="mesas__lista">
                {
                    mesas.map((objMesa) => {
                        return <PosMesa objMesa={objMesa} key={objMesa.id} />
                    })
                }
            </ul>
            <div className="mesas__info"></div>
        </div>
    );
};

export default PosMesas;
