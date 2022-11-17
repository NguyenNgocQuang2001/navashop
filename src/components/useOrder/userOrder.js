import styles from "./userOrder.module.scss"
import { UserNavbar } from "../userNavbar"
import { Order } from "../order"

const order = [
    0, 0, 0, 0
]


function UserOrder() {

    return (

        <div
            className={styles.user__order}
        >
            <UserNavbar />
            <div 
                className={styles.order}
            >
                {
                    order.map((item, index) => {

                        return (
                            <Order 

                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserOrder