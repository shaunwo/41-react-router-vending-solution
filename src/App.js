import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Doritos from './Doritos';
import Takis from './Takis';
import Gardettos from './Gardettos';

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/doritos">
						<Doritos />
					</Route>
					<Route exact path="/takis">
						<Takis />
					</Route>
					<Route exact path="/gardettos">
						<Gardettos />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
