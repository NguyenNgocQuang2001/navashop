import styles from "./userHistory.module.scss"
import { UserNavbar } from "../userNavbar"
import { History } from "../history"


function UserHistory() {

    const history = JSON.parse(localStorage.getItem("orders") || "[]");
    return (

        <div
            className={styles.user__history}
        >
            <UserNavbar />
            <div 
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
        </div>
    )
}

export default UserHistory