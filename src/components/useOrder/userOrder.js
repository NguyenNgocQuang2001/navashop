import styles from "./userOrder.module.scss"
import { UserNavbar } from "../userNavbar"
import { Order } from "../order"

function UserOrder() {

    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    orders.forEach((element, index) => {
        
        element.index = index
        if (element.confirm !== undefined && element.confirm !== null) {

            if (element.confirm !== false) {

                element.confirm = true
            }
        } else {

            element.confirm = true
        }
    })
    localStorage.setItem('orders', JSON.stringify(orders))
    const show = orders.length > 0 ? true : false
    return (

        <div
            className={styles.user__order}
        >
            <UserNavbar />
            {

                show && <div 
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
            }
            {

                !show && <div 
                    className={styles.not__order}
                >
                    <h1>Không có đơn hàng nào!!!</h1>
                </div>
            }
        </div>
    )
}

export default UserOrder