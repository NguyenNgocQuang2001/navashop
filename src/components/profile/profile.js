import styles from "./profile.module.scss"


function Profile() {

    return (

        <div className={styles.profile}>
        <div className={styles.title}>
            <p>Hồ Sơ Của Tôi</p>
            <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
        </div>
        <hr></hr>
        <div className={styles.infor}>
            <div className={styles.leftPane}>
                <table>
                    <tr>
                        <td>Tên đăng nhập</td>
                        <td>hoank58chn</td>
                    </tr>
                    <tr>
                        <td>Tên</td>
                        <td><input type="text"></input> </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="text"></input> </td>
                    </tr>
                    <tr>
                        <td>Số điện thoại</td>
                        <td><input type="number"></input> </td>
                    </tr>
                    <tr>
                        <td>Giới tính</td>
                        <td><input type="radio" name="sex"></input>
                        <input type="radio" name="sex"></input>
                        <input type="radio" name="sex"></input> </td>
                    </tr>
                    <tr>
                        <td>Ngày sinh</td>
                        <td>
                            <input type="number"></input>
                            <input type="number"></input>
                            <input type="number"></input>
                        </td>
                    </tr>
                </table>
                <button></button>
            </div>
            <div className={styles.rightPane}>
                {/* <img></img> */}
                <button >Show Images</button>
                <p>Dụng lượng file tối đa 1 MB<br/>Định dạng:.JPEG, .PNG</p>
            </div>
 
        </div>
        </div>
    )
}

export default Profile