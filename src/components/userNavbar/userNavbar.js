import styles from "./userNavbar.module.scss"
import { Link } from "react-router-dom"

function UserNavbar() {

    return (

        <div className={styles.navbar__user}>

            <Link 
                to="/:id/profile"
            >
                <button
                    className={styles.navbar__item}
                >
                    Thông tin tài khoản
                </button>
            </Link>
            <Link 
                to="/:id/bag"
            >
                <button
                    className={styles.navbar__item}
                >
                    Giỏ hàng
                </button>
            </Link>
            <Link 
                to="/:id/order"
            >
                <button
                    className={styles.navbar__item}
                >
                    Đơn hàng
                </button>
            </Link>
            <Link 
                to="/:id/history"
            >
                <button
                    className={styles.navbar__item}
                >
                    Lịch sử mua hàng
                </button>
            </Link>
        </div>
    )
}

export default UserNavbar