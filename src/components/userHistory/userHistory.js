import styles from "./userHistory.module.scss"
import { UserNavbar } from "../userNavbar"
import { History } from "../history"


function UserHistory() {

    const history = JSON.parse(localStorage.getItem("history") || "[]");
    const show = history.length > 0 ? true : false
    return (

        <div
            className={styles.user__history}
        >
            <UserNavbar />
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
                    <h1>Bạn chưa mua đơn hàng nào!!!</h1>
                </div>
            }
        </div>
    )
}

export default UserHistory