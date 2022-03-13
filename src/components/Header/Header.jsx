import React from 'react'
import styles from './styles.module.css'
import { FaRegUser } from 'react-icons/fa'
import {Link, Routes, Route} from 'react-router-dom'
import About from '../../pages/About'
import Home from '../../pages/Home'
import Events from '../../pages/Events'

export const Header = () => {
  return (
		<nav className={styles.header}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
		</nav>
  )
}

function Navbar() { 
  return (
		<>
			<div className={styles['nav-left']}>
				<Link to="/" className={styles.logo}>
					EM
				</Link>
			</div>
			<div className={styles['nav-right']}>
				<Link to="/about">
					<FaRegUser />
				</Link>
			</div>
		</>
  )
}