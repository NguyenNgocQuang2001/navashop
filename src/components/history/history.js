import styles from "./history.module.scss"
import { Link } from "react-router-dom"

const order = [
    {
        image: "/Image/aovetcongso.jpg",
        name: "Áo Vest Công Sở",
        price: 250000,
        count: 1,
        total: "250,000₫"
    },
    {
        image: "/Image/aokhoackakihailop.jpg",
        name: "Áo khoác kaki hai lớp",
        price: 425000,
        count: "2",
        total: "850,000đ"
    },
    {
        image: "/Image/aokhoackakihailop.jpg",
        name: "Áo khoác kaki hai lớp",
        price: 425000,
        count: "2",
        total: "850,000đ"
    },
    {
        image: "/Image/aokhoackakihailop.jpg",
        name: "Áo khoác kaki hai lớp",
        price: 425000,
        count: "2",
        total: "850,000đ"
    }
]

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
                    Ma don hang : {history.orderID}
                </div>
                <div
                    className={styles.info__order}
                >
                    Ngay dat : {history.orderDate}
                </div>
                <div
                    className={styles.info__order}
                >
                    Ngay giao : {history.orderDate}
                </div>
                <div
                    className={styles.info__order}
                >
                    So dien thoai : {history.phone}
                </div>
                <div
                    className={styles.info__order}
                >
                    Dia chi: {history.address}
                </div>
                <div
                    className={styles.info__order}
                >
                    Tong gia tri don hang : {

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
                                    So luong  &nbsp; : &nbsp; {item.count}
                                </div>
                                <div
                                    className={styles.cost}
                                >
                                    gia tien &nbsp; : &nbsp; {item.sale * item.count}
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