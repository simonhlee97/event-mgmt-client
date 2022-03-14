import { useState } from 'react'
import {getEvents} from './Data'
import {EventCard, FilterButtons} from './'

export const Events = () => {
	const Data = getEvents()
	const [items, setItems] = useState(Data)

	const menuItems = [...new Set(Data.map((Val) => Val.category))]

	const filterItems = (curcat) => {
		const newItems = Data.filter((newVal) => {
			return newVal.category === curcat
		})
		setItems(newItems)
	}
	return (
		<div className='px-2'>
			<h1 className="text-center letter my-2">Tech Events in Seoul</h1>
			<FilterButtons filterItems={filterItems} setItems={setItems} menuItems={menuItems} />
			<EventCard items={items} />
		</div>
	)
}
