import styles from "./bag.module.scss"
import { BagDeltail } from "../bagDetail"
function Bag() {

    return (

        <div className={styles.bag}>
            <BagDeltail/>
        </div>
    )
}

export default Bag