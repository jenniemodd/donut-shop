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


// -------------------------------------------------------
// -----------Container där produkterna visas ------------
// -------------------------------------------------------

const productsListing = document.querySelector('#products');
const sortSelect = document.querySelector('#sortSelect');

let filteredProducts = Array.from(products);
const filterSelect = document.querySelector('#filterSelect');

const cartCountEl = document.querySelector('.cart-count');
const cartItemsEl = document.querySelector('.cart-items');
const cartToggle = document.querySelector('.cart-toggle');
const cartEl = document.querySelector('#cart');
const closeCartBtn = document.querySelector('.close-cart');




// -------------------------------------------------------
// ----------- FILTRERA DROPDOWN -------------------------
// -------------------------------------------------------


filterSelect.addEventListener('change', handleDropdownFilter);

function handleDropdownFilter() {
  const selectedCategory = filterSelect.value;

  if (selectedCategory === 'all') {
    filteredProducts = Array.from(products);
  } else {
    filteredProducts = products.filter(
      product => product.category === selectedCategory
    );
  }

  renderProducts();
}


// -------------------------------------------------------
// ----------------------Sorteringsfunktion --------------
// -------------------------------------------------------


// Eventlyssnare för sorteringsdropdown
sortSelect.addEventListener('change', handleSortChange);


// Sorteringsfunktion Dropdown

function handleSortChange() {
  const sortValue = sortSelect.value;

  if (sortValue === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortValue === 'price') {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortValue === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  if (sortValue === 'category') {
    filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
  }

  renderProducts();
}


/// -------------------------------------------------------
// ----------------------Lägg till i varukorg --------------
// -------------------------------------------------------

function addProductToCart(e) {
  const clickedId = Number(e.target.dataset.id);

  // Hämta inputfältet för rätt produkt
  const inputField = document.querySelector(`#amount-${clickedId}`);
  const amount = Number(inputField.value);

  // Validering: inget negativt eller noll
  if (amount <= 0) return;

  const product = products.find(product => product.id === clickedId);
  if (!product) return;

  const index = cart.findIndex(item => item.id === clickedId);

  if (index === -1) {
    cart.push({ ...product, amount });
  } else {
    cart[index].amount += amount;
  }


  // Återställ input-fältets värde till 0 efter tryck på köp-knappen
  inputField.value = 0;
  
  console.log(cart);

   updateCartTotals();

  renderCart();
  animateCart();
}

// ------------------TEST KOD CART TOTAL -----------------------


const cartTotalEl = document.querySelector('#cart-total');
function updateCartTotals() {


  let cartTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    const productSum = cart[i].price * cart[i].amount;
    cartTotal += productSum;
  }

  cartTotalEl.innerHTML = `${cartTotal} kr`;

  console.log(cartTotalEl);


}

// -------------------------------------------------------------


// ---------------------Test kod Animation varukorg ------------

const cartWrapper = document.querySelector('.cart-wrapper');

function animateCart() {
  cartWrapper.classList.add('animate');

  setTimeout(() => {
    cartWrapper.classList.remove('animate');
  }, 300);
}


// Funktion Öka och minska produkter i varukorgen (rendering) 


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


// Eventlyssnare för ovan funktion

  const increaseBtns = document.querySelectorAll('.increase-cart');
increaseBtns.forEach(btn =>
  btn.addEventListener('click', increaseProductFromCart)
);

const decreaseBtns = document.querySelectorAll('.decrease-cart');
decreaseBtns.forEach(btn =>
  btn.addEventListener('click', decreaseProductFromCart)
);

const removeBtns = document.querySelectorAll('.remove-cart');
removeBtns.forEach(btn =>
  btn.addEventListener('click', removeProductFromCart)
);


// Öka funktion

function increaseProductFromCart(e) {
  const id = Number(e.target.dataset.id);
  const product = cart.find(item => item.id === id);

  if (!product) return;

  product.amount += 1;

  renderCart();
  updateCartTotals();
}


// minska funktion

function decreaseProductFromCart(e) {
  const id = Number(e.target.dataset.id);
  const product = cart.find(item => item.id === id);

  if (!product) return;
  if (product.amount <= 1) return;

  product.amount -= 1;

  renderCart();
  updateCartTotals();
}

// Ta bort funktion

function removeProductFromCart(e) {
  const id = Number(e.target.dataset.id);

  const index = cart.findIndex(item => item.id === id);
  if (index === -1) return;

  cart.splice(index, 1);

  renderCart();
  updateCartTotals();
}

}


// Funktion för att minska och öka antal produkter på produkter

function increaseProductCount(e) {
  const clickedId = e.target.dataset.id;
  const input = document.querySelector(`#amount-${clickedId}`);

  input.value = Number(input.value) + 1;
}

function decreaseProductCount(e) {
  const clickedId = e.target.dataset.id;
  const input = document.querySelector(`#amount-${clickedId}`);

  if (Number(input.value) > 0) {
    input.value = Number(input.value) - 1;
  }
}

const buyButtons = document.querySelectorAll('.buy');
buyButtons.forEach(btn => {
  btn.addEventListener('click', addProductToCart);
});

// ------------ Eventlyssnare på varukorg (visa dölj)----

cartToggle.addEventListener('click', () => {
  cartEl.classList.remove('hidden');
  cartToggle.setAttribute('aria-expanded', 'true');
});

closeCartBtn.addEventListener('click', () => {
  cartEl.classList.add('hidden');
  cartToggle.setAttribute('aria-expanded', 'false');
});


// -------------------------------------------------------
// ----------------------Renderfunktion ------------------
// -------------------------------------------------------

function renderProducts() {
  // Töm tidigare innehåll
  productsListing.innerHTML = '';

  // Loopa igenom listan som ska visas
  filteredProducts.forEach(product => {
    const html = `
      <article class="product-card">
      <img src="${product.image}" alt="${product.alt}">
        <h3>${product.name}</h3>
        <p>${product.price} kr</p>
        <p>Betyg: ${product.rating}/5</p>
        
        <div class="amount-controls">
        <button class="decrease" data-id="${product.id}" aria-label="Öka antal">−</button>
        <input 
          type="number"
          id="amount-${product.id}"
          value="0"
          disabled
          aria-label="Antal ${product.name}"
        >
        <button class="increase" data-id="${product.id}" aria-label="Öka antal">+</button>
        </div>
        <button class="buy" data-id="${product.id}">Lägg i varukorg</button>
        </article>
    `;

    // Lägg till HTML i containern
    productsListing.innerHTML += html;

  });

// Eventlyssnare för köpknappar
const increaseButtons = document.querySelectorAll('.increase');
increaseButtons.forEach(btn => {
  btn.addEventListener('click', increaseProductCount);
});

const decreaseButtons = document.querySelectorAll('.decrease');
decreaseButtons.forEach(btn => {
  btn.addEventListener('click', decreaseProductCount);
});

const buyButtons = document.querySelectorAll('.buy');
buyButtons.forEach(btn => {
  btn.addEventListener('click', addProductToCart);
});

  }

// Initial rendering av produkter
  renderProducts();
