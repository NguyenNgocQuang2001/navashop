import ProductDetail from "./productDetail"
import Relative from "./relative"

function ProductPage({ products }) {

    return (
        <>
            <ProductDetail

                products={products}
            />
            <Relative
                products={products}
            />
        </>
    )
}

export default ProductPage