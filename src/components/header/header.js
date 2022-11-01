import { Link } from 'react-router-dom'
import styles from "./header.module.scss"

function Header() {

    return (

        <div className={styles.header}>

            <Link 
                to="/"
                className={styles.link}
            >
                <img className={styles.logo} src="/logo-nava.png" alt="no image" />
            </Link>
            <Link 
                to="/profile"
                className={styles.link}
            >
                <img className={styles.avatar} src="/chohusky.jpg" alt="no images" />
            </Link>
        </div>
    )
}

export default Header