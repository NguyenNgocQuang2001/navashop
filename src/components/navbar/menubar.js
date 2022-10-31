import styles from "./navbar.module.scss"
import styleMenubar from "./menubar.module.scss"

function Menubar() {

    return (

        <div className={styles.navbar__menubar}>
                <div className={styleMenubar.menubar__item}>
                    <h3>THOI TRANG NAM</h3>
                    <li className={styleMenubar.item}>Ao khoac nam</li>
                    <li className={styleMenubar.item}>Ao thun nam</li>
                    <li className={styleMenubar.item}>Ao so mi nam</li>
                    <li className={styleMenubar.item}>Ao vet, blazer</li>
                    <li className={styleMenubar.item}>Quan jeans</li>
                </div>
                <div className={styleMenubar.menubar__item}>
                    <h3>THOI TRANG NU</h3>
                    <li className={styleMenubar.item}>Dam, vay</li>
                    <li className={styleMenubar.item}>Ao nu</li>
                    <li className={styleMenubar.item}>Quan nu</li>
                    <li className={styleMenubar.item}>Do ngu</li>
                    <li className={styleMenubar.item}>Chan vay</li>
                </div>
                <div className={styleMenubar.menubar__item}>
                    <h3>PHU KIEN</h3>
                    <li className={styleMenubar.item}>Mu</li>
                    <li className={styleMenubar.item}>Kinh</li>
                    <li className={styleMenubar.item}>Dong ho</li>
                    <li className={styleMenubar.item}>That lung</li>
                    <li className={styleMenubar.item}>Giay</li>
                </div>  
        </div>
    )
}

export default Menubar