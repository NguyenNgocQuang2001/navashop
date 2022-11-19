import { AdminNavbar } from "../adminNavbar"
import styles from "./adminProduct.module.scss"
import { AddProduct } from "../addProduct"

function UserProduct() {

    return (

        <div
            className={styles.admin__product}
        >
            <AdminNavbar />
            <AddProduct />
        </div>
    )
}

export default UserProduct