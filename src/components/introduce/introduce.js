import styles from "./introduce.module.scss"

function Introduce() {
    return (
        <div>
            <div className={styles.introduce} >

                <div className={styles.topContent}>
                    <div className={styles.leftContent}>
                        <h3 >Giới thiệu<br /></h3>
                        <div>
                            <p >
                                
                                Chúng tôi chuyên kinh doanh sỉ và lẻ các mặt hàng thời trang nam trên toàn quốc với giá cả và chất lượng cạnh tranh nhất. 
                                Chỉ với một cú click chuột hoặc một cuộc điện thoại, 
                                bạn có thể sở hữu ngay sản phẩm của chúng tôi mà không cần đến tận nơi để mua sắm trong cuộc sống bận rộn hiện nay.
                            
                            </p>
                            <p>
                                Đến với NavaShop, các bạn có thể dễ dàng lựa chọn cho mình những mặt hàng thời trang được yêu thích nhất hiện nay cho giới trẻ như : 
                                Quần Kaki – Skinny – Áo – Áo Thun body – Và hàng trăm phụ kiện cần thiết khác cho cuộc sống …..<br />
                                Shop thuờng xuyên nhập những mẫu hàng hot nhất trên thị trường và có những hàng xách tay đặc biệt không đụng hàng.</p>
                            <p >
                                Phong cách phục vụ khách hàng thân thiện, tư vấn chu đáo, sản phẩm phù hợp túi tiền và bảo hành hậu mãi cho sản phẩm tận tâm chính là tiêu chí hàng đầu mà
                            NavaShop luôn đặt ra nhằm đem lại sự hài lòng cho Quý khách hàng.
                            
                            </p>
                        </div>
                    </div>
                    <div className={styles.rightContent}>
                        <img 
                            src="/Image/Introduce.png"
                            alt="not found"
                        />
                    </div>
                </div>

                <div className={styles.midleContent}>

                    <div className={styles.midleContentItem}>
                        <img 
                            src="/Image/transport.png"
                            alt="not found"
                        />
                        <p>MIỄN PHÍ VẬN CHUYỂN</p>
                    </div>

                    <div className={styles.midleContentItem}>
                        <img
                            src="/Image/contact.png"
                            alt="not found"    
                        />
                        <p>HỖ TRỢ KHÁCH HÀNG 24/7</p>
                    </div>

                    <div className={styles.midleContentItem}>
                        <img
                            src="/Image/refund.png"
                            alt="not found"
                        />
                        <p>HOÀN TIỀN 100%</p>
                    </div>

                </div>
            </div>
            <div className={styles.botContent}>

            <h2>ĐĂNG KÝ NGAY ĐỂ NHẬN BẢN TIN</h2>

            <p>Nhận mã giảm giá 15% khi đăng ký</p>
            <div className={styles.inputEmail}>
                <input type="text" className={styles.botInput} placeholder="Email của bạn"></input>
                <button className={styles.botButton}>THEO DÕI</button>
                
                
            </div>
                
            </div>
        </div>
        
    )
}
export default Introduce