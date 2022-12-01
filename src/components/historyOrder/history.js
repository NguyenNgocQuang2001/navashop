import styles from "./history.module.scss"
import { Link } from "react-router-dom"

function History({ history }) {

    return (

        <div
            className={styles.history}
        >
            <div
                className={styles.infor__history}
            >
                <div
                    className={styles.info__order}
                >
                    Mã đơn hàng : {history.orderID}
                </div>
                <div
                    className={styles.info__order}
                >
                    Ngày đặt hàng : {history.orderDate}
                </div>
                <div
                    className={styles.info__order}
                >
                    Ngày giao hàng : {history.orderShipped}
                </div>
                <div
                    className={styles.info__order}
                >
                    Người đặt hàng : {history.user}
                </div>
                <div
                    className={styles.info__order}
                >
                    Số  diện thoại : {history.phone}
                </div>
                <div
                    className={styles.info__order}
                >
                    Địa chỉ : {history.address}
                </div>
                <div
                    className={styles.info__order}
                >
                    Tổng giá trị đơn hàng : {

                        history.products.reduce((total, value, index) => {

                            return total + value.total
                        }, 0)
                    }.000đ
                </div>
            </div>
            {
                history.products.map((item, index) => {

                    return (

                        <div 
                            className={styles.history__item}
                            key={index}
                        >
                            <Link
                                to={`/product/${item.name}`}
                            >
                                <img
                                    src={`/Image/${item.link1}`}
                                    alt="not found"
                                    className={styles.image}
                                />
                            </Link>
                            <div
                                className={styles.info}
                            >
                                <div
                                    className={styles.name}
                                >
                                    {item.name}
                                </div>
                                <div
                                    className={styles.quantity}
                                >
                                    Số  lượng  &nbsp; : &nbsp; {item.count}
                                </div>
                                <div
                                    className={styles.cost}
                                >
                                    Giá tiền &nbsp; : &nbsp; {item.sale * item.count}.000đ
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default History