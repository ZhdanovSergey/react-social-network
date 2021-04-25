import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider, connect} from 'react-redux'
import store from './redux/redux-store.js'
import {initialize} from './redux/app-reducer'
import styles from './App.module.css';
import Preloader from './components/common/Preloader/Preloader'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
let Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'))
let Users = React.lazy(() => import('./components/Users/Users'))


class App extends React.Component {

	componentDidMount = () => {
		this.props.initialize()
	}

	render = () => {

		if (!this.props.initialized) {
			return <Preloader/>
		}

		return (
	  	<div className={styles.block}>
		    <div className={styles.container}>
		    	<Header className={styles.header}/>
		    	<Navbar className={styles.navbar}/>
		    	<Route path="/profile/:userId?" render={() => (
		    		<Profile className={styles.main}/>
		    	)}/>
		    	<Route path="/messages" render={() => (
		    		<React.Suspense fallback={<Preloader/>}>
		    			<Dialogs className={styles.main} />
		    		</React.Suspense>
		    	)}/>
		    	<Route path="/users" render={() => (
		    		<React.Suspense fallback={<Preloader/>}>
		    			<Users className={styles.main}/>
		    		</React.Suspense>
		    	)}/>
		    	<Route path="/login" render={() => (
		    		<Login className={styles.main}/>
		    	)}/>
		    </div>
	    </div>
	  )
	}
}

let mstp = (state) => ({
	initialized: state.app.initialized,
})

let mdtp = {
	initialize: initialize,
}

let AppContainer = connect(mstp, mdtp)(App);

let AppWithRouter = (props) => (
	<BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
  </BrowserRouter>
)

export default AppWithRouter;