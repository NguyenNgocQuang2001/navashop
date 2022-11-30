import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Login() {
    const [listValue, setListValue] = useState({ valueUser: ' ', valuePassword: ' ' });
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const { valueUser, valuePassword } = listValue;
    const handleValue = (e) => {
        setUser(e.target.value);
        !e.target.value
            ? setListValue((prev) => ({ ...prev, valueUser: 'Vui lòng điền vào mục này' }))
            : setListValue((prev) => ({ ...prev, valueUser: '' }));
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        !e.target.value
            ? setListValue((prev) => ({ ...prev, valuePassword: 'Vui lòng điền vào mục này' }))
            : setListValue((prev) => ({ ...prev, valuePassword: '' }));
    };
    const handleSubmit = () => {
        if (valueUser && valuePassword) {
            setListValue((prev) => ({
                ...prev,
                valueUser: 'Vui lòng điền vào mục này',
                valuePassword: 'Vui lòng điền vào mục này',
            }));
        } else if (valueUser) {
            setListValue((prev) => ({
                ...prev,
                valueUser: 'Vui lòng điền vào mục này',
            }));
        } else if (valuePassword) {
            setListValue((prev) => ({
                ...prev,
                valuePassword: 'Vui lòng điền vào mục này',
            }));
        } else {
            //Api login
            //console.log(user, password);
            const acc = JSON.parse(localStorage.getItem('user'))
            const admin = JSON.parse(localStorage.getItem('admin'))
            if (user === acc.user && password === acc.password) {

                localStorage.setItem('login', "1");
                window.location.pathname = "/home"
            } else if (user === admin.user && password === admin.password) {

                localStorage.setItem('login', "2");
                window.location.pathname = "/home"
            } else {

                setListValue((prev) => ({
                    ...prev,
                    valuePassword: 'Tai khoan khong chinh xac!!!',
                }))
            }
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login_text')}>
                <div className={cx('logo')}>
                    <img className={styles.logo} src="/logo-nava.png" alt="not found" />
                    <h1>NAVA</h1>
                </div>
                <div className={cx('text')}>
                    <h4>Nền tảng thương mại điện tử</h4> <h4>yêu thích nhất ở Châu Á</h4>
                </div>
            </div>
            <div className={cx('login_form')}>
                <h3>Đăng nhập</h3>
                <div className={cx('login_input')}>
                    <input
                        className={cx('login_user')}
                        placeholder="Email/Số điện thoại/Tên đăng nhập"
                        onChange={handleValue}
                        onBlur={handleValue}
                    />
                    <span className={cx('login_required')}>{valueUser}</span>
                </div>
                <div className={cx('login_input')}>
                    <input
                        type="password"
                        className={cx('login_password')}
                        placeholder="Mật khẩu"
                        onChange={handlePassword}
                        onBlur={handlePassword}
                    />
                    <span className={cx('login_required')}>{valuePassword}</span>
                </div>
                <buttom to="/home" className={cx('clickLogin')} onClick={handleSubmit}>
                    Đăng nhập
                </buttom>
                <div className={cx('login_line')}>Hoặc</div>
                <div className={cx('login_listsup')}>
                    <div className={cx('list')}>
                        <span>Facebook</span>
                    </div>
                    <div className={cx('list')}>
                        <span>Google</span>
                    </div>
                    <div className={cx('list')}>
                        <span>Apple</span>
                    </div>
                </div>
                <div className={cx('signup')}>
                    Bạn mới biết đến NAVA?
                    <Link to="/signup" className={cx('linkup')}>
                        Đăng ký
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
