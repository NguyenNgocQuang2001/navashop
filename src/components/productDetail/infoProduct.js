import { useState } from "react"
import styles from "./productDetail.module.scss"

function InfoProduct({ product }) {

    const [cost, setCost] = useState(0)

    return(

        <div className={styles.info}>
                <h2>{product.name}</h2>
                <p>
                    {product.sale}.000d &nbsp;&nbsp;&nbsp;
                    <span
                        className={styles.sale}
                    >{product.price}.000d</span>
                </p>
                <br/>
                <p>
                    {product.describe}
                </p>
                <div className={styles.cost}>

                    <p>
                        So luong
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                            type="number"
                            value={cost}
                            className={styles.input}
                            onChange={(e) => setCost(e.target.value >= 0 ? e.target.value : 0)}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>
                            {
                                `${cost * 200}.000d`
                            }
                        </span>
                    </p>
                    <br/>
                    <button
                        className={styles.bag}
                    >Them vao gio hang</button>
                </div>
        </div>
    )
}

export default InfoProduct