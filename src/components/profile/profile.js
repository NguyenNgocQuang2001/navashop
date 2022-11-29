import styles from "./profile.module.scss"


function Profile() {

    const acc = JSON.parse(localStorage.getItem('user'))
    return (

        <div 
            className={styles.profile}
        >
            <div
                className={styles.avatar}
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
                />
                <label
                    className={styles.choice__image}
                    for="avatar"
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
                    Ho va ten
                </div>
                <div
                    className={styles.infor__input}
                >
                    <input 
                        type="text"
                        className={styles.input}
                        value={acc.user}
                    />
                </div>
            </div>
            <div
                className={styles.infor}
            >
                <div
                    className={styles.infor__tag}
                >
                    Gioi tinh
                </div>
                <div
                    className={styles.infor__input}
                >
                    <input 
                        type="radio"
                        name="sex"
                        className={styles.input__radio}
                    />
                    <div
                        className={styles.label}
                    >
                        <label
                            className={styles.label__sex}
                        >
                            Nam
                        </label>
                    </div>
                    <input 
                        type="radio"
                        name="sex"
                        className={styles.input__radio}
                    />
                    <div
                        className={styles.label}
                    >
                        <label
                            className={styles.label__sex}
                        >
                            Nu
                        </label>
                    </div>
                </div>
            </div>
            <div
                className={styles.infor}
            >
                <div
                    className={styles.infor__tag}
                >
                    Ngay sinh
                </div>
                <div
                    className={styles.infor__input}
                >
                    <input 
                        type="date"
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
                    Email
                </div>
                <div
                    className={styles.infor__input}
                >
                    <input 
                        type="text"
                        className={styles.input}
                        value={acc.user}
                    />
                </div>
            </div>
            <div
                className={styles.infor}
            >
                <div
                    className={styles.infor__tag}
                >
                    So dien thoai
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
                    Dia chi
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
                    Mat khau
                </div>
                <div
                    className={styles.infor__input}
                >
                    <input 
                        type="password"
                        className={styles.input}
                        value={acc.password}
                    />
                </div>
            </div>
            <div
                className={styles.button}
            >
                <button 
                    className={styles.save}
                >
                    Luu
                </button>
            </div>
        </div>
    )
}

export default Profile