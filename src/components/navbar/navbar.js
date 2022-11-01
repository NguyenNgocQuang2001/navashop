import styles from "./navbar.module.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Menubar from "./menubar";
import { Link } from 'react-router-dom'

function Navbar() {


    return (

        <div className={styles.navbar}>
            
            <Link 
                to="/home"
                className={styles.link}
            >
                <div className={styles.navbar__item}>Trang chủ</div>
            </Link>
            <Link 
                to="/product"
                className={styles.link}
            >
                <div className={styles.navbar__item}>
                    Sản phẩm
                    <Menubar />
                </div>
            </Link>
            <Link 
                to="/introduce"
                className={styles.link}
            >
                <div className={styles.navbar__item}>Giới thiệu</div>
            </Link>
            <Link 
                to="/contact"
                className={styles.link}
            >
                <div className={styles.navbar__item}>Liên hệ</div>
            </Link>
            <input className={styles.navbar_input} type="text" placeholder="Tìm kiếm" />
            <SearchIcon className={styles.navbar__search} />
            <Link 
                to="/bag"
                className={styles.link}
            >
                <ShoppingCartIcon className={styles.navbar__card_shopping} />
            </Link>
        </div>
    )
}

export default Navbar