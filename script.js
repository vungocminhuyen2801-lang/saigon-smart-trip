const places = [
  {
    id: 1,
    name: "Dinh Độc Lập",
    category: "thamquan",
    district: "Quận 1",
    price: 65000,
    desc: "Giải mã di sản - khám phá kiến trúc và những điều thú vị.",
    lat: 10.7769,
    lng: 106.6952,
    image: "https://dinhdoclap.gov.vn/wp-content/uploads/2025/12/luu-nhap-tu-dong-9989.jpg"
  },
  {
    id: 2,
    name: "Nhà thờ Đức Bà",
    category: "thamquan",
    district: "Quận 1",
    price: 0,
    desc: "Dấu ấn đức tin - tìm hiểu về Công giáo và đời sống tín ngưỡng.",
    lat: 10.7798,
    lng: 106.6990,
    image: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/1-10.jpg"
  },
  {
    id: 3,
    name: "Chợ Bến Thành",
    category: "anuong",
    district: "Quận 1",
    price: 100000,
    desc: "Nhịp sống thương hồ - tìm hiểu hoạt động mua bán và văn hoá chợ.",
    lat: 10.7725,
    lng: 106.6980,
    image: "https://cdn2.tuoitre.vn/tcdulichtphcm/media/upload/2-2024/images/2024-05-30/1717044592-1.jpg"
  },
  {
    id: 4,
    name: "Phố đi bộ Nguyễn Huệ",
    category: "vuichoi",
    district: "Quận 1",
    price: 200000,
    desc: "Sài Gòn về đêm - khám phá vẻ đẹp thành phố khi lên đèn.",
    lat: 10.7742,
    lng: 106.7030,
    image: "https://www.themystdongkhoihotel.com/wp-content/uploads/2025/07/nguyen-hue-walking-street.jpg"
  },
  {
    id: 5,
    name: "Thảo Cầm Viên",
    category: "vuichoi",
    district: "Quận 1",
    price: 60000,
    desc: "Ốc đảo xanh - tìm hiểu hệ thực vật và không gian thiên nhiên.",
    lat: 10.7879,
    lng: 106.7053,
    image: "https://cdn2.tuoitre.vn/nld/291774122806476800/2025/2/16/z6118774158552d66f286247f6997086e49af0adb03e60-1739677454747975981421.jpg"
  },
  {
    id: 6,
    name: "Bưu điện Thành phố",
    category: "thamquan",
    district: "Quận 1",
    price: 0,
    desc: "Góc check-in hoài cổ - tìm hiểu vai trò của bưu điện trong đời sống.",
    lat: 10.7798,
    lng: 106.6996,
    image: "https://images2.thanhnien.vn/528068263637045248/2023/6/5/hcm-1685938434919901822107.jpg"
  },
  {
    id: 101,
    name: "Bánh Bèo Huế O Trinh",
    category: "anuong",
    district: "Bến Thành",
    address: "126 Bùi Thị Xuân, TP. Hồ Chí Minh",
    price: 50000,
    desc: "Thưởng thức bánh bèo và món ăn mang hương vị Huế.",
    lat: 10.7708,
    lng: 106.6896,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLA295Vnw2wGzwfIwoFn3Xi4iRWvvBbSZWldQDrkMcA&s=10"
  },
  {
    id: 102,
    name: "Cơm tấm Dì Tám",
    category: "anuong",
    district: "Tân Định",
    address: "107 Nguyễn Hữu Cầu, TP. Hồ Chí Minh",
    price: 60000,
    desc: "Gợi ý địa điểm thưởng thức cơm tấm Sài Gòn.",
    lat: 10.7900,
    lng: 106.6910,
    image: "https://mms.img.susercontent.com/vn-11134513-7r98o-lyde3m7tzc5pc7@resize_ss1242x600!@crop_w1242_h600_cT"
  },
  {
    id: 103,
    name: "Phở Hòa Pasteur",
    category: "anuong",
    district: "Xuân Hòa",
    address: "260C Pasteur, TP. Hồ Chí Minh",
    price: 90000,
    desc: "Thưởng thức phở bò truyền thống.",
    lat: 10.7820,
    lng: 106.6860,
    image: "https://mia.vn/media/uploads/blog-du-lich/pho-hoa-pasteur-sai-gon-03-1720570419.jpg"
  },
  {
    id: 104,
    name: "Hủ Tiếu Hồng Phát",
    category: "anuong",
    district: "Bến Thành",
    address: "293-295 Lý Tự Trọng, TP. Hồ Chí Minh",
    price: 80000,
    desc: "Hủ tiếu mang phong vị Hoa - Việt.",
    lat: 10.7725,
    lng: 106.6955,
    image: "https://mms.img.susercontent.com/vn-11134513-7r98o-lstpmnp23x6s50@resize_ss1242x600!@crop_w1242_h600_cT"
  },
  {
    id: 105,
    name: "Phở Miến gà Kỳ Đồng",
    category: "anuong",
    district: "Nhiêu Lộc",
    address: "14/5Bis Kỳ Đồng, TP. Hồ Chí Minh",
    price: 70000,
    desc: "Phở gà và miến gà.",
    lat: 10.7850,
    lng: 106.6800,
    image: "https://mms.img.susercontent.com/vn-11134513-7r98o-ltkg9q5i7vgq56@resize_ss1242x600!@crop_w1242_h600_cT"
  },
  {
    id: 106,
    name: "Bánh Mì Huynh Hoa",
    category: "anuong",
    district: "Bến Thành",
    address: "26 Lê Thị Riêng, TP. Hồ Chí Minh",
    price: 70000,
    desc: "Bánh mì với nhiều lớp nhân và pate.",
    lat: 10.7697,
    lng: 106.6924,
    image: "https://img.vietcetera.com/uploads/images/31-dec-2024/dscf0592.jpg"
  },
  {
    id: 107,
    name: "Bánh Xèo 46A",
    category: "anuong",
    district: "Tân Định",
    address: "46A Đinh Công Tráng, TP. Hồ Chí Minh",
    price: 100000,
    desc: "Bánh xèo Việt Nam nổi tiếng lâu năm.",
    lat: 10.7890,
    lng: 106.6940,
    image: "https://mia.vn/media/uploads/blog-du-lich/banh-xeo-dinh-cong-trang-nhan-banh-1744036750.jpg"
  },
  {
    id: 108,
    name: "Chè Hiển Khánh",
    category: "anuong",
    district: "Bàn Cờ",
    address: "718 Nguyễn Đình Chiểu, TP. Hồ Chí Minh",
    price: 40000,
    desc: "Các món chè và tráng miệng Việt Nam.",
    lat: 10.7720,
    lng: 106.6820,
    image: "https://assets.grab.com/wp-content/uploads/sites/11/2019/08/30180918/RNI-Films-IMG-48F89E25-E443-4A2E-A084-12F607549D44.jpg"
  },
  {
    id: 110,
    name: "Cơm Tấm Sà Bì Chưởng",
    category: "anuong",
    district: "Chợ Quán",
    address: "179 Trần Bình Trọng, TP. Hồ Chí Minh",
    price: 80000,
    desc: "Cơm tấm sườn bì chả.",
    lat: 10.7600,
    lng: 106.6800,
    image: "https://mia.vn/media/uploads/blog-du-lich/sa-bi-chuong-4-1750672358.jpg"
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
    (category === "all" || p.category === category) &&
    `${p.name} ${p.district} ${p.desc}`
      .toLocaleLowerCase("vi").includes(query)
  );

  $("empty-state").hidden = filtered.length > 0;

  $("place-list").innerHTML = filtered.map(p => `
    <article class="place-card">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="place-info">
        <span class="tag">${categoryNames[p.category]}</span>
        <h3>${p.name}</h3>
        <p>📍 ${p.district} · Vé tham khảo: ${money(p.price)}</p>
        <p>${p.desc}</p>
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
}

$("place-list").addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  const favButton = event.target.closest("[data-fav]");

  if (addButton) {
    const id = Number(addButton.dataset.add);
    trip = trip.includes(id) ? trip : [...trip, id];
    renderTrip();
    $("trip-status").textContent = "Đã cập nhật điểm đến.";
  }

  if (favButton) {
    const id = Number(favButton.dataset.fav);
    favorites = favorites.includes(id)
      ? favorites.filter(x => x !== id)
      : [...favorites, id];

    localStorage.setItem("saigon-favorites", JSON.stringify(favorites));
    renderPlaces();
  }
});

$("itinerary").addEventListener("click", event => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;

  trip = trip.filter(id => id !== Number(button.dataset.remove));
  renderTrip();
});

$("searchBtn").addEventListener("click", renderPlaces);
$("search").addEventListener("input", renderPlaces);
$("category").addEventListener("change", renderPlaces);

$("clearTrip").addEventListener("click", () => {
  trip = [];
  renderTrip();
  $("trip-status").textContent = "Đã xóa các điểm đến khỏi lịch trình.";
});

$("saveTrip").addEventListener("click", () => {
  const itineraryData = {
    name: $("trip-name").value.trim() || "Chuyến đi Sài Gòn",
    date: $("trip-date").value,
    budget: Number($("trip-budget").value) || 0,
    places: trip
  };

  localStorage.setItem("saigon-trip", JSON.stringify(trip));
  localStorage.setItem("saigon-trip-details", JSON.stringify(itineraryData));

  $("trip-status").textContent =
    "Đã lưu lịch trình trên trình duyệt này!";
});


$("printTrip").addEventListener("click", () => {
  const itinerary = $("itinerary");

  if (!itinerary || itinerary.children.length === 0) {
    alert("Bà hãy chọn ít nhất một hoạt động trước khi xuất lịch trình nhé!");
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
    alert("Trình duyệt đang chặn cửa sổ in. Bà hãy cho phép cửa sổ bật lên nhé!");
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

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

 
const categoryIcons = {
  food: "🍜",
  cafe: "☕",
  sightseeing: "📸",
  history: "🏛️",
  shopping: "🛍️",
  park: "🌳",
  bus: "🚌",
  metro: "🚇"
};

const categoryNames = {
  food: "Quán ăn",
  cafe: "Cà phê, trà sữa",
  sightseeing: "Tham quan, check-in",
  history: "Di tích, bảo tàng",
  shopping: "Chợ, mua sắm",
  park: "Công viên",
  bus: "Bến xe",
  metro: "Ga Metro"
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
    reviewUrl: "hhttps://www.google.com/travel/search?q=Liberty%20Central%20Saigon%20Citypoint&g2lb=4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121921501%2C121951222%2C122078727%2C122093076&hl=vi-VN&gl=vn&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MzE3NTJmNDc2ZTU5OGNiMToweDc2NzIwYjEzNThlYjkyNjASGhIUCgcI6g8QChgVEgcI6g8QChgWGAEyAggC&qs=CAEyE0Nnb0k0S1N1eDdYaWdybDJFQUU4AkIJCWCS61gTC3J2QgkJYJLrWBMLcnY&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwj4obnGy8uXAxUAAAAAHQAAAAAQAw",
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
});