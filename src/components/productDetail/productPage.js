import ProductDetail from "./productDetail"
import Relative from "./relative"
import clsx from "clsx"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link, useSearchParams } from 'react-router-dom'
import { MyPagination } from "../pagination"

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