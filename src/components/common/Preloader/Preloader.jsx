import styles from './Preloader.module.css'
import preloader from './../../../assets/images/Fidget-spinner.gif'

const Preloader = (props) => {
	return (
		<div className={styles.block}>
			<img src={preloader} alt=""/>
		</div>
	)
}

export default Preloader