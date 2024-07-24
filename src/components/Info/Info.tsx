import styles from './styles.module.css'
export const Info = () => {
	return (
		<>
			<section className={styles.wrapper}>
				<div className={styles.info}>
					<div className={styles.infoBlock}>
						<div className={styles.infoBlockText}>
							<h2>We only use the highest quality ingredients</h2>
							<p>The Slab is based on a simple, nostalgic idea: paying tribute to the original American ice cream parlor – built on quality ice cream, delicious toppings and a fun and inviting experience.</p>
						</div>
						<img src="" alt="" />
					</div>
					<div className={styles.infoBlock}>
						<div className={styles.infoBlockText}>
							<h2>Supporting our local farmers</h2>
							<p>Ice cream with the look and taste of an old favorite. Every bite melts in your mouth to leave a creamy, rich aftertaste. All of this is a direct result of our support for local farms with the best ingredients. Supplied fresh every morning, for every batch.</p>
						</div>
						<img src="" alt="" />
					</div>
					<div className={styles.infoBlock}>
						<div className={styles.infoBlockText}>
							<h2>Special flavors added every week</h2>
							<p>Participate in our Weekly Magic Flavor competition on Instagram and have your creative flavor added to the menu — for an ENTIRE month! If your flavor is selected, you receive 10 free cones on us!</p>
						</div>
						<img src="" alt="" />
					</div>
				</div>
			</section>
		</>
	);
};
