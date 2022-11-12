import {Bag} from "../bag";
import styles from "./profile.module.scss"
function Profile() {

    return (

        <div className={styles.profile}>
            <div className={styles.buttons}>
                <div className={styles.divbutton}><button>Thông tin tài khoản</button></div>
                <div className={styles.divbutton}><button>Giỏ hàng</button></div>
                <div className={styles.divbutton}><button>Đơn hàng</button></div>
                <div className={styles.divbutton}><button>Lịch sử mua hàng</button></div>
            </div>
            <Bag/>
        </div>
    )
}

export default Profile