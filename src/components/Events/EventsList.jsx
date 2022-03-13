import React, { useState} from 'react'
import styles from './styles.module.css'
import { BsCalendarEvent } from 'react-icons/bs'
import { GoInfo } from 'react-icons/go'
import events from '../../dummydata'
import { Event, Search, FilterButtons } from './'
// import { FilterButtons } from './FilterButtons'


export const EventsList = () => {
	const [items, setItems] = useState(events)
	const menuItems = [...new Set(events.map((Val) => Val.category))]

	const filterItem = (curcat) => {
		const newItem = events.filter((newVal) => {
			return newVal.category === curcat
		})
		setItems(newItem)
	}
	
	return (
		<div>
			<h1 className='text-center letter'>EVENTS</h1>
			<Search />
			<FilterButtons filterItem={filterItem} setItems={setItems} menuItems={menuItems} />
      <Event items={items} />
		</div>
	)
}