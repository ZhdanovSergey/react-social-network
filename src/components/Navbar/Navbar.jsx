import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import el from './Navbar.module.css'


let Navbar = (props) => {
	return (
		<div className={`${el.block} ${props.className}`}>
      <ul>
	      {props.navList.map((item) => {return(
	      	<li>
	      		<NavLink to={item.url}
	      						 activeClassName={el.active}>
	      						 {item.text}
	      		</NavLink>
	      	</li>
	      )})}
      </ul>
    </div>
	)
}

const mstp = (state) => ({
	navList: state.navbar.navList,
})

export default connect(mstp, null)(Navbar)