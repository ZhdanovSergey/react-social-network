import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
	let div = document.createElement('div');
	ReactDOM.render(<App/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
