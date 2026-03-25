let cart=[];let userData={};let totalHarga=0;

// LOGIN
document.getElementById('loginForm').addEventListener('submit',e=>{e.preventDefault();userData={username:document.getElementById('username').value,email:document.getElementById('email').value};document.getElementById('userDisplay').textContent=userData.username;document.getElementById('loginContainer').style.display='none';document.getElementById('shopContainer').style.display='block';document.getElementById('produk').scrollIntoView({behavior:'smooth'});});

// ADD TO CART
function addToCart(id,nama,harga){const existing=cart.find(item=>item.id===id);if(existing){existing.quantity++}else{cart.push({id,nama,harga,quantity:1})}updateCartDisplay();showNotification(`${nama} ditambahkan!`);}

// UPDATE DISPLAY
function updateCartDisplay(){const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);document.getElementById('cartCount').textContent=totalItems;totalHarga=cart.reduce((sum,item)=>sum+(item.harga*item.quantity),0);}

// CART MODAL
document.querySelector('.cart-info').addEventListener('click',()=>{renderCartModal();document.getElementById('cartModal').style.display='block';});
document.querySelector('.close-btn').addEventListener('click',()=>{document.getElementById('cartModal').style.display='none';});
window.addEventListener('click',e=>{if(e.target.id==='cartModal')document.getElementById('cartModal').style.display='none';});

// RENDER CART
function renderCartModal(){const cartItemsEl=document.getElementById('cartItems');const totalEl=document.getElementById('totalHarga');if(cart.length===0){cartItemsEl.innerHTML='<div style="text-align:center;padding:2rem;color:#ccc;"><i class="fas fa-shopping-cart fa-3x" style="margin-bottom:1rem;"></i><p>Keranjang kosong</p></div>';totalEl.textContent='Rp 0';return;}let html='';cart.forEach(item=>{html+=`<div class="cart-item"><div><h4>${item.nama}</h4><p>Rp ${formatRupiah(item.harga)} x ${item.quantity}</p></div><div style="display:flex;align-items:center;gap:10px;"><button onclick="updateQuantity('${item.id}',-1)" style="width:30px;height:30px;border-radius:50%;background:#ff6b9d;color:white;border:none;font-weight:bold;">-</button><span style="min-width:30px;text-align:center;font-weight:bold;">${item.quantity}</span><button onclick="updateQuantity('${item.id}',1)" style="width:30px;height:30px;border-radius:50%;background:#00d4ff;color:white;border:none;font-weight:bold;">+</button><button onclick="removeItem('${item.id}')" style="background:#e74c3c;color:white;border:none;padding:5px 12px;border-radius:6px;font-size:0.9rem;">Hapus</button></div></div>`;});cartItemsEl.innerHTML=html;totalEl.textContent=formatRupiah(totalHarga);}

// QUANTITY
function updateQuantity(id,change){const item=cart.find(item=>item.id===id);if(item){item.quantity+=change;if(item.quantity<=0){removeItem(id)}else{updateCartDisplay();renderCartModal();}}}

// REMOVE
function removeItem(id){cart=cart.filter(item=>item.id!==id);updateCartDisplay();renderCartModal();}

// CHECKOUT
document.getElementById('checkoutBtn').addEventListener('click',()=>{if(cart.length===0){alert('Keranjang kosong!');return;}showQRIS();});

// QRIS PAKASIR
function showQRIS(){const nominal=totalHarga;const externalId='ORDER_'+Date.now();const qrisModal=`<div class="modal" id="qrisModal" style="display:block;"><div class="modal-content" style="max-width:400px;"><div class="modal-header"><h3><i class="fas fa-qrcode"></i> Scan QRIS Pakasir</h3><span class="close-btn" onclick="closeQRIS()">&times;</span></div><div style="padding:2rem;text-align:center;"><div style="background:#f8f9fa;padding:2rem;border-radius:15px;margin-bottom:1.5rem;"><div id="qrisImage" style="width:250px;height:250px;margin:0 auto;background:#ddd;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;color:#666;">LOADING QRIS...</div></div><div style="background:rgba(255,255,255,0.1);padding:1.5rem;border-radius:12px;"><h4>Total: <strong style="color:#ff6b9d;">${
