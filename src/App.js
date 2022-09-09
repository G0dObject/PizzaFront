import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./scss/app.scss";
function App() {
	localStorage.setItem("followers", "99");
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
