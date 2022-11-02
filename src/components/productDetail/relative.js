import { Product } from "../product"
import styles from "./relative.module.scss"

function Relative() {

    return (

        <>

            <h1 className={styles.relative}>San pham lien quan</h1>
            <Product />
        </>
    )
}

export default Relative