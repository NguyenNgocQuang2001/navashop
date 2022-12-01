import styles from "./navbar.module.scss"
import { Link } from 'react-router-dom'

function Menubar() {

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

    return (

        <div className={styles.navbar__menubar}>

            {
                menuItem.map(element=>{
                    return <div className={styles.menubar__item}>
                        <Link
                        className={styles.link}
                         to={`/products/${element.link}`}>
                            <h3>{element.category}</h3>
                        </Link>
                    
                    {
                        element.item.map((e,i)=>{
                            return (

                                <Link
                                className={styles.link}
                                to={`/products/${element.link}/${e.link}`}>
                                    <li 
                                    className={styles.item}
                                    key={i}
                                >
                                    {e.name}
                                </li>
                                </Link>

                                
                            )
                        })
                    }
                    
                </div>
                })
            }
        </div>
    )
}

export default Menubar