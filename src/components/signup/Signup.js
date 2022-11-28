import styles from './Signup.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Signup() {
    const [valueUser, setValueUser] = useState(' ');
    const [user, setUser] = useState('');
    const handleValue = (e) => {
        setUser(e.target.value);
        !e.target.value ? setValueUser('Vui lòng điền vào mục này') : setValueUser('');
    };
    const handleSubmit = () => {
        if (valueUser) {
            setValueUser('Vui lòng điền vào mục này');
        } else {
            //Api login
            console.log(user);
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

                <button className={cx('clickLogin')} onClick={handleSubmit}>
                    Tiếp theo
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
