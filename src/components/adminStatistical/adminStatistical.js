import { AdminNavbar } from "../adminNavbar"
import { Statistical } from "../statistical"
import styles from "./adminStatistical.module.scss"

function AdminStatistical() {

    return (

        <div
            className={styles.admin__statistical}
        >
            <AdminNavbar />
            <Statistical />
        </div>
    )
}

export default AdminStatistical