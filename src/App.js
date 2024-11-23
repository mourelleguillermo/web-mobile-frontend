import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';

class App extends Component {
	render() {
		return (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
		)
	}
}

export default App;


