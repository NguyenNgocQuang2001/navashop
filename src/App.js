import Filter from "./components/filter/filter";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Product } from "./components/product";
import { Slidebar } from "./components/slidebar";


function App() {

	return (
		
		<>
			<Header />
			<Navbar />
			<Slidebar />
			<Filter />
			<Product />
		</>
	)
}

export default App;
