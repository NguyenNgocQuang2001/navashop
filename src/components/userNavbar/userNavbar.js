import styles from "./userNavbar.module.scss"

function UserNavbar() {

    return (

        <div className={styles.navbar__user}>

            <div className={styles.buttons}>
            
                <div className={styles.divbutton}>
                <button >Thông tin tài khoản</button>
                    </div>
                <div className={styles.divbutton}><button>Giỏ hàng</button></div>
                <div className={styles.divbutton}><button>Đơn hàng</button></div>
                <div className={styles.divbutton}><button>Lịch sử mua hàng</button></div>
                </div>
                <div className={styles.content}>
            </div>
        </div>
    )
}

export default UserNavbar