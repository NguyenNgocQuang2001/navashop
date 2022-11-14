import Filter from "../filter/filter";
import { Product } from "../product";
import { Slidebar } from "../slidebar";


function Home() {

    return (

        <>
            <Slidebar />
            <Filter />
            <Product />
        </>
    )
}

export default Home