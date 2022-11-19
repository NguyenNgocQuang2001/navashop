import styles from "./adminNavbar.module.scss"
import { Link } from "react-router-dom"
import clsx from "clsx"
import { useState } from "react"



function AdminNavbar() {

    var params = window.location.pathname.split('/')
    if (params.length > 2) {
    
        params = params[2].trim()
        if (params === "profile") {
    
            params = 1
        } else if (params === "addproduct") {
        
            params = 2
        } else if(params === "customers") {
        
            params = 3
        } else if (params === "statistical") {
        
            params = 4
        }
    }
    const [param, setParam] = useState(params)
    
    return (

        <div className={styles.navbar__admin}>

            <Link 
                to="/admin/profile"
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
                to="/admin/addproduct"
            >
                <button
                    className={clsx(styles.navbar__item, {
                                
                        [styles.active]: param === 2
                    })}
                    onClick={() => setParam(2)}
                >
                    Them san pham
                </button>
            </Link>
            <Link 
                to="/admin/customers"
            >
                <button
                    className={clsx(styles.navbar__item, {
                                
                        [styles.active]: param === 3
                    })}
                    onClick={() => setParam(3)}
                >
                    Khach hang
                </button>
            </Link>
            <Link 
                to="/admin/statistical"
            >
                <button
                    className={clsx(styles.navbar__item, {
                                
                        [styles.active]: param === 4
                    })}
                    onClick={() => setParam(4)}
                >
                    Thong ke
                </button>
            </Link>
        </div>
    )
}

export default AdminNavbar