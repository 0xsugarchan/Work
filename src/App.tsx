import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import PrivacyPolicy from "./screens/PrivacyPolicy";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
