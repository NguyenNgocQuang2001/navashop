import styles from "./customer.module.scss"


function Customer({ customer }) {

    return (

        <div
            className={styles.customer}
        >
            <div
                className={styles.info__customer}
            >
                Tên khách hàng : {customer.name}
            </div>
            <div
                className={styles.info__customer}
            >
                Giới thiệu : {customer.sex}
            </div>
            <div
                className={styles.info__customer}
            >
                Ngày sinh : {customer.birthday}
            </div>
            <div
                className={styles.info__customer}
            >
                Email : {customer.email}
            </div>
            <div
                className={styles.info__customer}
            >
                Số điện thoại : {customer.phone}
            </div>
            <div
                className={styles.info__customer}
            >
                Trạng thái : {customer.status}
            </div>
        </div>
    )
}

export default Customer