import { useParams } from 'react-router-dom'
import { getEvent } from './Data'
import styles from './styles.module.css'

export const EventDetails = () => {
	let params = useParams()
	let event = getEvent(parseInt(params.eventId, 10))
	return (
		<article className="text-center px-4 py-3">
			<button className='btn-secondary'>Sign up for this event</button>
			<h2>Event Name: {event.name}</h2>
			<p>
				{event.date}. {event.time}
			</p>
			<p>{event.description}</p>
			<p className="px-3 py-3">
				<img className={styles.image} src={event.imageUrl} alt={event.name} />
			</p>
			<div className="full text-left">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur accusantium
					natus tenetur architecto? Doloremque libero perferendis praesentium alias, qui
					iusto facere suscipit explicabo vel natus, adipisci officiis similique autem
					delectus!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur accusantium
					natus tenetur architecto? Doloremque libero perferendis praesentium alias, qui
					iusto facere suscipit explicabo vel natus, adipisci officiis similique autem
					delectus!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur accusantium
					natus tenetur architecto? Doloremque libero perferendis praesentium alias, qui
					iusto facere suscipit explicabo vel natus, adipisci officiis similique autem
					delectus!
				</p>
			</div>
		</article>
	)
}
