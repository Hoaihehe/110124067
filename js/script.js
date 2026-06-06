// 1. DỮ LIỆU TẬP TRUNG
const productList = [
    { id: "1", name: "Laptop Gaming Victus", price: 21500000, image: "https://placehold.co/400x400?text=Laptop", desc: "Core i5-12450H, RTX 3050, RAM 16GB." },
    { id: "2", name: "RAM Corsair Vengeance 16GB", price: 1200000, image: "https://placehold.co/400x400?text=RAM", desc: "DDR4 3200MHz cao cấp." },
    { id: "3", name: "Chuột Logitech G502", price: 1500000, image: "https://placehold.co/400x400?text=Mouse", desc: "Cảm biến HERO 25K siêu nhạy." },
    { id: "4", name: "Bàn phím cơ Akko 3087", price: 1350000, image: "https://placehold.co/400x400?text=Keyboard", desc: "Cherry Switch, Blue/Orange." }
];

// 2. KHỞI TẠO GIỎ HÀNG TỪ LOCALSTORAGE
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 3. HÀM CẬP NHẬT SỐ LƯỢNG TRÊN MENU
function updateCartUI() {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) cartCountEl.innerText = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
}

// 4. XỬ LÝ TRANG DANH SÁCH (san-pham.html)
function renderProducts() {
    const listEl = document.getElementById('product-list');
    if (!listEl) return;
    listEl.innerHTML = productList.map(p => `
        <div class="col-md-3 mb-4">
            <div class="card shadow-sm h-100">
                <img src="${p.image}" class="product-img card-img-top" alt="${p.name}">
                <div class="card-body text-center d-flex flex-column">
                    <h5 class="card-title fs-6">${p.name}</h5>
                    <p class="text-danger fw-bold">${p.price.toLocaleString()}đ</p>
                    <a href="chi-tiet.html?id=${p.id}" class="btn btn-outline-primary btn-sm mt-auto">Chi tiết</a>
                </div>
            </div>
        </div>
    `).join('');
}

// 5. XỬ LÝ TRANG CHI TIẾT (chi-tiet.html)
function renderDetail() {
    const detailEl = document.getElementById('product-detail');
    if (!detailEl) return;

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const product = productList.find(p => p.id === id);

    if (product) {
        detailEl.innerHTML = `
            <div class="col-md-6 text-center"><img src="${product.image}" class="img-fluid rounded shadow"></div>
            <div class="col-md-6">
                <h1 class="fw-bold">${product.name}</h1>
                <h2 class="text-danger my-4">${product.price.toLocaleString()} VNĐ</h2>
                <p class="text-muted">${product.desc}</p>
                <button class="btn btn-primary btn-lg mt-4" onclick="addToCart('${product.id}')">Thêm vào giỏ hàng</button>
                <a href="san-pham.html" class="btn btn-link mt-4 d-block">Quay lại shop</a>
            </div>
        `;
    }
}

// 6. THÊM VÀO GIỎ HÀNG
window.addToCart = function(id) {
    const product = productList.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
    alert("Đã thêm " + product.name + " vào giỏ!");
};

// 7. XỬ LÝ TRANG GIỎ HÀNG (gio-hang.html)
function renderCart() {
    const cartEl = document.getElementById('cart-content');
    if (!cartEl) return;

    if (cart.length === 0) {
        cartEl.innerHTML = `<div class="text-center py-5"><h3>Giỏ hàng trống</h3><a href="san-pham.html" class="btn btn-primary">Mua ngay</a></div>`;
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    let html = `<table class="table align-middle">
        <thead><tr><th>Sản phẩm</th><th>Giá</th><th>Thao tác</th></tr></thead>
        <tbody>`;
    
    cart.forEach((item, index) => {
        html += `<tr>
            <td>${item.name}</td>
            <td class="text-danger fw-bold">${item.price.toLocaleString()}đ</td>
            <td><button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Xóa</button></td>
        </tr>`;
    });

    html += `</tbody></table>
        <div class="text-end mt-4"><h4>Tổng cộng: <span class="text-danger">${total.toLocaleString()}đ</span></h4>
        <button class="btn btn-success btn-lg mt-3" onclick="alert('Cảm ơn bạn đã mua hàng!')">Thanh Toán</button></div>`;
    
    cartEl.innerHTML = html;
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartUI();
    renderCart();
};

// CHẠY KHI TẢI TRANG
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    renderProducts();
    renderDetail();
    renderCart();
});