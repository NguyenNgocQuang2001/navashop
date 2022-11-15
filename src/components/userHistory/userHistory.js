import styles from "./userHistory.module.scss"
import { UserNavbar } from "../userNavbar"
import { History } from "../history"

const history = [
    0, 0, 0, 0
]


function UserHistory() {

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