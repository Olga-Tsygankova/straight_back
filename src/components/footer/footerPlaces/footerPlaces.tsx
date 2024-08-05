import styles from './styles.module.css';
import pointImg from '../../../assets/Footer/Point.png'

export const FooterPlaces = () => {
	return (
		<section className={styles.footerPlaces}>
			<div className={styles.placeCard}>
				<div className={styles.cardImage}><img src={pointImg} alt="PointImg" /></div>
				<h3 className={styles.cardTitle}>
					NEW YORK
				</h3>
				<button className={styles.cardNumber}>646-394-3920</button>
				<p className={styles.cardAdress}>4096 Grove Street<br/>Farmingdale, NY 11735</p>
			</div>
			<div className={styles.placeCard}>
				<div className={styles.cardImage}><img src={pointImg} alt="PointImg" /></div>
				<h3 className={styles.cardTitle}>
					CHICAGO
				</h3>
				<button className={styles.cardNumber}>773-898-3028</button>
				<p className={styles.cardAdress}>1243 Virginia Street<br/>Chicago, IL 60629</p>
			</div>
		</section>
	)
}
