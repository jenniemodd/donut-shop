/*
PSEUDOKOD – WEBBSHOP MED MUNKAR

1. Skapa en array med produkterna för munkarna: plain, glazed och sugar
   Varje produkt ska ha:
   - name
   - price
   - rating
   - category
   - image

2. Spara alla produkter i en huvudlista (products)

3. Hämta HTML-element:
   - produktcontainer
   - filterknappar

4. När sidan laddas:
   - anropa funktion som visar alla produkter

5. Funktion: renderProducts(lista)
   - töm produktcontainern
   - loopa igenom listan
   - skapa HTML för varje produkt
   - lägg till produkten i containern

6. Lägg till event listeners på filterdropdown:
   - använd change
    - hämta vald kategori
    - filtrera products-arrayen
    - skicka filtrerad lista till renderProducts

7. Vid klick på "visa alla":
   - skicka hela products-arrayen till renderProducts

8. Skapa en dropdown för sorteringsfunktion i HTML;
-Namn
-Pris
-Betyg
-Kategori

9.För varje "change" på sorteringsknapparna så ska produkterna sorteras i stigande ordning baserat på vald sorteringsmetod.
   - Lägg till event listener på sorteringsdropdown
   -Sortera filteredProducts baserat på vald metod (Namn, pris, katergori och betyg)
   -Användaren ska kunna filtera och sortera samtidigt.
   -kör Render Products

10. Skapa en tom array cart för varukorgen
-Varukorgen ska innehålla de produkterna som användaren har valt.   

10. Skapa + och - för atta öka och minska antal munkar.
- Se till så att man inte kan få mer än 0 på minus (Så det inte blir -1)

11. När användaren klickar på lägg i varukorg så ska:
-man hämta produkterns id och antal
-om antalet är 0 ska inget göras
-Kolla om produkten finns i varukorgen:
- om ja, öka antalet,
- om nej, lägg till produkten i varukorgen

12. Visa varukorg baserat på varukorgs arrayen. 
-HTML uppdateras varje gång cart ändras. 

*/

import '/style.scss';


const plainMunk = {
    id: 1,
  name: "Vanlig Munk",
  price: 40,
  rating: 4,
  category: "plain",
  image: "content/vanligmunk.jpg",
  alt: "Bild på en vanlig munk"
};

const plainMunk6Pack = {
    id: 2,
  name: "Vanlig Munk 6-pack",
  price: 220,
  rating: 3.8,
  category: "plain",
  image: "content/vanligmunk6pack.jpg",
  alt: "Bild på 6 vanliga munkar"
};

const plainMunk3Pack = {
    id: 3,
  name: "Vanlig Munk 3-pack",
  price: 100,
  rating: 3.9,
  category: "plain",
  image: "content/vanligmunk3pack.jpg",
  alt: "Bild på tre vanliga munkar"
};


const glazedMunkchocolate = {
    id: 4,
  name: "Chocklad Munk",
  price: 45,
  rating: 4.5,
  category: "glazed",
  image: "content/chockladmunk.jpg",
  alt: "Bild på en chokladmunk"
};

const glazedMunkblueberry = {
    id: 5,
  name: "Blåbär Munk",
  price: 50,
  rating: 4,
  category: "glazed",
  image: "content/blabarsmunk.jpg",
  alt: "Bild på en blåbärsmunk"
};

const glazedMunkraspberry = {
    id: 6,
  name: "Hallon Munk",
  price: 55,
  rating: 3.8,
  category: "glazed",
  image: "content/hallonmunk.jpg",
  alt: "Bild på en hallonmunk"
};

const glazedMunkstrawberry = {
    id: 7,
  name: "Jordgubb Munk",
  price: 60,
  rating: 4.3,
  category: "glazed",
  image: "content/jordgubbsmunk.jpg",
  alt: "Bild på en jordgubbsmunk"
};


const sugarMunk = {
    id: 8,
  name: "Socker Munk",
  price: 35,
  rating: 4.2,
  category: "sugar",
  image: "content/sockradmunk.jpg",
  alt: "Bild på en sockermunk"
};

const sugarMunk6Pack = {
    id: 9,
  name: "Socker Munk 6-pack",
  price: 180,
  rating: 4,
  category: "sugar",
  image: "content/sockradmunk6pack.jpg",
  alt: "Bild på 6 sockermunkar"
};

const sugarMunk3Pack = {
    id: 10,
  name: "Socker Munk 3-pack",
  price: 80,
  rating: 3.5,
  category: "sugar",
  image: "content/sockradmunk3pack.jpg",
  alt: "Bild på 3 sockermunkar"
};

const products = [
     plainMunk,
  plainMunk3Pack,
  plainMunk6Pack,
  glazedMunkchocolate,
  glazedMunkblueberry,
  glazedMunkraspberry,
  glazedMunkstrawberry,
  sugarMunk,
  sugarMunk3Pack,
  sugarMunk6Pack
];

const cart = []

let filteredProducts = Array.from(products);

// -------------------------------------------------------
// -----------Container där produkterna visas ------------
// -------------------------------------------------------

const productsListing = document.querySelector('#products');

// filter och sortering

const sortSelect = document.querySelector('#sortSelect');
const filterSelect = document.querySelector('#filterSelect');

// varukorg
const cartCountEl = document.querySelector('.cart-count');
const cartItemsEl = document.querySelector('.cart-items');
const cartToggle = document.querySelector('.cart-toggle');
const cartEl = document.querySelector('#cart');
const closeCartBtn = document.querySelector('.close-cart');
const checkoutToggleBtn = document.querySelector('#checkoutToggle');
const checkoutFormWrapper = document.querySelector('#checkoutFormWrapper');
const cartWrapper = document.querySelector('.cart-wrapper');
const cartTotalEl = document.querySelector('#cart-total');
const cartSummaryTotalEl = document.querySelector('.cart-summary-total');


/* ======================================================
   HJÄLPFUNKTIONER
   Små funktioner som används på flera ställen
====================================================== */

// Räknar ut totalsumman i varukorgen
function updateCartTotals() {
  let total = 0;

  cart.forEach(product => {
    total += product.price * product.amount;
  });

  cartTotalEl.textContent = `${total} kr`;
  cartSummaryTotalEl.textContent = `${total} kr`;
}

// Liten animation när något läggs i varukorgen
function animateCart() {
  cartWrapper.classList.add('animate');
  setTimeout(() => cartWrapper.classList.remove('animate'), 300);
}

// Växlar mellan varukorg och kassa (checkout-formulär)
function toggleCheckout() {
  const isHidden = checkoutFormWrapper.classList.toggle('hidden');

  checkoutToggleBtn.textContent = isHidden
    ? 'Till kassan'
    : 'Stäng kassan';
}



/* ======================================================
   VARUKORG – LOGIK
   Funktioner som ändrar cart-arrayen
====================================================== */

// Lägg till produkt i varukorgen
function addProductToCart(e) {
  const id = Number(e.target.dataset.id);
  const input = document.querySelector(`#amount-${id}`);
  const amount = Number(input.value);

  // Om användaren inte valt antal – gör inget
  if (amount <= 0) return;

  const product = products.find(p => p.id === id);
  const index = cart.findIndex(item => item.id === id);

  // Finns produkten redan?
  if (index === -1) {
    cart.push({ ...product, amount });
  } else {
    cart[index].amount += amount;
  }

  input.value = 0;

  renderCart();
  updateCartTotals();
  animateCart();
}

// Öka antal i varukorgen
function increaseProductFromCart(e) {
  const id = Number(e.target.dataset.id);
  const product = cart.find(p => p.id === id);

  if (!product) return;

  product.amount++;
  renderCart();
  updateCartTotals();
}

// Minska antal i varukorgen
function decreaseProductFromCart(e) {
  const id = Number(e.target.dataset.id);
  const product = cart.find(p => p.id === id);

  if (!product || product.amount <= 1) return;

  product.amount--;
  renderCart();
  updateCartTotals();
}

// Ta bort produkt helt från varukorgen
function removeProductFromCart(e) {
  const id = Number(e.target.dataset.id);
  const index = cart.findIndex(p => p.id === id);

  if (index === -1) return;

  cart.splice(index, 1);
  renderCart();
  updateCartTotals();
}


/* ======================================================
   RENDER-FUNKTIONER
   Skriver ut HTML baserat på state
====================================================== */

// Renderar varukorgen
function renderCart() {
  cartItemsEl.innerHTML = '';

  cart.forEach(product => {
    cartItemsEl.innerHTML += `
      <article class="cart-item">
        <p>${product.name}</p>
        <button class="decrease-cart" data-id="${product.id}">−</button>
        <span>${product.amount}</span>
        <button class="increase-cart" data-id="${product.id}">+</button>
        <button class="remove-cart" data-id="${product.id}">Ta bort</button>
      </article>
    `;
  });

  // Eventlyssnare måste sättas EFTER att HTML skapats
  document.querySelectorAll('.increase-cart')
    .forEach(btn => btn.addEventListener('click', increaseProductFromCart));

  document.querySelectorAll('.decrease-cart')
    .forEach(btn => btn.addEventListener('click', decreaseProductFromCart));

  document.querySelectorAll('.remove-cart')
    .forEach(btn => btn.addEventListener('click', removeProductFromCart));
}

// Renderar produktkorten
function renderProducts() {
  productsListing.innerHTML = '';

  filteredProducts.forEach(product => {
    productsListing.innerHTML += `
      <article class="product-card">
        <img src="${product.image}" alt="${product.alt}">
        <h3>${product.name}</h3>
        <p>${product.price} kr</p>

        <div class="amount-controls">
          <button class="decrease" data-id="${product.id}">−</button>
          <input id="amount-${product.id}" value="0" disabled>
          <button class="increase" data-id="${product.id}">+</button>
        </div>

        <button class="buy" data-id="${product.id}">
          Lägg i varukorg
        </button>
      </article>
    `;
  });

  // Eventlyssnare för produktsidor
  document.querySelectorAll('.increase').forEach(btn =>
    btn.addEventListener('click', e => {
      const id = e.target.dataset.id;
      const input = document.querySelector(`#amount-${id}`);
      input.value++;
    })
  );

  document.querySelectorAll('.decrease').forEach(btn =>
    btn.addEventListener('click', e => {
      const id = e.target.dataset.id;
      const input = document.querySelector(`#amount-${id}`);
      if (input.value > 0) input.value--;
    })
  );

  document.querySelectorAll('.buy')
    .forEach(btn => btn.addEventListener('click', addProductToCart));
}

/* ======================================================
   FILTER & SORT
====================================================== */

function handleDropdownFilter() {
  const value = filterSelect.value;

  filteredProducts = value === 'all'
    ? [...products]
    : products.filter(p => p.category === value);

  renderProducts();
}

function handleSortChange() {
  const value = sortSelect.value;

  if (value === 'name') filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  if (value === 'price') filteredProducts.sort((a, b) => a.price - b.price);
  if (value === 'rating') filteredProducts.sort((a, b) => b.rating - a.rating);
  if (value === 'category') filteredProducts.sort((a, b) => a.category.localeCompare(b.category));

  renderProducts();
}


/* ======================================================
   EVENTLYSSNARE
====================================================== */

filterSelect.addEventListener('change', handleDropdownFilter);
sortSelect.addEventListener('change', handleSortChange);

checkoutToggleBtn.addEventListener('click', toggleCheckout);

cartToggle.addEventListener('click', () => {
  cartEl.classList.remove('hidden');
  cartToggle.setAttribute('aria-expanded', 'true');
});

closeCartBtn.addEventListener('click', () => {
  cartEl.classList.add('hidden');
  cartToggle.setAttribute('aria-expanded', 'false');

  // Stäng kassan om den är öppen
  checkoutFormWrapper.classList.add('hidden');

});


console.log ()

/* ======================================================
   INIT – KÖRS NÄR SIDAN LADDAS
====================================================== */

renderProducts();


/* =========================
   CHECKOUT – VALIDATION
========================= */

// REGEX
const firstNameRegEx = /^[A-Za-zÀ-ÿ\s'-]{2,}$/;
const lastNameRegEx  = /^[A-Za-zÀ-ÿ\s'-]{2,}$/;
const emailRegEx     = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegEx     = /^(\+46|0)[0-9]{7,10}$/;
const postalRegEx    = /^[0-9]{3}\s?[0-9]{2}$/;
const personRegEx    = /^(\d{6}|\d{8})[-+]?\d{4}$/;

// ELEMENT
const checkoutForm = document.querySelector('#checkoutForm');
const orderBtn = checkoutForm.querySelector('button[type="submit"]');

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const postalCode = document.querySelector('#postalCode');
const personnummer = document.querySelector('#personnummer');

const invoiceFields = document.querySelector('#invoiceFields');
const cardFields = document.querySelector('#cardFields');
const paymentRadios = document.querySelectorAll('input[name="payment"]');

// HELPERS
function showError(field, show) {
  const error = field.nextElementSibling;
  if (!error) return;

  error.classList.toggle('hidden', !show);
  field.setAttribute('aria-invalid', show ? 'true' : 'false');
}

// VALIDATION FUNCTIONS
function validateField(field, regex) {
  const value = field.value.trim();
  if (value.length === 0) return undefined;

  const isValid = regex.test(value);
  showError(field, !isValid);
  return isValid;
}

function validateFirstName() {
  return validateField(firstName, firstNameRegEx);
}

function validateLastName() {
  return validateField(lastName, lastNameRegEx);
}

function validateEmail() {
  return validateField(email, emailRegEx);
}

function validatePhone() {
  return validateField(phone, phoneRegEx);
}

function validatePostalCode() {
  return validateField(postalCode, postalRegEx);
}

function validatePersonnummer() {
  if (invoiceFields.hasAttribute('hidden')) return true;
  return validateField(personnummer, personRegEx);
}

// PAYMENT TOGGLE
paymentRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.value === 'card' && radio.checked) {
      cardFields.removeAttribute('hidden');
      invoiceFields.setAttribute('hidden', '');
    }

    if (radio.value === 'invoice' && radio.checked) {
      invoiceFields.removeAttribute('hidden');
      cardFields.setAttribute('hidden', '');
    }

    checkFormValidity();
  });
});

// EVENT LISTENERS
[
  firstName,
  lastName,
  email,
  phone,
  postalCode,
  personnummer
].forEach(field => {
  field.addEventListener('focusout', checkFormValidity);
});

// CHECK ALL
function checkFormValidity() {
  orderBtn.setAttribute('disabled', '');

  const results = [
    validateFirstName(),
    validateLastName(),
    validateEmail(),
    validatePhone(),
    validatePostalCode(),
    validatePersonnummer()
  ];

  // Om något är FEL → stoppa
  if (results.includes(false)) return;

  // Om något ännu inte är ifyllt → stoppa
  if (results.includes(undefined)) return;

  // Villkor: villkor-checkbox
  if (!checkoutForm.querySelector('#terms').checked) return;

  orderBtn.removeAttribute('disabled');
}

// SUBMIT
checkoutForm.addEventListener('submit', e => {
  e.preventDefault();
  if (orderBtn.disabled) return;
  alert('Beställning skickad! 🎉');
});