import styles from "./bagDeltail.module.scss"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

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
function BagDeltail() {

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
        <div>
            <div className={styles.bagDeltail}>
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
                                <tr className={styles.product}>
                                    <td className={styles.removeButton}>
                                        <HighlightOffIcon
                                            onClick={() => removeProduct(index)}
                                        />

                                    </td>
                                    <td>
                                        <img src={element.image} className={styles.imageProduct} />
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
                    <button onClick={() => navigate(-1)}>Quay lại</button>
                </div>
                <div className={styles.bottomContent}>
                    <button>Đặt hàng</button>
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
    )
}

export default BagDeltail