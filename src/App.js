import { Header } from "./components/header";
import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/home";
import { ProductPage } from "./components/productDetail";
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { UserBag } from "./components/userBag";
import { UserHistory } from "./components/userHistory";
import { UserOrder } from "./components/useOrder";
import { UserProfile } from "./components/userProfile";
import { AdminProfile } from "./components/adminProfile";
import { AdminProduct } from "./components/adminProduct";

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
				<Route path="/:id/bag" element={<UserBag /> } />
				<Route path="/:id/profile" element={<UserProfile /> } />
				<Route path="/:id/order" element={<UserOrder /> } />
				<Route path="/:id/history" element={<UserHistory /> } />
				<Route path="/admin/profile" element={<AdminProfile /> } />
				<Route path="/admin/addproduct" element={<AdminProduct /> } />
			</Routes>
			<Footer />
		</>
	)
}

export default App;
