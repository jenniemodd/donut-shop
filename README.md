# Webbprojekt - E-handel för munkar

Detta projekt är en enkel e-handel för munkar, skapad som en skoluppgift och mitt första större projekt i JavaScript. Syftet med uppgiften var att träna på JavaScript, DOM-manipulation, formulärvalidering och logik, samt att bygga ihop allt till ett fungerande flöde.

Webbshopen visar olika sorters munkar som användaren kan filtrera och sortera, lägga i varukorg och sedan beställa via ett formulär. Allt innehåll (produkter, priser, varukorg m.m.) hanteras i JavaScript.

En stor del av uppgiften var att implementera olika specialregler, till exempel:

- Rabatt på måndagar före kl. 10

- Helgpåslag på priser från fredag eftermiddag till tidig måndag morgon

- Mängdrabatt om man köper många av samma sort

- Gratis frakt vid större beställningar

- - Begränsningar i betalsätt beroende på totalsumma

Samt en timeout som rensar beställningen om användaren är inaktiv för länge

Projektet innehåller även formulärvalidering med regex, felmeddelanden, och grundläggande tillgänglighetsanpassning (labels, aria-attribut m.m.).

HTML och CSS har validerats utan kritiska fel och en Lighthouse-rapport har genomförts (98 i tillgänglighet). Det finns fortfarande vissa varningar kring rubrikstruktur eftersom produktkorten renderas dynamiskt i JavaScript, vilket jag valde att inte bygga om i detta skede.

Projektet är byggt utan externa ramverk och använder HTML, CSS (SCSS) och JavaScript.

Skärmdumpar på slutresultatet, validering och Lighthouse finns nedan.

Authors

@jenniemodd

Länk till live-version: http://localhost:5173/fed25d-js-intro-inl-1-jenniemodd/

Screenshots

![Css Validering](<Skärmavbild 2026-01-30 kl. 20.28.25.png>)

![Html Validering](<Skärmavbild 2026-01-30 kl. 16.29.08.png>)

![Lighthouse rapport](<Skärmavbild 2026-01-30 kl. 16.05.00.png>)