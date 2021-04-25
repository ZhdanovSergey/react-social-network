import DialogsList from './DialogsList'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
	dialogsList: state.messagesPage.dialogsList,
})

const DialogsListContainer = connect(mapStateToProps)(DialogsList);

export default DialogsListContainer