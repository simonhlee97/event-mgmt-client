import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { BsCalendarEvent } from 'react-icons/bs'
import { GoInfo } from 'react-icons/go'
import { MdOutlineAvTimer, MdOutlineLocationOn } from 'react-icons/md'

export const EventCard = ({ items }) => {
	return (
		<>
				<div className={ styles['flex-wrapper']}>
					{items.map((val) => {
						return (
							<Link className={styles.card} to={`/events/${val.id}`} key={val.id}>
								<div className={styles.header}>
									<h2>{val.name}</h2>
									<img
										src={val.imageUrl}
										alt={val.name}
										className={styles.image}
									/>
								</div>
								<div className={styles['card-body']}>
									<p>{val.description}</p>
									<p>
										<BsCalendarEvent /> {val.date}
									</p>
									<p>
										<MdOutlineAvTimer /> {val.time}
									</p>
									<p>
										<MdOutlineLocationOn /> {val.location}
									</p>
								</div>
							</Link>
						)
					})}
				</div>
		</>
	)
}

