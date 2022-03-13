import React from 'react'
import styles from './styles.module.css'
import { BsCalendarEvent } from 'react-icons/bs'
import {GoInfo} from 'react-icons/go'
import { RiFireLine } from 'react-icons/ri'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Sidenav = props => {
  return (
    <section className={styles.sidebar}>
      <p><Link to='/events'><GoInfo className={ styles.icon} /> events</Link></p>
      <p><BsCalendarEvent className={ styles.icon}/> calendar</p>
      <p><RiFireLine className={ styles.icon}/> popular</p>
      <p><BiSearchAlt2 className={ styles.icon}/> search</p>
      <p><FaUserFriends className={ styles.icon}/> invite friends</p>
    </section>
  )
}
