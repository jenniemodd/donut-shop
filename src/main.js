/*
PSEUDOKOD – WEBBSHOP MED MUNKAR

1. Skapa en array med produkter
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
