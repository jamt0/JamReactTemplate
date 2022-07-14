import { Routes, Route, BrowserRouter } from 'react-router-dom';
import routes from 'routes';

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, index) => (
					<Route path={route.path} element={<route.component/>} key={index} />
				))}
			</Routes>
		</BrowserRouter>
	);
};

const App = () => {
	return (
		<RoutesApp/>
	);
};

export default App;
