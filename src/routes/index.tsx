import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UsernameProvider } from '@/contexts/usernameContext';
import Layout from '@/pages/Layout';
import PageNotFound from '@/pages/PageNotFound';
import Pets from '@/pages/Pets';
import FloatingSearch from '@/components/FloatingSearch';

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
						element={
							<UsernameProvider>
								<FloatingSearch />
								<Pets />
							</UsernameProvider>
						}
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
