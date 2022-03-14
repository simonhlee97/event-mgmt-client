import React from 'react'
import { getEvents} from './Data'
import styles from './styles.module.css'

export const FilterButtons = ({ filterItems, setItems, menuItems }) => {
	const Data = getEvents()
	return (
		<>
			<div className="text-center my-2">
				{menuItems.map((Val, id) => {
					return (
						<button
							className={styles['filter-btn']}
							onClick={() => filterItems(Val)}
							key={id}>
							{Val}
						</button>
					)
				})}
				<button className={styles['filter-btn']} onClick={() => setItems(Data)}>
					All
				</button>
			</div>
		</>
	)
}

