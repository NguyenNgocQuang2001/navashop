import { Header } from "./components/header";
import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/home";
import { Profile } from "./components/profile";
import { ProductPage } from "./components/productDetail";
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import {Bag} from "./components/bag";


function App() {

	return (
		
		<>
			<Header />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/product" element={<Home />} />
				<Route path="/selling" element={<Home />} />
				<Route path="/newproduct" element={<Home />} />
				<Route path="/sale" element={<Home />} />
				<Route path="/product/:id" element={<ProductPage /> } />
			</Routes>
			<Footer />
		</>
	)
}

export default App;
