import { AdminNavbar } from "../adminNavbar"
import AdminOrder from "../adminOrder/adminOrder"
import styles from "./adminManagerOrder.module.scss"


function AdminManagerOrder() {

    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    orders.forEach((element, index) => {
        
        element.index = index
    })
    localStorage.setItem('orders', JSON.stringify(orders))
    const show = orders.length > 0 ? true : false
    return (

        <div
            className={styles.manager__order}
        >
            <AdminNavbar />
            {
                show && <div 
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

export default AdminManagerOrder