// -----------------------------
// Products Data
// -----------------------------
const products = [
  // Furniture
  {name:'Shelf Style Fabric Wardrobe', price:200, category:'furniture', img:'images/furniture1.jpeg'},
  {name:'Office Chair', price:255, category:'furniture', img:'images/furniture3.jpeg'},
  {name:'Silver Crest Ceramic Stove', price:445, category:'furniture', img:'images/furniture4.jpeg'},
   {name:'Inflatable Sofa', price:129, category:'furniture', img:'images/furniture5.jpeg'},
  {name:'Air Cooler fan', price:115, category:'furniture', img:'images/furniture6.jpeg'},
  {name:'Silk Wool tie-dye carpet', price:68, category:'furniture', img:'images/furniture7.jpeg'},
 
  // Electronics
  {name:'Ring Light', price:79, category:'electronics', img:'images/electronics3.jpeg'},
  {name:'D2000 Ultra 3 Smart Watch', price:159, category:'electronics', img:'images/electronics4.jpeg'},
  {name:'K9 Lavalier Microphone', price:92, category:'electronics', img:'images/electronics9.jpeg'},
   {name:'Lavalier Microphone', price:219, category:'electronics', img:'images/electronics10.jpeg'}, {name:'Ring Light', price:79, category:'electronics', img:'images/electronics3.jpeg'},
  {name:'Lavalier Microphone', price:215, category:'electronics', img:'images/electronics11.jpeg'},
  {name:'Hanging Hair Dyer', price:780, category:'electronics', img:'images/electronics15.jpeg'},
   {name:'Washing Machine', price:1184, category:'electronics', img:'images/electronics16.jpeg'},
 
  // Kitchen
  {name:'Portable Cooker', price:115, category:'kitchen', img:'images/kitchen1.jpeg'},
   {name:'Silver Crest Electric Blender', price:135, category:'kitchen', img:'images/kitchen2.jpeg'},
    {name:'Kitchenware Set', price:129, category:'kitchen', img:'images/kitchen3.jpeg'},
     {name:'Electric Rice Cooker', price:180, category:'kitchen', img:'images/kitchen7.jpeg'},
      {name:'Cooking Utensil', price:496, category:'kitchen', img:'images/kitchen6.jpeg'},
       {name:'Utensil 3 set', price:345, category:'kitchen', img:'images/kitchen4.jpeg'},
        {name:'Utensil Stand', price:55, category:'kitchen', img:'images/kitchen5.jpeg'},
         {name:'4 Utensil set Kitchen', price:420, category:'kitchen', img:'images/kitchen8.jpeg'},
      {name:'Multifunction Kitchen Artifact', price:94, category:'kitchen', img:'images/kitchen9.jpeg'},
       {name:'Multifunction Vegetable Cutter', price:158, category:'kitchen', img:'images/kitchen10.jpeg'},
        {name:'3 set Bottle', price:75, category:'kitchen', img:'images/kitchen11.jpeg'},
        {name:'3 set Bottle', price:83, category:'kitchen', img:'images/kitchen12.jpeg'},
        {name:'9 Bowl Set', price:65, category:'kitchen', img:'images/kitchen13.jpeg'},

  
  // Fashion
  {name:'Ladies Bag', price:105, category:'fashion', img:'images/fashion3.jpeg'},
  {name:'Ladies 4set Perfume', price:68, category:'fashion', img:'images/fashion4.jpeg'},
  {name:'Travelling Bag', price:250, category:'fashion', img:'images/fashion17.jpeg'},
  {name:'Ladies HandBag', price:105, category:'fashion', img:'images/fashion2.jpeg'},
  {name:'Ladies Bag Set', price:164, category:'fashion', img:'images/fashion1.jpeg'},
  {name:'Men 4set perfume', price:68, category:'fashion', img:'images/fashion5.jpeg'},
  {name:'3set Perfume', price:57, category:'fashion', img:'images/fashion6.jpeg'},
  {name:'3set Perfume', price:57, category:'fashion', img:'images/fashion7.jpeg'},
  {name:'4set Perfume', price:68, category:'fashion', img:'images/fashion8.jpeg'},
  {name:'Yara Perfume Set', price:179, category:'fashion', img:'images/fashion9.jpeg'},
  {name:'OUD Perfume 100ml', price:62, category:'fashion', img:'images/fashion10.jpeg'},
  {name:'ORCHID Perfume Colours: Black & Brown', price:54, category:'fashion', img:'images/fashion11.jpeg'},
  {name:'9PM Perfume', price:98, category:'fashion', img:'images/fashion12.jpeg'},
  {name:'Azzaro 100ml', price:98, category:'fashion', img:'images/fashion13.jpeg'},
  {name:'Watch Set', price:185, category:'fashion', img:'images/fashion14.jpeg'},
  {name:'Glasses (5pieces)', price:134, category:'fashion', img:'images/fashion15.jpeg'},
  {name:'Glasses (5pieces)', price:186, category:'fashion', img:'images/fashion16.jpeg'},
  {name:'Female Ribbon Set ', price:55, category:'fashion', img:'images/fashion18.jpeg'},
  {name:'Hair Set', price:115, category:'fashion', img:'images/fashion19.jpeg'},
  {name:'Ladies Wallet Set', price:68, category:'fashion', img:'images/fashion20.jpeg'},
  {name:'Designer Cap (5pieces)', price:158, category:'fashion', img:'images/fashion22.jpeg'},
  {name:'Hair Bonnet (5pieces)', price:98, category:'fashion', img:'images/fashion23.jpeg'},
  {name:'Standing Dressing Mirror', price:187, category:'fashion', img:'images/fashion25.jpeg'},

  {name:'Heat Comb', price:61, category:'fashion', img:'images/fashion27.jpeg'},
  {name:'Hair Straightener', price:82, category:'fashion', img:'images/fashion26.jpeg'},
  {name:'Aromatherapy (4set)', price:42, category:'fashion', img:'images/fashion28.jpeg'},
  // Auto
  {name:'Washroom Set', price:180, category:'auto', img:'images/auto1.jpeg'},
   {name:'Bathroom Toilet Gap Storage Cabinet', price:230, category:'auto', img:'images/auto2.jpeg'},
];

// WhatsApp number
const whatsappNumber = '233594940421';

// -----------------------------
// Cart System
// -----------------------------
let cart = JSON.parse(localStorage.getItem('jakcart')) || [];

function saveCart() {
  localStorage.setItem('jakcart', JSON.stringify(cart));
}

function updateCartBadge() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').innerText = totalQty;
  saveCart();
}
//let cart = JSON.parse(localStorage.getItem('naksCart')) || [];

//function updateCartBadge() {
  //document.getElementById('cartCount').innerText = cart.length;
  //localStorage.setItem('naksCart', JSON.stringify(cart));
//}

/*function addToCart(product, qty=1, size='') {
  cart.push({...product, qty, size});
  updateCartBadge();
}*/
function addToCart(product, qty = 1) {
  const existing = cart.find(item => item.name === product.name);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  updateCartBadge();
}
// -----------------------------
// Load products for category or featured
// -----------------------------
function loadProducts(containerId = 'product-grid', category = null) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = category
    ? products.filter(p => p.category === category)
    : products;

  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product-card';

    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">GH¢ ${p.price}</p>

      <div class="qty-control">
        <button class="qty-btn minus">−</button>
        <span class="qty-value">1</span>
        <button class="qty-btn plus">+</button>
      </div>

      <button class="btn addCartBtn">Add to Cart</button>
    `;

    grid.appendChild(div);

    let qty = 1;
    const qtyValue = div.querySelector('.qty-value');

    div.querySelector('.plus').onclick = () => {
      qty++;
      qtyValue.innerText = qty;
    };

    div.querySelector('.minus').onclick = () => {
      if (qty > 1) {
        qty--;
        qtyValue.innerText = qty;
      }
    };

    div.querySelector('.addCartBtn').onclick = () => {
      addToCart(p, qty);
    };
  });
}

function filterCategory(category) {
  loadProducts('product-grid', category);
}

// -----------------------------
// App Init
// -----------------------------
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  // Load featured products on homepage
  loadProducts();

  // Cart icon opens preview modal (NOT WhatsApp)
  const cartBtn = document.getElementById('cartContainer');
  if (cartBtn) {
    cartBtn.addEventListener('click', openCartModal);
  }
});

// -----------------------------
// Load cart to receipt page
// -----------------------------
function loadCartReceipt() {
  const order = JSON.parse(localStorage.getItem('jakcart')) || [];

  const nameEl = document.getElementById('customerName');
  const productList = document.getElementById('productList');
  const totalEl = document.getElementById('totalPaid');
  const dateEl = document.getElementById('date');

  if (!productList) return;

  nameEl.innerText = 'Julius Antwi';
  productList.innerHTML = '';

  let total = 0;

  order.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} – Qty: ${item.qty} – GH¢ ${item.price * item.qty}`;
    productList.appendChild(li);

    total += item.price * item.qty;
  });

  totalEl.innerText = total;
  dateEl.innerText = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}
const cartModal = document.getElementById('cartModal');
const cartItemsContainer = document.getElementById('cartItems');
const closeCartBtn = document.getElementById('closeCart');
const submitOrderBtn = document.getElementById('submitOrder');
function renderCartModal() {
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';

    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>Qty: ${item.qty}</p>
        <p>Price: GH¢ ${item.price}</p>
      </div>
      <button class="remove-item" data-index="${index}">✕</button>
    `;

    cartItemsContainer.appendChild(div);
  });

  // Remove item
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', e => {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      updateCartBadge();
      renderCartModal();
    });
  });
}
document.getElementById('cartContainer').addEventListener('click', () => {
  renderCartModal();
  cartModal.classList.add('show');
});
closeCartBtn.addEventListener('click', () => {
  cartModal.classList.remove('show');
});
submitOrderBtn.addEventListener('click', () => {
  if (cart.length === 0) return;

  let message = 'Hello JAK Importation, I want to order:\n\n';

  cart.forEach((item, i) => {
    message += `${i + 1}. ${item.name} × ${item.qty} – GH¢ ${item.price}\n`;
  });

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
});
