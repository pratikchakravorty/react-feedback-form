import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Feedback from './scenes/Feedback';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Feedback />
			</Provider>
		);
	}
}

export default App;
