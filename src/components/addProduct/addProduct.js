import styles from "./addProduct.module.scss"
import Select from "react-select"


const optionType = [

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

function AddProduct() {

    return (

        <div 
            className={styles.add__product}
        >
            <div
                className={styles.image__product}
            >
                <img
                    src="/chohusky.jpg"
                    alt="not found"
                    className={styles.image}
                />
                <input
                    className={styles.input__image}
                    type="file"
                    id="avatar"
                    multiple
                />
                <label
                    className={styles.choice__image}
                    htmlFor="avatar"
                >
                    Chon anh
                </label>
            </div>
            <div
                className={styles.infor}
            >
                <div
                    className={styles.infor__tag}
                >
                    Ten san pham
                </div>
                <div
                    className={styles.infor__input}
                >
                    <input 
                        type="text"
                        className={styles.input}
                    />
                </div>
            </div>
            <div
                className={styles.infor}
            >
                <div
                    className={styles.infor__tag}
                >
                    Loai
                </div>
                <div
                    className={styles.infor__input}
                >
                    <Select

                        defaultValue={optionType[0]}
                        className={styles.select__input}
                        isSearchable={false}
                        options={optionType}
                    />
                </div>
            </div>
            <div
                className={styles.infor__textarea}
            >
                <div
                    className={styles.infor__tag}
                >
                    Mo ta
                </div>
                <div
                    className={styles.infor__input}
                >
                    <textarea
                        type="text"
                        className={styles.textarea}
                    />
                </div>
            </div>
            <div
                className={styles.infor}
            >
                <div
                    className={styles.infor__tag}
                >
                    Gia tien (VND)
                </div>
                <div
                    className={styles.infor__input}
                >
                    <input 
                        type="number"
                        className={styles.input}
                    />
                </div>
            </div>
            <div
                className={styles.infor}
            >
                <div
                    className={styles.infor__tag}
                >
                    sale (VND)
                </div>
                <div
                    className={styles.infor__input}
                >
                    <input 
                        type="number"
                        className={styles.input}
                    />
                </div>
            </div>
            <div
                className={styles.infor}
            >
                <div
                    className={styles.infor__tag}
                >
                    So luong
                </div>
                <div
                    className={styles.infor__input}
                >
                    <input 
                        type="number"
                        className={styles.input}
                    />
                </div>
            </div>
            <div
                className={styles.button}
            >
                <button 
                    className={styles.save}
                >
                    Them
                </button>
            </div>
        </div>
    )
}

export default AddProduct