import SidebarWrapper from './components/Sidebar/SidebarWrapper';
// import CartWrapper from './components/Cart/CartWrapper';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/app.scss';
function App() {
	return (
		<>
			<SidebarWrapper />
			{/* <CartWrapper /> */}
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
