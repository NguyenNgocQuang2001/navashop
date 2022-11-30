import styles from "./userBag.module.scss"
import { useState } from "react";
import UserNavBar from "../userNavbar/userNavbar"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserBag() {

    const [change, setChange] = useState(false)
    const bag = JSON.parse(localStorage.getItem("bag") || "[]");
    console.log(bag.count)
    const removeProduct = (index) => {
        bag.splice(index, 1)
        localStorage.setItem('bag', JSON.stringify(bag));
        setChange(!change)
    }

    const handlerOrder = () => {

        const orders = JSON.parse(localStorage.getItem("orders") || "[]");
        orders.unshift({

            status: "Đang giao",
            phone: "1234567899",
            address: "So nha 19, Quan Hoang Mai, Ha Noi",
            total: totalMoney,
            orderID: "joker369",
            orderDate: new Date().toLocaleString(),
            products: bag
        })
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.setItem('bag', JSON.stringify([]));
        setChange(!change)
        toast("Đặt hàng thành công!!!")
    }


    var totalMoney = 0;

    return (
        
        <div className={styles.user__bag}>
            <UserNavBar />
            <div 
                className={styles.bags}
            >
                <div className={styles.bag}>
                    <table className={styles.tableProduct}>
                        <tr className={styles.headerTable}>
                            <th></th>
                            <th></th>
                            <th>SẢN PHẨM</th>
                            <th>ĐƠN GIÁ</th>
                            <th>SỐ LƯỢNG</th>
                            <th>TỔNG</th>
                        </tr>
                        {
                            bag.map((element, index) => {
                                element.total = element.count * element.sale;
                                totalMoney += element.total
                                return (
                                    <tr 
                                        className={styles.product}
                                        key={index}
                                    >
                                        <td className={styles.remove}>
                                            <button 
                                                className={styles.removeButton}
                                                onClick={() => removeProduct(index)}
                                            ></button>

                                        </td>
                                        <td>
                                            <Link
                                                to={`/product/${element.name}`}
                                            >
                                                <img 
                                                    src={`/Image/${element.link1}`}
                                                    className={styles.imageProduct}
                                                    alt="not found"
                                                />
                                            </Link>
                                        </td>
                                        <td className={styles.nameProduct}>
                                            {element.name}
                                        </td>
                                        <td className={styles.unitPrice}>
                                            {element.sale}.000<u>đ</u>
                                        </td>
                                        <td className={styles.numberProductt}>
                                            {element.count}
                                        </td>
                                        <td className={styles.totalPrice}>
                                            {element.total}.000<u>đ</u>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottomContent}>
                        <button
                            className={styles.button}
                            onClick={() => window.location.pathname = "/home"}
                        >
                            Quay lại
                        </button>
                    </div>
                    <div className={styles.bottomContent}>
                        <button
                            className={styles.button}
                            onClick={handlerOrder}
                        >
                            Đặt hàng
                        </button>
                    </div>
                    <div className={styles.bottomContent}>
                        <p>
                            {
                                "Tổng đơn hàng: "+totalMoney + ".000"
                            }<u>đ</u>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default UserBag