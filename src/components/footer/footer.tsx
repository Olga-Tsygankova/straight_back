import styles from './styles.module.css'
import { FooterTitle } from '../../components/footer/footerTitle'
import { FooterPlaces } from '../../components/footer/footerPlaces'

export const Footer = () => {
	return (
		<section className={styles.footer}>
			<div className={styles.wrapper}>
				<FooterTitle />
				<FooterPlaces />
				<p>© 2022 by The Magic Slab.</p>
			</div>
		</section>
	)
}
