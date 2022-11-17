import { Profile } from "../profile"
import { UserNavbar } from "../userNavbar"
import styles from "./userProfile.module.scss"

function UserProfile() {

    return (

        <div
            className={styles.user__profile}
        >
            <UserNavbar />
            <Profile />
        </div>
    )
}

export default UserProfile