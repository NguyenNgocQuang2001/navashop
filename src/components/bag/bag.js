import styles from "./bag.module.scss"


const products = [
    {
        image: "/Image/aovetcongso.jpg",
        name: "Áo Vest Công Sở",
        price: 250000,
        count: 1,
        total: "250,000₫"
    },
    {
        image: "/Image/aokhoackakihailop.jpg",
        name: "Áo khoác kaki hai lớp",
        price: 425000,
        count: "2",
        total: "850,000đ"
    }

]
function Bag() {

    return (

        <div className={styles.bag}>
            <table className={styles.tableProduct}>
                <tr>
                    <th></th>
                    <th></th>
                    <th>SẢN PHẨM</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Tổng</th>
                </tr>
                {
                    products.map((element, index) => {
                        element.total=element.count*element.price;
                        return (
                            <tr key={index}>
                                <td>
                                    <button className={styles.remove}>
                                    </button>
        
                                </td>
                                <td><img src={element.image} height="300" /></td>
                                <td>
                                    {element.name}
                                </td>
                                <td>
                                    {element.price}
                                </td>
                                <td>
                                    <input type="number" onChange={(e)=>{
                                        element.price=e.target.value*element.price;
                                    }}/>
                                </td>
                                <td>
                                    {element.total}
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Bag