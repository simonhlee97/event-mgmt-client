import events from "../../dummydata";
import styles from './styles.module.css'

export const FilterButtons = ({ filterItem, setItems, menuItems }) => {
	return (
		<>
			<div className={`my-4 ${styles['flex-wrapper']}`}>
				{menuItems.map((val, id) => {
					return (
						<button
							className={styles['filter-btn']}
							onClick={() => filterItem(val)}
							key={id}>
							{val}
						</button>
					)
				})}
				<button className={styles['filter-btn']} onClick={() => setItems(events)}>
					All
				</button>
			</div>
		</>
	)
}
