import styles from "./statistical.module.scss"
import Select from "react-select"
import { Link } from "react-router-dom"
import { MyPagination } from "../pagination"


const optionTime = [

    { value: '1', label: 'Hôm nay' },
    { value: '2', label: 'Tuần này' },
    { value: '3', label: 'Tháng này' },
    { value: '4', label: 'Tuần trước' },
    { value: '5', label: 'Tháng trước' },
]

const optionSort = [

    { value: '1', label: 'Sắp xếp theo mặc định' },
    { value: '2', label: 'Sắp xếp theo bán nhiều nhất' },
    { value: '3', label: 'Sắp xếp theo bán ít nhất' },
    { value: '4', label: 'Sắp xếp theo doanh thu nhiều nhất' },
    { value: '5', label: 'Sắp xếp theo doanh thu ít nhất' },
]

const optionType = [

    { value: '0', label: "Tất cả" },
    { value: '1', label: "Áo khoác nam" },
    { value: '2', label: "Áo thun nam" },
    { value: '3', label: "Áo sơ mi" },
    { value: '4', label: "Áo vét, blazer" },
    { value: '5', label: "Quần jeans" },
    { value: '6', label: "Đầm, váy" },
    { value: '7', label: "Áo nữ" },
    { value: '8', label: "Quần nữ" },
    { value: '9', label: "Đồ ngủ" },
    { value: '10', label: "Chân váy" },
    { value: '11', label: "Mũ" },
    { value: '12', label: "Kính" },
    { value: '13', label: "Đồng hồ" },
    { value: '14', label: "Thắt lưng" },
    { value: '15', label: "Giày" },
]

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

function Statistical() {

    return (

        <div
            className={styles.statistical}
        >
            <div className={styles.select}>

                <Select

                    defaultValue={optionTime[4]}
                    className={styles.select__input}
                    isSearchable={false}
                    options={optionTime}
                />

                <Select

                    defaultValue={optionSort[4]}
                    className={styles.select__input}
                    isSearchable={false}
                    options={optionSort}
                />

                <Select

                    defaultValue={optionType[0]}
                    className={styles.select__input}
                    isSearchable={false}
                    options={optionType}
                />
            </div>
            <div
                className={styles.sum__quantity}
            >
                Tổng sản phẩm đã bán được :  119
            </div>
            <div
                className={styles.sum__money}
            >
                Tổng doanh thu :  9000.000VND
            </div>
            <div
                className={styles.products}
            >
                {
                    products.map((item, index) => {

                        return (

                            <div 
                                className={styles.product__item}
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
                                        Số  lượng đã bán được  &nbsp; : &nbsp; {item.count}
                                    </div>
                                    <div
                                        className={styles.cost}
                                    >
                                        Giá tiền &nbsp; : &nbsp; {item.price}
                                    </div>
                                    <div
                                        className={styles.cost}
                                    >
                                        Tổng tiền &nbsp; : &nbsp; {item.price * item.count}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <MyPagination />
        </div>
    )
}

export default Statistical