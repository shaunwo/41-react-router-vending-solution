import React from 'react';
import { Link } from 'react-router-dom';
import doritosImg from './Doritos.jpeg';

function Doritos() {
	return (
		<>
			<img src={doritosImg} alt="Doritos" />
			<p>
				<Link to="/">Go Back</Link>
			</p>
		</>
	);
}

export default Doritos;
