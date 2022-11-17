import styles from "./order.module.scss"
import { Link } from "react-router-dom"

const orders = [
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

function Order() {

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
                    Ma don hang : Joker369
                </div>
                <div
                    className={styles.info__order}
                >
                    Ngay dat : 15/11/2022 09:40
                </div>
                <div
                    className={styles.info__order}
                >
                    Trang thai : dang giao
                </div>
                <div
                    className={styles.info__order}
                >
                    So dien thoai : 0123456789
                </div>
                <div
                    className={styles.info__order}
                >
                    Tong gia tri don hang : {

                        orders.reduce((total, value, index) => {

                            return total + value.count * value.price
                        }, 0)
                    }&nbsp;d
                </div>
            </div>
            {
                orders.map((item, index) => {

                    return (

                        <div 
                            className={styles.order__item}
                            key={index}
                        >
                            <Link
                                to="/product/joker"
                            >
                                <img
                                    src={item.image}
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
                                    Ao cherry thoi trang
                                </div>
                                <div
                                    className={styles.quantity}
                                >
                                    So luong  &nbsp; : &nbsp; {item.count}
                                </div>
                                <div
                                    className={styles.cost}
                                >
                                    gia tien &nbsp; : &nbsp; {item.price * item.count}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Order