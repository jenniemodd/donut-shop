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
  name: "Vanlig Munk 3-pack",
  price: 100,
  rating: 4,
  category: "plain",
  image: "images/plain-munk.jpg"
};

const plainMunk3Pack = {
  name: "Vanlig Munk 3-pack",
  price: 100,
  rating: 4,
  category: "plain",
  image: "images/plain-munk.jpg"
};


const glazedMunk = {
  name: "Glazed Munk",
  price: 45,
  rating: 4.5,
  category: "chocolate",
  image: "images/chocolate-munk.jpg"
};

const glazedMunkblueberry = {
  name: "Glazed Munk",
  price: 45,
  rating: 4,
  category: "blueberry",
  image: "images/blueberry-munk.jpg"
};

const glazedMunkrasberry = {
  name: "Glazed Munk",
  price: 45,
  rating: 3.8,
  category: "rasberry",
  image: "images/blueberry-munk.jpg"
};

const glazedMunkstrawberry = {
  name: "Glazed Munk",
  price: 45,
  rating: 4.3,
  category: "strawberry",
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
  rating: 4,
  category: "sugar",
  image: "images/sugar-munk.jpg"
};

const products = [
    plainMunk, 
    glazedMunk, 
    sugarMunk
];

const productsListing = document.querySelector('#products');