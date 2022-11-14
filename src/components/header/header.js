import { Link } from 'react-router-dom'
import styles from "./header.module.scss"

function Header() {

    return (

        <div className={styles.header}>

            <Link 
                to="/"
                className={styles.link}
            >
                <img className={styles.logo} src="/logo-nava.png" alt="not found" />
            </Link>
            <Link 
                to="/user/profile"
                className={styles.link}
            >
                <img className={styles.avatar} src="/chohusky.jpg" alt="not found" />
            </Link>
        </div>
    )
}

export default Header