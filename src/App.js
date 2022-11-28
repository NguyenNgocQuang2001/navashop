import { Header } from './components/header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { ProductPage } from './components/productDetail';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { UserBag } from './components/userBag';
import { UserHistory } from './components/userHistory';
import { UserOrder } from './components/useOrder';
import { UserProfile } from './components/userProfile';
import { AdminProfile } from './components/adminProfile';
import { AdminProduct } from './components/adminProduct';
import { AdminCustomer } from './components/adminCustomer';
import { AdminStatistical } from './components/adminStatistical';
import { Login } from './components/login';
import { Signup } from './components/signup';
import { Introduce } from "./components/introduce"
import { Contact } from "./components/contact"

const products = [
    {
        name :"Kính mát thời trang GM FRIDA CAO CẤP",
        link1:"o1cn01l4iwzm1zfiorubbqw-2209397823222-0-cib.webp",
        link2:"o1cn01ph5zrq1do65t5xvyf-2209731413725-0-cib.webp",
        link3:"o1cn01sfpuyq1do65pfa6bh-2209731413725-0-cib.webp",
        link4:"o1cn01ykouif1zfioz0rs9d-2209397823222-0-cib.webp",
        type:"glasses",
        sale:278,
        price:349,
        quantity:20,
        describe:"Kính mắt GM Gentle Monster FRIDA New 2021 Fullbox.Kính râm nam nữ bảo hành 3 tháng.Chất liệu gọng kính: Gọng kính được làm từ nhựa nguyên chất siêu bền chịu nhiệt, chịu lực bên trong là lõi thép không rỉ được mạ tĩnh điện 3 lớp không bong chóc hay bay màu, bản lề được làm từ hợp kim chắc chắn.Chất liệu tròng kính: Mắt kính cao cấp chống UV tiêu chuẩn 400 bảo vệ mặt chống lại bức xạ cực tím, ngăn chặn 99-100% sóng tử ngoại UVA và UVB, chống lóa polarized.Tặng kèm Fullbox+Khăn lau kính. Gọng kính kiểu dáng thời trang, màu sắc trẻ trung, phù hợp với khuôn mặt người Châu Á. Gọng kính vô cùng chắc chắn được mạ sơn tĩnh điện độ hoàn thiện cao, sắc sảo đến từng chi tiết.Bản lề được làm từ hợp kim độ bền cực tốt chống gãy vỡ khi va đập.Tròng kính cao cấp Bảo vệ đôi mắt khỏi bức xạ cực tím UVA-UVB các tác nhân bụi, khói khi đi đường.Form kính ôm vào sống mũi làm nổi bật mũi cao mà không gây khó chịu, giúp các bạn có thể vô tư hoạt động trong tâm thế thoải mái nhất.Xuất xứ:Trung Quốc.Bảo hành:3 tháng"
    },


    {
        name :"Gọng kính XS5165",
        link1:"3201363451-495745250 (1).webp",
        link2:"3201363451-495745250.webp",
        link3:"3959509428-461355867.webp",
        link4:"Gọng kính XS5165.jfif",
        type:"glasses",
        sale:179,
        price:200,
        quantity:20,
        describe:"Gọng kính XS5165 với thiết kế vuông mạnh mẽ nam tính, chất nhựa sáng bóng và độ đàn hồi cao"
    },

    {
        name :"Tròng kính râm Polycore",
        link1:"trong-ram-trong-polycore.webp",
        link2:"1-mau-tra-75.webp",
        link3:"2-mau-khoi.webp",
        link4:"2-mau-tra.webp",
        type:"glasses",
        sale:278,
        price:349,
        quantity:20,
        describe:"Đầy đủ bảng màu 11 màu. Tròng kính râm thương hiệu Polycore của Singapore là loại tròng màu gốc nguyên bản ( không phải tròng trong đem nhuộm ) nên màu sắc rất đẹp, không bị xuống màu sau 1 thời gian sử dụng. Tròng kính có lớp phủ cứng chống trầy, chống tia UV, chống chói. LOẠI TRÒNG NÀY KHÔNG CÓ ĐỘ."
    },

    {
        name :"Gọng Kính GK2615",
        link1:"a-4.webp",
        link2:"a-2.webp",
        link3:"a-1.webp",
        link4:"a-3.webp",
        type:"glasses",
        sale:278,
        price:349,
        quantity:20,
        describe:"Phù hợp với mọi gương mặt. Trọng lượng siêu nhẹ tạo cảm giác thoải mái khi đeo, không gây áp lực lên mũi. Chất liệu: Nhựa dẻo cao cấp TR90. Kính có thể lắp được mọi độ cận. Tặng kèm hộp kính và khăn lau "
    },
    {
        name :"Mũ MLB Shadow Adjustable Cap New York Yankees Màu Đen",
        link1:"mu-mlb-shadow-adjustable-cap-new-york-yankees-mau-den-5eead260e93f0-18062020093304.jpg",
        link2:"mu-mlb-shadow-adjustable-cap-new-york-yankees-mau-den-5eead260c396e-18062020093304.jpg",
        link3:"mu-mlb-shadow-adjustable-cap-new-york-yankees-mau-den-5eead26092f97-18062020093304.jpg",
        link4:"mu-mlb-shadow-adjustable-cap-new-york-yankees-mau-den-5eead26152ab4-18062020093305.jpg",
        type:"hat",
        sale:278,
        price:349,
        quantity:20,
        describe:"Mũ MLB Shadow Adjustable Cap New York Yankees Màu Đen thiết kế đẹp mắt, thời trang. Mũ được làm từ chất liệu Acrylic 80%, Wool 20% thoáng mát, mềm mại mang lại cảm giác thoải mái nhất cho người sử dụng. Form mũ chuẩn đẹp, các đường may rất chắc chắn và tinh tế đảm bảo hài lòng ngay cả với khách hàng khó tính nhất. Sản phẩm không phai màu, dễ giặt, bảo quản."
    },
    {
        name :"Mũ Lưỡi Trai Chữ Cái Mũ Bóng Chày Cho Nữ Mũ Che Nắng Thường Ngày Hàn Quốc",
        link1:"58e184fb3239e521e1233d9aebae4e6c.jpg_2200x2200q80.jpg_.webp",
        link2:"53c6c22d2b7a0af255ab155865db5e0f.jpg_2200x2200q80.jpg_.webp",
        link3:"dc31506238f70fe936dd878d259cf36a.jpg_2200x2200q80.jpg_.webp",
        link4:"a302a2010967816de619d6dbc5036fff.jpg_2200x2200q80.jpg_.webp",
        type:"hat",
        sale:278,
        price:349,
        quantity:20,
        describe:"Thủ công: cắt dán/khâu. Thành phần vải chính: Polyester. Hàm lượng thành phần vải chính: 81%-90%. Quy trình: nối. Hoạ tiết: trơn. Kiểu dáng đi lại đơn giản/Phiên bản Hàn Quốc"
    },
    {
        name :"Mũ Cho Nữ Mũ Che Nắng Vải Nhung Phiên Bản Hàn Quốc Mũ Chậu Rửa Phù Hợp Với Mọi Loại Mũ Ngư Dân Màu Kẹo Ngọt Nhật Bản",
        link1:"62a8e0249b6acef2399e19b5fd2ca9d2.jpg_2200x2200q80.jpg_.webp",
        link2:"411c27fbfdc5faea87049b0907b74891.jpg_2200x2200q80.jpg_.webp",
        link3:"69858b695e7b53091130ec1aadad69ea.jpg_2200x2200q80.jpg_.webp",
        link4:"78a99193f89c83eafbe614ec2f928326.jpg_2200x2200q80.jpg_.webp",
        type:"hat",
        sale:278,
        price:349,
        quantity:20,
        describe:"Thương hiệu: MuShiQiSKU1912235366_VNAMZ-8724388160. Chất Liệu: Polyester. Kiểu Nón Mũ: Bucket Hats. Loại Bảo Hành: Không bảo hành"
    },
    {
        name :"Mũ MLB Shadow Adjustable Cap New York Yankees",
        link1:"mu-mlb-shadow-adjustable-cap-new-york-yankees-629f0a1ba0c50-07062022151939.jpg",
        link2:"mu-mlb-shadow-adjustable-cap-new-york-yankees-629f0a5a32362-07062022152042.jpg",
        link3:"mu-mlb-shadow-adjustable-cap-new-york-yankees-629f0b1e967f6-07062022152358.jpg",
        link4:"mu-mlb-shadow-adjustable-cap-new-york-yankees-629f0b3bebfee-07062022152427.jpg",
        type:"hat",
        sale:935,
        price:1500,
        quantity:20,
        describe:"Mũ MLB Shadow Adjustable Cap New York Yankees màu đen với thiết kế đẹp mắt, thời trang. Mũ được làm bằng chất liệu cao cấp thoáng mát, mềm mại mang lại cảm giác thoải mái cho người dùng. Form mũ chuẩn đẹp, các đường may rất chắc chắn và tinh tế"
    },
    {
        name :"Đồng Hồ Seiko 5 Automatic SNKK27 Cho Nam",
        link1:"dong-ho-seiko-snkk27-jpg-1592368387-17062020113307.jpg   ",
        link2:"dong-ho-seiko-snkk27-2-jpg-1592368402-17062020113322.jpg",
        link3:"dong-ho-seiko-snkk27-1-jpg-1592368422-17062020113342.jpg",
        link4:"dong-ho-seiko-snkk27-2-jpg-1517386545-31012018151545.jpg",
        type:"clock",
        sale:2400,
        price:3200,
        quantity:20,
        describe:"Đồng hồ Seiko 5 Automatic SNKK27 có thiết kế truyền thống 3 kim, đường kính mặt 37mm, màu xanh dương mang màu sắc lãnh đạo. Mặt kính Hardlex giảm xước, hỗ trợ giảm va đập cực tốt. Đây chính là công nghệ độc quyền của hãng đồng hồ Seiko đình đám."
    },
    {
        name :"Đồng Hồ Thông Minh Xiaomi Kieslect K11 Bản Quốc Tế",
        link1:"dong-ho-thong-minh-xiaomi-kieslect-k11-627a0bd24cc2a-10052022135306.jpg",
        link2:"dong-ho-thong-minh-xiaomi-kieslect-k11-627a0bd253e2c-10052022135306.jpg",
        link3:"dong-ho-thong-minh-xiaomi-kieslect-k11-627a0bd2611b5-10052022135306.jpg",
        link4:"dong-ho-thong-minh-xiaomi-kieslect-k11-627a0bd266583-10052022135306.jpg",
        type:"clock",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Đồng hồ Xiaomi Kieslect K11 được thiết kế cực kỳ tinh xảo, chắc chắn, đạt tiêu chuẩn kháng nước IP68, giúp máy hoạt động tốt trong các môi trường khắc nghiệt như mồ hôi, rửa tay, đi mưa, thậm chí cả đi tắm và đi bơi."
    },


    {
        name :"Đồng Hồ Seiko SNZG13J Thiết Kế Nam Tính, Lịch Lãm",
        link1:"dong-ho-seiko-snzg13j-thiet-ke-nam-tinh-lich-lam-59143a6409cf9-11052017171812.jpg",
        link2:"dong-ho-seiko-snzg13j-thiet-ke-nam-tinh-lich-lam-59143a641817c-11052017171812.jpg",
        link3:"dong-ho-seiko-snzg13j-thiet-ke-nam-tinh-lich-lam-59143a64181be-11052017171812.jpg",
        link4:"dong-ho-seiko-snzg13j-thiet-ke-nam-tinh-lich-lam-59143a641fd0c-11052017171812.jpg",
        type:"clock",
        sale:4250,
        price:5230,
        quantity:20,
        describe:"Đồng hồ Seiko SNZG13J sở hữu thiết kế với mặt số 42mm đơn giản kết hợp cùng mặt đền màu đen, dây đeo đồng hồ màu bạc giúp tôn lên vẻ ngoài nam tính, lịch lãm của các quý ông."
    },


    {
        name :"Đồng Hồ Orient Bambino Gen 4 FAC08002F0 Cho Nam",
        link1:"dong-ho-orient-bambino-gen-4-fac08002f0-cho-nam-5af40fa8d2517-10052018162352.jpg",
        link2:"dong-ho-orient-bambino-gen-4-fac08002f0-cho-nam-5af40eb608b09-10052018161950.jpg",
        link3:"dong-ho-orient-bambino-gen-4-fac08002f0-cho-nam-5af40eb60d32a-10052018161950.jpg",
        link4:"dong-ho-orient-bambino-gen-4-fac08002f0-cho-nam-5af40eb60d32a-10052018161950 (1).jpg",
        type:"clock",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Orient Bambino Gen 4 FAC08002F0 là lựa chọn hàng đầu cho các quý ông mệnh hợp màu xanh hoặc đơn giản là yêu thích màu xanh. Với mặt đồng hồ màu ngọc lục bảo chuyển màu cuốn hút kết hợp với những cọc số màu vàng in nổi, Orient FAC08002F0 trở thành chiếc đồng hồ nổi bật nhất trong bộ sưu tập Dress Watch bambino Gen 4"
    },
    {
        name :"Thắt Lưng Nam Tonly Monders Dây Da Khóa Kim",
        link1:"that-lung-nam-tonly-monders-day-da-khoa-kim-5a3372f7e0525-15122017140007.jpg",
        link2:"that-lung-nam-tonly-monders-day-da-khoa-kim-5a3372f75155e-15122017140007.jpg",
        link3:"that-lung-nam-tonly-monders-day-da-khoa-kim-5a3372f75a748-15122017140007.jpg",
        link4:"that-lung-nam-tonly-monders-day-da-khoa-kim-5a3372f803e5d-15122017140008.jpg",
        type:"thatlung",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Thắt lưng nam Tonly Monders thiết kế kiểu dáng tối giản nhưng cũng không kém phần sang trọng, lịch lãm với chất liệu dây da cao cấp, khóa kim màu bạc, giúp phái mạnh tự tin thể hiện cá tính, phong cách cực chất."
    },
    {
        name :"Thắt Lưng Nam Da Nhăn Bullko Khóa Kim",
        link1:"that-lung-nam-bullko-day-da-nhan-khoa-kim-5a32047b9e521-14122017115627.jpg",
        link2:"5a3200ef666e5-14122017114119.jpg",
        link3:"that-lung-nam-bullko-day-da-nhan-khoa-kim-5a3204349e77e-14122017115516.jpg",
        link4:"that-lung-nam-bullko-day-da-nhan-khoa-kim-5a32046edfd97-14122017115614.jpg",
        type:"thatlung",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Thắt lưng nam Bullko dây da nhăn là sự kết hợp của chất liệu dây da cao cấp cùng công nghệ hiện đại mang lại cho bạn chiếc thắt lưng da dày dặn, chắc chắn nhưng vô cùng mềm mại, thoải mái khi đeo. Thắt lưng nam Bullko dây da nhăn phù hợp với mọi phong cách thời trang của bạn: du lịch, thể thao, đi làm ..."
    },


     {
        name :"Thắt Lưng Da Nam San Vitale Black 1419s Khóa Trượt",
        link1:"that-lung-da-nam-san-vitale-black-1419s-khoa-truot-5a334d9fa0284-15122017112047.jpg",
        link2:"that-lung-da-nam-san-vitale-black-1419s-khoa-truot-5a334d9fa09c3-15122017112047.jpg",
        link3:"that-lung-da-nam-san-vitale-black-1419s-khoa-truot-5a334d9fa30fe-15122017112047.jpg",
        link4:"that-lung-da-nam-san-vitale-black-1419s-khoa-truot-5a334d9fa0284-15122017112047.jpg",
        type:"thatlung",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Thắt lưng nam San Vitale là thương hiệu thắt lưng da chất lượng cao cấp trên thế giới. Với chất da được làm từ da chế tạo thủ công, thắt lưng da nam San Vitale Black 1419s có độ bền đẹp lâu dài, rất phong cách, chắc chắn nhưng vô cùng thoải mái."
    },
     {
        name :"Combo 2 Thắt Lưng Nam Dây Da Phong Cách Hàn Quốc EMI, 02",
        link1:"1659668278-o1cn01sddtav1g7qqfzyntb---2211038090576-0-cib.jpg",
        link2:"1659668278-o1cn01m6yl9f1g7qq5hkgoa---2211038090576-0-cib.jpg",
        link3:"1659668278-o1cn01pix1dc1g7qq6ievnf---2211038090576-0-cib.jpg",
        link4:"1659668278-o1cn01xhncza1g7qqcqkapp---2211038090576-0-cib.jpg",
        type:"thatlung",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Mô Tả Sản Phẩm: Thắt Lưng Nam là món phụ kiện thời trang cao cấp dành cho quý ông trẻ trung, sành điệu. Sản phẩm được gia công tỉ mỉ và tinh xảo giúp gia tăng tuổi thọ dài lâu khi sử dụng. Bề mặt da không bị rạn nứt hay gãy đứt trong suốt thời gian sử dụng. Đường chỉ may đều đặn, sắc sảo và trau chuốt. Đầu khóa hợp kim không gỉ sáng bóng thời thượng. Kiểu dáng đẳng cấp sang trọng. Thắt lưng nam với kiểu dáng thiết kế sang trọng và tinh tế làm nổi bật phong cách người dùng. Mặt khoá được làm từ hợp kim bọc bởi lớp phủ cực kỳ sang trọng. Đường vân trên bề mặt sản phẩm trong rất tự nhiên, mềm dẻo và không thấm nước. Sản phẩm có kiểu dáng đơn giản nhưng tinh tế dễ dàng phối hợp với các kiểu quần jeans & kaki v.v..."
    },
     {
        name :"Áo Khoác Nam Adidas Utilitas 3-Stripes Hooded GT1688, XL",
        link1:"ao-khoac-nam-adidas-utilitas-3-stripes-hooded-gt1688-6369cac5e2144-08112022101933.jpg",
        link2:"ao-khoac-nam-adidas-utilitas-3-stripes-hooded-gt1688-6369cac8c9da6-08112022101936.jpg",
        link3:"ao-khoac-nam-adidas-utilitas-3-stripes-hooded-gt1688-6369cacd68be3-08112022101941.jpg",
        link4:"ao-khoac-nam-adidas-utilitas-3-stripes-hooded-gt1688-6369cacf87c4c-08112022101943.jpg",
        type:"aokhoacnam",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Áo khoác Adidas Utilitas 3-Stripes Hooded GT1688 vải may cao cấp, dày dặn, chống thấm nước và giữ nhiệt tốt. Áo màu đen, nổi bật với biểu tượng 3 sọc trắng đặc trưng ở 2 bên cánh tay."
    },
     {
        name :"Áo Khoác Nam Adidas FUNC Black Japansport GM4397, S",
        link1:"ao-khoac-nam-adidas-func-black-japansport-gm4397-62c7d19369930-08072022134123.png",
        link2:"ao-khoac-nam-adidas-func-black-japansport-gm4397-62c7d19940193-08072022134129.jpg",
        link3:"ao-khoac-nam-adidas-func-black-japansport-gm4397-62c7d19b82841-08072022134131.jpg",
        link4:"ao-khoac-nam-adidas-func-black-japansport-gm4397-62c7d19dd466c-08072022134133.jpg",
        type:"aokhoacnam",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Áo khoác Adidas FUNC Black Japansport GM4397 được may bằng chất liệu Polyester cao cấp với form dáng thể thao năng động. Màu sắc đen basic dễ kết hợp với nhiều phụ kiện và trang phục khác nhau để diện hàng ngày."
    },
     {
        name :"Áo Thun Nam Adidas Adicolor Classics Trefoil Tee H06642, M",
        link1:"ao-thun-nam-adidas-adicolor-classics-trefoil-tee-h06642-62ce31f9d3024-13072022094617.jpg",
        link2:"ao-thun-nam-adidas-adicolor-classics-trefoil-tee-h06642-62ce320096f21-13072022094624.jpg",
        link3:"ao-thun-nam-adidas-adicolor-classics-trefoil-tee-h06642-62ce32009ed7d-13072022094624.jpg",
        link4:"ao-thun-nam-adidas-adicolor-classics-trefoil-tee-h06642-62ce3200a8c47-13072022094624.jpg",
        type:"aothunnam",
        sale:890,
        price:1000,
        quantity:20,
        describe:"Áo Thun Nam Adidas Adicolor Classics Trefoil Tee H06642 được làm từ 100% chất liệu cotton mang lại sự thoải mái, thoáng mát cho người mặc. Form dáng áo mang lại cảm giác thoải mái cho người sở hữu."
    },
     {
        name :"Áo Thun Nam Trơn Ngắn Tay Pmax Vải Coolmax, S, Đen",
        link1:"ao-thun-nam-tron-ngan-tay-pmax-vai-coolmax-s-den-p048282-628c7f738869f-24052022134715.jpg",
        link2:"ao-thun-nam-tron-ngan-tay-pmax-vai-coolmax-628c7cb985dc3-24052022133537.jpg",
        link3:"ao-thun-nam-tron-ngan-tay-pmax-vai-coolmax-628c7cb962f9f-24052022133537.jpg",
        link4:"ao-thun-nam-tron-ngan-tay-pmax-vai-coolmax-628c7cb9a539b-24052022133537.jpg",
        type:"aothunnam",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Áo thun nam trơn ngắn tay Pmax được thiết kế kiểu dáng basic cơ bản dể mặc dể phối đồ, phù hợp với mọi dáng người. Với chất liệu vải Coolmax kết hợp spandex áo sẽ ít nhăn và giữ form khi mặc."
    },
     {
        name :"Áo Sơ Mi Nam Trắng Trơn - Thương Hiệu Dinis, M",
        link1:"1663996884-8.jfif",
        link2:"1663996898-7.jfif",
        link3:"1663996907-2.jfif",
        link4:"1663996912-3.jfif",
        type:"saosominam",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Thương hiệu DINIS .Thương hiệu của Việt Nam mới thành lập , mục tiêu hướng tới của thương hiệu là làm mẫu mã đa dạng,chất lượng và giá thành rẻ phù hợp với nhu cầu sử dụng. Áo sơ mi nam tay dài sở hữu thiết kế đẹp mắt cùng với chất liệu mềm mại tạo cảm giác thoải mái cho người mặc."
    },
     {
        name :"Áo Sơ Mi Nam Dài Tay Noodles Phong Cách Mới Mẻ, Năng Động, Xanh, M",
        link1:"ao-so-mi-nam-dai-tay-noodles-61d3c4df70a6c-04012022105407.jpg",
        link2:"ao-so-mi-nam-dai-tay-noodles-61d3c4ebd3131-04012022105419.jpg",
        link3:"ao-so-mi-nam-dai-tay-noodles-61d3c4df70a6c-04012022105407.jpg",
        link4:"ao-so-mi-nam-dai-tay-noodles-61d3c4ebd3131-04012022105419.jpg",
        type:"aosominam",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Áo sơ mi nam dài tay Noodles kiểu dáng thiết kế trẻ trung, hiện đại, dễ phối đồ. Chất liệu vải cotton thoáng mát, đường may chắc chắn, tỉ mỉ, đủ size M - L - XL cho người dùng chọn mặc vừa đẹp với kích thước cơ thể, dáng người."
    },
     {
        name :"Đầm Midi Thêu Viền Đỏ Phong Cách Vintage, S, Tay ngắn",
        link1:"623ad16503f6b-23032022145101.jpg",
        link2:"623ad16509dcc-23032022145101.jpg",
        link3:"623ad1650f9b0-23032022145101.jpg",
        link4:"623ad16515e0b-23032022145101.jpg",
        type:"dress",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Đầm Midi Thêu Viền Đỏ Phong Cách Vintage với thiết kế đơn giản, váy dài nhấn viền đỏ với kiểu may nhún vô cùng nữ tính và nổi bật. Sản phẩm chắc chắn là một chiếc váy cần có trong tủ đồ của con gái."
    },
     {
        name :"Đầm Nữ Nhung Cổ Vuông Tay Dài Giả 2 Mảnh, S",
        link1:"dam-nu-nhung-co-vuong-tay-dai-gia-2-manh-623bdc042a80b-24032022094836.jpg",
        link2:"dam-nu-nhung-co-vuong-tay-dai-gia-2-manh-623bdc04320e0-24032022094836.jpg",
        link3:"dam-nu-nhung-co-vuong-tay-dai-gia-2-manh-623bdc0438683-24032022094836.jpg",
        link4:"dam-nu-nhung-co-vuong-tay-dai-gia-2-manh-623bdc04404de-24032022094836.jpg",
        type:"dress",
        sale:519,
        price:600,
        quantity:20,
        describe:"Đầm Nữ Nhung Cổ Vuông Tay Dài Giả 2 Mảnh với thiết kế đơn giản trắng, đen dễ dàng phối đồ. Chất liệu nhung sang trọng, tạo nên sự nữ tính, gợi cảm cho người dùng."
    },
     {
        name :"Áo Sơ Mi Nữ Form Rộng Vải Kate Siêu Mịn, Trắng, M",
        link1:"ao-so-mi-nu-form-rong-vai-kate-sieu-min-61d3e9ac2b3e3-04012022133108.jpg",
        link2:"ao-so-mi-nu-form-rong-vai-kate-sieu-min-61d3e9aa21b14-04012022133106.jpg",
        link3:"ao-so-mi-nu-form-rong-vai-kate-sieu-min-61d3e9b23d2c8-04012022133114.jpg",
        link4:"ao-so-mi-nu-form-rong-vai-kate-sieu-min-61d3e9b48f0d5-04012022133116.jpg",
        type:"aonu",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Áo Sơ Mi Nữ Form Rộng Vải Kate Siêu Mịn có đặc tính thoáng mát, mềm mịn và có khả năng thấm hút mồ hôi tốt, có form dáng tốt và không dễ bị nhăn. Áo Sơ Mi Nữ Form Rộng Vải Kate Siêu Mịn thiết kế đơn giản, năng động, phù hợp mọi phong cách thời trang."
    },

     {
        name :"Áo Dài Tay Longsleeves Oversize Jue Form Rộng Thời Trang, M, Xám",
        link1:"ao-dai-tay-longsleeves-oversize-jue-form-rong-thoi-trang-61d3c0c7a1fe6-04012022103639.jpg",
        link2:"ao-dai-tay-longsleeves-oversize-jue-form-rong-thoi-trang-61d3c1056d194-04012022103741.jpg",
        link3:"ao-dai-tay-longsleeves-oversize-jue-form-rong-thoi-trang-61d3c24a6d44a-04012022104306.jpg",
        link4:"ao-dai-tay-longsleeves-oversize-jue-form-rong-thoi-trang-61d3c2c94ab68-04012022104513.jpg",
        type:"aonu",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Áo Dài Tay Longsleeves Oversize Jue Form Rộng Thời Trang cho cả nam và nữ. Thiết kế trẻ trung, năng động, hiện đại dễ phối đồ mặc đi chơi, ở nhà hay khi vận động chơi thể thao đều được, rất thời trang."
    },
     {
        name :"Chân Váy Chống Nắng Cotton SUnfly SA9202, Xám nhạt, L",
        link1:"chan-vay-chong-nang-cotton-sunfly-sa9202-xanh-reu-m-p04534103-624f92d4d4f30-08042022084140.jpg",
        link2:"chan-vay-chong-nang-cotton-sunfly-sa9202-624bb741eed80-05042022102801.jpg",
        link3:"chan-vay-chong-nang-cotton-sunfly-sa9202-624bb7471c6b2-05042022102807.jpg",
        link4:"chan-vay-chong-nang-cotton-sunfly-sa9202-624bb7519636c-05042022102817.jpg",
        type:"chanvay",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Chân Váy Chống Nắng Cotton SUnfly SA9202 thiết kế dài kín chân, có cúc để tùy chỉnh cho vừa eo, xẻ sau tiện khi đi xe máy. Chân váy chống nắng có 5 màu sắc hot trend để người dùng lực theo sở thích cá nhân."
    },
     {
        name :"Chân Váy Chống Nắng Laroma UPF50+ Cho Nữ, Hồng, XXL",
        link1:"chan-vay-chong-nang-laroma-upf50-cho-nu-623977a6de99f-22032022141550.png",
        link2:"chan-vay-chong-nang-laroma-upf50-cho-nu-6239769a52316-22032022141122.png",
        link3:"chan-vay-chong-nang-laroma-upf50-cho-nu-62397889d02d0-22032022141937.png",
        link4:"chan-vay-chong-nang-laroma-upf50-cho-nu-63438fd80423d-10102022102200.png",
        type:"chanvay",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Chân váy chống nắng Laroma UPF50+ sử dụng chất liệu chuyên dụng được sử dụng chuyên nghiệp để sản xuất các sản phẩm thể dục thể thao ngoài trời, mặc mát nhẹ, thoáng khí, mùi vải thơm, khử mùi kháng khuẩn tốt."
    },
     {
        name :"Bộ Pijamas Sunfly ST8817 Vải Linen Áo Cộc Quần Ngố, M, Vàng",
        link1:"bo-pijamas-sunfly-st8817-vai-linen-ao-coc-quan-ngo-m-vang-p045491-624d37fd710c6-06042022134933.jpg",
        link2:"bo-pijamas-sunfly-st8817-vai-linen-ao-coc-quan-ngo-624d3664dc408-06042022134244.jpg",
        link3:"bo-pijamas-sunfly-st8817-vai-linen-ao-coc-quan-ngo-624d3664e6912-06042022134244.jpg",
        link4:"bo-pijamas-sunfly-st8817-vai-linen-ao-coc-quan-ngo-624d366501446-06042022134245.jpg",
        type:"dongu",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Bộ Pijamas Sunfly ST8817 được làm từ vải linen sản xuất hoàn toàn tự nhiên, có độ bền cao hơn rất nhiều so với các loại vải khác, lên tới khoảng 5,5 đến 6,5 gm/den (đơn vị đo độ bền của vải). Vải linen cũng có khả năng thấm hút tốt, tạo cảm giác thoải mái khi sử dụng."
    },
     {
        name :"Bộ Pijamas Linen Áo Cộc Quần Lửng Cổ Cánh Sen ST8805, Xanh, M",
        link1:"bo-pijamas-linen-ao-coc-quan-lung-co-canh-sen-st8805-xanh-m-p045458-624d0e5195b35-06042022105145.jpg",
        link2:"bo-pijamas-linen-ao-coc-quan-lung-co-canh-sen-st8805-624d0da73d3bc-06042022104855.jpg",
        link3:"bo-pijamas-linen-ao-coc-quan-lung-co-canh-sen-st8805-624d0da743240-06042022104855.jpg",
        link4:"bo-pijamas-linen-ao-coc-quan-lung-co-canh-sen-st8805-624d0da748ee1-06042022104855.jpg",
        type:"dongu",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Bộ Pijamas Linen Áo Cộc Quần Lửng Cổ Cánh Sen ST8805 thiết kế thanh thoát, nhẹ nhàng, chất vải thấm hút mồ hôi, thoáng mát giúp bạn thoải mái vận động khi ở nhà."
    },
     {
        name :"Quần Bó Tập Luyện Nữ Li-Ning AUQQ008-1 Màu Đen, S",
        link1:"quan-bo-tap-luyen-nu-li-ning-auqq008-1-mau-den-632a799dc8de1-21092022094029.jpg",
        link2:"quan-bo-tap-luyen-nu-li-ning-auqq008-1-mau-den-632a79b42976d-21092022094052.jpg",
        link3:"quan-bo-tap-luyen-nu-li-ning-auqq008-1-mau-den-632a79baf2897-21092022094058.jpg",
        link4:"quan-bo-tap-luyen-nu-li-ning-auqq008-1-mau-den-632a79daa0da3-21092022094130.png",
        type:"quannu",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Quần bó tập luyện nữ Li-Ning AUQQ008-1 thiết kế trẻ trung, dáng quần bó ôm sát cạp cao tôn vóc dáng, chất liệu vải co giãn 4 chiều thấm hút ẩm thông thoáng mặc thoải mái cho các hoạt động hàng ngày, tập luyện thể thao.."
    },
     {
        name :"Quần Gió Nữ Li-Ning AYKQ122-2, XS",
        link1:"quan-gio-nu-li-ning-aykq122-2-632bca9315e20-22092022093811.jpg",
        link2:"quan-gio-nu-li-ning-aykq122-2-632bca92e9210-22092022093810.jpg",
        link3:"quan-gio-nu-li-ning-aykq122-2-632bca93372e9-22092022093811.jpg",
        link4:"quan-gio-nu-li-ning-aykq122-2-632bca9356c29-22092022093811.jpg",
        type:"quannu",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Quần Gió Nữ Li-Ning AYKQ122-2 sở hữu đường may tỉ mỉ, chắc chắn, túi bên hông có khóa kéo tiện lợi. Quần gió có chất liệu thông thoáng, siêu nhẹ, bền chắc, chịu lực co giãn, đàn hồi tốt, cho giờ tập luyện thêm hiệu quả."
    },
     {
        name :"Áo Vest Nam Linen Nâu",
        link1:"vnl03-nn.webp",
        link2:"vnl03-nn (1).webp",
        link3:"vnl03-nn (2).webp",
        link4:"vnl03-nn (3).webp",
        type:"aovestnam",
        sale:3120,
        price:3900,
        quantity:20,
        describe:"Xuất xứ: Việt Nam. Gia công: Việt Nam. Linen cao cấp nhập khẩu , thoáng mát"
    },
     {
        name :"Áo Khoác Vest Nam An Phước - AKV000656",
        link1:"vest-ap0656-(1).jpg",
        link2:"vest-ap0656-(2).jpg",
        link3:"vest-ap0656-(4).jpg",
        link4:"vest-ap0656-(3).jpg",
        type:"aovestnam",
        sale:3815,
        price:4000,
        quantity:20,
        describe:"Áo Khoác Nam An Phước - AKV000656. TN: 21-05/04 KVEST-AP. Chất liệu: 90%POLY - 10%PU. Hoạ tiết: Bông"
    },
    {
        name :"Quần Jeans Wash Scratch Simwood Denim 1579",
        link1:"_nik5497_a8bb6084ab0d40b8aafb6bfd3b0768af_master.webp",
        link2:"1579xc__5__dbdd49c251bb4696a7a03ddb36e479bc_master.webp",
        link3:"_nik5504_9518885e82ec4c00b31c992785271228_master.jpg",
        link4:"_nik5499_a6b6e730abaf44259c829dee14b681c7_master.webp",
        type:"quanjeannam",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Dáng slim Taper mới lạ, hiện đại được thiết kế với phần đùi suông rộng, ôm nhẹ dần xuống bắp chân và cổ chân tạo hiệu ứng thị giác cho đôi chân thon và thanh thoát hơn. Kiểu dáng này luôn mang lại sự dễ chịu, thoải mái khi mặc và là best-choice cho mọi hình thể."
    },
     {
        name :"Quần Jean Returner 1480",
        link1:"1480gc__1__6def9f2ae49346df937ef51b0628f555_master.jpg",
        link2:"1480gc__12__d75e17ea9b4f41cf8f8ee55098be9d8b_master.jpg",
        link3:"1480gc__3__4e26f841d7254a73bf71cdb14a550c54_master.jpg",
        link4:"1480gc__10__21f3568e105343349283efe26394ef32_master.webp",
        type:"clock",
        sale:898,
        price:1120,
        quantity:20,
        describe:"Quần jeans phom Slim ôm chân vừa phải mang lại cảm giác tự tin, thoải mái khi mặc, tạo cảm giác chân dài và thon gọn hơn."
    },
]

function App() {


    return (
        <>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home products={products}/>} />
                <Route path="/home" element={<Home products={products}/>} />
                <Route path="/introduce" element={<Introduce />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product" element={<Home products={products}/>} />
                <Route path="/selling" element={<Home products={products}/>} />
                <Route path="/newproduct" element={<Home products={products}/>} />
                <Route path="/sale" element={<Home products={products}/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/product/:id" element={<ProductPage products={products}/>} />
                <Route path="/:id/bag" element={<UserBag />} />
                <Route path="/:id/profile" element={<UserProfile />} />
                <Route path="/:id/order" element={<UserOrder />} />
                <Route path="/:id/history" element={<UserHistory />} />
                <Route path="/admin/profile" element={<AdminProfile />} />
                <Route path="/admin/addproduct" element={<AdminProduct />} />
                <Route path="/admin/customers" element={<AdminCustomer />} />
                <Route path="/admin/statistical" element={<AdminStatistical />} />
            </Routes>
            <Footer />
        </>
    )
}
export default App;
