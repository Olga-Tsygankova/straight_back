import styles from './styles.module.css'
import {Changer} from '../../components/Introduce/Changer';
import {Featured} from '../../components/Introduce/Featured'

export const Introduce = () => {
	return (
			<section className={styles.wrapper}>
				<h1 className={styles.title}>Freshly Churned Every Day.</h1>
				<Changer />
				<Featured />
			</section>
	)
}
