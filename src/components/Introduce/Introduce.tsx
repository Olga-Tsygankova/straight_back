import styles from './styles.module.css'
export const Introduce = () => {
	return (
		<>
			<section className={styles.wrapper}>
				<h1 className={styles.title}>Freshly Churned Every Day.</h1>
				<div className={styles.slider}>
					<img className={styles.image} src="/src/assets/Introduce/IMAGE.png" alt="Изображение мороженого первое" />
					<img className={styles.image} src="/src/assets/Introduce/IMAGE-1.png" alt="Изображение мороженого второе" />
					<img className={styles.image} src="/src/assets/Introduce/IMAGE-2.png" alt="Изображение мороженого третье" />
					<img className={styles.image} src="/src/assets/Introduce/IMAGE-3.png" alt="Изображение мороженого четвёртое" />
				</div>
			</section>
		</>
	)
}
