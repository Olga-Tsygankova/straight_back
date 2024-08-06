import styles from './styles.module.css';
import Logo from '../../assets/Header/logo.svg'

export const Header = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.wrapperContent}>
				<nav className={styles.navigation}>
					<a href="" className={styles.navigationItem}>menu</a>
					<a href="" className={styles.navigationItem}>find us</a>
				</nav>
				<a href="" className={styles.logo}>
					<img src={Logo} alt="" className={styles.logoImage} />
				</a>
				<button className={styles.button}>CONTACT US</button>
			</div>
		</section>
	)
}
