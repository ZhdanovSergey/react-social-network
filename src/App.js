import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className='page'>
	    <div className="container page__container">
	    	<Header/>
	    	<Sidebar/>
	    	<Profile/>
	    </div>
    </div>
  );
}

export default App;
