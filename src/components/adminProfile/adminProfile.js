import { Profile } from "../profile"
import { AdminNavbar } from "../adminNavbar"
import styles from "./adminProfile.module.scss"

function UserProfile() {

    return (

        <div
            className={styles.admin__profile}
        >
            <AdminNavbar />
            <Profile />
        </div>
    )
}

export default UserProfile