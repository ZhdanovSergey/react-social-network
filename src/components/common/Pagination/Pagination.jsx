import {useState} from 'react'
import {Link} from 'react-router-dom'
import styles from './Pagination.module.css'


let Pagination = ({className, pageSize, currentPage, totalItemsCount, portionSize, changePage, url}) => {

	let pagesCount = Math.ceil( totalItemsCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	let portionsCount = Math.ceil(pagesCount, portionSize);
	let [portionNumber, setPortionNumber] = useState(Math.floor(currentPage / portionSize) + 1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div className={`${styles.block} ${className}`}>
			{ portionNumber > 1 &&
				<button className={styles.button} onClick={ () => setPortionNumber(portionNumber - 1) }>PREV</button>
			}
			<ul className={styles.list}>
				{
					pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map(p => (
						<li className={`${styles.item}`}>
							<Link
								to={`${url}?page=${p}`}
								className={`${styles.link} ${(p === currentPage) ? styles.active : ''}`}
								onClick={ () => changePage(p, pageSize) }
							>{p}</Link>
						</li>
					))
				}
			</ul>
			{ portionNumber < portionsCount &&
				<button className={styles.button} onClick={ () => setPortionNumber(portionNumber + 1) }>NEXT</button>
			}
		</div>
	)
}

export default Pagination