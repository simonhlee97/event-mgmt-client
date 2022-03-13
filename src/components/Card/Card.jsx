import React from 'react'
import styles from './styles.module.css'
import { BsCalendarEvent } from 'react-icons/bs'
import {GoInfo} from 'react-icons/go'

export const Card = ({ event }) => {
  var dateobj = new Date(event.date);
  var datetime = dateobj.toLocaleString();
  
  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <h3>{event.name}</h3>
        <img src="https://picsum.photos/id/12/500/300" className={styles.thumb} alt="splash" />
        <p><small>{datetime}</small></p>
      </div>

      <div className={styles.content}>
        <p><small>{event.description.content[0].content[0].value}</small></p>
      </div>
    </div>
  )
}
