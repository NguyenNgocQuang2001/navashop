import styles from "./navbar.module.scss"

function Menubar() {

    return (

        <div className={styles.navbar__menubar}>
                <div className={styles.menubar__item}>
                    <h3>THOI TRANG NAM</h3>
                    <li className={styles.item}>Ao khoac nam</li>
                    <li className={styles.item}>Ao thun nam</li>
                    <li className={styles.item}>Ao so mi nam</li>
                    <li className={styles.item}>Ao vet, blazer</li>
                    <li className={styles.item}>Quan jeans</li>
                </div>
                <div className={styles.menubar__item}>
                    <h3>THOI TRANG NU</h3>
                    <li className={styles.item}>Dam, vay</li>
                    <li className={styles.item}>Ao nu</li>
                    <li className={styles.item}>Quan nu</li>
                    <li className={styles.item}>Do ngu</li>
                    <li className={styles.item}>Chan vay</li>
                </div>
                <div className={styles.menubar__item}>
                    <h3>PHU KIEN</h3>
                    <li className={styles.item}>Mu</li>
                    <li className={styles.item}>Kinh</li>
                    <li className={styles.item}>Dong ho</li>
                    <li className={styles.item}>That lung</li>
                    <li className={styles.item}>Giay</li>
                </div>  
        </div>
    )
}

export default Menubar