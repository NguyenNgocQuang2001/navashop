import Filter from "../filter/filter";
import { Navbar } from "../navbar";
import { Product } from "../product";
import { Slidebar } from "../slidebar";


function Home() {

    return (

        <>
            <Navbar />
            <Slidebar />
            <Filter />
            <Product />
        </>
    )
}

export default Home