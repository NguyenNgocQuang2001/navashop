import { useState } from "react"
import styles from "./productDetail.module.scss"

function InfoProduct() {

    const [cost, setCost] = useState(0)

    return(

        <div className={styles.info}>
                <h2>Áo Chery thời trang</h2>
                <p>
                    200.000d &nbsp;&nbsp;&nbsp;
                    <span
                        className={styles.sale}
                    >300.000d</span>
                </p>
                <br/>
                <p>
                    - Áo Chery thời trang thiết kế trẻ trung, hiện đại mang đến cho bạn gái phong cách năng động nhưng không kém phần nữ tính.
                </p>
                <p>
                    - Chất liệu vải tuyết mưa thông thoáng, thấm hút mồ hôi tốt, tạo cảm giác thoải mái cho người mặc.
                </p>
                <p>
                    - Với chiếc đầm này, bạn có thể mặc bất cứ khi nào: tới công sở, dạo phố, dã ngoại…
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