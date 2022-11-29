import styles from "./order.module.scss"
import { Link } from "react-router-dom"

function Order({ order, index }) {

    return (

        <div
            className={styles.order}
        >
            <div
                className={styles.infor__order}
            >
                <div
                    className={styles.info__order}
                >
                    Ma don hang : {order.orderID}
                </div>
                <div
                    className={styles.info__order}
                >
                    Ngay dat : {order.orderDate}
                </div>
                <div
                    className={styles.info__order}
                >
                    Trang thai : {order.status}
                </div>
                <div
                    className={styles.info__order}
                >
                    So dien thoai : {order.phone}
                </div>
                <div
                    className={styles.info__order}
                >
                    Dia chi: {order.address}
                </div>
                <div
                    className={styles.info__order}
                >
                    Tong gia tri don hang : {

                        order.products.reduce((total, value, index) => {

                            return total + value.total
                        }, 0)
                    }.000đ&nbsp;
                </div>
            </div>
            {
                order.products.map((item, index) => {

                    return (

                        <div 
                            className={styles.order__item}
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
                                    So luong  &nbsp; : &nbsp; {item.count}
                                </div>
                                <div
                                    className={styles.cost}
                                >
                                    gia tien &nbsp; : &nbsp; {item.sale * item.count}.000đ
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div
                className={styles.cancel}
            >
                <button
                    className={styles.button__cancel}
                    onClick={() => {


                    }}
                >
                    Huy don hang
                </button>
            </div>
        </div>
    )
}

export default Order