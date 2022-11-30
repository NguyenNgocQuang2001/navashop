import { AdminNavbar } from "../adminNavbar"
import AdminOrder from "../adminOrder/adminOrder"
import styles from "./adminManagerOrder.module.scss"


function AdminManagerOrder() {

    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    orders.forEach((element, index) => {
        
        element.index = index
    })
    localStorage.setItem('orders', JSON.stringify(orders))
    return (

        <div
            className={styles.manager__order}
        >
            <AdminNavbar />
            <div 
                className={styles.order}
            >
                {
                    orders.map((item, index) => {

                        return (
                            <AdminOrder 

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

export default AdminManagerOrder