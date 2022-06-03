import React from 'react';
import { PosBoletaItem } from './PosBoletaItem';

const PosBoleta = ({ objMesa }) => {

    const pedido = {
        pedidoPlatos: [
            {
                id: 1,
                nombre: "CAUSA LIMEÑA",
                cantidad: 1,
                precio: 10.00
            },
            {
                id: 2,
                nombre: "PAPA RELLENA",
                cantidad: 2,
                precio: 15.00
            }
        ]
    }

    return (
        <div className="boleta">
            <h3>
                Pedido Mesa: &nbsp;
                <span className="color-secundario">
                    {objMesa ? objMesa.nro : 'seleccione'}
                </span>
            </h3>
            <hr />
            <div className="comanda">
                <h4 className="comanda__mesa">
                    {objMesa ? `Mesa ${objMesa.nro}` : 'seleccione'}
                </h4>
                <p className="comanda__usuario">César Mayta</p>
                <hr />

                <ul className="comanda__lista">
                    {
                        pedido.pedidoPlatos.map((objPlatoPedido, i) => {
                            return (
                                <PosBoletaItem objPlatoPedido={objPlatoPedido} key={i} />
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default PosBoleta;
