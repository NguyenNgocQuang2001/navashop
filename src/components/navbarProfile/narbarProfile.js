import styles from "./navbarProfile.module.scss"


function NavbarProfile() {

    return (

        <div className={styles.navbar__profile}>

            <div className={styles.navbar__item}>
                <div className={styles.divbutton}>
                    <button>
                        Thông tin tài khoản
                    </button>
                </div>
                <div className={styles.divbutton}>
                    <button>
                        Giỏ hàng
                    </button>
                </div>
                <div className={styles.divbutton}>
                    <button>
                        Đơn hàng
                    </button>
                </div>
                <div className={styles.divbutton}>
                    <button>
                        Lịch sử mua hàng
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavbarProfile