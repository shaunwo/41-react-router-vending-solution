import React from 'react';
import { Link } from 'react-router-dom';
import vendingMachinImg from './vending-machine.jpg';

function VendingMachine() {
	return (
		<>
			<img src={vendingMachinImg} alt="Vending Machine" width="400" />
			<p>What would you like from the vending machine?</p>
			<ul>
				<li>
					<Link to="/doritos">Doritos</Link>
				</li>
				<li>
					<Link to="/takis">Takis</Link>
				</li>
				<li>
					<Link to="/gardettos">Gardetto's Snack Mix</Link>
				</li>
			</ul>
		</>
	);
}

export default VendingMachine;
