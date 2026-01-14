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

import '/styles/style.css';

const plainMunk = {
  name: "Plain Munk",
  price: 40,
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

const sugarMunk = {
  name: "Sugar Munk",
  price: 35,
  rating: 4.2,
  category: "sugar",
  image: "images/sugar-munk.jpg"
};

const products = [
    plainMunk, 
    glazedMunk, 
    sugarMunk
];

const productsListing = document.querySelector('#products');