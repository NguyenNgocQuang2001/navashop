import styles from "./product.module.scss"
import clsx from "clsx"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link, useSearchParams } from 'react-router-dom'
import { MyPagination } from "../pagination"

function Product({ products }) {

    let [searchParams] = useSearchParams();
    const params = { 'p' : 1 }
    searchParams.forEach((value, key) => {
        
        params[key] = value
    });

    return (

        <div className={styles.products}>

            <div className={styles.product}>
                {
                    products.map((item, index) => {

                        if ((params['p'] - 1) * 8 <= index && index < params['p'] * 8) {

                            return (

                                <Link 
                                    to={`/product/${item.name}`}
                                    className={styles.link}
                                    key={index}
                                >
                                    <div 
                                        className={ (index % 4 !== 3 ? styles.product__item : clsx(styles.product__item, styles.product__last__item)) }
                                    >
                                        <div 
                                            className={styles.card__shopping}
                                        >
    
                                            <ShoppingBagIcon 
    
                                                className={styles.shopping__bag__icon}
                                            />
                                        </div>
                                        <img 
                                            src={"/Image/" + item.link1}
                                            alt="not found"
                                            
                                        />
                                        <p>{item.name}</p>
                                        <p>
                                            &nbsp;
                                            &nbsp;
                                            {item.sale}.000d
                                            &nbsp;
                                            &nbsp;
                                            <span>
                                                {item.price}.000d
                                            </span>
                                        </p>
                                    </div>
                                </Link>
                            )
                        } else {

                            return ""
                        }
                    })
                }
            </div>
            <MyPagination 

                pages={Math.ceil(products.length / 8)}
            />
        </div>
    )
}

export default Product