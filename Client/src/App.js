import React from 'react';
import D3Componemt from './Component/d3';
import SigninComponent from './Component/Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/login';

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<SigninComponent />} />
					<Route path="/d3" element={<D3Componemt />} />
					<Route path= "/login" element={<Login/> } />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
