import styles from "./adminHistory.module.scss"
import { History } from "../historyOrder"
import { AdminNavbar } from "../adminNavbar";


function AdminHistory() {

    const history = JSON.parse(localStorage.getItem("history") || "[]");
    const show = history.length > 0 ? true : false
    return (

        <div
            className={styles.admin__history}
        >
            <AdminNavbar />
            {
                show && <div 
                    className={styles.history}
                >
                    {
                        history.map((item, index) => {

                            return (
                                <History

                                    history={item}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            }
            {
                !show && <div 
                    className={styles.not__history}
                >
                    <h1>Không có đơn hàng nào!!!</h1>
                </div>
            }
        </div>
    )
}

export default AdminHistory