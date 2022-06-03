import React from 'react';
import PosCategoria from './PosCategoria';


const PosCategorias = () => {



    const categorias = [
        { id: 1, nombre: 'Entradas' },
        { id: 2, nombre: 'Fondos' },
    ]

    return (
        <nav className="menu">
            <ul className="menu__lista">
                {
                    categorias.map((objCategoria) => {
                        return <PosCategoria objCategoria={objCategoria} key={objCategoria.id} />
                    })
                }

            </ul>
        </nav>
    );
};

export default PosCategorias;
