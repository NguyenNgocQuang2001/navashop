import { AdminNavbar } from "../adminNavbar"
import { Customer } from "../customer"
import { MyPagination } from "../pagination"
import Select from 'react-select'
import styles from "./adminCustomer.module.scss"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"

const customers = [

    {
        id: 1,
        name : "hoanler",
        sex : "nam",
        birthday : "30/09/2001",
        email : "hoannv@gmail.com",
        phone : "0932854734",
        status : "online",
        bought: 9,
        money: 3410
    },
    {
        id: 2,
        name : "nguyen van hoan",
        sex : "nam",
        birthday : "30/09/2001",
        email : "hoan2001@gmail.com",
        phone : "098765432",
        status : "offline",
        bought: 15,
        money: 5600
    },
    {
        id: 3,
        name : "hoang anh",
        sex : "nam",
        birthday : "30/08/2000",
        email : "hoanganh@gmail.com",
        phone : "0948665463",
        status : "online",
        bought: 13,
        money: 4890
    },
    {
        id: 4,
        name : "quang",
        sex : "nam",
        birthday : "11/11/2001",
        email : "quangnn@gmail.com",
        phone : "0123456789",
        status : "online",
        bought: 5,
        money: 1660
    },
    {
        id: 5,
        name : "nguyen ngoc quang",
        sex : "nam",
        birthday : "12/05/2001",
        email : "nnquang2001@gmail.com",
        phone : "0987651234",
        status : "offline",
        bought: 6,
        money: 2690
    },
    {
        id: 6,
        name : "dang hoang anh",
        sex : "nam",
        birthday : "19/07/2000",
        email : "danghoanganh@gmail.com",
        phone : "0984523456",
        status : "online",
        bought: 10,
        money: 3590
    },
    {
        id: 7,
        name : "vu thien ly",
        sex : "nu",
        birthday : "09/01/2001",
        email : "lythienvu@gmail.com",
        phone : "098532467",
        status : "offline",
        bought: 3,
        money: 1060
    }
]

const optionStatus = [

    { value: '1', label: 'Tất cả' },
    { value: '2', label: 'online' },
    { value: '3', label: 'offline' },
]

const optionSort = [

    { value: '1', label: 'Sắp xếp theo mặc định' },
    { value: '2', label: 'Sắp xếp theo mua nhiều nhất' },
    { value: '3', label: 'Sắp xếp theo mua ít nhất' },
    { value: '4', label: 'Sắp xếp theo doanh thu nhiều nhất' },
    { value: '5', label: 'Sắp xếp theo doanh thu ít nhất' },
]

function AdminCustomer() {

    let [searchParams, setSearchParams] = useSearchParams()
    let params = { 'p' : 1 }
    searchParams.forEach((value, key) => {
        
        params[key] = value
    })
    const [sortBy, setSortBy] = useState(optionSort[0])
    const handleSort = (value) => {

        setSortBy(value)
        searchParams.set("sort", value.label)
        setSearchParams(searchParams)
    }

    let cloneCustomers = [...customers]
    let s = params['sort']
    if (s === optionSort[1].label) {

        cloneCustomers.sort(function(a, b) {

            return b.bought - a.bought
        })
    } else if (s === optionSort[2].label) {

        cloneCustomers.sort(function(a, b) {

            return a.bought - b.bought
        })
    } else if (s === optionSort[3].label) {

        cloneCustomers.sort(function(a, b) {

            return b.money - a.money
        })
    } else if (s === optionSort[4].label) {

        cloneCustomers.sort(function(a, b) {

            return a.money - b.money
        })
    } else {

        cloneCustomers.sort(function(a, b) {

            return a.id - b.id
        })
    }

    const [status, setStatus] = useState(optionStatus[0])
    const handleStatus = (value) => {

        setStatus(value)
        searchParams.set("status", value.label)
        setSearchParams(searchParams)
    };


    let st = params['status']
    if (st !== optionStatus[0].label) {

        let tmpCustomers = []
        cloneCustomers.forEach(element => {

            if (element.status === st) {

                tmpCustomers.push(element)
            }
        })
        if (st === undefined) {

            tmpCustomers = [...cloneCustomers]
        }
        cloneCustomers = [...tmpCustomers]
    }

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
                        onChange={handleStatus}
                        value={status}
                    />

                    <Select

                        defaultValue={optionSort[0]}
                        className={styles.select__input}
                        isSearchable={false}
                        options={optionSort}
                        onChange={handleSort}
                        value={sortBy}
                    />
                </div>
                <div
                     className={styles.customer__item}
                >

                    {
                        cloneCustomers.map((item, index) => {

                            if ((params['p'] - 1) * 4 <= index && index < params['p'] * 4) {
                                return (

                                    <Customer
                                        key={index}
                                        customer={item}
                                    />
                                )
                            } else {

                                return ""
                            }
                        })
                    }
                </div>
                <MyPagination

                    pages={Math.ceil(cloneCustomers.length / 4)}
                />
            </div>
        </div>
    )
}

export default AdminCustomer