import el from './Dialogs.module.css'
import DialogsListContainer from './DialogsList/DialogsListContainer'
import DialogsMessages from './DialogsMessages/DialogsMessages'
import withAuthRedirect from './../../hoc/withAuthRedirect'

const Dialogs = (props) => {
	return (
		<div className={`${el.block} ${props.className}`}>
			<DialogsListContainer className={el.list} />
			<DialogsMessages className={el.messages} />
  	</div>
	)
}

export default withAuthRedirect(Dialogs)