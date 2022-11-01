import styles from "./navbar.module.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Menubar from "./menubar";

function Navbar() {


    return (

        <div className={styles.navbar}>
            
            <div className={styles.navbar__item}>Trang chủ</div>
            <div className={styles.navbar__item}>
                Sản phẩm
                <Menubar />
            </div>
            <div className={styles.navbar__item}>Giới thiệu</div>
            <div className={styles.navbar__item}>Liên hệ</div>
            <input className={styles.navbar_input} type="text" placeholder="Tìm kiếm" />
            <SearchIcon className={styles.navbar__search} />
            <ShoppingCartIcon className={styles.navbar__card_shopping} />
        </div>
    )
}

export default Navbar