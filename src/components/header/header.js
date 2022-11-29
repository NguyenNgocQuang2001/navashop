import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);
function Header() {
    const inputRef = useRef();
    const [show, setShow] = useState(localStorage.getItem('login') === "1");
    const acc = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        window.addEventListener('scroll', function () {
            if (document.documentElement.scrollTop > 200) {
                inputRef.current.style = 'height:100px';
            } else {
                inputRef.current.style = 'height:150px';
            }
        });
    });
    return (
        <div ref={inputRef} className={styles.header}>
            <Link to="/" className={styles.link}>
                <img className={styles.logo} src="/logo-nava.png" alt="not found" />
            </Link>
            {show && (
                <Link to={`/${acc.user + "369"}/profile`} className={styles.link}>
                    <Tippy
                        // visible
                        interactive
                        placement="bottom"
                        offset={[50, 10]}
                        delay={[0, 500]}
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <div className={cx('wrapper')}>
                                    <Link to="/login" className={cx('logout')}
                                        
                                        onClick={() => {
                                        
                                            setShow(false)
                                            localStorage.setItem('login', "0")
                                            window.location.pathname="/login"
                                        }}
                                    >
                                        Đăng xuất
                                    </Link>
                                </div>
                            </div>
                        )}
                    >
                        <img className={styles.avatar} src="/chohusky.jpg" alt="not found" />
                    </Tippy>
                </Link>
            )}
            {!show && (
                <div className={cx('wrapperbox')}>
                    <Link to="/signup" className={cx('signup')}>
                        Đăng ký
                    </Link>
                    <Link to="/login" className={cx('login')}>
                        Đăng nhập
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Header;
