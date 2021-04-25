import el from './DialogsList.module.css'
import {NavLink} from 'react-router-dom'

const DialogsList = (props) => {
	return (
		<div className={`${el.block} ${props.className}`}>
			<ul className={el.list}>
				{props.dialogsList.map((item) => (
					<li className={el.item}>
						<NavLink to={"/messages/" + item.id} className={el.link} activeClassName={el.active}>{item.name}</NavLink>
					</li>
				))}
			</ul>
  	</div>
	)
}

export default DialogsList