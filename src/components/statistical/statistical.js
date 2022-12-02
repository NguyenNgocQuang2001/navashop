import styles from "./statistical.module.scss"
import Select from "react-select"
import { Link } from "react-router-dom"
import { MyPagination } from "../pagination"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"


const optionTime = [

    { value: '1', label: 'Hôm nay' },
    { value: '2', label: 'Tuần này' },
    { value: '3', label: 'Tháng này' },
    { value: '4', label: 'Tuần trước' },
    { value: '5', label: 'Tháng trước' },
]

const optionSort = [

    { value: '1', label: 'Sắp xếp theo mặc định' },
    { value: '2', label: 'Sắp xếp theo bán nhiều nhất' },
    { value: '3', label: 'Sắp xếp theo bán ít nhất' },
    { value: '4', label: 'Sắp xếp theo doanh thu nhiều nhất' },
    { value: '5', label: 'Sắp xếp theo doanh thu ít nhất' },
]

const optionType = [

    { value: '0', label: "Tất cả" },
    { value: '1', label: "Áo khoác nam" },
    { value: '2', label: "Áo thun nam" },
    { value: '3', label: "Áo sơ mi" },
    { value: '4', label: "Áo vét, blazer" },
    { value: '5', label: "Quần jeans" },
    { value: '6', label: "Đầm, váy" },
    { value: '7', label: "Áo nữ" },
    { value: '8', label: "Quần nữ" },
    { value: '9', label: "Đồ ngủ" },
    { value: '10', label: "Chân váy" },
    { value: '11', label: "Mũ" },
    { value: '12', label: "Kính" },
    { value: '13', label: "Đồng hồ" },
    { value: '14', label: "Thắt lưng" },
    { value: '15', label: "Giày" },
]

const products = [
    {
        id: 1,
        name :"Kính mát thời trang GM FRIDA CAO CẤP",
        link1:"o1cn01l4iwzm1zfiorubbqw-2209397823222-0-cib.webp",
        link2:"o1cn01ph5zrq1do65t5xvyf-2209731413725-0-cib.webp",
        link3:"o1cn01sfpuyq1do65pfa6bh-2209731413725-0-cib.webp",
        link4:"o1cn01ykouif1zfioz0rs9d-2209397823222-0-cib.webp",
        type:"Kinh",
        sale:278,
        price:349,
        count:2,
        describe:"Kính mắt GM Gentle Monster FRIDA New 2021 Fullbox.Kính râm nam nữ bảo hành 3 tháng.Chất liệu gọng kính: Gọng kính được làm từ nhựa nguyên chất siêu bền chịu nhiệt, chịu lực bên trong là lõi thép không rỉ được mạ tĩnh điện 3 lớp không bong chóc hay bay màu, bản lề được làm từ hợp kim chắc chắn.Chất liệu tròng kính: Mắt kính cao cấp chống UV tiêu chuẩn 400 bảo vệ mặt chống lại bức xạ cực tím, ngăn chặn 99-100% sóng tử ngoại UVA và UVB, chống lóa polarized.Tặng kèm Fullbox+Khăn lau kính. Gọng kính kiểu dáng thời trang, màu sắc trẻ trung, phù hợp với khuôn mặt người Châu Á. Gọng kính vô cùng chắc chắn được mạ sơn tĩnh điện độ hoàn thiện cao, sắc sảo đến từng chi tiết.Bản lề được làm từ hợp kim độ bền cực tốt chống gãy vỡ khi va đập.Tròng kính cao cấp Bảo vệ đôi mắt khỏi bức xạ cực tím UVA-UVB các tác nhân bụi, khói khi đi đường.Form kính ôm vào sống mũi làm nổi bật mũi cao mà không gây khó chịu, giúp các bạn có thể vô tư hoạt động trong tâm thế thoải mái nhất.Xuất xứ:Trung Quốc.Bảo hành:3 tháng"
    },


    {
        id: 2,
        name :"Gọng kính XS5165",
        link1:"3201363451-495745250 (1).webp",
        link2:"3201363451-495745250.webp",
        link3:"3959509428-461355867.webp",
        link4:"Gọng kính XS5165.jfif",
        type:"Kinh",
        sale:179,
        price:200,
        count: 12,
        describe:"Gọng kính XS5165 với thiết kế vuông mạnh mẽ nam tính, chất nhựa sáng bóng và độ đàn hồi cao"
    },

    {
        id: 3,
        name :"Tròng kính râm Polycore",
        link1:"trong-ram-trong-polycore.webp",
        link2:"1-mau-tra-75.webp",
        link3:"2-mau-khoi.webp",
        link4:"2-mau-tra.webp",
        type:"Kinh",
        sale:278,
        price:349,
        count:9,
        describe:"Đầy đủ bảng màu 11 màu. Tròng kính râm thương hiệu Polycore của Singapore là loại tròng màu gốc nguyên bản ( không phải tròng trong đem nhuộm ) nên màu sắc rất đẹp, không bị xuống màu sau 1 thời gian sử dụng. Tròng kính có lớp phủ cứng chống trầy, chống tia UV, chống chói. LOẠI TRÒNG NÀY KHÔNG CÓ ĐỘ."
    },

    {
        id: 4,
        name :"Gọng Kính GK2615",
        link1:"a-4.webp",
        link2:"a-2.webp",
        link3:"a-1.webp",
        link4:"a-3.webp",
        type:"Kinh",
        sale:278,
        price:349,
        count:19,
        describe:"Phù hợp với mọi gương mặt. Trọng lượng siêu nhẹ tạo cảm giác thoải mái khi đeo, không gây áp lực lên mũi. Chất liệu: Nhựa dẻo cao cấp TR90. Kính có thể lắp được mọi độ cận. Tặng kèm hộp kính và khăn lau "
    },
    {
        id: 5,
        name :"Mũ MLB Shadow Adjustable Cap New York Yankees Màu Đen",
        link1:"mu-mlb-shadow-adjustable-cap-new-york-yankees-mau-den-5eead260e93f0-18062020093304.jpg",
        link2:"mu-mlb-shadow-adjustable-cap-new-york-yankees-mau-den-5eead260c396e-18062020093304.jpg",
        link3:"mu-mlb-shadow-adjustable-cap-new-york-yankees-mau-den-5eead26092f97-18062020093304.jpg",
        link4:"mu-mlb-shadow-adjustable-cap-new-york-yankees-mau-den-5eead26152ab4-18062020093305.jpg",
        type:"Mu",
        sale:278,
        price:349,
        count:15,
        describe:"Mũ MLB Shadow Adjustable Cap New York Yankees Màu Đen thiết kế đẹp mắt, thời trang. Mũ được làm từ chất liệu Acrylic 80%, Wool 20% thoáng mát, mềm mại mang lại cảm giác thoải mái nhất cho người sử dụng. Form mũ chuẩn đẹp, các đường may rất chắc chắn và tinh tế đảm bảo hài lòng ngay cả với khách hàng khó tính nhất. Sản phẩm không phai màu, dễ giặt, bảo quản."
    },
    {
        id: 6,
        name :"Mũ Lưỡi Trai Chữ Cái Mũ Bóng Chày Cho Nữ Mũ Che Nắng Thường Ngày Hàn Quốc",
        link1:"58e184fb3239e521e1233d9aebae4e6c.jpg_2200x2200q80.jpg_.webp",
        link2:"53c6c22d2b7a0af255ab155865db5e0f.jpg_2200x2200q80.jpg_.webp",
        link3:"dc31506238f70fe936dd878d259cf36a.jpg_2200x2200q80.jpg_.webp",
        link4:"a302a2010967816de619d6dbc5036fff.jpg_2200x2200q80.jpg_.webp",
        type:"Mu",
        sale:278,
        price:349,
        count:29,
        describe:"Thủ công: cắt dán/khâu. Thành phần vải chính: Polyester. Hàm lượng thành phần vải chính: 81%-90%. Quy trình: nối. Hoạ tiết: trơn. Kiểu dáng đi lại đơn giản/Phiên bản Hàn Quốc"
    },
    {
        id: 7,
        name :"Mũ Cho Nữ Mũ Che Nắng Vải Nhung Phiên Bản Hàn Quốc",
        link1:"62a8e0249b6acef2399e19b5fd2ca9d2.jpg_2200x2200q80.jpg_.webp",
        link2:"411c27fbfdc5faea87049b0907b74891.jpg_2200x2200q80.jpg_.webp",
        link3:"69858b695e7b53091130ec1aadad69ea.jpg_2200x2200q80.jpg_.webp",
        link4:"78a99193f89c83eafbe614ec2f928326.jpg_2200x2200q80.jpg_.webp",
        type:"Mu",
        sale:278,
        price:349,
        count:25,
        describe:"Thương hiệu: MuShiQiSKU1912235366_VNAMZ-8724388160. Chất Liệu: Polyester. Kiểu Nón Mũ: Bucket mus. Loại Bảo Hành: Không bảo hành"
    },
    {
        id: 8,
        name :"Mũ MLB Shadow Adjustable Cap New York Yankees",
        link1:"mu-mlb-shadow-adjustable-cap-new-york-yankees-629f0a1ba0c50-07062022151939.jpg",
        link2:"mu-mlb-shadow-adjustable-cap-new-york-yankees-629f0a5a32362-07062022152042.jpg",
        link3:"mu-mlb-shadow-adjustable-cap-new-york-yankees-629f0b1e967f6-07062022152358.jpg",
        link4:"mu-mlb-shadow-adjustable-cap-new-york-yankees-629f0b3bebfee-07062022152427.jpg",
        type:"Mu",
        sale:935,
        price:1500,
        count:3,
        describe:"Mũ MLB Shadow Adjustable Cap New York Yankees màu đen với thiết kế đẹp mắt, thời trang. Mũ được làm bằng chất liệu cao cấp thoáng mát, mềm mại mang lại cảm giác thoải mái cho người dùng. Form mũ chuẩn đẹp, các đường may rất chắc chắn và tinh tế"
    },
    {
        id: 9,
        name :"Đồng Hồ Seiko 5 Automatic SNKK27 Cho Nam",
        link1:"dong-ho-seiko-snkk27-jpg-1592368387-17062020113307.jpg   ",
        link2:"dong-ho-seiko-snkk27-2-jpg-1592368402-17062020113322.jpg",
        link3:"dong-ho-seiko-snkk27-1-jpg-1592368422-17062020113342.jpg",
        link4:"dong-ho-seiko-snkk27-2-jpg-1517386545-31012018151545.jpg",
        type:"DongHo",
        sale:2400,
        price:3200,
        count:22,
        describe:"Đồng hồ Seiko 5 Automatic SNKK27 có thiết kế truyền thống 3 kim, đường kính mặt 37mm, màu xanh dương mang màu sắc lãnh đạo. Mặt kính Hardlex giảm xước, hỗ trợ giảm va đập cực tốt. Đây chính là công nghệ độc quyền của hãng đồng hồ Seiko đình đám."
    },
]

function Statistical() {

    let [searchParams, setSearchParams] = useSearchParams()
    let params = { 'p' : 1 }
    searchParams.forEach((value, key) => {
        
        params[key] = value
    })
    const [sortBy, setSortBy] = useState(optionSort[0])
    const handleSort = (value) => {

        setSortBy(value)
        searchParams.set("sort", value.label)
        setSearchParams(searchParams)
    }

    let cloneProducts = [...products]
    let s = params['sort']
    if (s === optionSort[1].label) {

        cloneProducts.sort(function(a, b) {

            return b.count - a.count
        })
    } else if (s === optionSort[2].label) {

        cloneProducts.sort(function(a, b) {

            return a.count - b.count
        })
    } else if (s === optionSort[3].label) {

        cloneProducts.sort(function(a, b) {

            return b.count * b.sale - a.count * a.sale
        })
    } else if (s === optionSort[4].label) {

        cloneProducts.sort(function(a, b) {

            return a.count * a.sale - b.count * b.sale
        })
    } else {

        cloneProducts.sort(function(a, b) {

            return a.id - b.id
        })
    }

    return (

        <div
            className={styles.statistical}
        >
            <div className={styles.select}>

                <Select

                    defaultValue={optionTime[4]}
                    className={styles.select__input}
                    isSearchable={false}
                    options={optionTime}
                />

                <Select

                    defaultValue={optionSort[4]}
                    className={styles.select__input}
                    isSearchable={false}
                    options={optionSort}
                    value={sortBy}
                    onChange={handleSort}
                />

                <Select

                    defaultValue={optionType[0]}
                    className={styles.select__input}
                    isSearchable={false}
                    options={optionType}
                />
            </div>
            <div
                className={styles.sum__quantity}
            >
                Tổng sản phẩm đã bán được : &nbsp; {
                    
                    products.reduce((total, value) => {

                        return total + value.count
                    }, 0)
                }
            </div>
            <div
                className={styles.sum__money}
            >
                Tổng doanh thu :  &nbsp; {

                cloneProducts.reduce((total, value) => {

                        return total + value.count * value.sale
                    }, 0)
                }.000đ
            </div>
            <div
                className={styles.products}
            >
                {
                    cloneProducts.map((item, index) => {

                        if ((params['p'] - 1) * 5 <= index && index < params['p'] * 5) {
                            return (

                                <div 
                                    className={styles.product__item}
                                    key={index}
                                >
                                    <Link
                                        to={`/product/${item.name}`}
                                    >
                                        <img
                                            src={`/Image/${item.link1}`}
                                            alt="not found"
                                            className={styles.image}
                                        />
                                    </Link>
                                    <div
                                        className={styles.infos}
                                    >
                                        <div
                                            className={styles.name}
                                        >
                                            {item.name}
                                        </div>
                                        <div
                                            className={styles.quantity}
                                        >
                                            Số  lượng đã bán được  &nbsp; : &nbsp; {item.count}
                                        </div>
                                        <div
                                            className={styles.cost}
                                        >
                                            Giá tiền &nbsp; : &nbsp; {item.sale}.000đ
                                        </div>
                                        <div
                                            className={styles.cost}
                                        >
                                            Tổng tiền &nbsp; : &nbsp; {item.sale * item.count}.000đ
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {

                            return ""
                        }
                    })
                }
            </div>
            <MyPagination
                pages={Math.ceil(cloneProducts.length / 5)}
            />
        </div>
    )
}

export default Statistical