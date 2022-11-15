import styles from "./userNavbar.module.scss"
import { Link } from "react-router-dom"
import clsx from "clsx"
import { useState } from "react"



function UserNavbar() {

    var params = window.location.pathname.split('/')
    if (params.length > 2) {
    
        params = params[2].trim()
        if (params === "profile") {
    
            params = 1
        } else if (params === "bag") {
        
            params = 2
        } else if(params === "order") {
        
            params = 3
        } else if (params === "history") {
        
            params = 4
        }
    }
    const [param, setParam] = useState(params)
    
    return (

        <div className={styles.navbar__user}>

            <Link 
                to="/:id/profile"
            >
                <button
                    className={clsx(styles.navbar__item, {
                                
                        [styles.active]: param === 1
                    })}
                    onClick={() => setParam(1)}
                >
                    Thông tin tài khoản
                </button>
            </Link>
            <Link 
                to="/:id/bag"
            >
                <button
                    className={clsx(styles.navbar__item, {
                                
                        [styles.active]: param === 2
                    })}
                    onClick={() => setParam(2)}
                >
                    Giỏ hàng
                </button>
            </Link>
            <Link 
                to="/:id/order"
            >
                <button
                    className={clsx(styles.navbar__item, {
                                
                        [styles.active]: param === 3
                    })}
                    onClick={() => setParam(3)}
                >
                    Đơn hàng
                </button>
            </Link>
            <Link 
                to="/:id/history"
            >
                <button
                    className={clsx(styles.navbar__item, {
                                
                        [styles.active]: param === 4
                    })}
                    onClick={() => setParam(4)}
                >
                    Lịch sử mua hàng
                </button>
            </Link>
        </div>
    )
}

export default UserNavbar