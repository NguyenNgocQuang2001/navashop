import styles from "./userBag.module.scss"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserNavBar from "../userNavbar/userNavbar"

const products = [
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

function UserBag() {

    const [change, setChange] = useState(false)
    const removeProduct = (index) => {
        products.splice(index, 1)
        setChange(!change)
    }

    const ChangCount = (index, value) => {
        products[index].count = value;
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
                            products.map((element, index) => {
                                element.total = element.count * element.price;
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
                                            <img 
                                                src={element.image}
                                                className={styles.imageProduct}
                                                alt="not found"
                                            />
                                        </td>
                                        <td className={styles.nameProduct}>
                                            {element.name}
                                        </td>
                                        <td>
                                            {element.price}<u>đ</u>
                                        </td>
                                        <td>
                                            <input type="number" min="0" value={element.count}
                                                onChange={(e) => ChangCount(index, e.target.value)}
                                            />

                                        </td>
                                        <td>
                                            {element.total}<u>đ</u>
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
                                "Tổng đơn hàng: "+totalMoney
                            }<u>đ</u>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBag