import { useState } from 'react';
import styles from './productDetail.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InfoProduct({ product }) {
    const [cost, setCost] = useState(1);

    const handlerAddBag = () => {
        let pro = product;
        pro.count = cost;
        pro.total = pro.sale * cost;
        let bag = JSON.parse(localStorage.getItem('bag') || '[]');
        if (pro.count > 0 && localStorage.getItem('login') === "1") {
            bag.push(pro);
        }
        console.log("bag"+bag.length)
        localStorage.setItem('bag', JSON.stringify(bag));
        if (localStorage.getItem('login') === "2") {

            toast('Bạn là admin!!!');
        } else if (localStorage.getItem('login') !== "1") {
        
            toast('Bạn chưa đăng nhập!!!');
        } else {
            if(pro.count > 0)
                toast('Thêm vào giỏ hàng thành công!!!');
            else
                toast('Số lượng sản phẩm muốn thêm phải ít nhất là 1!!!');
        }
        // window.location.pathname = "/"
    };

    const show = localStorage.getItem('login') === "2" ? true : false

    return (
        <div className={styles.info}>
            <h2>{product.name}</h2>
            <p>
                {product.sale}.000d &nbsp;&nbsp;&nbsp;
                <span className={styles.sale}>{product.price}.000d</span>
            </p>
            <br />
            <p>{product.describe}</p>
            <div className={styles.cost}>
                {
                    !show && <p>
                        Số lượng &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                            type="number"
                            value={cost}
                            className={styles.input}
                            onChange={(e) => setCost(e.target.value >= 0 ? e.target.value : 0)}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>{`${cost * product.sale}.000d`}</span>
                    </p>
                }
                <br />
                {
                    !show && <button className={styles.bag} onClick={handlerAddBag}>
                        Thêm vào giỏ hàng
                    </button>
                }
                {
                    show && <button className={styles.delete}>
                        Xóa sản phẩm
                    </button>
                }
                <ToastContainer />
            </div>
        </div>
    );
}

export default InfoProduct;
