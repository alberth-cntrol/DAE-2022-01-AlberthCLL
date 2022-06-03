import React from 'react';

const PosHeader = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<img src="/img/logo.svg" alt="" />
			</div>
			<div className="header__buscador">
				<img src="/img/search.svg" alt="" />
				<input
					type="text"
					className="header__input"
					placeholder="Busca un término"
				/>
			</div>
			<div className="header__usuario">
				<img src="https://www.lavanguardia.com/files/image_948_465/uploads/2020/06/11/5fa91de377d8a.jpeg" alt="" />
				<span>Alberth Nils Castillo Llanos</span>
			</div>
		</header>
	);
};

export default PosHeader;
