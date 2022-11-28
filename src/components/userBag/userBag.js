import styles from "./userBag.module.scss"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserNavBar from "../userNavbar/userNavbar"
import { Link } from 'react-router-dom'

function UserBag() {

    const [change, setChange] = useState(false)
    const bag = JSON.parse(localStorage.getItem("bag") || "[]");
    const removeProduct = (index) => {
        bag.splice(index, 1)
        localStorage.setItem('bag', JSON.stringify(bag));
        setChange(!change)
    }

    const ChangCount = (index, value) => {

        bag[index].count = value;
        setChange(!change)
    }

    const navigate = useNavigate();

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
                                        <td className={styles.removeButton}>
                                            <HighlightOffIcon
                                                onClick={() => removeProduct(index)}
                                            />

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
                                        <td>
                                            {element.sale}.000<u>đ</u>
                                        </td>
                                        <td>
                                            <input type="number" min="0" value={element.count}
                                                onChange={(e) => ChangCount(index, e.target.value)}
                                            />

                                        </td>
                                        <td>
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
                            onClick={() => navigate(-1)}
                        >
                            Quay lại
                        </button>
                    </div>
                    <div className={styles.bottomContent}>
                        <button
                            className={styles.button}
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
        </div>
    )
}

export default UserBag