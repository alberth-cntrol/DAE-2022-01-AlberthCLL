import React from 'react';

export const PosBoletaItem = ({ objPlatoPedido }) => {
    return (
        <li className="comanda__item">
            <p className="comanda__nombre">
                <span>
                    <strong>{objPlatoPedido.nombre}</strong>
                </span>
                <span>Precio: S/ {objPlatoPedido.precio}</span>
            </p>
            <p className="comanda__cantidad">{objPlatoPedido.cantidad}</p>
            <p className="comanda__precio">
                <strong>
                    S/ {+objPlatoPedido.cantidad * +objPlatoPedido.precio}
                </strong>
            </p>
        </li>
    );
};
