import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/pages/Layout';
import PageNotFound from '@/pages/PageNotFound';
import Pets from '@/pages/Pets';

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Layout />}
				>
					<Route
						index
						element={<Pets />}
					/>
					<Route
						path='*'
						element={<PageNotFound />}
					/>
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRoutes;
