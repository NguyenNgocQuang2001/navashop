import styles from "./navbar.module.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Menubar from "./menubar";
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {

    const [page, setPage] = useState(0)
    const acc = JSON.parse(localStorage.getItem('user'))
    let link = "/home"
    if (localStorage.getItem('login') === "1") {

        link =`/${acc.user + "369"}/bag`
    } else if (localStorage.getItem('login') === "2") {

        link = "/admin/managerorder"
    } else {

        link = "/home"
    }

    return (

        <div className={styles.navbar}>
            
            <Link 
                to="/home"
                className={styles.link}
            >
                <div 
                    className={clsx(styles.navbar__item, {

                        [styles.active]: page === 1
                    })}
                    onClick={() => setPage(1)}
                >Trang chủ</div>
            </Link>
            <Link 
                to="/products"
                className={styles.link}
            >
                <div 
                    className={clsx(styles.navbar__item, {

                        [styles.active]: page === 2
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

                        [styles.active]: page === 3
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

                        [styles.active]: page === 4
                    })}
                    onClick={() => setPage(4)}
                >
                    Liên hệ
                </div>
            </Link>
            <input className={styles.navbar_input} type="text" placeholder="Tìm kiếm" />
            <SearchIcon className={styles.navbar__search} />
            <Link
                to={link}
                className={styles.link}
                onClick={() => {

                    if (localStorage.getItem('login') !== "1" && localStorage.getItem('login') !== "2") {

                        toast("Bạn chưa đăng nhập!!!")
                    }
                }}
            >
                <ShoppingCartIcon className={styles.navbar__card_shopping} />
            </Link>
            <ToastContainer />
        </div>
    )
}

export default Navbar