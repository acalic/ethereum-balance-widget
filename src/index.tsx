import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';

import "./styles/main.scss";

export function App() {
	return (
		<LocationProvider>
			<main className='main-wrapper'>
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
