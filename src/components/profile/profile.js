import styles from "./profile.module.scss"


function Profile() {

    let acc = {}
    const login = localStorage.getItem('login')
    console.log(login)
    if (login === "2") {

        acc = JSON.parse(localStorage.getItem('admin'))
    } else if (login === "1") {

        acc = JSON.parse(localStorage.getItem('user'))
    } else {

        acc = {}
    }
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
                    htmlFor="avatar"
                >
                    Chọn ảnh
                </label>
            </div>
            <div
                className={styles.infor}
            >
                <div
                    className={styles.infor__tag}
                >
                    Họ và Tên
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
                    Giới tính
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
                            Nữ
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
                    Ngày sinh
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
                    Số  điện thoại
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
                    Địa chỉ
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
            {/* <div
                className={styles.infor}
            >
                <div
                    className={styles.infor__tag}
                >
                    Mật khẩu
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
            </div> */}
            <div
                className={styles.button}
            >
                <button 
                    className={styles.save}
                >
                    Lưu
                </button>
            </div>
        </div>
    )
}

export default Profile