import styles from "./customer.module.scss"


function Customer({ customer }) {

    return (

        <div
            className={styles.customer}
        >
            <div
                className={styles.info__customer}
            >
                Ten khach hang : {customer.name}
            </div>
            <div
                className={styles.info__customer}
            >
                Gioi tinh : {customer.sex}
            </div>
            <div
                className={styles.info__customer}
            >
                Ngay sinh : {customer.birthday}
            </div>
            <div
                className={styles.info__customer}
            >
                Email : {customer.email}
            </div>
            <div
                className={styles.info__customer}
            >
                So dien thoai : {customer.phone}
            </div>
            <div
                className={styles.info__customer}
            >
                Trang thai : {customer.status}
            </div>
        </div>
    )
}

export default Customer