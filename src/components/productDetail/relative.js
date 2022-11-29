import { Product } from "../product"
import styles from "./relative.module.scss"

function Relative({ products }) {

    return (

        <>

            <h1 className={styles.relative}>Sản phẩm liên quan</h1>
            <Product 
                products={products}
            />
        </>
    )
}

export default Relative