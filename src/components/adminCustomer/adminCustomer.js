import { AdminNavbar } from "../adminNavbar"
import { Customer } from "../customer"
import { MyPagination } from "../pagination"
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

function AdminCustomer() {

    return (

        <div
            className={styles.admin__customer}
        >
            <AdminNavbar />
            <div
                className={styles.customers}
            >
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