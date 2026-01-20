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

6. Lägg till event listeners på filterknappar:
   - vid klick:
       - hämta vald kategori
       - filtrera products-arrayen
       - skicka filtrerad lista till renderProducts

7. Vid klick på "visa alla":
   - skicka hela products-arrayen till renderProducts

8. Skapa knappar för sorteringsfunktion i HTML;
-Namn
-Pris
-Betyg
-Kategori

9.För varje klick på sorteringsknapparna så ska produkterna sorteras i stigande ordning baserat på vald sorteringsmetod.
   - Lägg till event listeners på sorteringsknappar
   -Sortera filteredProducts baserat på vald metod (Namn, pris, katergori och betyg)
   -Användaren ska kunna filtera och sortera samtidigt.
*/

import '/style.scss';


const plainMunk = {
  name: "Vanlig Munk",
  price: 40,
  rating: 4,
  category: "plain",
  image: "images/plain-munk.jpg"
};

const plainMunk6Pack = {
  name: "Vanlig Munk 6-pack",
  price: 100,
  rating: 3.8,
  category: "plain",
  image: "images/plain-munk.jpg"
};

const plainMunk3Pack = {
  name: "Vanlig Munk 3-pack",
  price: 100,
  rating: 3.9,
  category: "plain",
  image: "images/plain-munk.jpg"
};


const glazedMunk = {
  name: "Glaserad Munk",
  price: 45,
  rating: 4.5,
  category: "glazed",
  image: "images/chocholate-munk.jpg"
};

const glazedMunkblueberry = {
  name: "Blåbär Munk",
  price: 45,
  rating: 4,
  category: "glazed",
  image: "images/blueberry-munk.jpg"
};

const glazedMunkraspberry = {
  name: "Hallon Munk",
  price: 45,
  rating: 3.8,
  category: "glazed",
  image: "images/blueberry-munk.jpg"
};

const glazedMunkstrawberry = {
  name: "Jordgubb Munk",
  price: 45,
  rating: 4.3,
  category: "glazed",
  image: "images/strawberry-munk.jpg"
};


const sugarMunk = {
  name: "Socker Munk",
  price: 35,
  rating: 4.2,
  category: "sugar",
  image: "images/sugar-munk.jpg"
};

const sugarMunk6Pack = {
  name: "Socker Munk 6-pack",
  price: 180,
  rating: 4,
  category: "sugar",
  image: "images/sugar-munk.jpg"
};

const sugarMunk3Pack = {
  name: "Socker Munk 3-pack",
  price: 80,
  rating: 3.5,
  category: "sugar",
  image: "images/sugar-munk.jpg"
};

const products = [
     plainMunk,
  plainMunk3Pack,
  plainMunk6Pack,
  glazedMunk,
  glazedMunkblueberry,
  glazedMunkraspberry,
  glazedMunkstrawberry,
  sugarMunk,
  sugarMunk3Pack,
  sugarMunk6Pack
];

// -------------------------------------------------------
// -----------Container där produkterna visas ------------
// -------------------------------------------------------

const productsListing = document.querySelector('#products');

// -------------------------------------------------------
// ----------------------Filterknappar -------------------
// -------------------------------------------------------
const allFilterBtn = document.querySelector('#allTypes');
const plainFilterBtn = document.querySelector('#plain');
const glazedFilterBtn = document.querySelector('#glazed');
const sugarFilterBtn = document.querySelector('#sugar');

let filteredProducts = Array.from(products); // Filtrerad lista

// Eventlyssnare (Knapp lyssnar efter klick)

allFilterBtn.addEventListener('click', showAllProducts);
plainFilterBtn.addEventListener('click', filterPlainProducts);
glazedFilterBtn.addEventListener('click', filterGlazedProducts);
sugarFilterBtn.addEventListener('click', filterSugarProducts);

// -------------------------------------------------------
// ----------------------Filterfunktioner-----------------
// ---Uppdaterar filteredProducts och renderar produkterna

// Visar alla produkter igen
function showAllProducts() {
  filteredProducts = Array.from(products);
  renderProducts();
}

// Filtrerar vanliga munkar
function filterPlainProducts() {
  filteredProducts = products.filter(
    product => product.category === 'plain'
  );
  renderProducts();
}

// Filtrerar glaserade munkar
function filterGlazedProducts() {
  filteredProducts = products.filter(
    product => product.category === 'glazed'
  );
  renderProducts();
}

// Filtrerar sockermunkar
function filterSugarProducts() {
  filteredProducts = products.filter(
    product => product.category === 'sugar'
  );
  renderProducts();
}


// -------------------------------------------------------
// ----------------------Sorteringsfunktion --------------
// -------------------------------------------------------

const sortByNameBtn = document.querySelector('#sortByName');
const sortByPriceBtn = document.querySelector('#sortByPrice');
const sortByRatingBtn = document.querySelector('#sortByRating');
const sortByCategoryBtn = document.querySelector('#sortByCategory');


// Eventlyssnare för sorteringsknappar
sortByNameBtn.addEventListener("click", sortByName);
sortByPriceBtn.addEventListener("click", sortByPrice);
sortByRatingBtn.addEventListener("click", sortByRating);
sortByCategoryBtn.addEventListener("click", sortByCategory);

// Sorteringsfunktion


function sortByName() {
 filteredProducts.sort((product1, product2) => {
   if (product1.name < product2.name) {
     return -1;
   }
   if (product1.name > product2.name) {
     return 1;
   }
   return 0;
 });
 renderProducts();
}

function sortByPrice() {
 filteredProducts.sort((product1, product2) => {
   return product1.price - product2.price;
 });
 renderProducts();
}

function sortByRating() {
 filteredProducts.sort((product1, product2) => {
   return product2.rating - product1.rating;
 });
 renderProducts();
}

function sortByCategory() {
 filteredProducts.sort((product1, product2) => {
   if (product1.category < product2.category) {
     return -1;
   }
   if (product1.category > product2.category) {
     return 1;
   }
   return 0;
 });
 renderProducts();
}


// -------------------------------------------------------
// ----------------------Renderfunktion ------------------
// -------------------------------------------------------

function renderProducts() {
  // Töm tidigare innehåll
  productsListing.innerHTML = '';

  // Loopa igenom listan som ska visas
  filteredProducts.forEach(product => {
    const html = `
      <article>
        <h3>${product.name}</h3>
        <p>Pris: ${product.price} kr</p>
        <p>Betyg: ${product.rating}/5</p>
        <p>Kategori: ${product.category}</p>
      </article>
    `;

    // Lägg till HTML i containern
    productsListing.innerHTML += html;
  });
}

  renderProducts();
