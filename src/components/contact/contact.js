import styles from "./contact.module.scss"

function Contact()
{
    return (
        <div className={styles.contact} >
            <div className={styles.leftContent}>
                <h3>ĐỂ LẠI LỜI NHẮN!</h3>
                <br/>
                <div className={styles.leftContentFirstChild}>
                    <input type="text" placeholder="Tên bạn *" className={styles.inputName}/>
                    <input type="text" placeholder="Email *"className={styles.inputEmail}/>
                    <input type="number" placeholder="SĐT *" className={styles.inputPhone}/>
                </div>
                
                <textarea placeholder="Tin nhắn *" className={styles.inputMessage}/>
                <br/>
                <input type="button" value="GỬI TIN NHẮN" className={ styles.submitButton}/>
            </div>
            <div className={styles.rightContent}>
                <h3>THÔNG TIN LIÊN HỆ</h3>
                <div className={styles.infor}>
                    <p><b>Địa chỉ :</b> C4 Nguyễn Cơ Thạch</p>
                    <p><b>Hotline :</b> (+84) 328 966 733</p>
                    <p><b>Email : </b> contact@navashop.com</p>
                    <p><b> Mở cửa : </b> Thứ 2 – Thứ 7 ( 7h – 23h )</p>
                </div>
            </div>
        </div>
    ) 
}

export default Contact