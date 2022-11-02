import { Header } from "./components/header";
import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/home";
import { Profile } from "./components/profile";



function App() {

	return (
		
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/product" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	)
}

export default App;
