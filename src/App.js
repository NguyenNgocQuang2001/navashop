<<<<<<< HEAD
import { Header } from './components/header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { ProductPage } from './components/productDetail';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { UserBag } from './components/userBag';
import { UserHistory } from './components/userHistory';
import { UserOrder } from './components/useOrder';
import { UserProfile } from './components/userProfile';
import { AdminProfile } from './components/adminProfile';
import { AdminProduct } from './components/adminProduct';
import { AdminCustomer } from './components/adminCustomer';
import { AdminStatistical } from './components/adminStatistical';
import { Login } from './components/login';
import { Signup } from './components/signup';

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
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/:id/bag" element={<UserBag />} />
                <Route path="/:id/profile" element={<UserProfile />} />
                <Route path="/:id/order" element={<UserOrder />} />
                <Route path="/:id/history" element={<UserHistory />} />
                <Route path="/admin/profile" element={<AdminProfile />} />
                <Route path="/admin/addproduct" element={<AdminProduct />} />
                <Route path="/admin/customers" element={<AdminCustomer />} />
                <Route path="/admin/statistical" element={<AdminStatistical />} />
            </Routes>
            <Footer />
        </>
    );
=======
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
import { AdminCustomer } from "./components/adminCustomer";
import { AdminStatistical } from "./components/adminStatistical";
import { Introduce } from "./components/introduce";

function App() {

	
	return (
		
		<>
			<Header />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/product" element={<Home />} />
				<Route path="/introduce" element={<Introduce />} />
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
				<Route path="/admin/customers" element={<AdminCustomer /> } />
				<Route path="/admin/statistical" element={<AdminStatistical /> } />
			</Routes>
			<Footer />
		</>
	)
>>>>>>> 58dca5f799a037c109f45a70216da41b07bd8dfe
}

export default App;
