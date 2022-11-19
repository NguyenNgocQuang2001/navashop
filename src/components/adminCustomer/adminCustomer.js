import { AdminNavbar } from "../adminNavbar"
import styles from "./adminCustomer.module.scss"

function AdminCustomer() {

    return (

        <div
            className={styles.admin__customer}
        >
            <AdminNavbar />
        </div>
    )
}

export default AdminCustomer