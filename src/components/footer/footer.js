import styles from './footer.module.scss'
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
function Footer() {
    return (

        <div className={styles.footer} >
            <div className={styles.footer_item}>
                <p className={styles.footer_item_tile}>VỀ CHÚNG TÔI</p>
                <p><b>Địa chỉ :</b> C4 Nguyễn Cơ Thạch</p>
                <p><b>Hotline :</b> (+84) 3 888 888</p>
                <p><b>Email : </b> contact@lisashop.com</p>
            </div>
            <div className={styles.footer_item}>
                <p className={styles.footer_item_tile}>XU HƯỚNG</p>
                <p>Sản phẩm khuyến mãi</p>
                <p>Sản phẩm nổi bật</p>
                <p>Tất cả sản phẩm</p>
            </div>
            <div className={styles.footer_item}>
                <p className={styles.footer_item_tile}>MỞ CỬA</p>

                <p>THỨ 2 - THỨ 7</p>
                <p>Sáng 10:00 - Chiều 5:00</p>
                <HistoryToggleOffIcon className={styles.clock}/>
            </div>
        </div>
    )
}

export default Footer