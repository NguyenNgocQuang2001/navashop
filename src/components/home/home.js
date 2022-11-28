import Filter from "../filter/filter";
import { Product } from "../product";
import { Slidebar } from "../slidebar";


function Home({ products }) {

    return (

        <>
            <Slidebar />
            <Filter />
            <Product 

                products={products}
            />
        </>
    )
}

export default Home