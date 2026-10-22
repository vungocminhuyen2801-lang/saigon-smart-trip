const places = [
  {
    id: 1,
    name: "Dinh Độc Lập",
    category: "thamquan",
    district: "Quận 1",
    price: 65000,
    desc: "Giải mã di sản - khám phá kiến trúc và những điều thú vị.",
    hours: "07:00–18:00",
    lat: 10.7769,
    lng: 106.6952,
    image: "https://dinhdoclap.gov.vn/wp-content/uploads/2025/12/luu-nhap-tu-dong-9989.jpg",
    details: "Dinh Độc Lập được khởi công xây dựng năm 1962 và khánh thành năm 1966, do kiến trúc sư Ngô Viết Thụ thiết kế. Đây là nơi gắn liền với nhiều sự kiện lịch sử quan trọng, đặc biệt là ngày 30/4/1975, đánh dấu sự kiện giải phóng miền Nam, thống nhất đất nước. Công trình mang kiến trúc hiện đại kết hợp với nét truyền thống phương Đông. Hiện nay, Dinh Độc Lập là di tích lịch sử mở cửa phục vụ khách tham quan, giúp mọi người tìm hiểu về lịch sử dân tộc.",
    gallery: [
        "https://mekongsmile.com/wp-content/uploads/reunification-palace-cabinet-room.webp",
        "https://dinhdoclap.gov.vn/wp-content/uploads/2025/12/anh-dinh-doc-lap-noi-luu-giu-dau-an-sau-50-nam-giai-phong-9976-6.jpg"
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Dinh+%C4%91%E1%BB%99c+l%E1%BA%ADp/@10.7770014,106.6927221,17z/data=!4m8!3m7!1s0x31752f003218b07b:0x7f2be921d9c5cef5!8m2!3d10.7769981!4d106.6952919!9m1!1b1!16s%2Fg%2F11ygpm4dd6?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },

  {
    id: 2,
    name: "Nhà thờ Đức Bà",
    category: "thamquan",
    district: "Quận 1",
    price: 0,
    desc: "Dấu ấn đức tin - tìm hiểu về Công giáo và đời sống tín ngưỡng.",
    hours: "05:30–17:30",
    lat: 10.7798,
    lng: 106.6990,
    image: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/1-10.jpg",

    details: "Nhà thờ Đức Bà được khởi công năm 1877 và khánh thành năm 1880, là một trong những công trình kiến trúc tiêu biểu của Sài Gòn. Nhà thờ nổi bật với phong cách Roman kết hợp Gothic, mặt tiền gạch đỏ và hai tháp chuông cao. Không chỉ là trung tâm sinh hoạt của cộng đồng Công giáo, nơi đây còn mang giá trị lịch sử, văn hóa và kiến trúc đặc sắc. Hiện nay, nhà thờ là một trong những biểu tượng nổi tiếng của Thành phố Hồ Chí Minh.",
    gallery: [
        "https://grandart.vn/uploads/tin-tuc/nha-tho-duc-ba-ho-chi-minh.jpg",
        "https://cdn.xanhsm.com/2024/11/f5d8fc3e-nha-tho-duc-ba-thumbnail-min-1.jpg"
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Nh%C3%A0+th%E1%BB%9D+%C4%90%E1%BB%A9c+B%C3%A0+S%C3%A0i+G%C3%B2n/@10.7797855,106.696444,17z/data=!4m8!3m7!1s0x31752f37e6d82451:0xe84f59936ced5b45!8m2!3d10.7797855!4d106.6990189!9m1!1b1!16s%2Fm%2F027b16m?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },

  {
    id: 3,
    name: "Chợ Bến Thành",
    category: "thamquan",
    showInFood: true,
    foodDesc: "Khám phá các món ăn địa phương và ẩm thực bên trong chợ.",
    district: "Quận 1",
    price: 100000,
    desc: "Nhịp sống thương hồ - tìm hiểu hoạt động mua bán và văn hoá chợ.",
    hours: "07:00–22:00",
    lat: 10.7725,
    lng: 106.6980,
    image: "https://cdn2.tuoitre.vn/tcdulichtphcm/media/upload/2-2024/images/2024-05-30/1717044592-1.jpg",

    details: "Chợ Bến Thành tại vị trí hiện nay được xây dựng từ năm 1912 đến năm 1914, trở thành một trong những khu chợ lâu đời và nổi tiếng nhất Sài Gòn. Công trình gây ấn tượng với tháp đồng hồ đặc trưng, gắn liền với hình ảnh thành phố qua nhiều thế hệ. Chợ không chỉ là nơi giao thương mà còn phản ánh nét văn hóa mua bán truyền thống của người dân địa phương. Hiện nay, nơi đây kinh doanh nhiều mặt hàng như thực phẩm, quần áo, đồ thủ công mỹ nghệ và đặc sản dành cho du khách.",
    gallery: [
        "https://bizweb.dktcdn.net/100/539/761/files/cho-ben-thanh-khu-cho-co-nhat-ho-chi-minh-4-1.jpg?v=1741136217116",
        "https://phuot3mien.com/wp-content/uploads/2022/10/khu-am-thuc-trong-cho-ben-thanh-1.jpg"
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Ch%E1%BB%A3+B%E1%BA%BFn+Th%C3%A0nh/@10.7725168,106.6954459,17z/data=!4m8!3m7!1s0x31752f3f3129e64d:0x8d6b2d79522c7f30!8m2!3d10.7725168!4d106.6980208!9m1!1b1!16s%2Fm%2F02q30t6?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },

  {
    id: 4,
    name: "Phố đi bộ Nguyễn Huệ",
    category: "vuichoi",
    district: "Quận 1",
    price: 200000,
    desc: "Sài Gòn về đêm - khám phá vẻ đẹp thành phố khi lên đèn.",
    hours: "24/24",
    lat: 10.7742,
    lng: 106.7030,
    image: "https://www.themystdongkhoihotel.com/wp-content/uploads/2025/07/nguyen-hue-walking-street.jpg",

    details: "Phố đi bộ Nguyễn Huệ chính thức đi vào hoạt động năm 2015, trên tuyến đường vốn có lịch sử hình thành từ thế kỷ XIX. Không gian nổi bật với quảng trường rộng, hệ thống đài phun nước và cảnh quan đô thị hiện đại. Đây là địa điểm vui chơi, gặp gỡ và tổ chức nhiều hoạt động văn hóa, nghệ thuật của người dân thành phố. Đặc biệt, phố đi bộ trở nên sôi động vào buổi tối, thu hút đông đảo du khách đến tham quan và chụp ảnh.",
    gallery: [
        "https://cdn.silverlandhotels.com/wp-content/uploads/2026/07/42-Nguyen-Hue-Finished-2755-title-final-1-1280x960.jpg",
    ],
  },
  {
    id: 5,
    name: "Thảo Cầm Viên",
    category: "vuichoi",
    district: "Quận 1",
    price: 60000,
    desc: "Ốc đảo xanh - tìm hiểu hệ thực vật và không gian thiên nhiên.",
    hours: "07:00–18:30",
    lat: 10.7879,
    lng: 106.7053,
    image: "https://cdn2.tuoitre.vn/nld/291774122806476800/2025/2/16/z6118774158552d66f286247f6997086e49af0adb03e60-1739677454747975981421.jpg",

    details: "Thảo Cầm Viên Sài Gòn được thành lập ngày 23/3/1864, là một trong những vườn thú lâu đời trên thế giới. Nơi đây sở hữu nhiều cây cổ thụ, hệ thực vật phong phú và khu vực chăm sóc nhiều loài động vật. Thảo Cầm Viên không chỉ có giá trị lịch sử mà còn góp phần giáo dục ý thức bảo vệ thiên nhiên và bảo tồn đa dạng sinh học. Hiện nay, đây là điểm tham quan, vui chơi và học tập phù hợp với gia đình, học sinh và du khách.",
    gallery: [
        "https://static-images.vnncdn.net/files/publish/2022/6/23/thao-cam-vien-356.jpg?width=1200&s=UMVWLTXhDawIJ6CYg9MGwg",
        "https://dnsg.1cdn.vn/2025/03/06/1.jpg"
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Th%E1%BA%A3o+C%E1%BA%A7m+Vi%C3%AAn+S%C3%A0i+G%C3%B2n/@10.7873344,106.7024817,17z/data=!4m8!3m7!1s0x31752f4b3330bcc7:0x4db964d76bf6e18e!8m2!3d10.7873344!4d106.7050566!9m1!1b1!16s%2Fm%2F02pxd7b?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },

  {
    id: 6,
    name: "Bưu điện Trung tâm Sài Gòn",
    category: "thamquan",
    district: "Quận 1",
    price: 0,
    desc: "Góc check-in hoài cổ - tìm hiểu vai trò của bưu điện trong đời sống.",
    hours: "07:30–18:00",
    lat: 10.7798,
    lng: 106.6996,
    image: "https://images2.thanhnien.vn/528068263637045248/2023/6/5/hcm-1685938434919901822107.jpg",

    details: "Bưu điện Trung tâm Sài Gòn được xây dựng trong giai đoạn 1886–1891, là công trình tiêu biểu cho kiến trúc thời Pháp thuộc. Tòa nhà nổi bật với mặt tiền màu vàng, mái vòm rộng và không gian bên trong mang vẻ đẹp cổ kính. Trước đây, công trình đóng vai trò quan trọng trong hoạt động bưu chính và liên lạc của thành phố. Ngày nay, bưu điện vẫn phục vụ một số dịch vụ bưu chính, đồng thời là điểm tham quan nổi tiếng thu hút nhiều du khách.",
    gallery: [
        "https://cdn2.tuoitre.vn/plo/image/Uploaded/votho/2023_06_08/buu-dien-tp-anh10-978.jpg",
        "https://static.chotot.com/storage/chotot-kinhnghiem/nha/2024/09/78584bfc-buu-dien-tphcm-1024x576.jpg"
    ],
    googleMapsUrl: "https://www.google.com/maps/place/B%C6%B0u+%C4%91i%E1%BB%87n+trung+t%C3%A2m+S%C3%A0i+G%C3%B2n/@10.7799129,106.6973271,17z/data=!4m8!3m7!1s0x31752e8e801c1a47:0xb0f8d5737b239bb2!8m2!3d10.7799129!4d106.699902!9m1!1b1!16s%2Fm%2F02px4y6?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },


  {
    id: 101,
    name: "Bánh Bèo Huế O Trinh",
    category: "anuong",
    district: "Bến Thành",
    address: "126 Bùi Thị Xuân, TP. Hồ Chí Minh",
    price: 50000,
    desc: "Thưởng thức bánh bèo và món ăn mang hương vị Huế.",
    hours: "08:00–19:30",
    lat: 10.7708,
    lng: 106.6896,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLA295Vnw2wGzwfIwoFn3Xi4iRWvvBbSZWldQDrkMcA&s=10",
    googleMapsUrl: "https://www.google.com/maps/place/B%C3%A1nh+B%C3%A8o+Hu%E1%BA%BF+O+Trinh/@10.769713,106.6855001,17z/data=!4m8!3m7!1s0x31752f3d34410459:0xbfa33fe7981ba4c7!8m2!3d10.769713!4d106.688075!9m1!1b1!16s%2Fg%2F11f53ctw63?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 103,
    name: "Phở Hòa Pasteur",
    category: "anuong",
    district: "Xuân Hòa",
    address: "260C Pasteur, TP. Hồ Chí Minh",
    price: 90000,
    desc: "Thưởng thức phở bò truyền thống.",
    hours: "05:30–22:30",
    lat: 10.7820,
    lng: 106.6860,
    image: "https://mia.vn/media/uploads/blog-du-lich/pho-hoa-pasteur-sai-gon-03-1720570419.jpg",
    googleMapsUrl: "https://www.google.com/maps/place/Ph%E1%BB%9F+H%C3%B2a+Pasteur/@10.7866905,106.6866878,17z/data=!4m8!3m7!1s0x31752f26344ef6ef:0xd077b29b97dc202a!8m2!3d10.7866905!4d106.6892627!9m1!1b1!16s%2Fg%2F11k2fkf4rg?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 104,
    name: "Hủ Tiếu Hồng Phát",
    category: "anuong",
    district: "Bến Thành",
    address: "293-295 Lý Tự Trọng, TP. Hồ Chí Minh",
    price: 80000,
    desc: "Hủ tiếu mang phong vị Hoa - Việt.",
    hours: "06:30–22:30",
    lat: 10.7725,
    lng: 106.6955,
    image: "https://mms.img.susercontent.com/vn-11134513-7r98o-lstpmnp23x6s50@resize_ss1242x600!@crop_w1242_h600_cT",
    googleMapsUrl: "https://www.google.com/maps/place/H%E1%BB%A7+Ti%E1%BA%BFu+H%E1%BB%93ng+Ph%C3%A1t+(H%E1%BB%93ng+Ph%C3%A1t+B%E1%BA%BFn+Th%C3%A0nh)/@10.7717554,106.6916563,17z/data=!4m8!3m7!1s0x31752fc433fcbfe9:0x7022cc5d436d8e39!8m2!3d10.7717554!4d106.6942312!9m1!1b1!16s%2Fg%2F11xkct6zh3?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 105,
    name: "Phở Miến gà Kỳ Đồng",
    category: "anuong",
    district: "Nhiêu Lộc",
    address: "14/5Bis Kỳ Đồng, TP. Hồ Chí Minh",
    price: 70000,
    desc: "Phở gà và miến gà.",
    hours: "05:30–22:30",
    lat: 10.7850,
    lng: 106.6800,
    image: "https://mms.img.susercontent.com/vn-11134513-7r98o-ltkg9q5i7vgq56@resize_ss1242x600!@crop_w1242_h600_cT",
    googleMapsUrl: "https://www.google.com/maps/place/Ph%E1%BB%9F+Mi%E1%BA%BFn+g%C3%A0+K%E1%BB%B3+%C4%90%E1%BB%93ng/@10.7839022,106.6794037,17z/data=!4m8!3m7!1s0x31752f2eb6d4755b:0x52ab9bd4aad2043b!8m2!3d10.7839022!4d106.6819786!9m1!1b1!16s%2Fg%2F1tgxfkk8?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 106,
    name: "Bánh Mì Huynh Hoa",
    category: "anuong",
    district: "Bến Thành",
    address: "26 Lê Thị Riêng, TP. Hồ Chí Minh",
    price: 70000,
    desc: "Bánh mì với nhiều lớp nhân và pate.",
    hours: "06:00–22:00",
    lat: 10.7697,
    lng: 106.6924,
    image: "https://img.vietcetera.com/uploads/images/31-dec-2024/dscf0592.jpg",
    googleMapsUrl: "https://www.google.com/maps/place/B%C3%A1nh+M%C3%AC+Huynh+Hoa+-+L%C3%AA+Th%E1%BB%8B+Ri%C3%AAng/@10.7715226,106.6898219,17z/data=!4m8!3m7!1s0x31752f9a2b48b0f5:0x6a60bc45340de55c!8m2!3d10.7715226!4d106.6923968!9m1!1b1!16s%2Fg%2F11rfn3ghz4?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 107,
    name: "Bánh Xèo 46A",
    category: "anuong",
    district: "Tân Định",
    address: "46A Đinh Công Tráng, TP. Hồ Chí Minh",
    price: 100000,
    desc: "Bánh xèo Việt Nam nổi tiếng lâu năm.",
    hours: "07:00–18:00",
    lat: 10.7890,
    lng: 106.6940,
    image: "https://mia.vn/media/uploads/blog-du-lich/banh-xeo-dinh-cong-trang-nhan-banh-1744036750.jpg",
    googleMapsUrl: "https://www.google.com/maps/place/B%C3%A1nh+X%C3%A8o+46A/@10.7895674,106.6887679,17z/data=!4m8!3m7!1s0x31752f4df5510a3b:0x49001151a09b55ed!8m2!3d10.7895674!4d106.6913428!9m1!1b1!16s%2Fg%2F11j8tdnd3k?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 108,
    name: "Chè Hiển Khánh",
    category: "anuong",
    district: "Bàn Cờ",
    address: "718 Nguyễn Đình Chiểu, TP. Hồ Chí Minh",
    price: 40000,
    desc: "Các món chè và tráng miệng Việt Nam.",
    hours: "09:00–12:30, 14:30–21:30",
    lat: 10.7720,
    lng: 106.6820,
    image: "https://assets.grab.com/wp-content/uploads/sites/11/2019/08/30180918/RNI-Films-IMG-48F89E25-E443-4A2E-A084-12F607549D44.jpg",
    googleMapsUrl: "https://www.google.com/maps/place/Ch%C3%A8+Hi%E1%BB%83n+Kh%C3%A1nh/@10.767653,106.6771285,17z/data=!4m8!3m7!1s0x31752f1f7164ff61:0xb90a26a924732f10!8m2!3d10.767653!4d106.6797034!9m1!1b1!16s%2Fg%2F1tfglx2z?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 110,
    name: "Cơm Tấm Sà Bì Chưởng",
    category: "anuong",
    district: "Chợ Quán",
    address: "179 Trần Bình Trọng, TP. Hồ Chí Minh",
    price: 80000,
    desc: "Cơm tấm sườn bì chả.",
    hours: "07:00–21:00",
    lat: 10.7600,
    lng: 106.6800,
    image: "https://mia.vn/media/uploads/blog-du-lich/sa-bi-chuong-4-1750672358.jpg",
    googleMapsUrl: "https://www.google.com/maps/place/C%C6%A1m+T%E1%BA%A5m+S%C3%A0+B%C3%AC+Ch%C6%B0%E1%BB%9Fng+-+Tr%E1%BA%A7n+B%C3%ACnh+Tr%E1%BB%8Dng/@10.758552,106.6778742,17z/data=!4m8!3m7!1s0x31752f8438b1e4d9:0x5ccf45ed9954be68!8m2!3d10.758552!4d106.6804491!9m1!1b1!16s%2Fg%2F11q2qhw4ch?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 111,
    name: "Cà phê vợt Phan Đình Phùng",
    category: "anuong",
    cafeType: "Quán lâu năm",
    district: "Phú Nhuận",
    address: "330/2 Phan Đình Phùng, Phú Nhuận, TP. Hồ Chí Minh",
    price: 20000,
    priceLabel: "15.000–25.000đ",
    desc: "Thưởng thức cà phê vợt mang nét hoài cổ của Sài Gòn.",
    hours: "24/7",
    lat: 10.7984782,
    lng: 106.6808814,
    image: "https://classiccoffee.com.vn/upload/US9adoYAy1NDYcGI4gUQjZf2XUAO8VZ3N9d.jpg",
    googleMapsUrl: "https://www.google.com/maps/place/C%C3%A0+Ph%C3%AA+V%E1%BB%A3t+Phan+%C4%90%C3%ACnh+Ph%C3%B9ng/@10.7984782,106.6783065,17z/data=!4m8!3m7!1s0x317528d72024c905:0x17fb6bfbd112227a!8m2!3d10.7984782!4d106.6808814!9m1!1b1!16s%2Fg%2F11bwhb3hd5?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 112,
    name: "Cheo Leo Cafe",
    category: "anuong",
    cafeType: "Quán lâu năm",
    district: "Bàn Cờ",
    address: "109/36 Nguyễn Thiện Thuật, Bàn Cờ, TP. Hồ Chí Minh",
    price: 27500,
    priceLabel: "15.000–40.000đ",
    desc: "Quán cà phê lâu năm với cách pha cà phê vợt truyền thống.",
    hours: "06:00–18:00",
    lat: 10.766997,
    lng: 106.6798533,
    image: "https://images2.thanhnien.vn/528068263637045248/2024/3/11/1000010382-17101446434892090462708.jpg",
    googleMapsUrl: "https://www.google.com/maps/place/Cheo+Leo+Cafe/@10.766997,106.6772784,17z/data=!4m8!3m7!1s0x31752f1f0d65d987:0xf9187afa90943906!8m2!3d10.766997!4d106.6798533!9m1!1b1!16s%2Fg%2F11btrs8b_4?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 113,
    name: "Cà phê vợt Ba Lù",
    category: "anuong",
    cafeType: "Quán lâu năm",
    district: "Quận 5",
    address: "193 Phùng Hưng, Phường 14, Quận 5, TP. Hồ Chí Minh",
    price: 25000,
    priceLabel: "15.000–35.000đ",
    desc: "Khám phá nét cà phê vợt truyền thống tại khu Chợ Lớn.",
    hours: "02:00–17:00",
    lat: 10.7536344,
    lng: 106.6573218,
    image: "https://www.ngoctrainui.vn/wp-content/uploads/2024/07/Ca-phe-vot-Sai-Gon-Ba-Lu-quan-5.webp",
    googleMapsUrl: "https://www.google.com/maps/place/Caf%C3%A9+Ba+L%C3%B9/@10.7535795,106.6547035,17z/data=!4m12!1m2!2m1!1sQ8OgIHBow6ogduG7o3QgQmEgTMO5!3m8!1s0x31752ef3f518e2f9:0x1ac595d12419438f!8m2!3d10.7536344!4d106.6573218!9m1!1b1!15sChVDw6AgcGjDqiB24bujdCBCYSBMw7laFyIVY8OgIHBow6ogduG7o3QgYmEgbMO5kgELY29mZmVlX3Nob3CaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTTNNSFZYU25sUlJSQULgAQD6AQQIABBJ!16s%2Fg%2F11gbqfyp15?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 114,
    name: "RuNam d'Or",
    category: "anuong",
    cafeType: "Cà phê check-in",
    district: "Quận 1",
    address: "3 Công Xã Paris, Quận 1, TP. Hồ Chí Minh",
    price: 700000,
    priceLabel: "400.000–1.000.000đ",
    desc: "Không gian cà phê sang trọng, phù hợp gặp gỡ và chụp ảnh.",
    hours: "07:00–23:00",
    lat: 10.779138,
    lng: 106.6988865,
    image: "https://i.ytimg.com/vi/aWIbM8-WTxI/maxresdefault.jpg",
    googleMapsUrl: "https://www.google.com/maps/place/RuNam+d'Or/@10.779138,106.6963116,17z/data=!4m17!1m8!3m7!1s0x31752f37e8d0a747:0x14ceb67195d28c33!2sRuNam+d'Or!8m2!3d10.779138!4d106.6988865!10e9!16s%2Fg%2F11c6rhyk1q!3m7!1s0x31752f37e8d0a747:0x14ceb67195d28c33!8m2!3d10.779138!4d106.6988865!9m1!1b1!16s%2Fg%2F11c6rhyk1q?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 115,
    name: "Cộng Cà Phê",
    category: "anuong",
    cafeType: "Cà phê check-in",
    district: "Bến Thành",
    address: "93 Yersin, Bến Thành, TP. Hồ Chí Minh",
    price: 75000,
    priceLabel: "50.000–100.000đ",
    desc: "Không gian mang phong cách hoài cổ, được giới trẻ yêu thích.",
    hours: "07:00–22:30",
    lat: 10.7680879,
    lng: 106.6968232,
    image: "https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwgcofjthsd52a@resize_w800",
    googleMapsUrl: "https://www.google.com/maps/place/C%E1%BB%99ng+C%C3%A0+Ph%C3%AA/@10.7680374,106.6958253,18.66z/data=!4m16!1m7!3m6!1s0x31752feae0bb29df:0xb0d51685452236b5!2zQ-G7mW5nIEPDoCBQaMOq!8m2!3d10.7680879!4d106.6968232!16s%2Fg%2F11g0jf_fpb!3m7!1s0x31752feae0bb29df:0xb0d51685452236b5!8m2!3d10.7680879!4d106.6968232!9m1!1b1!16s%2Fg%2F11g0jf_fpb?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
  }
];

const categoryNames = {
  thamquan: "Tham quan",
  anuong: "Ăn uống",
  vuichoi: "Vui chơi"
};

const $ = id => document.getElementById(id);

let trip = JSON.parse(localStorage.getItem("saigon-trip") || "[]");
let favorites = JSON.parse(localStorage.getItem("saigon-favorites") || "[]");
let activitySchedule = JSON.parse(
  localStorage.getItem("saigon-activity-schedule") || "{}"
);

function money(value) {
  return value.toLocaleString("vi-VN") + "đ";
}

function renderPlaces() {
  const query = $("search").value.trim().toLocaleLowerCase("vi");
  const category = $("category").value;

  const filtered = places.filter(p =>
  p.category !== "anuong" &&
  (category === "all" || p.category === category) &&
  `${p.name} ${p.district} ${p.desc}`
    .toLocaleLowerCase("vi").includes(query)
);

  $("empty-state").hidden = filtered.length > 0;

  $("place-list").innerHTML = filtered.map(p => `
    <article class="place-card" data-place-id="${p.id}">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="place-info">
        <span class="tag">${categoryNames[p.category]}</span>
        <h3>
  <button class="place-detail-btn" data-detail="${p.id}">
    ${p.name}
  </button>
</h3>
        <p>📍 ${p.district} · Giá tham khảo: ${money(p.price)}</p>
<p>${p.desc}</p>
<p class="place-hours">
  🕒 Giờ hoạt động: ${p.hours || "Chưa cập nhật"}
</p>
<div class="card-actions">
          <button class="add-btn" data-add="${p.id}">
            ${trip.includes(p.id) ? "✓ Đã thêm" : "+ Thêm lịch trình"}
          </button>
          <button class="favorite-btn" data-fav="${p.id}" aria-label="Lưu yêu thích">
            ${favorites.includes(p.id) ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </article>
  `).join("");
}
function renderFood() {
  const query = $("search").value.trim().toLocaleLowerCase("vi");

  const filtered = places.filter(p =>
    (p.category === "anuong" || p.showInFood === true) &&
    `${p.name} ${p.district} ${p.desc} ${p.foodDesc || ""} ${p.cafeType || ""}`
      .toLocaleLowerCase("vi")
      .includes(query)
  );

  $("food-empty-state").hidden = filtered.length > 0;

  $("food-list").innerHTML = filtered.map(p => `
    <article class="place-card">
      <img src="${p.image}" alt="${p.name}" loading="lazy">

      <div class="place-info">
        ${
          p.cafeType
            ? `<span class="tag cafe-tag">${p.cafeType}</span>`
            : `<span class="tag">Ăn uống</span>`
        }

        <h3>${p.name}</h3>

        <p>📍 ${p.address || p.district}</p>
        <p>💰 Giá tham khảo: ${p.priceLabel || money(p.price)}</p>
        <p>${p.foodDesc || p.desc}</p>

        <p class="place-hours">
          🕒 Giờ hoạt động: ${p.hours || "Chưa cập nhật"}
        </p>

        ${
          p.googleMapsUrl
            ? `<div class="card-actions">
                <a class="primary-btn"
                   href="${p.googleMapsUrl}"
                   target="_blank"
                   rel="noopener noreferrer">
                  📍 Xem đánh giá Google Maps ↗
                </a>
              </div>`
            : ""
        }

        <div class="card-actions">
          <button class="add-btn" data-add="${p.id}">
            ${trip.includes(p.id) ? "✓ Đã thêm" : "+ Thêm lịch trình"}
          </button>
          <button class="favorite-btn" data-fav="${p.id}"
                  aria-label="Lưu yêu thích">
            ${favorites.includes(p.id) ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderTrip() {
  const selected = trip
    .map(id => places.find(p => p.id === id))
    .filter(Boolean);

  $("trip-count").textContent = `(${selected.length})`;
  $("trip-empty").hidden = selected.length > 0;

  $("itinerary").innerHTML = selected.map((p, i) => {
    const saved = activitySchedule[p.id] || {};

    return `
      <article class="itinerary-item">
        <div>
          <strong>${i + 1}. ${p.name}</strong>
          <p>📍 ${p.address || p.district} · Chi phí tham khảo: ${money(p.price)}</p>
        </div>

        <div class="activity-time">
          <label>
            Giờ bắt đầu
            <input type="time"
              data-time-start="${p.id}"
              value="${saved.start || ""}">
          </label>

          <label>
            Giờ kết thúc
            <input type="time"
              data-time-end="${p.id}"
              value="${saved.end || ""}">
          </label>
        </div>

        <button class="remove-btn"
          data-remove="${p.id}"
          aria-label="Xóa ${p.name}">✕ Xóa hoạt động</button>
      </article>
    `;
  }).join("");

  renderPlaces();
  renderFood(); 
}


document.addEventListener("click", event => {
  const detailButton = event.target.closest("[data-detail]");
  if (!detailButton) return;

  const id = Number(detailButton.dataset.detail);
  const place = places.find(p => p.id === id);

  if (!place || place.category === "anuong") return;

  window.location.href = `?place=${id}`;
});

document.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  const favButton = event.target.closest("[data-fav]");

  if (addButton) {
    const id = Number(addButton.dataset.add);

    if (!trip.includes(id)) {
      trip = [...trip, id];
    }

    localStorage.setItem("saigon-trip", JSON.stringify(trip));
    renderTrip();
    $("trip-status").textContent = "Đã cập nhật điểm đến.";
  }

  if (favButton) {
    const id = Number(favButton.dataset.fav);

    favorites = favorites.includes(id)
      ? favorites.filter(x => x !== id)
      : [...favorites, id];

    localStorage.setItem(
      "saigon-favorites",
      JSON.stringify(favorites)
    );

    renderPlaces();
    renderFood();
  }
});

$("itinerary").addEventListener("click", event => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;

  trip = trip.filter(id => id !== Number(button.dataset.remove));
  renderTrip();
});

$("searchBtn").addEventListener("click", () => {
  renderPlaces();
  renderFood();
});

$("search").addEventListener("input", () => {
  renderPlaces();
  renderFood();
});

$("category").addEventListener("change", renderPlaces);

$("clearTrip").addEventListener("click", () => {
  trip = [];
  renderTrip();
  $("trip-status").textContent = "Đã xóa các điểm đến khỏi lịch trình.";
});

$("printTrip").addEventListener("click", () => {
  const itinerary = $("itinerary");

  if (!itinerary || itinerary.children.length === 0) {
    alert("Bạn hãy chọn ít nhất một hoạt động trước khi xuất lịch trình nhé!");
    return;
  }

  const printContent = document.createElement("div");
  printContent.className = "print-itinerary";

  printContent.innerHTML = `
    <h1>${$("trip-name").value || "Lịch trình Sài Gòn"}</h1>
    <p><strong>Ngày đi:</strong> ${$("trip-date").value || "Chưa chọn"}</p>
    <p><strong>Ngân sách:</strong> ${
      $("trip-budget").value
        ? Number($("trip-budget").value).toLocaleString("vi-VN") + " VNĐ"
        : "Chưa xác định"
    }</p>
    <hr>
    <h2>Các hoạt động đã chọn</h2>
    ${itinerary.innerHTML}
  `;

  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    alert("Trình duyệt đang chặn cửa sổ in. Bạn hãy cho phép cửa sổ bật lên nhé!");
    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>Lịch trình Sài Gòn</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 35px auto;
          padding: 20px;
          color: #333;
          line-height: 1.6;
        }
        h1 { color: #a34f68; }
        h2 { margin-top: 25px; }
        hr { border: 0; border-top: 1px solid #ddd; }
        button { display: none !important; }
        input, select, textarea {
          border: none;
          background: transparent;
          font: inherit;
        }
        @media print {
          body { margin: 0; }
        }
      </style>
    </head>
    <body>${printContent.innerHTML}</body>
    </html>
  `);

  printWindow.document.close();
  printWindow.focus();

  printWindow.onload = () => {
    printWindow.print();
  };
});

// Bản đồ Leaflet
if (typeof L !== "undefined") {
  const map = L.map("map").setView([10.7769, 106.7009], 13);

L.tileLayer("https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution: '&copy; OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team',
  maxZoom: 19
}).addTo(map);

const categoryIcons = {
  thamquan: "🏛️",
  anuong: "🍜",
  vuichoi: "🎡"
};

const categoryNames = {
  thamquan: "Tham quan",
  anuong: "Ăn uống",
  vuichoi: "Vui chơi"
};

places.forEach(p => {
  const emoji = categoryIcons[p.category] || "📍";
  const category = categoryNames[p.category] || "Địa điểm khác";

  const customIcon = L.divIcon({
    html: `<span style="font-size:26px">${emoji}</span>`,
    className: "custom-map-icon",
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });

  L.marker([p.lat, p.lng], { icon: customIcon })
    .addTo(map)
    .bindPopup(`
      <strong>${emoji} ${p.name}</strong><br>
      ${category}<br>
      ${p.district || ""}
      <br>
      <button onclick="window.addToTrip(${p.id})">
        + Thêm vào lịch trình
      </button>
    `);
});
  window.addToTrip = id => {
    trip = trip.includes(id) ? trip : [...trip, id];
    renderTrip();
    $("trip-status").textContent = "Đã thêm địa điểm từ bản đồ.";
  };
} else {
  $("map").innerHTML =
    '<p style="padding:20px">Không tải được bản đồ. Hãy kiểm tra kết nối Internet.</p>';
}

renderTrip();

const hotels = [
  {
    id: 1,
    name: "The Hammock Hotel Ben Thanh",
    address: "47–49 Lê Thị Riêng, TP.HCM",
    price: "600.000–1.000.000đ",
    tier: "budget",
    stars: "3,5/5",
    rating: "9,0/10",
    reviewSource: "Google Map",
    reviewUrl: "https://www.google.com/travel/search?q=The%20Hammock%20Hotel%20Ben%20Thanh&g2lb=4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121921501%2C121951222%2C122078727%2C122093076&hl=vi-VN&gl=vn&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaHBIaEhQKBwjqDxAKGBUSBwjqDxAKGBYYATICCAIqBwoFOgNWTkQ&qs=CAEyFENnc0kyTk9FdTVQSHlkS0NBUkFCOAlCCRGMAUk2ohUWIEIJEcl57I-rfwZSahwKGg0AXpVJEhMIhsqx38zLlwMVn5qmAx2_KzZG&ap=ugEHcmV2aWV3cw&ictx=111",
    booking: "https://www.agoda.com/vi-vn/the-hammock-hotel-ben-thanh/hotel/ho-chi-minh-city-vn.html?cid=1844104&ds=GnV5CuNMi6XXi41H",
    image: "https://thehammockhotel.com/wp-content/uploads/2026/07/HBT-Cozy-scaled.jpg"
  },
  {
    id: 2,
    name: "Akoya Saigon Central Hotel",
    address: "88 Lý Tự Trọng, TP.HCM",
    price: "500.000–900.000đ",
    tier: "budget",
    stars: "3/5",
    rating: "4,5/5",
    reviewSource: "Google Map",
    reviewUrl: "https://www.google.com/travel/search?q=akoya%20Saigon%20Central%20Hotel&g2lb=4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121921501%2C121951222%2C122078727%2C122093076&hl=vi-VN&gl=vn&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4MzE3NTJmMzhkYzJhMTAyMzoweDkyOWYyOGY0NGYyNTk2NxIaEhQKBwjqDxAKGBUSBwjqDxAKGBYYATICCAI&qs=CAEyE0Nnb0k1N0xKcF9UUl9KUUpFQUU4AkIJCWdZ8kSP8ikJQgkJZ1nyRI_yKQk&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjg8M3vy8uXAxUAAAAAHQAAAAAQAw",
    booking: "https://www.agoda.com/vi-vn/the-akoya-ben-thanh-hotel/hotel/ho-chi-minh-city-vn.html?countryId=38&finalPriceView=1&isShowMobileAppPrice=false&cid=1922877&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2026-10-31&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=VND&isFreeOccSearch=false&tag=0a1c5afe-661a-4665-a0b0-c45b9feabf11&los=1&searchrequestid=75f87f05-11c6-4016-8c22-7b831ee8fbaf&ds=n6BCiNVHqVs6Ll6i",
    image: "https://q-xx.bstatic.com/xdata/images/hotel/1200x630/205949438.jpg?k=ceb740a1ad64c2aeeb04de58ccac03874998b63ea3a640e7c8168d338d6206bd&o=0"
  },
  {
    id: 3,
    name: "Liberty Central Saigon Citypoint",
    address: "59–61 Pasteur, TP.HCM",
    price: "1.500.000–2.500.000đ",
    tier: "mid",
    stars: "4/5",
    rating: "4,4/5",
    reviewSource: "Google Map",
    reviewUrl: "https://www.google.com/travel/search?q=Liberty%20Central%20Saigon%20Citypoint&g2lb=4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121921501%2C121951222%2C122078727%2C122093076&hl=vi-VN&gl=vn&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MzE3NTJmNDc2ZTU5OGNiMToweDc2NzIwYjEzNThlYjkyNjASGhIUCgcI6g8QChgVEgcI6g8QChgWGAEyAggC&qs=CAEyE0Nnb0k0S1N1eDdYaWdybDJFQUU4AkIJCWCS61gTC3J2QgkJYJLrWBMLcnY&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwj4obnGy8uXAxUAAAAAHQAAAAAQAw",
    booking: "https://www.agoda.com/vi-vn/liberty-central-saigon-citypoint-hotel/hotel/ho-chi-minh-city-vn.html?countryId=38&finalPriceView=1&isShowMobileAppPrice=false&cid=1922877&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2026-10-31&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=VND&isFreeOccSearch=false&tag=0ea562ad-0200-4990-bf56-b879fefbde7a&tspTypes=16&los=1&searchrequestid=e2281212-bed8-45be-a2b7-18f9395cc817&ds=ipFtjcublTsRiKnB",
    image: "https://www.libertycentralsaigoncitypoint.com/media/filer_public/95/15/9515beaa-9200-48fc-9d0f-b82e07965ab7/img_2528.jpg"
  },
  {
    id: 4,
    name: "Silverland Yen Hotel",
    address: "73–75 Thủ Khoa Huân, TP.HCM",
    price: "1.500.000–2.800.000đ",
    tier: "mid",
    stars: "4/5",
    rating: "4,7/5",
    reviewSource: "Google Map",
    reviewUrl: "https://www.google.com/travel/search?q=Silverland%20Yen%20Hotel&g2lb=4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121921501%2C121951222%2C122078727%2C122093076&hl=vi-VN&gl=vn&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MzE3NTJmMzkxOWQ0MmZkZDoweDc5MDcwYjBlNGNiMDAzODYSGhIUCgcI6g8QChgVEgcI6g8QChgWGAEyAggC&qs=CAEyE0Nnb0lob2ZBNWVUaHdvTjVFQUU4AkIJCYYDsEwOCwd5QgkJhgOwTA4LB3k&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjoy56Yy8uXAxUAAAAAHQAAAAAQAw",
    booking: "https://www.agoda.com/vi-vn/silverland-yen-hotel/hotel/ho-chi-minh-city-vn.html?countryId=38&finalPriceView=1&isShowMobileAppPrice=false&cid=1922877&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2026-10-31&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=VND&isFreeOccSearch=false&tag=f11b751f-6a53-465d-84de-b8de20751ca3&tspTypes=16&los=1&searchrequestid=64bff257-5705-49bd-b9eb-951abacb2dd3&ds=Rq6J09i5xuJOSkb%2B",
    image: "https://cdn.silverlandhotels.com/wp-content/uploads/2023/12/100.png"
  },
  {
    id: 5,
    name: "Alagon Saigon Hotel & Spa",
    address: "56–58 Phạm Hồng Thái, TP.HCM",
    price: "1.000.000–2.000.000đ",
    tier: "mid",
    stars: "4/5",
    rating: "4,1/5",
    reviewSource: "Google Map",
    reviewUrl: "https://www.google.com/travel/search?q=alagon%20saigon%20hotel%20%26%20spa&g2lb=4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121921501%2C121951222%2C122078727%2C122093076&hl=vi-VN&gl=vn&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MzE3NTJmM2VhMDQwNmJkNToweGRlZGY1N2E3MjY3ODUzOTESGhIUCgcI6g8QChgVEgcI6g8QChgWGAEyAggC&qs=CAEyFENnc0lrYWZoc19MMDFlX2VBUkFCOAJCCQmRU3gmp1ff3kIJCZFTeCanV9_e&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiQ0Mu9ysuXAxUAAAAAHQAAAAAQAw",
    booking: "https://www.agoda.com/vi-vn/alagon-saigon-hotel-spa/hotel/ho-chi-minh-city-vn.html?countryId=38&finalPriceView=1&isShowMobileAppPrice=false&cid=1922877&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2026-10-31&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=VND&isFreeOccSearch=false&tag=4071f3e0-25fc-4806-9618-66d1aadd7c86&tspTypes=16&los=1&searchrequestid=a4f095dd-e36a-4b7b-a2b0-c283d203baf5&ds=yP3lJ%2BhdzOBK4nPT",
    image: "https://images.trvl-media.com/lodging/6000000/5780000/5775300/5775230/3f2df98a.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
  },
  {
    id: 6,
    name: "Hotel Nikko Saigon",
    address: "235 Nguyễn Văn Cừ, TP.HCM",
    price: "3.000.000–5.000.000đ",
    tier: "luxury",
    stars: "5/5",
    rating: "4,7/5",
    reviewSource: "Google Map",
    reviewUrl: "https://www.google.com/travel/hotels/entity/ChcIxZPYp_-Pjcc1GgsvZy8xdjE2bXQzeRAB/reviews?q=hotel%20nikko%20saigon%20hotels&qs=OABIAA&ts=CAEaTAouEioKCy9nLzF2MTZtdDN5OhtUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgaABIaEhQKBwjqDxAKGBUSBwjqDxAKGBYYATICEAAqCQoFOgNWTkQaAA&ap=KigKEgmivOlKEWglQBFuJBIoCKpaQBISCcbXkqa3pSVAEW4kEigyrVpAMAA&utm_campaign=sharing&utm_medium=link&utm_source=htls",
    booking: "https://www.agoda.com/vi-vn/hotel-nikko-saigon/hotel/ho-chi-minh-city-vn.html?countryId=38&finalPriceView=1&isShowMobileAppPrice=false&cid=1922877&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2026-10-30&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=VND&isFreeOccSearch=false&tag=f8f7b28c-237b-4442-9efa-890bf3b061e8&tspTypes=16&los=1&searchrequestid=393c5526-47ac-404f-ad07-4c615292500c&ds=SWN612wCBK8jkVxU",
    image: "https://d3g2yh83to8qa2.cloudfront.net/wp-content/uploads/sites/12/2016/04/18031803/Nikko-Club-Deluxe-1560x1000.jpg"
  },
  {
    id: 7,
    name: "Rex Hotel Saigon",
    address: "141 Nguyễn Huệ, TP.HCM",
    price: "2.500.000–4.500.000đ",
    tier: "luxury",
    stars: "5/5",
    rating: "4,5/5",
    reviewSource: "Google Map",
    reviewUrl: "https://www.google.com/travel/search?q=rex%20hotel%20saigon&qs=MiRDaGNJeU9ybXFOdjZ5ZkRLQVJvS0wyMHZNREkzWDNjemJCQUI4AA&ts=CAEaGhIYEhIKBwjqDxAKGBUSBwjqDxAKGBYyAggAKgcKBToDVk5E&ap=KigKEgmt9ANgNoslQBHYF7-PxaxaQBISCYcVkbsQjyVAEdgXvy_4rFpAMAC6AQdyZXZpZXdz&utm_campaign=sharing&utm_medium=link&utm_source=htls",
    booking: "https://www.agoda.com/vi-vn/rex-hotel-saigon/hotel/ho-chi-minh-city-vn.html?countryId=38&finalPriceView=1&isShowMobileAppPrice=false&cid=1922877&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2026-10-30&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=VND&isFreeOccSearch=false&tag=6d9aefda-9606-4ece-bb25-dbfb61f17943&tspTypes=16&los=1&searchrequestid=fe13856a-0cfa-41b4-8364-650e2a46c549&ds=EN%2BMZaUmrr1yUCeQ",
    image: "https://www.vietnambooking.com/wp-content/uploads/2020/12/combo-khach-san-rex-sai-gon-13.jpg"
  },
  {
    id: 8,
    name: "Sofitel Saigon Plaza",
    address: "17 Lê Duẩn, TP.HCM",
    price: "3.000.000–6.000.000đ",
    tier: "luxury",
    stars: "5/5",
    rating: "4,7/5",
    reviewSource: "Google Map",
    reviewUrl: "https://www.google.com/travel/hotels/entity/ChcIy_aZ28uum_tMGgsvZy8xdGc3cGhwMRAB/reviews?utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAEaIAoCGgASGhIUCgcI6g8QChgVEgcI6g8QChgWGAEyAhAAKgkKBToDVk5EGgA",
    booking: "https://www.agoda.com/vi-vn/sofitel-saigon-plaza-hotel/hotel/ho-chi-minh-city-vn.html?cid=1917820&gad_source=1&gad_campaignid=21498991854&gbraid=0AAAAADgtCZyrv-FpNmX_daE-Nyl4qwqYE&gclid=CjwKCAjwxeHWBhBPEiwAiqtQ-Tet7hYyviKxim_IojTUzAnLMhNrBsnWjYpTPrr1ie6lsjAyb3hB0xoCDP8QAvD_BwE&ds=aSOKMEp3qGeSklyi",
    image: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/211/2023/10/31033755/Luxury-Club-Room-2-1170x780.jpg"
  }
];

const hotelTierNames = {
  budget: "Tiết kiệm",
  mid: "Tầm trung",
  luxury: "Cao cấp"
};

function renderHotels(tier = "all") {
  const list = document.getElementById("hotel-list");
  if (!list) return;

  const filtered = hotels.filter(h =>
    tier === "all" || h.tier === tier
  );

  list.innerHTML = filtered.map(h => `
    <article class="place-card hotel-card">
      <img src="${h.image}" alt="${h.name}" loading="lazy">

      <div class="place-info">
        <span class="tag">${hotelTierNames[h.tier]}</span>
        <h3>${h.name}</h3>

        <p>📍 ${h.address}</p>
        <p>💰 ${h.price}/đêm</p>

        <div class="hotel-ratings">
          <p>🏨 <strong>Hạng sao:</strong> ${h.stars}</p>
          <p>
            ⭐ <strong>Khách đánh giá:</strong> ${h.rating}
          </p>
          <a href="${h.reviewUrl}"
             target="_blank"
             rel="noopener noreferrer">
            Xem đánh giá trên ${h.reviewSource} ↗
          </a>
        </div>

        <div class="card-actions">
          <a class="primary-btn"
             href="${h.booking}"
             target="_blank"
             rel="noopener noreferrer">
            Đặt phòng ↗
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

document.querySelectorAll(".hotel-filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".hotel-filter").forEach(b =>
      b.classList.remove("active")
    );

    button.classList.add("active");
    renderHotels(button.dataset.price);
  });
});

renderHotels();

const plannerTabs = document.querySelectorAll(".planner-tab");

plannerTabs.forEach(button => {
  button.addEventListener("click", () => {
    plannerTabs.forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");

    const isSuggested = button.dataset.mode === "suggested";
    $("suggested-plans").hidden = !isSuggested;
    $("custom-planner").hidden = isSuggested;
  });
});

const suggestedPlans = {
  budget: [
    { id: 6, start: "08:00", end: "08:30" },
    { id: 2, start: "08:45", end: "09:15" },
    { id: 3, start: "10:00", end: "11:00" },
    { id: 101, start: "11:30", end: "12:15" },
    { id: 4, start: "17:00", end: "18:30" }
  ],

  experience: [
    { id: 1, start: "08:00", end: "10:00" },
    { id: 6, start: "10:15", end: "10:45" },
    { id: 2, start: "11:00", end: "11:30" },
    { id: 103, start: "12:00", end: "13:00" },
    { id: 3, start: "14:00", end: "15:00" },
    { id: 4, start: "17:00", end: "18:30" }
  ],

  relax: [
    { id: 5, start: "08:00", end: "10:00" },
    { id: 102, start: "11:00", end: "12:00" },
    { id: 6, start: "15:00", end: "15:30" },
    { id: 4, start: "17:00", end: "18:30" }
  ]
};

document.querySelectorAll("[data-plan]").forEach(button => {
  button.addEventListener("click", () => {
    const plan = suggestedPlans[button.dataset.plan];
    if (!plan) return;

    trip = plan.map(item => item.id);

    plan.forEach(item => {
      activitySchedule[item.id] = {
        start: item.start,
        end: item.end
      };
    });

    localStorage.setItem("saigon-trip", JSON.stringify(trip));
    localStorage.setItem(
      "saigon-activity-schedule",
      JSON.stringify(activitySchedule)
    );

    renderTrip();

    $("trip-status").textContent =
      "Đã tạo lịch trình gợi ý! Bà có thể chỉnh lại giờ từng hoạt động.";
    $("trip-name").value = {
      budget: "Một ngày Sài Gòn tiết kiệm",
      experience: "Trải nghiệm văn hóa Sài Gòn",
      relax: "Một ngày thư giãn ở Sài Gòn"
    }[button.dataset.plan];

    $("planner").scrollIntoView({ behavior: "smooth" });
  });
});

$("itinerary").addEventListener("change", event => {
  const input = event.target;
  const startId = input.dataset.timeStart;
  const endId = input.dataset.timeEnd;

  if (startId !== undefined) {
    activitySchedule[startId] = {
      ...activitySchedule[startId],
      start: input.value
    };
  } else if (endId !== undefined) {
    activitySchedule[endId] = {
      ...activitySchedule[endId],
      end: input.value
    };
  } else {
    return;
  }

  localStorage.setItem(
    "saigon-activity-schedule",
    JSON.stringify(activitySchedule)
  );
});

const originalSaveTrip = $("saveTrip").onclick;

$("saveTrip").addEventListener("click", () => {
  localStorage.setItem("saigon-trip", JSON.stringify(trip));
  localStorage.setItem(
    "saigon-activity-schedule",
    JSON.stringify(activitySchedule)
  );

  const date = $("trip-date").value;

  const schedule = trip.map(id => {
    const place = places.find(p => p.id === id);
    const times = activitySchedule[id] || {};

    return {
      name: place?.name || "",
      date,
      start: times.start || "",
      end: times.end || "",
      address: place?.address || place?.district || "",
      price: place?.price || 0
    };
  });

  localStorage.setItem(
    "saigon-trip-details",
    JSON.stringify({
      name: $("trip-name").value,
      date,
      budget: Number($("trip-budget").value) || 0,
      schedule
    })
  );

  $("trip-status").textContent =
    "Đã lưu lịch trình cùng ngày và giờ của từng hoạt động!";
})

function renderPlaceDetail() {
  const params = new URLSearchParams(window.location.search);
  const placeId = Number(params.get("place"));

  if (!placeId) return;

  const place = places.find(p => p.id === placeId);

  if (!place || place.category === "anuong") return;

  const main = document.querySelector("main");
  const detailSection = $("place-detail");
  const detailContent = $("place-detail-content");

  if (!main || !detailSection || !detailContent) return;

  // Ẩn các nội dung chính, chỉ hiển thị trang chi tiết
  [...main.children].forEach(section => {
    section.hidden = section.id !== "place-detail";
  });

  detailSection.hidden = false;

  detailContent.innerHTML = `
    <article class="place-detail-card">
      <img
        src="${place.image}"
        alt="${place.name}"
        class="detail-main-image"
      >

      <span class="tag">
        ${categoryNames[place.category] || "Địa điểm"}
      </span>

      <h1>${place.name}</h1>

      <p>📍 ${place.address || place.district || "Chưa cập nhật địa chỉ"}</p>
      <p>💰 Giá tham khảo: ${money(place.price)}</p>
      <p>🕒 Giờ hoạt động: ${place.hours || "Chưa cập nhật"}</p>
      <p>${place.details || place.desc || ""}</p>

      ${
        place.gallery?.length
          ? `<div class="detail-gallery">
              ${place.gallery.map(img => `
                <img src="${img}" alt="Ảnh ${place.name}" loading="lazy">
              `).join("")}
            </div>`
          : ""
      }

      <div class="card-actions">
        ${
          place.googleMapsUrl
            ? `<a class="primary-btn"
                 href="${place.googleMapsUrl}"
                 target="_blank"
                 rel="noopener noreferrer">
                 📍 Xem đánh giá trên Google Maps ↗
               </a>`
            : `<a class="primary-btn"
                 href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + " " + (place.address || place.district || "TP.HCM"))}"
                 target="_blank"
                 rel="noopener noreferrer">
                 📍 Tìm địa điểm trên Google Maps ↗
               </a>`
        }
      </div>
    </article>
  `;

  $("close-place-detail").onclick = () => {
    window.location.href = window.location.pathname;
  };
}

renderPlaceDetail();

/* ================================
   VIETNAMESE / ENGLISH LANGUAGE
================================ */

const languageSwitcher = document.getElementById("language-switcher");

const translations = {
  "Khám phá theo cách của bạn": "Explore your own way",
  "Giới thiệu": "About",
  "Địa điểm": "Places",
  "Bản đồ": "Map",
  "Di chuyển": "Transport",
  "Lưu trú": "Stays",
  "Lịch trình": "Itinerary",
  "Sài Gòn, theo cách": "Saigon, your way",
  "của bạn.": "your way.",
  "Tìm nơi để đi, món ngon để thử và hành trình phù hợp với thời gian, ngân sách của bạn.": "Find places to visit, local food to try, and a trip that fits your time and budget.",
  "Khám phá ngay ↗": "Explore now ↗",
  "✦ Thành phố không ngủ": "✦ The city that never sleeps",
  "Bạn muốn khám phá điều gì?": "What would you like to explore?",
  "VD: Bưu điện, cà phê, bảo tàng...": "E.g. Central Post Office, cafés, museums...",
  "Loại địa điểm": "Place category",
  "Tất cả địa điểm": "All places",
  "Tham quan": "Sightseeing",
  "Ăn uống": "Food & Drinks",
  "Vui chơi": "Entertainment",
  "Tìm kiếm": "Search",
  "Điểm đến nổi bật": "Featured Destinations",
  "Chọn nơi bạn muốn ghé thăm": "Choose places you would like to visit",
  "Không tìm thấy địa điểm phù hợp.": "No matching places found.",
  "Khám phá ẩm thực địa phương Sài Gòn": "Discover Saigon's local cuisine",
  "Không tìm thấy quán ăn phù hợp.": "No matching food places found.",
  "Bản đồ khám phá": "Explore the Map",
  "Chọn điểm đánh dấu để xem địa điểm": "Select a marker to view a place",
  "Chú thích ký hiệu": "Map Legend",
  "🍜 Quán ăn": "🍜 Food",
  "☕ Cà phê, trà sữa": "☕ Coffee & Milk Tea",
  "📸 Tham quan, check-in": "📸 Sightseeing & Photo Spots",
  "🏛️ Di tích, bảo tàng": "🏛️ Historic Sites & Museums",
  "🛍️ Chợ, mua sắm": "🛍️ Markets & Shopping",
  "🌳 Công viên": "🌳 Parks",
  "🚌 Bến xe": "🚌 Bus Stations",
  "🚇 Ga Metro": "🚇 Metro Stations",
  "Bản đồ cần Internet. Vị trí đánh dấu là vị trí tham khảo, hãy kiểm tra địa chỉ trước khi di chuyển.": "The map requires an internet connection. Markers show approximate locations; please check the address before travelling.",
  "Di chuyển thông minh": "Getting Around",
  "Metro số 1": "Metro Line 1",
  "Kết nối khu vực Bến Thành với Suối Tiên. Phù hợp khi đi giữa trung tâm và phía Đông thành phố.": "Connects Ben Thanh with Suoi Tien, making it convenient to travel between the city centre and the eastern part of the city.",
  "Xem trên bản đồ ↗": "View on map ↗",
  "Xe buýt": "Bus",
  "Tra cứu tuyến xe, điểm dừng và đường đi phù hợp với điểm xuất phát.": "Find bus routes, stops, and directions based on your starting point.",
  "Tìm đường công cộng ↗": "Find public transport ↗",
  "Đi bộ khám phá": "Explore on Foot",
  "Ghé các điểm gần nhau trong cùng khu vực để tận hưởng nhịp sống Sài Gòn.": "Visit nearby places in the same area and enjoy Saigon's local atmosphere.",
  "Xem đường đi bộ ↗": "View walking directions ↗",
  "Lưu trú tại Sài Gòn": "Where to Stay in Saigon",
  "Chọn nơi nghỉ phù hợp với ngân sách": "Choose accommodation that fits your budget",
  "Tất cả": "All",
  "Tiết kiệm": "Budget",
  "Tầm trung": "Mid-range",
  "Cao cấp": "Luxury",
  "Giá phòng mang tính tham khảo. Vui lòng kiểm tra giá, ngày lưu trú và tình trạng phòng trên trang đặt phòng.": "Room rates are indicative. Please check prices, stay dates, and availability on the booking website.",
  "Lên lịch trình Sài Gòn": "Plan Your Saigon Trip",
  "Chọn hành trình phù hợp với bạn": "Choose a trip that suits you",
  "✨ Lịch trình gợi ý": "✨ Suggested Itineraries",
  "✏️ Tự tạo lịch trình": "✏️ Create Your Own",
  "Chọn phong cách khám phá": "Choose Your Travel Style",
  "Ưu tiên địa điểm miễn phí, đi bộ và trải nghiệm ẩm thực vừa túi tiền.": "Focus on free attractions, walking, and affordable local food.",
  "Chọn lịch trình": "Choose Itinerary",
  "Trải nghiệm": "Experience",
  "Kết hợp di tích, văn hóa, món ngon và những góc đặc trưng của Sài Gòn.": "Combine historic sites, culture, local food, and iconic corners of Saigon.",
  "Thư giãn": "Relax",
  "Đi dạo, tận hưởng không gian xanh và khám phá thành phố với nhịp độ nhẹ nhàng.": "Take a stroll, enjoy green spaces, and explore the city at a relaxed pace.",
  "Tạo chuyến đi của riêng bạn": "Create Your Own Trip",
  "Thêm địa điểm từ mục “Điểm đến nổi bật” phía trên, rồi đặt giờ cho từng hoạt động.": "Add places from the Featured Destinations section above, then set a time for each activity.",
  "＋ Chọn địa điểm": "＋ Choose Places",
  "Thông tin chuyến đi": "Trip Details",
  "Tên chuyến đi": "Trip Name",
  "Một ngày ở Sài Gòn": "A Day in Saigon",
  "Ngày đi": "Travel Date",
  "Ngân sách dự kiến (VNĐ)": "Estimated Budget (VND)",
  "Hoạt động trong lịch trình": "Activities in Your Itinerary",
  "Xóa tất cả": "Clear All",
  "Chưa có hoạt động nào. Hãy chọn lịch trình gợi ý hoặc tự thêm địa điểm nhé!": "No activities yet. Choose a suggested itinerary or add places yourself!",
  "Lưu lịch trình": "Save Itinerary",
  "In / Lưu PDF": "Print / Save as PDF",
  "← Quay lại danh sách": "← Back to List",
  "Giá tham khảo": "Estimated price",
  "Giờ hoạt động": "Opening hours",
  "Chưa cập nhật": "Not available",
  "✓ Đã thêm": "✓ Added",
  "+ Thêm lịch trình": "+ Add to Itinerary",
  "📍 Xem đánh giá trên Google Maps ↗": "📍 View Google Maps Reviews ↗",
  "📍 Tìm địa điểm trên Google Maps ↗": "📍 Find on Google Maps ↗",
  "Xem đánh giá trên": "View reviews on",
  "Đặt phòng ↗": "Book Now ↗",
  "Hạng sao:": "Official Star Rating:",
  "Khách đánh giá:": "Guest Rating:",
  "Giờ bắt đầu": "Start Time",
  "Giờ kết thúc": "End Time",
  "✕ Xóa hoạt động": "✕ Remove Activity",
  "Chi phí tham khảo:": "Estimated cost:",
  "Đã cập nhật điểm đến.": "Destinations updated.",
  "Đã xóa các điểm đến khỏi lịch trình.": "All destinations have been removed from your itinerary.",
  "Bạn hãy chọn ít nhất một hoạt động trước khi xuất lịch trình nhé!": "Please add at least one activity before exporting your itinerary.",
  "Lịch trình Sài Gòn": "Saigon Itinerary",
  "Chưa chọn": "Not selected",
  "Chưa xác định": "Not specified",
  "Các hoạt động đã chọn": "Selected Activities",
  "Trình duyệt đang chặn cửa sổ in. Bạn hãy cho phép cửa sổ bật lên nhé!": "Your browser blocked the print window. Please allow pop-ups and try again.",
  "Không tải được bản đồ. Hãy kiểm tra kết nối Internet.": "The map could not be loaded. Please check your internet connection.",
  "Đã thêm địa điểm từ bản đồ.": "Place added from the map.",
  "Đã tạo lịch trình gợi ý! Bà có thể chỉnh lại giờ từng hoạt động.": "Suggested itinerary created! You can adjust the time of each activity.",
  "Đã lưu lịch trình cùng ngày và giờ của từng hoạt động!": "Itinerary saved with the date and time of each activity!",
  "Một ngày Sài Gòn tiết kiệm": "A Budget-Friendly Day in Saigon",
  "Trải nghiệm văn hóa Sài Gòn": "Discover Saigon's Culture",
  "Một ngày thư giãn ở Sài Gòn": "A Relaxing Day in Saigon",
  "Quán lâu năm": "Long-established Café",
  "Cà phê check-in": "Photo-worthy Café",
  "Địa điểm khác": "Other Places",
  "Địa điểm": "Place",
  "Ăn uống": "Food & Drinks",

  // Tiêu đề và giao diện
  "Điểm đến nổi bật": "Featured Destinations",
  "Bản đồ khám phá": "Explore the Map",
  "Di chuyển thông minh": "Smart Transportation",
  "Di chuyển thông minh": "Smart Transportation",
  "Lưu trú tại Sài Gòn": "Where to Stay in Saigon",
  "Lên lịch trình Sài Gòn": "Plan Your Saigon Trip",
  "Sài Gòn, theo cách của bạn.": "Saigon, Your Way.",
  "Khám phá theo cách của bạn": "Explore Your Way",
  "Tìm kiếm địa điểm...": "Search for places...",
  "Tất cả danh mục": "All Categories",
  "Tham quan": "Sightseeing",
  "Vui chơi": "Entertainment",
  "Quán ăn": "Restaurants",
  "Giá tham khảo:": "Estimated price:",
  "Vé tham khảo:": "Estimated ticket price:",
  "Giờ hoạt động:": "Opening hours:",
  "Chưa cập nhật": "Not available",
  "+ Thêm lịch trình": "+ Add to itinerary",
  "✓ Đã thêm": "✓ Added",
  "Đã thêm lịch trình": "Added to itinerary",
  "Đã cập nhật điểm đến.": "Destination updated.",
  "Đã xóa các điểm đến khỏi lịch trình.": "Destinations removed from your itinerary.",
  "Chi phí tham khảo:": "Estimated cost:",
  "Giờ bắt đầu": "Start time",
  "Giờ kết thúc": "End time",
  "Xóa hoạt động": "Remove activity",
  "Đã lưu lịch trình trên trình duyệt này!": "Your itinerary has been saved in this browser!",
  "Tiết kiệm": "Budget-friendly",
  "Trải nghiệm": "Experience",
  "Thư giãn": "Relaxation",
  "Tự tạo lịch trình": "Create Your Own Itinerary",
  "Chọn ngày đi": "Select travel date",
  "Ngân sách": "Budget",
  "Lưu lịch trình": "Save Itinerary",
  "Xuất lịch trình": "Export Itinerary",
  "Đặt phòng": "Book Now",
  "Tầm trung": "Mid-range",
  "Cao cấp": "Luxury",
  "Đánh giá khách hàng": "Guest Rating",
  "Sao được công nhận": "Official Star Rating",
  "Bản đồ": "Map",
  "Di chuyển": "Transportation",
  "Lưu trú": "Accommodation",
  "Lịch trình": "Itinerary",
  "Giới thiệu": "About",

  // Mô tả 6 địa điểm nổi bật
  "Giải mã di sản - khám phá kiến trúc và những điều thú vị.":
    "Uncover the city's heritage through its architecture and fascinating stories.",
  "Dấu ấn đức tin - tìm hiểu về Công giáo và đời sống tín ngưỡng.":
    "Discover the history of Catholicism and religious life in the city.",
  "Nhịp sống thương hồ - tìm hiểu hoạt động mua bán và văn hoá chợ.":
    "Experience the lively trading scene and traditional market culture.",
  "Sài Gòn về đêm - khám phá vẻ đẹp thành phố khi lên đèn.":
    "Discover the beauty of Saigon as the city lights up at night.",
  "Ốc đảo xanh - tìm hiểu hệ thực vật và không gian thiên nhiên.":
    "A green oasis filled with diverse plant life and natural scenery.",
  "Góc check-in hoài cổ - tìm hiểu vai trò của bưu điện trong đời sống.":
    "A nostalgic photo spot showcasing the post office's role in city life.",

  // Mô tả các quán ăn
  "Thưởng thức bánh bèo và món ăn mang hương vị Huế.":
    "Enjoy banh beo and other dishes inspired by Hue cuisine.",
  "Gợi ý địa điểm thưởng thức cơm tấm Sài Gòn.":
    "A local spot to enjoy Saigon-style broken rice.",
  "Thưởng thức phở bò truyền thống.":
    "Enjoy traditional Vietnamese beef pho.",
  "Hủ tiếu mang phong vị Hoa - Việt.":
    "Chinese-Vietnamese noodle soup with a distinctive local flavor.",
  "Phở gà và miến gà.":
    "Vietnamese chicken pho and glass-noodle soup.",
  "Bánh mì với nhiều lớp nhân và pate.":
    "Vietnamese baguettes filled with assorted meats and pâté.",
  "Bánh xèo Việt Nam nổi tiếng lâu năm.":
    "A long-established local favorite serving traditional Vietnamese sizzling pancakes.",
  "Các món chè và tráng miệng Việt Nam.":
    "Traditional Vietnamese sweet soups and desserts.",
  "Cơm tấm sườn bì chả.":
    "Broken rice served with grilled pork, shredded pork skin, and Vietnamese pork loaf.",

  // Nội dung hướng dẫn và thông báo
  "Bạn hãy chọn ít nhất một hoạt động trước khi xuất lịch trình nhé!":
    "Please select at least one activity before exporting your itinerary.",
  "Trình duyệt đang chặn cửa sổ in. Bạn hãy cho phép cửa sổ bật lên nhé!":
    "Your browser blocked the print window. Please allow pop-ups and try again.",
  "Không tải được bản đồ. Hãy kiểm tra kết nối Internet.":
    "The map could not be loaded. Please check your internet connection.",
  "Các hoạt động đã chọn": "Selected Activities",
  "Ngày đi:": "Travel date:",
  "Chưa chọn": "Not selected",
  "Chưa xác định": "Not specified",
  "Chuyến đi Sài Gòn": "Saigon Trip",
  "Lịch trình Sài Gòn": "Saigon Itinerary",

  // Tab Giới thiệu
  "Khám phá Sài Gòn theo cách của bạn!": "Explore Saigon Your Way!",
  "Saigon Smart Trip là website hỗ trợ khám phá TP.HCM với các chức năng tìm kiếm địa điểm, quán ăn địa phương, khách sạn, tra cứu bản đồ và phương tiện di chuyển. Đặc biệt, người dùng có thể tạo lịch trình theo gợi ý hoặc tự thiết kế chuyến đi theo thời gian và ngân sách cá nhân.": "Saigon Smart Trip is a website designed to help users explore Ho Chi Minh City through features such as destination search, local food recommendations, hotel listings, maps, and transportation information. Users can also follow suggested itineraries or create their own trips based on their personal schedules and budgets.",
  "Đây là sản phẩm do nhóm chúng em thực hiện trong khuôn khổ dự án “50:01 - Khắc Dấu Rạng Đông (Echoes Into Tomorrow)”, với mong muốn kết hợp công nghệ và trải nghiệm thực tế, mang đến một cách khám phá Sài Gòn thuận tiện, sáng tạo và gần gũi hơn.": "This website was developed by our team as part of the “50:01 - Echoes Into Tomorrow” project. By combining technology with real-world experiences, we aim to make exploring Saigon more convenient, creative, and accessible.",
  "Khắc Dấu Rạng Đông": "Echoes Into Tomorrow",
  "THPT Lê Quý Đôn · 11A10 · Nhóm 5": "Le Quy Don High School · Class 11A10 · Group 5",
  "Thành viên nhóm": "Team Members",
  "Quay lại trang chủ": "Back to Home",
   // Thông tien giới thiệu 
  "Số điện thoại": "Phone",
  "(Trưởng nhóm)": "(Leader)",
};

const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();

function translateTextNode(node, language) {
  if (!originalTextNodes.has(node)) {
    originalTextNodes.set(node, node.nodeValue);
  }

  const original = originalTextNodes.get(node);

  if (language === "vi") {
    node.nodeValue = original;
    return;
  }

  let translated = original;

  Object.entries(translations)
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([vi, en]) => {
      translated = translated.split(vi).join(en);
    });

  // Translate common labels embedded in dynamic card text.
 translated = translated
  .replaceAll("Giá tham khảo:", "Estimated price:")
  .replaceAll("Giờ hoạt động:", "Opening hours:")
  .replaceAll("Chi phí tham khảo:", "Estimated cost:")
  .replace(/(\d[\d.,]*)đ(?=\/đêm|\b|$)/g, "$1 VND")
  .replaceAll("đ/đêm", " VND/night");

  node.nodeValue = translated;
}

function translateAttribute(element, attribute, language) {
  const key = `${attribute}`;

  if (!originalAttributes.has(element)) {
    originalAttributes.set(element, {});
  }

  const saved = originalAttributes.get(element);

  if (!(key in saved)) {
    saved[key] = element.getAttribute(attribute);
  }

  const original = saved[key];
  if (original === null) return;

  if (language === "vi") {
    element.setAttribute(attribute, original);
    return;
  }

  let translated = original;

  Object.entries(translations)
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([vi, en]) => {
      translated = translated.split(vi).join(en);
    });

  element.setAttribute(attribute, translated);
}

function applyLanguage(language) {
  const lang = language === "en" ? "en" : "vi";
  document.documentElement.lang = lang;
  document.title = lang === "en"
    ? "Saigon Smart Trip | Explore Saigon"
    : "Saigon Smart Trip | Khám phá Sài Gòn";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const viText = {
      navAbout: "Giới thiệu",
      navPlaces: "Địa điểm",
      navMap: "Bản đồ",
      navTransport: "Di chuyển",
      navHotels: "Lưu trú",
      navPlanner: "Lịch trình"
    }[key];

    if (viText) {
      if (!originalTextNodes.has(element.firstChild) && element.firstChild) {
        originalTextNodes.set(element.firstChild, viText);
      }

      if (element.firstChild) {
        element.firstChild.nodeValue = lang === "en"
          ? translations[viText] || viText
          : viText;
      }
    }
  });

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );

  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest("script, style, option#language-switcher")) {
      continue;
    }
    translateTextNode(node, lang);
  }

  document.querySelectorAll("input[placeholder], img[alt], [aria-label]").forEach(element => {
    ["placeholder", "alt", "aria-label"].forEach(attribute => {
      if (element.hasAttribute(attribute)) {
        translateAttribute(element, attribute, lang);
      }
    });
  });

  document.querySelectorAll("#category option").forEach(option => {
    translateTextNode(option.firstChild, lang);
  });

  localStorage.setItem("saigon-language", lang);

  if (languageSwitcher) {
    languageSwitcher.value = lang;
  }
}

if (languageSwitcher) {
  languageSwitcher.addEventListener("change", () => {
    applyLanguage(languageSwitcher.value);
  });
}

// Translate newly rendered cards and itinerary items too.
const languageObserver = new MutationObserver(() => {
  const language = localStorage.getItem("saigon-language") || "vi";
  if (language === "en") {
    applyLanguage("en");
  }
});

languageObserver.observe(document.body, {
  childList: true,
  subtree: true
});

applyLanguage(localStorage.getItem("saigon-language") || "vi");
