import styles from "./allProduct.module.scss"
import clsx from "clsx"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link, useSearchParams } from 'react-router-dom'
import { MyPagination } from "../pagination"
import Filter from "./filter";

const menuItemNam = [

    {
        name: "Áo khoác nam"
    },
    {
        name: "Áo thun nam"
    },
    {
        name: "Áo sơ mi"
    },
    {
        name: "Áo vét, blazer"
    },
    {
        name: "Quần jeans"
    }
]

const menuItemPhuKien = [

    {
        name: "Mũ"
    },
    {
        name: "Kính"
    },
    {
        name: "Đồng hồ"
    },
    {
        name: "Thắt lưng"
    },
    {
        name: "Giày"
    }
]

const menuItemNu = [

    {
        name: "Đầm, váy"
    },
    {
        name: "Áo nữ"
    },
    {
        name: "Quần nữ"
    },
    {
        name: "Đồ ngủ"
    },
    {
        name: "Chân váy"
    }
]


const optionSort = [
    
    { value: '1', label: 'Sắp xếp theo mặc định' },
    { value: '2', label: 'Sắp xếp theo giá tăng dần' },
    { value: '3', label: 'Sắp xếp theo giá giảm dần' },
    { value: '4', label: 'Sắp xếp theo tên A -> Z' },
    { value: '5', label: 'Sắp xếp theo tên Z -> A' },
];

function AllProduct({ products }) {

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
        <div
            className={styles.all__product}
        >
            <div className={styles.category}>
            <h3>DANH MỤC</h3>
            
            <div className={styles.navbar__menubar}>
                <div className={styles.menubar__item}>
                    <h4>Thời Trang Nam
                    <span class="caret"></span>
                    </h4>

                    <ul>
                    {
                        menuItemNam.map((element,index)=>{
                            return (
                                <li 
                                    className={styles.item}
                                    key={index} 
                                >
                                    {element.name}
                                </li>
                            )
                        })
                    }
                    </ul>
                    
                    
                </div>
                <div className={styles.menubar__item}>
                    <h4>Thời Trang Nữ</h4>
                    <ul>
                    {
                         menuItemNu.map((element,index)=>{
                            return (
                                <li 
                                    className={styles.item}
                                    key={index}
                                >
                                    {element.name}
                                </li>
                            )
                        })
                    }
                    </ul>
                   
                </div>
                <div className={styles.menubar__item}>
                    <h4>Phụ kiện</h4>
                    <ul>
                    {
                         menuItemPhuKien.map((element,index)=>{
                            return (
                                <li 
                                    className={styles.item}
                                    key={index}
                                >
                                    {element.name}
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>  
        </div>

            </div>
            
            <div className={styles.productsContent} >
                <Filter/>
            <div className={styles.products}>

                
            {
                productSort.map((item, index) => {

                        if ((params['p'] - 1) * 6 <= index && index < params['p'] * 6) {

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
                                        className={ (index % 3 !== 2 ? styles.product__item : clsx(styles.product__item, styles.product__last__item)) }
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
            <MyPagination pages={Math.ceil(products.length / 6)}/>
            </div>
            

        </div>
    )
}

export default AllProduct