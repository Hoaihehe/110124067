// 1. DỮ LIỆU TẬP TRUNG 12 LAPTOP ASUS GAMING
const productList = [
    { 
        id: "1", 
        name: "Laptop ASUS Gaming V16 V3607VU-RP343W", 
        price: 24990000, 
        image: "../assets/images/laptop1.jpg", 
        desc: "Thiết kế hầm hố, tản nhiệt mát mẻ, lựa chọn tuyệt vời cho game thủ eSports.",
        specs: {
            "CPU": "Intel Core 5-210H",
            "Card đồ họa (GPU)": "NVIDIA GeForce RTX 4050",
            "Dung lượng RAM": "16GB",
            "Ổ cứng": "512GB SSD",
            "Màn hình": "16 inches WUXGA"
        }
    },
    { 
        id: "2", 
        name: "Laptop ASUS Gaming Vivobook 16X K3605VC", 
        price: 19990000, 
        image: "../assets/images/laptop2.jpg", 
        desc: "Dòng Vivobook lai Gaming mỏng nhẹ nhưng vẫn sở hữu sức mạnh đồ họa ấn tượng.",
        specs: {
            "CPU": "Intel Core i5-13420H",
            "Card đồ họa (GPU)": "NVIDIA GeForce RTX 3050",
            "Dung lượng RAM": "16GB",
            "Ổ cứng": "512GB SSD",
            "Màn hình": "16 inches WUXGA"
        }
    },
    { 
        id: "3", 
        name: "Laptop ASUS TUF Gaming F16 FX607VU-RL045W", 
        price: 26990000, 
        image: "../assets/images/laptop3.jpg", 
        desc: "Độ bền chuẩn quân đội, hiệu năng cực khỏe để cày cuốc ngày đêm.",
        specs: {
            "CPU": "Intel Core 5-210H",
            "Card đồ họa (GPU)": "NVIDIA GeForce RTX 4050",
            "Dung lượng RAM": "16GB",
            "Ổ cứng": "512GB SSD",
            "Màn hình": "16 inches FHD+"
        }
    },
    { 
        id: "4", 
        name: "Laptop ASUS TUF Gaming F16 FX608JHR-RV037W", 
        price: 35890000, 
        image: "../assets/images/laptop4.jpg", 
        desc: "Bản nâng cấp toàn diện với chip i7 siêu phân luồng và không gian lưu trữ 1TB rộng rãi.",
        specs: {
            "CPU": "Intel Core i7-14650HX",
            "Card đồ họa (GPU)": "NVIDIA GeForce RTX 5050",
            "Dung lượng RAM": "16GB",
            "Ổ cứng": "1TB SSD",
            "Màn hình": "16 inches WUXGA"
        }
    },
    { 
        id: "5", 
        name: "Laptop ASUS TUF Gaming A15 FA506NCG-HN184W", 
        price: 22490000, 
        image: "../assets/images/laptop5.jpg", 
        desc: "Cấu hình đội đỏ AMD Ryzen 7 mạnh mẽ, đa nhiệm cực tốt và tiết kiệm pin.",
        specs: {
            "CPU": "AMD Ryzen 7-7445HS",
            "Card đồ họa (GPU)": "NVIDIA GeForce RTX 3050",
            "Dung lượng RAM": "16GB",
            "Ổ cứng": "512GB SSD",
            "Màn hình": "15.6 inches Full HD"
        }
    },
    { 
        id: "6", 
        name: "Laptop ASUS TUF Gaming F16 FX608JHI-TU209W", 
        price: 39990000, 
        image: "../assets/images/laptop6.jpg", 
        desc: "Sức mạnh tuyệt đỉnh với card đồ họa RTX 5050 thế hệ mới nhất.",
        specs: {
            "CPU": "Intel Core i7-14650HX",
            "Card đồ họa (GPU)": "NVIDIA GeForce RTX 5050",
            "Dung lượng RAM": "16GB",
            "Ổ cứng": "512GB SSD",
            "Màn hình": "16 inches WUXGA"
        }
    },
    { 
        id: "7", 
        name: "Laptop ASUS ROG Strix G16 G614PH-S5101W", 
        price: 43990000, 
        image: "../assets/images/laptop7.jpg", 
        desc: "Dòng ROG cao cấp, tản nhiệt kim loại lỏng, dải LED RGB viền máy cực kỳ rực rỡ.",
        specs: {
            "CPU": "AMD Ryzen 9-8940HX",
            "Card đồ họa (GPU)": "NVIDIA GeForce RTX 5050",
            "Dung lượng RAM": "16GB",
            "Ổ cứng": "512GB SSD",
            "Màn hình": "16 inches WQXGA"
        }
    },
    { 
        id: "8", 
        name: "Laptop ASUS ROG Flow Z13 GZ302EA-RU145WS", 
        price: 92990000, 
        image: "../assets/images/laptop8.jpg", 
        desc: "Tablet Gaming mạnh nhất thế giới, thiết kế tháo rời bàn phím đỉnh cao công nghệ.",
        specs: {
            "CPU": "AI MAX+ 395",
            "Card đồ họa (GPU)": "AMD Radeon",
            "Dung lượng RAM": "128GB",
            "Ổ cứng": "1TB SSD",
            "Màn hình": "13.4 inches WQXGA"
        }
    },
    { 
        id: "9", 
        name: "Laptop ASUS Gaming V16 V3607VJ-RP071W", 
        price: 24290000, 
        image: "../assets/images/laptop9.jpg", 
        desc: "Màn hình tỉ lệ 16:10 mở rộng không gian hiển thị, lý tưởng cho lập trình viên.",
        specs: {
            "CPU": "Intel Core 5-210H",
            "Card đồ họa (GPU)": "NVIDIA GeForce RTX 3050",
            "Dung lượng RAM": "16GB",
            "Ổ cứng": "512GB SSD",
            "Màn hình": "16 inches WUXGA"
        }
    },
    { 
        id: "10", 
        name: "Laptop ASUS ROG Zephyrus G14 GA403GM-SY004W", 
        price: 63590000, 
        image: "../assets/images/laptop10.jpg", 
        desc: "Cỗ máy 14 inch mạnh nhất, màn hình 3K OLED siêu đẹp, mặt lưng AniMe Matrix độc đáo.",
        specs: {
            "CPU": "AMD Ryzen 9 AI 465",
            "Card đồ họa (GPU)": "NVIDIA GeForce RTX 5060",
            "Dung lượng RAM": "32GB",
            "Ổ cứng": "1TB SSD",
            "Màn hình": "14.0 inches 3K OLED"
        }
    },
    { 
        id: "11", 
        name: "Laptop ASUS TUF Dash F15 (Custom 32GB Edition)", 
        price: 27500000, 
        image: "../assets/images/laptop11.jpg", 
        desc: "Cấu hình quốc dân cực kỳ tối ưu. Với sẵn 32GB RAM và card RTX 3060, máy dư sức cân mượt Wuthering Waves hay Vùng Đất Anh Hùng ở mức đồ họa cao nhất mà không lo tràn bộ nhớ.",
        specs: {
            "CPU": "Intel Core i5-12450H",
            "Card đồ họa (GPU)": "NVIDIA GeForce RTX 3060 6GB",
            "Dung lượng RAM": "32GB DDR5 4800MHz",
            "Ổ cứng": "512GB PCIe Gen4 SSD",
            "Màn hình": "15.6 inches FHD 144Hz"
        }
    },
    { 
        id: "12", 
        name: "Laptop ASUS ROG Strix SCAR 16", 
        price: 75000000, 
        image: "../assets/images/laptop12.jpg", 
        desc: "Quái vật phần cứng. Xử lý mượt mà các bài toán mô phỏng hệ thống phức tạp, từ hàng đợi siêu thị đến các chuỗi thuật toán đa luồng nặng nề nhất.",
        specs: {
            "CPU": "Intel Core i9-14900HX",
            "Card đồ họa (GPU)": "NVIDIA GeForce RTX 4080 12GB",
            "Dung lượng RAM": "32GB DDR5 5600MHz",
            "Ổ cứng": "1TB PCIe Gen4 SSD",
            "Màn hình": "16 inches 2.5K (2560x1600) 240Hz Mini LED"
        }
    }
];

// 2. KHỞI TẠO GIỎ HÀNG TỪ LOCALSTORAGE
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 3. HÀM CẬP NHẬT SỐ LƯỢNG TRÊN MENU
function updateCartUI() {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) cartCountEl.innerText = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
}

// 4. XỬ LÝ ĐỔ DỮ LIỆU TRANG DANH SÁCH (san-pham.html)
function renderProducts() {
    const listEl = document.getElementById('product-list');
    if (!listEl) return;
    listEl.innerHTML = productList.map(p => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card shadow-sm h-100 border-0 rounded-3 text-center">
                <div class="p-3">
                    <img src="${p.image}" class="card-img-top object-fit-contain" alt="${p.name}" style="height: 180px;">
                </div>
                <div class="card-body d-flex flex-column border-top pt-3">
                    <h5 class="card-title fs-6 fw-bold text-dark" style="min-height: 48px;">${p.name}</h5>
                    <p class="text-danger fw-bold fs-5 mt-2">${p.price.toLocaleString('vi-VN')}đ</p>
                    
                    <div class="d-flex justify-content-center gap-2 mb-3 mt-1">
                        <span class="badge bg-light text-dark border">${p.specs["Dung lượng RAM"]}</span>
                        <span class="badge bg-light text-dark border">${p.specs["Ổ cứng"]}</span>
                    </div>

                    <a href="chi-tiet.html?id=${p.id}" class="btn btn-outline-primary mt-auto w-100 fw-bold">Chi tiết</a>
                </div>
            </div>
        </div>
    `).join('');
}

// 5. XỬ LÝ ĐỔ DỮ LIỆU ĐỘNG TRANG CHI TIẾT (chi-tiet.html)
function renderDetail() {
    const detailEl = document.getElementById('product-detail');
    if (!detailEl) return;

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const product = productList.find(p => p.id === id);

    if (product) {
        let specsRows = "";
        if (product.specs) {
            for (const [key, value] of Object.entries(product.specs)) {
                specsRows += `
                    <tr>
                        <td class="bg-light text-secondary p-3" style="width: 30%; font-weight: 500;">${key}</td>
                        <td class="p-3 text-dark" style="line-height: 1.6;">${value}</td>
                    </tr>
                `;
            }
        }

        detailEl.innerHTML = `
            <div class="col-md-5 text-center mb-4">
                <img src="${product.image}" class="img-fluid rounded shadow-sm p-4 bg-white" alt="${product.name}" style="max-height: 400px; object-fit: contain;">
            </div>
            <div class="col-md-7 ps-md-4">
                <h1 class="fw-bold h2 text-dark">${product.name}</h1>
                <h2 class="text-danger my-3 fw-bold">${product.price.toLocaleString('vi-VN')} VNĐ</h2>
                <p class="text-muted fs-6 mb-4" style="line-height: 1.6;">${product.desc}</p>
                <div class="mb-4">
                    <button class="btn btn-primary btn-lg px-4 py-2 fw-bold shadow-sm" onclick="addToCart('${product.id}')">Thêm vào giỏ hàng</button>
                    <a href="san-pham.html" class="btn btn-outline-secondary btn-lg px-4 py-2 ms-2 fw-bold">Quay lại shop</a>
                </div>
            </div>
            
            ${specsRows ? `
                <div class="col-12 mt-5 mb-5">
                    <div class="d-flex justify-content-between align-items-end mb-3">
                        <h3 class="fw-bold h4 mb-0 text-dark">Thông số kỹ thuật</h3>
                    </div>
                    <div class="border rounded overflow-hidden shadow-sm bg-white">
                        <table class="table table-bordered mb-0 align-middle">
                            <tbody>
                                ${specsRows}
                            </tbody>
                        </table>
                    </div>
                </div>
            ` : ""}
        `;
    }
}

// 6. THÊM VÀO GIỎ HÀNG
window.addToCart = function(id) {
    const product = productList.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
    alert("Đã thêm " + product.name + " vào giỏ hàng thành công!");
};

// 7. XỬ LÝ TRANG GIỎ HÀNG (gio-hang.html)
function renderCart() {
    const cartEl = document.getElementById('cart-content');
    if (!cartEl) return;

    if (cart.length === 0) {
        cartEl.innerHTML = `
            <div class="text-center py-5">
                <h3 class="text-muted mb-4">Giỏ hàng của bạn đang trống</h3>
                <a href="san-pham.html" class="btn btn-primary btn-lg fw-bold">Tiếp tục mua sắm</a>
            </div>`;
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    let html = `
        <div class="table-responsive">
            <table class="table align-middle table-hover border">
                <thead class="table-light">
                    <tr>
                        <th class="text-center">Hình ảnh</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Giá</th>
                        <th class="text-center">Thao tác</th>
                    </tr>
                </thead>
                <tbody>`;
    
    cart.forEach((item, index) => {
        html += `
            <tr>
                <td class="text-center"><img src="${item.image}" width="60" height="60" style="object-fit: contain;"></td>
                <td><strong class="text-dark">${item.name}</strong></td>
                <td class="text-danger fw-bold">${item.price.toLocaleString('vi-VN')}đ</td>
                <td class="text-center"><button class="btn btn-sm btn-outline-danger fw-bold" onclick="removeFromCart(${index})">Xóa</button></td>
            </tr>`;
    });

    html += `
                </tbody>
            </table>
        </div>
        
        <div class="text-end mt-4 p-4 bg-white rounded shadow-sm border">
            <h4 class="mb-3">Tổng cộng thanh toán: <span class="text-danger fw-bold fs-3">${total.toLocaleString('vi-VN')}đ</span></h4>
            
            <button id="btn-checkout" class="btn btn-success btn-lg px-5 fw-bold" onclick="showPaymentMethods()">Tiến Hành Thanh Toán</button>
            
            <div id="payment-methods" class="mt-4 pt-4 border-top text-start" style="display: none;">
                <h5 class="fw-bold mb-4 text-center">Chọn phương thức thanh toán</h5>
                <div class="row justify-content-center">
                    
                    <div class="col-md-5 mb-3">
                        <div class="card h-100 border-primary shadow-sm">
                            <div class="card-body text-center d-flex flex-column">
                                <h5 class="card-title text-primary fw-bold">Giao hàng trực tiếp</h5>
                                <p class="card-text text-muted small mb-4">Thanh toán bằng tiền mặt (COD) khi shipper giao máy đến tận tay bạn.</p>
                                <button class="btn btn-primary w-100 mt-auto fw-bold" onclick="confirmOrder('COD')">Chọn Giao Hàng</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 mb-3">
                        <div class="card h-100 border-success shadow-sm">
                            <div class="card-body text-center d-flex flex-column">
                                <h5 class="card-title text-success fw-bold">Quét mã QR</h5>
                                <p class="card-text text-muted small mb-2">Chuyển khoản qua MoMo, ZaloPay hoặc App Ngân hàng.</p>
                                
                                <img src="../assets/images/qr.jpg" class="img-fluid mx-auto mb-2 rounded border" alt="QR Code" style="width: 150px; cursor: pointer;" onclick="window.open(this.src)">
<p class="small text-muted">Bấm vào ảnh để phóng to</p>
                                
                                <p class="fw-bold text-danger mb-3">Cần chuyển: ${total.toLocaleString('vi-VN')}đ</p>
                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>`;
    
    cartEl.innerHTML = html;
}

// Hàm mở khung chọn phương thức thanh toán
window.showPaymentMethods = function() {
    document.getElementById('btn-checkout').style.display = 'none'; // Ẩn nút cũ
    document.getElementById('payment-methods').style.display = 'block'; // Hiện 2 khung lựa chọn
};

// Hàm chốt đơn hàng
window.confirmOrder = function(method) {
    if(method === 'COD') {
        alert('🎉 Đặt hàng thành công! Máy sẽ được giao đến tận nơi sớm nhất để bạn kịp cày deadline.');
    } else {
        alert('🎉 Xác nhận thanh toán thành công! Chúng tôi đã nhận được tiền và đang đóng gói đơn hàng.');
    }
    
    // Xóa sạch giỏ hàng sau khi mua thành công
    cart = []; 
    updateCartUI(); // Cập nhật lại số 0 trên menu
    renderCart(); // Tải lại giao diện giỏ hàng trống
};

// Hàm xóa sản phẩm khỏi giỏ
window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartUI();
    renderCart();
};

// 8. TỰ ĐỘNG CHẠY KHI TẢI TRANG
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    renderProducts();
    renderDetail();
    renderCart();
});