import React from 'react';
import { Link } from 'react-router-dom';
import gardettosImg from './Gardettos-Snack-Mix.jpeg';

function Gardettos() {
	return (
		<>
			<img src={gardettosImg} alt="Gardetto's Snack Mix" />
			<p>
				<Link to="/">Go Back</Link>
			</p>
		</>
	);
}

export default Gardettos;
