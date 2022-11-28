import InfoProduct from "./infoProduct"
import styles from "./productDetail.module.scss"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";


function ProductDetail({ products }) {

    let { id } = useParams()
    let product = {}
    const [imgurl, setImgurl] = useState(product.link1)
    const [active, setActive] = useState(1)
    products.forEach(element  => {

        if (element.name === id) {

            product = element
        }
    });
    useEffect(() => {

        if (product) {

            setImgurl(product.link1)
        }
        setActive(1)
    }, [product])

    return (

        <div className={styles.product__detail}>

            <div className={styles.images}>
                <div className={styles.imageshow}>
                    <img
                        src={`/Image/${imgurl}`}
                        className={styles.image}
                        alt="not found"
                    />
                </div>
                <div className={styles.allimage}>
                    <img 
                        src={`/Image/${product.link1}`}
                        className={clsx(styles.image__small, {

                            [styles.active]: active === 1
                        })}
                        alt="not found"
                        onClick={() => {

                            setImgurl(product.link1)
                            setActive(1)
                        }}
                    />
                    <img 
                        src={`/Image/${product.link2}`}
                        className={clsx(styles.image__small, {

                            [styles.active]: active === 2
                        })}
                        alt="not found"
                        onClick={() => {

                            setImgurl(product.link2)
                            setActive(2)
                        }}
                    />
                    <img 
                        src={`/Image/${product.link3}`}
                        className={clsx(styles.image__small, {

                            [styles.active]: active === 3
                        })}
                        alt="not found"
                        onClick={() => {

                            setImgurl(product.link3)
                            setActive(3)
                        }}
                    />
                    <img 
                        src={`/Image/${product.link4}`}
                        className={clsx(styles.image__small, {

                            [styles.active]: active === 4
                        })}
                        alt="not found"
                        onClick={() => {

                            setImgurl(product.link4)
                            setActive(4)
                        }}
                    />
                </div>
            </div>
            <InfoProduct
                product={product}
            />
        </div>
    )
}

export default ProductDetail