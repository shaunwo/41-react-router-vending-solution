import React from 'react';
import { Link } from 'react-router-dom';
import takisImg from './Takis.jpeg';

function Takis() {
	return (
		<>
			<img src={takisImg} alt="Takis" />
			<p>
				<Link to="/">Go Back</Link>
			</p>
		</>
	);
}

export default Takis;
