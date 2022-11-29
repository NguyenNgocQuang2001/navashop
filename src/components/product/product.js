import styles from "./product.module.scss"
import clsx from "clsx"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link, useSearchParams } from 'react-router-dom'
import { MyPagination } from "../pagination"


const optionSort = [
    
    { value: '1', label: 'Sắp xếp theo mặc định' },
    { value: '2', label: 'Sắp xếp theo giá tăng dần' },
    { value: '3', label: 'Sắp xếp theo giá giảm dần' },
    { value: '4', label: 'Sắp xếp theo tên A -> Z' },
    { value: '5', label: 'Sắp xếp theo tên Z -> A' },
];

function Product({ products }) {

    let productSort = products
    let [searchParams] = useSearchParams();
    let params = { 'p' : 1 }
    searchParams.forEach((value, key) => {
        
        params[key] = value
    });

    let s = params['sort']
    if (s === optionSort[1].label) {

        productSort.sort(function(a, b) {

            return a.sale - b.sale
        })
    } else if (s === optionSort[2].label) {

        productSort.sort(function(a, b) {

            return b.sale - a.sale
        })
    } else if (s === optionSort[3].label) {

        productSort.sort(function(a, b) {

            if ( a.name < b.name ){
                return -1;
              }
              if ( a.name > b.name ){
                return 1;
              }
              return 0;
        })
    } else if (s === optionSort[4].label) {

        productSort.sort(function(a, b) {

            if ( a.name < b.name ){
                return 1;
              }
              if ( a.name > b.name ){
                return -1;
              }
              return 0;
        })
    } else {

        productSort.sort(function(a, b) {

            return a.id - b.id
        })
    }
    var pathname = window.location.pathname.split('/')
    if (pathname.length > 1) {
    
        pathname = pathname[1].trim()
        if (pathname === "sale") {
    
            productSort.sort(function(a, b) {

                return a.sale / a.price - b.sale / b.price
            })
        } else if (pathname === "selling") {
        
            productSort.sort(function(a, b) {

                return a.price - b.price
            })
        } else if (pathname === "newproduct") {
        
            productSort.sort(function(a, b) {

                return b.id - a.id
            })
        }
    }

    return (

        <div className={styles.products}>

            <div className={styles.product}>
                {
                    productSort.map((item, index) => {

                        if ((params['p'] - 1) * 8 <= index && index < params['p'] * 8) {

                            return (

                                <Link 
                                    to={`/product/${item.name}`}
                                    className={styles.link}
                                    key={index}
                                    onClick={() => {

                                        window.scrollTo(0, 0)
                                    }}
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
                                        <p
                                            className={styles.product__name}
                                        >{item.name}</p>
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