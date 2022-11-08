import NavbarProfile from "../navbarProfile/narbarProfile"
import styles from "./pageProfile.module.scss"


function PageProfile() {

    return (

        <div 
            className={styles.page__profile}
        >
            <NavbarProfile />
        </div>
    )
}

export default PageProfile