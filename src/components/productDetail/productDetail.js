import InfoProduct from "./infoProduct"
import styles from "./productDetail.module.scss"

function ProductDetail() {

    return (

        <div className={styles.product__detail}>

            <div className={styles.images}>
                <div className={styles.imageshow}>
                    <img
                        src="https://hstatic.net/744/1000088744/1/2016/5-7/img_8.1_c81885b0-b737-46c7-472c-c95992e52869_grande.jpg"
                        className={styles.image}
                        alt="not found"
                    />
                </div>
                <div className={styles.allimage}>
                    <img 
                        src="https://hstatic.net/744/1000088744/1/2016/5-7/img_8.1_c81885b0-b737-46c7-472c-c95992e52869_grande.jpg"
                        className={styles.image__small}
                        alt="not found"
                    />
                    <img 
                        src="https://hstatic.net/744/1000088744/1/2016/5-7/img_8.1_c81885b0-b737-46c7-472c-c95992e52869_grande.jpg"
                        className={styles.image__small}
                        alt="not found"
                    />
                    <img 
                        src="https://hstatic.net/744/1000088744/1/2016/5-7/img_8.1_c81885b0-b737-46c7-472c-c95992e52869_grande.jpg"
                        className={styles.image__small}
                        alt="not found"
                    />
                    <img 
                        src="https://hstatic.net/744/1000088744/1/2016/5-7/img_8.1_c81885b0-b737-46c7-472c-c95992e52869_grande.jpg"
                        className={styles.image__small}
                        alt="not found"
                    />
                </div>
            </div>
            <InfoProduct />
        </div>
    )
}

export default ProductDetail