import styles from './styles.module.css'
import icecream from '../../assets/Cater/IMAGE.png'

export const Cater = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.image}>
				<img src={icecream} alt="Icecream_Photo" />
			</div>
			<div className={styles.text}>
				<h2>
					Cater Your Next Event With
				</h2>
				<p>
					Too many parties have an un-magical, sad lack of ice cream. The Magic Slab, where ice cream is handmade with love and attention, is changing that. Come treat your guests or team with the best ice cream you've ever tasted.
				</p>
			</div>
		</section>
	)
}
