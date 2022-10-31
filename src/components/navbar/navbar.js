import styles from "./navbar.module.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Menubar from "./menubar";

function Navbar() {


    return (

        <div className={styles.navbar}>
            
            <div className={styles.navbar__item}>Trang chu</div>
            <div className={styles.navbar__item}>
                San pham
                <Menubar />
            </div>
            <div className={styles.navbar__item}>Gioi thieu</div>
            <div className={styles.navbar__item}>Lien he</div>
            <input className={styles.navbar_input} type="text" placeholder="Tim kiem" />
            <SearchIcon className={styles.navbar__search} />
            <ShoppingCartIcon className={styles.navbar__card_shopping} />
        </div>
    )
}

export default Navbar