import styles from './styles.module.css';

export const Magic = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.background}>
				<h2 className={styles.title}><span className={styles.titleUppercase}>NEW </span>Magic Milkshakes</h2>
				<p className={styles.description}>Two scoops of magic and one of ice cream? <br /> Introducing delicious milkshakes with our real artisan ice cream.</p>
			</div>
		</section>
	)
}
