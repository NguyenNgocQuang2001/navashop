import { Header } from "./components/header";
import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/home";
import { Profile } from "./components/profile";
import { ProductPage } from "./components/productDetail";



function App() {

	return (
		
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/product" element={<Home />} />
				<Route path="/selling" element={<Home />} />
				<Route path="/newproduct" element={<Home />} />
				<Route path="/sale" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/product/:id" element={<ProductPage /> } />
			</Routes>
		</>
	)
}

export default App;
