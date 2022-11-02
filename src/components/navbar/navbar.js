import styles from "./navbar.module.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Menubar from "./menubar";
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useState } from "react";

function Navbar() {

    const [page, setPage] = useState(0)

    return (

        <div className={styles.navbar}>
            
            <Link 
                to="/home"
                className={styles.link}
            >
                <div 
                    className={clsx(styles.navbar__item, {

                        [styles.active]: page == 1
                    })}
                    onClick={() => setPage(1)}
                >Trang chủ</div>
            </Link>
            <Link 
                to="/product"
                className={styles.link}
            >
                <div 
                    className={clsx(styles.navbar__item, {

                        [styles.active]: page == 2
                    })}
                    onClick={() => setPage(2)}
                >
                    Sản phẩm
                    <Menubar />
                </div>
            </Link>
            <Link 
                to="/introduce"
                className={styles.link}
            >
                <div 
                    className={clsx(styles.navbar__item, {

                        [styles.active]: page == 3
                    })}
                    onClick={() => setPage(3)}
                >
                    Giới thiệu
                </div>
            </Link>
            <Link 
                to="/contact"
                className={styles.link}
            >
                <div 
                    className={clsx(styles.navbar__item, {

                        [styles.active]: page == 4
                    })}
                    onClick={() => setPage(4)}
                >
                    Liên hệ
                </div>
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