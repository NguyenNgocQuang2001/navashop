import { AdminNavbar } from "../adminNavbar"
import { Customer } from "../customer"
import { MyPagination } from "../pagination"
import Select from 'react-select'
import styles from "./adminCustomer.module.scss"

const customers = [

    {
        name : "hoanler",
        sex : "nam",
        birthday : "30/09/2001",
        email : "adolfhoanler@gmail.com",
        phone : "0932854734",
        status : "online"
    },
    {
        name : "hoanler",
        sex : "nam",
        birthday : "30/09/2001",
        email : "adolfhoanler@gmail.com",
        phone : "0932854734",
        status : "online"
    },
    {
        name : "hoanler",
        sex : "nam",
        birthday : "30/09/2001",
        email : "adolfhoanler@gmail.com",
        phone : "0932854734",
        status : "online"
    },
    {
        name : "hoanler",
        sex : "nam",
        birthday : "30/09/2001",
        email : "adolfhoanler@gmail.com",
        phone : "0932854734",
        status : "online"
    },
    {
        name : "hoanler",
        sex : "nam",
        birthday : "30/09/2001",
        email : "adolfhoanler@gmail.com",
        phone : "0932854734",
        status : "online"
    }
]

const optionStatus = [

    { value: '1', label: 'Tất cả' },
    { value: '2', label: 'Online' },
    { value: '3', label: 'Offline' },
]

const optionSort = [

    { value: '1', label: 'Sắp xếp theo mặc định' },
    { value: '2', label: 'Sắp xếp theo mua nhiều nhất' },
    { value: '3', label: 'Sắp xếp theo mua ít nhất' },
    { value: '4', label: 'Sắp xếp theo doanh thu nhiều nhất' },
    { value: '5', label: 'Sắp xếp theo doanh thu ít nhất' },
]

function AdminCustomer() {

    return (

        <div
            className={styles.admin__customer}
        >
            <AdminNavbar />
            <div
                className={styles.customers}
            >
                <div className={styles.select}>

                    <Select

                        defaultValue={optionStatus[0]}
                        className={styles.select__input}
                        isSearchable={false}
                        options={optionStatus}
                    />

                    <Select

                        defaultValue={optionSort[0]}
                        className={styles.select__input}
                        isSearchable={false}
                        options={optionSort}
                    />
                </div>

                {
                    customers.map((item, index) => {

                        return (

                            <Customer
                                key={index}
                                customer={item}
                            />
                        )
                    })
                }
                <MyPagination />
            </div>
        </div>
    )
}

export default AdminCustomer