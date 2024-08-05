import styles from './styles.module.css'
import imageFoodNetwork from '../../../assets/Featured/IMAGE.svg';
import imageCosmopolitan from '../../../assets/Featured/IMAGE-1.svg';
import imagePeople from '../../../assets/Featured/IMAGE-2.svg';
import imageBuzzFeed from '../../../assets/Featured/IMAGE-3.svg';

export const Featured = () => {
	return (
			<section className={styles.wrapper}>
				<h2 className={styles.title}>FEATURED IN</h2>
				<ul className={styles.list}>
					<li className={styles.listItem}><img src={imageFoodNetwork} alt="Логотип Фуд Нетворк" className={styles.image} /></li>
					<li className={styles.listItem}><img src={imageCosmopolitan} alt="Логотип Космополитан" className={styles.image} /></li>
					<li className={styles.listItem}><img src={imagePeople} alt="Логотип Пипл" className={styles.image} /></li>
					<li className={styles.listItem}><img src={imageBuzzFeed} alt="Логотип Баз Фид" className={styles.image} /></li>
					<li className={styles.listItem}><img src={imageFoodNetwork} alt="Логотип Фуд Нетворк" className={styles.image} /></li>
					<li className={styles.listItem}><img src={imageCosmopolitan} alt="Логотип Космополитан" className={styles.image} /></li>
				</ul>
			</section>
	)
}
