import React from 'react'
import styles from './styles.module.css'
import { BsCalendarEvent } from 'react-icons/bs'
import { GoInfo } from 'react-icons/go'
import { MdOutlineAvTimer, MdOutlineLocationOn } from 'react-icons/md'

export const Event = ({ items}) => {
	return (
		<div className={ styles['flex-wrapper']}>
			{items.map((item) => {
				return (
					<div className={styles.card} key={item.id}>
						<div className={styles.header}>
							<h3>{item.name}</h3>
							<img className={styles.image} src={item.imageUrl} alt={item.name} />
						</div>
						<div className={styles['card-body']}>
							<p>
								<MdOutlineAvTimer /> {item.date}, {item.time}
							</p>
							<p><MdOutlineLocationOn /> {item.location}</p>
							<p>Summary: {item.description}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}
