let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Tự động sửa lỗi dữ liệu cũ nếu bị kẹt dòng trống
cart = cart.map(item => {
    if (!item.quantity || isNaN(item.quantity)) item.quantity = 1;
    return item;
});
localStorage.setItem('cart', JSON.stringify(cart));

// 1. Cập nhật số hiển thị trên thanh menu
function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    if (countEl) {
        countEl.innerText = cart.reduce((total, item) => total + parseInt(item.quantity), 0);
    }
}

// 2. Hiển thị thông báo Toast trượt lên
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 3. Đổ dữ liệu ra trang giỏ hàng
function renderCart() {
    const cartContent = document.getElementById('cart-content');
    if (!cartContent) return; 

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div style="text-align:center; padding: 40px;">
                <h3 style="color:#777; margin-bottom: 20px;">Giỏ hàng của bạn đang trống</h3>
                <a href="san-pham.html" class="btn-buy" style="text-decoration:none; display:inline-block;">Tiếp tục mua sắm</a>
            </div>`;
        return;
    }

    let html = `<table style="width:100%; border-collapse: collapse; margin-top: 20px;">
                    <tr style="background:#f8f9fa;">
                        <th style="padding:15px; border-bottom:1px solid #ddd; text-align:left;">Tên Sản Phẩm</th>
                        <th style="padding:15px; border-bottom:1px solid #ddd; text-align:left;">Giá</th>
                        <th style="padding:15px; border-bottom:1px solid #ddd; text-align:left;">Số lượng</th>
                        <th style="padding:15px; border-bottom:1px solid #ddd; text-align:left;">Thao tác</th>
                    </tr>`;
    
    cart.forEach((item, index) => {
        html += `<tr>
                    <td style="padding:15px; border-bottom:1px solid #ddd;"><strong>${item.name}</strong></td>
                    <td style="padding:15px; border-bottom:1px solid #ddd;">${item.price}</td>
                    <td style="padding:15px; border-bottom:1px solid #ddd;">${item.quantity}</td>
                    <td style="padding:15px; border-bottom:1px solid #ddd;"><button style="background:#dc3545; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;" onclick="removeItem(${index})">Xóa</button></td>
                 </tr>`;
    });

    html += `</table>
             <div style="text-align: right; margin-top: 20px;">
                <button class="btn-buy" style="padding: 10px 20px;" onclick="alert('Chức năng thanh toán đang phát triển!')">Thanh toán ngay</button>
             </div>`;
    
    cartContent.innerHTML = html;
}

// 4. Xóa món hàng khỏi giỏ
window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
};

// 5. Thêm món hàng vào giỏ và lưu vào localStorage
function addToCart(name, price, qty) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += qty; 
    } else {
        cart.push({ name: name, price: price, quantity: qty }); 
    }
    
    localStorage.setItem('cart', JSON.stringify(cart)); 
    updateCartCount(); 
    renderCart(); 
    showToast(`Đã thêm ${qty} "${name}" vào giỏ hàng!`);
}

// 6. Lắng nghe toàn bộ sự kiện khi trang web tải xong
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); 
    renderCart(); 

    // SỬA LỖI TẠI ĐÂY: Lắng nghe sự kiện click nút mua một cách an toàn
    document.querySelectorAll('.btn-buy').forEach(button => {
        button.addEventListener('click', (e) => {
            // Kiểm tra xem nút này có nằm trong khung sản phẩm (danh sách hoặc chi tiết) không
            const container = e.target.closest('.product-card, .product-info');
            if (!container) return; // Nếu nút bấm ở trang giỏ hàng hoặc form liên hệ thì bỏ qua không xử lý

            const nameEl = container.querySelector('h1, h3');
            const priceEl = container.querySelector('.price');
            const qtyInput = container.querySelector('.qty-input');

            if (nameEl && priceEl) {
                const name = nameEl.innerText.trim();
                const price = priceEl.innerText.trim();
                const qty = qtyInput ? parseInt(qtyInput.value) : 1;

                addToCart(name, price, qty);
            }
        });
    });

    // Sự kiện xử lý Form liên hệ
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const name = contactForm.querySelector('input[name="name"]').value;
            showToast(`Cảm ơn ${name}! Tin nhắn của bạn đã được gửi.`);
            contactForm.reset(); 
        });
    }
});