import styles from "./userOrder.module.scss"
import { UserNavbar } from "../userNavbar"
import { Order } from "../order"

function UserOrder() {

    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    orders.forEach((element, index) => {
        
        element.index = index
        element.confirm = true
    })
    localStorage.setItem('orders', JSON.stringify(orders))
    return (

        <div
            className={styles.user__order}
        >
            <UserNavbar />
            <div 
                className={styles.order}
            >
                {
                    orders.map((item, index) => {

                        return (
                            <Order

                                order={item}
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