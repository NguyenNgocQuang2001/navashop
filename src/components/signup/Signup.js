import styles from './Signup.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Signup() {
    const [listValue, setListValue] = useState({ valueUser: ' ', valueUserName: ' ', valuePassword: ' ' });
    const [user, setUser] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { valueUser, valueUserName, valuePassword } = listValue;
    const handleValue = (e) => {
        setUser(e.target.value);
        !e.target.value
            ? setListValue((prev) => ({ ...prev, valueUser: 'Vui lòng điền vào mục này' }))
            : setListValue((prev) => ({ ...prev, valueUser: '' }));
    };
    const handleUser = (e) => {
        setUserName(e.target.value);
        !e.target.value
            ? setListValue((prev) => ({ ...prev, valueUserName: 'Vui lòng điền vào mục này' }))
            : setListValue((prev) => ({ ...prev, valueUserName: '' }));
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        !e.target.value
            ? setListValue((prev) => ({ ...prev, valuePassword: 'Vui lòng điền vào mục này' }))
            : setListValue((prev) => ({ ...prev, valuePassword: '' }));
    };
    const handleSubmit = () => {
        if (valueUser && valuePassword && valueUserName) {
            setListValue((prev) => ({
                ...prev,
                valueUser: 'Vui lòng điền vào mục này',
                valuePassword: 'Vui lòng điền vào mục này',
                valueUserName: 'Vui lòng điền vào mục này',
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
        } else if (valueUserName) {
            setListValue((prev) => ({
                ...prev,
                valueUserName: 'Vui lòng điền vào mục này',
            }));
        } else {
            //Api login
            console.log(user, userName, password);
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
                <h3>Đăng ký</h3>
                <div className={cx('login_input')}>
                    <input
                        className={cx('login_user')}
                        placeholder="Số điện thoại hoặc email"
                        onChange={handleValue}
                        onBlur={handleValue}
                    />
                    <span className={cx('login_required')}>{valueUser}</span>
                </div>
                <div className={cx('login_input')}>
                    <input
                        className={cx('login_username')}
                        placeholder="Tên đăng nhập"
                        onChange={handleUser}
                        onBlur={handleUser}
                    />
                    <span className={cx('login_required')}>{valueUserName}</span>
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
                <button className={cx('clickLogin')} onClick={handleSubmit}>
                    Đăng ký
                </button>
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
                    <Link to="/login" className={cx('linkup')}>
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
