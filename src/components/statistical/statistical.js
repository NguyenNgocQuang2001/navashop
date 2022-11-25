import styles from "./statistical.module.scss"
import Select from "react-select"
import { Link } from "react-router-dom"
import { MyPagination } from "../pagination"


const optionTime = [

    { value: '1', label: 'Hom nay' },
    { value: '2', label: 'Tuan nay' },
    { value: '3', label: 'Thang nay' },
    { value: '4', label: 'Tuan truoc' },
    { value: '5', label: 'Thang truoc' },
]

const optionSort = [

    { value: '1', label: 'Sắp xếp theo mặc định' },
    { value: '2', label: 'Sắp xếp theo ban nhieu nhat' },
    { value: '3', label: 'Sắp xếp theo ban it nhat' },
    { value: '4', label: 'Sắp xếp theo doanh thu nhieu nhat' },
    { value: '5', label: 'Sắp xếp theo doanh thu it nhat' },
]

const optionSex = [

    { value: '1', label: 'Tat ca' },
    { value: '2', label: 'Do nam' },
    { value: '3', label: 'Do nu' },
    { value: '4', label: 'Do doi' },
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

                    defaultValue={optionSex[0]}
                    className={styles.select__input}
                    isSearchable={false}
                    options={optionSex}
                />
            </div>
            <div
                className={styles.sum__quantity}
            >
                Tong san pham da ban duoc :  119
            </div>
            <div
                className={styles.sum__money}
            >
                Tong doanh thu :  9000.000VND
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
                                        So luong da ban duoc  &nbsp; : &nbsp; {item.count}
                                    </div>
                                    <div
                                        className={styles.cost}
                                    >
                                        Gia tien &nbsp; : &nbsp; {item.price}
                                    </div>
                                    <div
                                        className={styles.cost}
                                    >
                                        Tong tien &nbsp; : &nbsp; {item.price * item.count}
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