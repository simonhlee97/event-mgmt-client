import styles from './app.module.css'
import { PageRoutes } from './routes'
import { FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Footer, Sidenav } from './components'

export default function App() {
  return (
    <div className={styles.page}>
			<header><HeaderNavbar /></header>
			<nav><Sidenav /></nav>
			<main>
				<PageRoutes />
			</main>
			<footer><Footer /></footer>
		</div>
  )
}

function HeaderNavbar() {
  return (
		<div className={styles['header-navbar']}>
			<div className={styles['nav-left']}>
				<Link to="/" className={`${styles.logo} letter`}>
					EVENT MANAGER
				</Link>
			</div>
			<div className={styles['nav-right']}>
				<Link to="/">
					<FaRegUser />
				</Link>
			</div>
		</div>
  )
}
