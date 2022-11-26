import styles from "./addProduct.module.scss"
import Select from "react-select"


const optionType = [

    { value: '1', label: 'Do nam' },
    { value: '2', label: 'Do nu' },
    { value: '3', label: 'Do doi' },
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