import { Link } from 'react-router-dom'
import styles from "./header.module.scss"

function Header() {

    return (

        <div className={styles.header}>

            <Link to="/home">
                <img className={styles.logo} src="/logo-nava.png" alt="no image" />
            </Link>
            <img className={styles.avatar} src="/chohusky.jpg" alt="no images" />
        </div>
    )
}

export default Header