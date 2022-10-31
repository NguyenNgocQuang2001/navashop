import styles from "./header.module.scss"

function Header() {

    return (

        <div className={styles.header}>

            <img className={styles.logo} src="/logo-nava.png" height={150} />
            <img className={styles.avatar} src="/chohusky.jpg"/>
        </div>
    )
}

export default Header