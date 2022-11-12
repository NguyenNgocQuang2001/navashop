import { BagDeltail } from "../bagDetail"
import styles from "./profile.module.scss"

var content;
function Profile() {

    return (

        <div className={styles.profile}>
            <div className={styles.buttons}>
            
            <div className={styles.divbutton}>
            <button onClick={
                ()=>{
                    content=<BagDeltail/>
                }
            }>Thông tin tài khoản</button>
                </div>
            <div className={styles.divbutton}><button>Giỏ hàng</button></div>
            <div className={styles.divbutton}><button>Đơn hàng</button></div>
            <div className={styles.divbutton}><button>Lịch sử mua hàng</button></div>
            </div>
            <div className={styles.content}>
            <BagDeltail/>
            </div>
        </div>
    )
}

export default Profile