import styles from "./adminOrder.module.scss"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function AdminOrder({ order }) {

    const [change, setChange] = useState(true)
    const handlerCancelOrder = () => {

        const orders = JSON.parse(localStorage.getItem("orders") || "[]")
        let indexOrder = 0
        orders.forEach((element, index) => {

            if (element.id === order.id) {

                indexOrder = index
            }
        })
        orders.splice(indexOrder, 1)
        localStorage.setItem('orders', JSON.stringify(orders))
        setChange(!change)
        toast("Hủy đơn hàng thành công!!!")
    }

    const handlerConfirm = () => {

        const orders = JSON.parse(localStorage.getItem("orders") || "[]")
        orders.forEach(element => {

            if (element.id === order.id) {

                element.status = "Đang giao hàng"
            }
        })
        localStorage.setItem("orders", JSON.stringify(orders))
        setChange(true)
        toast("Xác nhận đơn hàng thành công!!!")
    }

    return (

        change && <div
            className={styles.order}
        >
            <div
                className={styles.infor__order}
            >
                <div
                    className={styles.info__order}
                >
                    Mã đơn hàng : {order.orderID}
                </div>
                <div
                    className={styles.info__order}
                >
                    Ngày đặt hàng : {order.orderDate}
                </div>
                <div
                    className={styles.info__order}
                >
                    Trạng thái : {order.status}
                </div>
                <div
                    className={styles.info__order}
                >
                    Người đặt :&nbsp;&nbsp;{order.user}
                </div>
                <div
                    className={styles.info__order}
                >
                    Số  điện thoại : {order.phone}
                </div>
                <div
                    className={styles.info__order}
                >
                    Địa chỉ : {order.address}
                </div>
                <div
                    className={styles.info__order}
                >
                    Tổng giá trị đơn hàng : {

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
            <div
                className={styles.button}
            >
                <button
                    className={styles.button__cancel}
                    onClick={handlerCancelOrder}
                >
                    Hủy đơn hàng
                </button>
                <button
                    className={styles.button__confirm}
                    onClick={handlerConfirm}
                >
                    Xác nhận
                </button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AdminOrder