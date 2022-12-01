import styles from "./allProduct.module.scss"
import clsx from "clsx"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { MyPagination } from "../pagination"
import Filter from "./filter";

const menuItem = [

    {
        category:"Thời trang nam",
        link:"ThoiTrangNam",
        item:[
            {
                name: "Áo khoác nam",
                link:"AoKhoacNam"
            },
            {
                name: "Áo thun nam",
                link:"AoThunNam"
            },
            {
                name: "Áo sơ mi",
                link:"AoSoMi"
            },
            {
                name: "Áo vét, blazer",
                link:"AoVest"
            },
            {
                name: "Quần jeans",
                link:"QuanJean"
            }
        ]
    },
    {
        category:"Thời trang nữ",
        link:"ThoiTrangNu",
        item:[
            {
                name: "Đầm, váy",
                link:"DamVay"
            },
            {
                name: "Áo nữ",
                link:"AoNu"
            },
            {
                name: "Quần nữ",
                link:"QuanNu"
            },
            {
                name: "Đồ ngủ",
                link:"DoNgu"
            },
            {
                name: "Chân váy",
                link:"ChanVay"
            }
        ]
    },
    {
        category:"Phụ Kiện",
        link:"PhuKien",
        item:[
            {
                name: "Mũ",
                link:"Mu"
            },
            {
                name: "Kính",
                link:"Kinh"
            },
            {
                name: "Đồng hồ",
                link:"DongHo"
            },
            {
                name: "Thắt lưng",
                link:"ThatLung"
            },
            {
                name: "Giày",
                link:"Giay"
            }
        ]
    },
]

const optionSort = [
    
    { value: '1', label: 'Sắp xếp theo mặc định' },
    { value: '2', label: 'Sắp xếp theo giá tăng dần' },
    { value: '3', label: 'Sắp xếp theo giá giảm dần' },
    { value: '4', label: 'Sắp xếp theo tên A -> Z' },
    { value: '5', label: 'Sắp xếp theo tên Z -> A' },
];

function AllProduct({ products }) {

    let productSort=[]
    let {category,subCategory}=useParams()
    if(category==null)
    {
        productSort=products
    }else
    {
        let subCategorys=[]
    if(subCategory!=null)
    {
        subCategorys.push(subCategory)
    }else{
        menuItem.forEach(element => {
            if(element.link==category)
            {
                element.item.forEach(e=>{
                    subCategorys.push(e.link)
                })
            }
        });
    }

    products.forEach(e=>{
        if(subCategorys.includes(e.type))
        {
            productSort.push(e)
        }
    })

    }
    
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
            <h2>DANH MỤC</h2>
            
            <div>
                {
                    menuItem.map(
                        (element,index)=>{
                            return <div className={index==menuItem.length-1? styles.lastCategoryItem: styles.categoryItem}>
                                <Link
                            className={ (category==element.link)? styles.hyperLink:styles.link}
                            to={`/products/${element.link}`}
                            >
                                {element.category}
                                <ul>
                                {
                                    element.item.map((e,i)=>{
                                        return <div className={i==element.item.length-1? styles.lastSubCategory:styles.subCategory}>
                                            <Link
                                        className={(subCategory==e.link)? styles.hyperLink:styles.link}
                                        to={`/products/${element.link}/${e.link}`}>
                                        <li>{e.name}</li>
                                        </Link>
                                        </div> 
                                        
                                    })
                                }
                                </ul>
                            </Link>
                                </div>
                        }
                    )
                }
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
            <MyPagination pages={Math.ceil(productSort.length / 6)}/>
            </div>
            

        </div>
    )
}

export default AllProduct