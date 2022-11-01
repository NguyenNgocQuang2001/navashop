import styles from "./product.module.scss"
import clsx from "clsx"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Product() {

    const items = [0, 0, 0, 0, 0, 0, 0, 0]

    return (

        <div className={styles.product}>
            {
                items.map((item, index) => {

                    return (

                        <div 
                            className={ (index % 4 != 3 ? styles.product__item : clsx(styles.product__item, styles.product__last__item)) }
                            key={index}
                        >
                            <div className={styles.card__shopping}>

                                <ShoppingBagIcon 

                                    className={styles.shopping__bag__icon}
                                />
                            </div>
                            <img src="https://hstatic.net/744/1000088744/1/2016/5-7/img_8.1_c81885b0-b737-46c7-472c-c95992e52869_grande.jpg" />
                            <p>batman vs joker</p>
                            <p>
                                &nbsp;
                                &nbsp;
                                200.000d
                                &nbsp;
                                &nbsp;
                                <span>
                                    300.000d
                                </span>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product