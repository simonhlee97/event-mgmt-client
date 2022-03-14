import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Events, EventDetails } from './components/Events/index';

export const PageRoutes = () => {
  return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/events/:eventId" element={<EventDetails />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<h1>404! Page Does Not Exist!</h1>} />
			</Routes>
		</>
  )
};