/*
PSEUDOKOD – WEBBSHOP MED MUNKAR

1. Skapa produkter
   - Skapa ett objekt för varje munk (plain, glazed, sugar)
   - Varje produkt ska innehålla:
     - id
     - name
     - price
     - rating
     - category
     - image
     - alt-text

2. Lägg alla produkter i en array
   - Spara alla produktobjekt i en lista som heter products

3. Skapa varukorg
   - Skapa en tom array cart
   - Den ska innehålla de produkter som användaren lägger i varukorgen

4. Hämta HTML-element
   - Hämta:
     - container där produkter ska visas
     - filter-dropdown
     - sorterings-dropdown
     - varukorg (öppna/stäng)
     - checkout-formulär
     - totalpris, rabatt och frakt

5. När sidan laddas
   - Visa alla produkter genom att anropa renderProducts()
   - Räkna och visa totalsumma (0 kr från start)

6. Funktion: renderProducts()
   - Töm produktcontainern
   - Loopa igenom listan med produkter som ska visas
   - För varje produkt:
     - Visa bild, namn och pris
     - Skapa + och − knappar
     - Skapa knapp för "Lägg i varukorg"
   - Lägg till event listeners på knapparna

7. Filtrering av produkter
   - När användaren väljer kategori i dropdown:
     - Kontrollera valt värde
     - Filtrera products-arrayen
     - Spara resultatet i filteredProducts
     - Kör renderProducts() igen

8. Sortering av produkter
   - När användaren väljer sortering:
     - Sortera filteredProducts efter:
       - namn
       - pris
       - betyg
       - kategori
     - Visa resultatet med renderProducts()

9. Ändra antal produkter
   - + ökar antal
   - − minskar antal
   - Antalet får aldrig bli mindre än 0

10. Lägg till produkt i varukorgen
    - När användaren klickar på "Lägg i varukorg":
      - Hämta produktens id och valt antal
      - Om antal är 0 → gör inget
      - Kontrollera om produkten redan finns i cart:
        - Om ja → öka antal
        - Om nej → lägg till produkten
      - Uppdatera varukorgen och totalsumman

11. Visa varukorgen
    - Visa alla produkter som finns i cart
    - För varje produkt:
      - Visa namn och antal
      - Visa +, − och ta bort-knapp
    - Uppdatera varukorgen varje gång något ändras

12. Prisregler (specialregler)
    - På fredagar efter kl. 15 och under helgen:
      - Lägg på 15 % på priset (syns bara i priset)
    - Om kunden köper minst 10 av samma sort:
      - Ge 10 % rabatt på just den produkten
    - På måndagar innan kl. 10:
      - Ge 10 % rabatt på hela beställningen
      - Visa text om måndagsrabatt

13. Frakt
    - Om totalt antal munkar är mer än 15:
      - Frakt = 0 kr
    - Annars:
      - Frakt = 25 kr + 10 % av totalsumman
    - Visa fraktkostnaden i varukorgen

14. Betalsätt
    - Kunden kan välja kort eller faktura
    - Om totalsumman överstiger 800 kr:
      - Inaktivera faktura som betalsätt
      - Växla automatiskt till kort om faktura var vald

15. Checkout-formulär
    - Validera alla fält med regex
    - Visa felmeddelanden om något är fel
    - Skicka-knappen är inaktiv tills:
      - Alla fält är korrekt ifyllda
      - Ett betalsätt är valt
      - Villkoren är godkända

16. Tidsgräns
    - Starta en timer på 15 minuter
    - Om tiden tar slut:
      - Töm varukorgen
      - Rensa formuläret
      - Visa ett meddelande till användaren
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
const invoiceRadio = document.querySelector('input[name="payment"][value="invoice"]');


/* ======================================================
   HJÄLPFUNKTIONER
   Små funktioner som används på flera ställen
====================================================== */

// Datum
const date = new Date();

const FRIDAY = 5;
const SATURDAY = 6;
const SUNDAY = 0;
const MONDAY = 1;


// Fredagsrabatt

function getAdjustedPrice(product) {
  let price = product.price;

  const day = date.getDay();
  const hour = date.getHours();

  const isWeekendPrice =
    (day === FRIDAY && hour >= 15) ||
    day === SATURDAY ||
    day === SUNDAY ||
    (day === MONDAY && hour < 3);

  if (isWeekendPrice) {
    price *= 1.15; // +15 %
  }

  // 10% rabatt med 10 stycken av samma sort

  const sameProductInCart = cart.find(p => p.id === product.id);

  if (sameProductInCart && sameProductInCart.amount >= 10) {
    price *= 0.9;

  }


  return price;
}

// Räknar ut totalsumman i varukorgen
function updateCartTotals() {
  let cartSum = 0;
  let totalProductCount = 0;
  let shippingCost = 25;

  // 1. Räkna summa & antal
  cart.forEach(product => {
    cartSum += getAdjustedPrice(product) * product.amount;
    totalProductCount += product.amount;
  });

  // Faktura-spärr över 800 kr

  if (cartSum > 800) {
    invoiceRadio.disabled = true;

    if (invoiceRadio.checked) {
      invoiceRadio.checked = false;
      cardFields.removeAttribute('hidden');
      invoiceFields.setAttribute('hidden', '');
    }
  } else {
    invoiceRadio.disabled = false;
  }

  // 2. Måndagsrabatt
  if (date.getDay() === MONDAY && date.getHours() < 10) {
    cartSum *= 0.9;
    document.querySelector('#discountCart').textContent =
      'Måndagsrabatt: 10 % på hela beställningen';
  } else {
    document.querySelector('#discountCart').textContent = '';
  }

  // 3. Frakt
  if (totalProductCount > 15) {
    shippingCost = 0;
  } else {
    shippingCost = 25 + (cartSum * 0.1);
  }

  document.querySelector('#shippingCost').textContent =
    `Fraktkostnad: ${Math.round(shippingCost)} kr`;

  // 4. total inkl Frakt
  const totalWithShipping = cartSum + shippingCost;

  cartTotalEl.textContent = `${Math.round(totalWithShipping)} kr`;
  cartSummaryTotalEl.textContent = `${Math.round(totalWithShipping)} kr`;
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
        <p>${Math.round(getAdjustedPrice(product))} kr</p>

        <div class="amount-controls">
          <button class="decrease" data-id="${product.id}">−</button>
          <input
        id="amount-${product.id}"
        value="0"
        disabled
        aria-label="Antal ${product.name}">

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


console.log()

/* ======================================================
   INIT – KÖRS NÄR SIDAN LADDAS
====================================================== */

renderProducts();
updateCartTotals();


/* =========================
   CHECKOUT – VALIDERING
========================= */

// Regex
const firstNameRegEx = /^[A-Za-zÀ-ÿ\s'-]{2,}$/;
const lastNameRegEx = /^[A-Za-zÀ-ÿ\s'-]{2,}$/;
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegEx = /^(\+46|0)[0-9]{7,10}$/;
const postalRegEx = /^[0-9]{3}\s?[0-9]{2}$/;
const personRegEx = /^(\d{6}|\d{8})[-+]?\d{4}$/;

// Elment
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


// Hjälpare
function showError(field, show) {
  const error = field.nextElementSibling;
  if (!error) return;

  error.classList.toggle('hidden', !show);
  field.setAttribute('aria-invalid', show ? 'true' : 'false');
}

// Valideringsfunktioner för inputfält
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

// Betalningsval
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

// Eventlyssnare
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

// Funktion - Validering formulär
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

// Beställningsbekräftelse
checkoutForm.addEventListener('submit', e => {
  e.preventDefault();
  if (orderBtn.disabled) return;
  alert('Beställning skickad! 🎉');
});


// Timer

const SLOWNESS_TIMER_MINUTES = 15;

setTimeout(() => {
  cart.length = 0;
  renderCart();
  updateCartTotals();
  checkoutForm.reset();

  alert('Tiden gick ut – beställningen har rensats.');
}, 1000 * 60 * SLOWNESS_TIMER_MINUTES);
