import React from 'react';
import EventsPage from './pages/Events';
import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

export const PageRoutes = () => {
  return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<EventsPage/>} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
  )
};