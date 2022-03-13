import styles from './styles.module.css'
import { useState, useEffect} from 'react'
import { useContentful } from '../../hooks'
import { Card } from '../../components'


export const Mainsection = () => {
  const [events, setEvents] = useState([]);
  const { getEvents } = useContentful();

  useEffect(() => { 
    getEvents().then((res) => setEvents(res))
  })
  return (
    <main className={styles.main}>
      <div className={styles.filters}>
        <p><input type="text" placeholder="search" /></p>
        <p>Filters...</p>
      </div>
      
      
      <div className={ styles['flex-container']}>
        {events.map((event) => (
          <Card key={event.name} event={event} />
        ))}
      </div>
    </main>

    
  )
}
