import styles from "./addProduct.module.scss"


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