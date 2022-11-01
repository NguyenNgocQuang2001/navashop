import styles from "./navbar.module.scss"

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
        name: "Dày"
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


function Menubar() {

    return (

        <div className={styles.navbar__menubar}>
                <div className={styles.menubar__item}>
                    <h3>THỜI TRANG NAM</h3>
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
                    
                </div>
                <div className={styles.menubar__item}>
                    <h3>THỜI TRANG NỮ</h3>
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
                </div>
                <div className={styles.menubar__item}>
                    <h3>PHỤ KIỆN</h3>
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
                </div>  
        </div>
    )
}

export default Menubar