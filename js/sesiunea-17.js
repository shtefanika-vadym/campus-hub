// Campus Hub · sesiunea 17 · manipularea DOM
// Fișierul stă în js și se leagă de evenimente/evenimente.html, deschis cu Live Server.
// Scrii sub fiecare bloc, salvezi și pagina se reîncarcă singură: rezultatul se vede în pagină și în Console (F12).
//
// Atenție: un nume (de variabilă sau de funcție) se declară o singură dată într-un fișier.
// Fiecare exercițiu are nume proprii (titlu4, card8, evenimente12 ...); funcția creeazaCard se scrie o singură dată, la Exercițiul 12.
// Exercițiile merg unul după altul, pe aceeași pagină, deci nu comentezi nimic după ce termini.
// La DATE DE PORNIRE, codul de sub bloc e deja scris. Console arată o linie de titlu pentru fiecare exercițiu.

/* ===== Exercițiul 1 · GHIDAT · 5 min · Conectăm JavaScript-ul la pagină =====
   CE FACI: Legi fișierul JavaScript de pagina HTML și vezi primele mesaje în Console.
   PAȘI:
   1. Deschide evenimente/evenimente.html cu Live Server, apoi apasă F12 și alege tab-ul
      Console.
   2. În evenimente.html, în <head>, după linkurile către CSS, scrie <script defer
      src="../js/sesiunea-17.js"></script>: src e adresa fișierului, ca href la CSS, iar ../
      înseamnă un folder mai sus.
   3. În sesiunea-17.js afișează cu console.log mesajul "Salut din Campus Hub".
   4. Afișează și console.log(document.title), apoi salvează amândouă fișierele și compară
      cu Ținta.
   OUTPUT AȘTEPTAT:
     Console: Salut din Campus Hub
     Console: Campus Hub · Evenimente
   INDICIU: Linia <script defer src="../js/sesiunea-17.js"></script> stă în <head>, cu
     defer: scriptul așteaptă să se citească pagina · F12 → Console arată mesajele ·
     document.title e titlul paginii · după salvare, Live Server reîncarcă pagina singur.
   GREȘEALĂ FRECVENTĂ: Uiți defer: în <head>, scriptul rulează înainte de pagină, deci
     pagina n-are încă niciun element, iar selecțiile de mai târziu dau null. */

console.log("--- Exercițiul 1 ---");
console.log("Salut din Campus Hub");

/* ===== Exercițiul 2 · GHIDAT · 4 min · Selectăm titlul =====
   CE FACI: Găsești titlul paginii în JavaScript, în două feluri.
   PAȘI:
   1. Scrie const titluId2 = document.getElementById("titlu");
   2. Scrie const titluSel2 = document.querySelector("#titlu");
   3. Afișează amândouă cu console.log.
   4. Salvează, reîncarcă pagina și compară cu Ținta: același element, de două ori.
   OUTPUT AȘTEPTAT:
     Console: <h2 id="titlu">Evenimente</h2>
     Console: <h2 id="titlu">Evenimente</h2>
   INDICIU: getElementById("titlu") primește id-ul fără # · querySelector("#titlu") primește
     un selector, cu # ca în CSS · Console arată tag-ul întreg al elementului.
   GREȘEALĂ FRECVENTĂ: Scrii getElementById("#titlu"), cu #: getElementById primește doar
     numele id-ului, iar răspunsul e null. */

console.log("--- Exercițiul 2 ---");
const titluId2 = document.getElementById("titlu");
const titluSel2 = document.querySelector("#titlu");

console.log(titluId2, titluSel2);

/* ===== Exercițiul 3 · SINGUR · 1 min · Toate cardurile =====
   CE FACI: Cauți toate cardurile din pagină și numeri câte sunt.
   PAȘI:
   1. Selectează toate elementele cu clasa card cu querySelectorAll și pune-le în carduri3.
   2. Afișează câte sunt, cu carduri3.length.
   3. Afișează primul card, carduri3[0].
   4. Salvează și compară cu Ținta.
   OUTPUT AȘTEPTAT:
     Console: 3
     Console: <div class="card">…</div>
   INDICIU: querySelectorAll(".card") → punct în fața clasei, ca în CSS · întoarce o listă,
     nu un singur element · length și [0] merg ca la un array.
   GREȘEALĂ FRECVENTĂ: Folosești querySelector în loc de querySelectorAll: primești un
     singur card, iar .length dă undefined. */

console.log("--- Exercițiul 3 ---");
const cardList3 = document.querySelectorAll(".card");
console.log(cardList3);

/* ===== Exercițiul 4 · GHIDAT · 4 min · Schimbăm titlul =====
   CE FACI: Citești textul titlului și îl înlocuiești cu altul.
   PAȘI:
   1. Selectează titlul cu querySelector("#titlu") și pune-l în titlu4.
   2. Afișează textul de acum, cu titlu4.textContent.
   3. Schimbă textul în „Evenimentele Campus Hub”, cu titlu4.textContent = "...".
   4. Salvează și compară cu Ținta: Console și pagina.
   OUTPUT AȘTEPTAT:
     Console: Evenimente
     Pe pagină: titlul devine „Evenimentele Campus Hub”
   INDICIU: titlu4.textContent → textul din element · titlu4.textContent = "Text nou" → îl
     înlocuiește · textContent nu e o funcție, deci nu are paranteze.
   GREȘEALĂ FRECVENTĂ: Scrii titlu4.textContent("..."), cu paranteze: textContent nu e o
     funcție, i se dă o valoare cu =. */

console.log("--- Exercițiul 4 ---");
const titlu4 = document.querySelector("#titlu");
titlu4.textContent = "Evenimentele Campus Hub";

/* ===== Exercițiul 5 · SINGUR · 2 min · Descrierea și contorul =====
   CE FACI: Schimbi încă două texte din pagină.
   PAȘI:
   1. Selectează #descriere în descriere5 și #contor în contor5.
   2. Afișează textul din contor5, cu textContent.
   3. Pune în descriere5 textul „Alege evenimentul tău și rezervă un loc.”
   4. Pune în contor5 numărul 4 și compară cu Ținta.
   OUTPUT AȘTEPTAT:
     Console: 3
     Pe pagină: descrierea devine „Alege evenimentul tău și rezervă un loc.”
     Pe pagină: contorul arată 4
   INDICIU: document.querySelector("#descriere") și document.querySelector("#contor") ·
     contor5.textContent îl citești; contor5.textContent = 4 îl schimbi · un text se scrie
     între ghilimele, un număr nu.
   GREȘEALĂ FRECVENTĂ: Uiți ghilimelele la text: descriere5.textContent = Alege
     evenimentul... dă eroare; textul se scrie între ghilimele. */

console.log("--- Exercițiul 5 ---");

/* ===== Exercițiul 6 · GHIDAT · 3 min · Tag-uri scrise ca text =====
   CE FACI: Pui în descriere un text cu tag-uri, cu textContent, și vezi ce apare în pagină.
   PAȘI:
   1. Selectează #descriere cu querySelector și pune-o în descriere6.
   2. Pune în ea textul „<b>Ultimele locuri!</b>”, cu descriere6.textContent = "...".
   3. Salvează și compară cu Ținta: tag-urile apar scrise în pagină, nu sunt aplicate.
   OUTPUT AȘTEPTAT:
     Pe pagină: descrierea arată scris „<b>Ultimele locuri!</b>”, cu tot cu tag-uri
   INDICIU: descriere6.textContent = "<b>Ultimele locuri!</b>" · textContent tratează tot ce
     primește ca text, deci <b> rămâne scris așa, cu < și >.
   GREȘEALĂ FRECVENTĂ: Te aștepți ca <b> să îngroașe cuvintele: textContent nu citește
     tag-uri, le afișează exact cum sunt scrise. */

console.log("--- Exercițiul 6 ---");
const descriere6 = document.querySelector("#titlu");
descriere6.textContent = "<b>Ultimele locuri!</b>";

/* ===== Exercițiul 7 · SINGUR · 2 min · Text sau HTML =====
   CE FACI: Pui același text cu tag-uri în descriere, dar acum ca HTML, și citești textul
     rămas.
   PAȘI:
   1. Selectează #descriere în descriere7.
   2. Pune în ea „<b>Ultimele locuri!</b>”, cu innerHTML.
   3. Afișează cu console.log textul din descriere7, cu textContent.
   4. Salvează și compară cu Ținta: cuvintele sunt îngroșate, iar Console arată doar textul.
   OUTPUT AȘTEPTAT:
     Console: Ultimele locuri!
     Pe pagină: descrierea e îngroșată: „Ultimele locuri!”
   INDICIU: descriere7.innerHTML = "<b>Ultimele locuri!</b>" citește tag-urile ca HTML ·
     descriere7.textContent îți dă înapoi doar textul, fără tag-uri.
   GREȘEALĂ FRECVENTĂ: Scrii descriere7.textContent = ...: tag-urile apar scrise, ca la
     Exercițiul 6. Pentru HTML ai nevoie de innerHTML. */

console.log("--- Exercițiul 7 ---");

/* ===== Exercițiul 8 · GHIDAT · 4 min · Stil direct și clase =====
   CE FACI: Colorezi un card direct din JavaScript, apoi îi pui o clasă din CSS.
   PAȘI:
   1. Selectează primul card cu querySelector(".card") și pune-l în card8.
   2. Schimbă fundalul cu card8.style.backgroundColor = "lightyellow";
   3. Adaugă clasa recomandat cu card8.classList.add("recomandat");
   4. Salvează și compară cu Ținta.
   OUTPUT AȘTEPTAT:
     Pe pagină: cardul Hackathon are fundal galben și chenar roz
   INDICIU: querySelector(".card") ia primul card · style.backgroundColor, cu literă mare în
     loc de liniuță · classList.add("recomandat") pune clasa din CSS-ul paginii.
   GREȘEALĂ FRECVENTĂ: Scrii style.background-color, cu liniuță: în JavaScript se scrie
     backgroundColor, cu literă mare în loc de liniuță. */

console.log("--- Exercițiul 8 ---");
const card8 = document.querySelector(".card");
// card8.style.backgroundColor = "lightyellow";
// card8.classList.toggle("recomandat");

console.log(card8);

/* ===== Exercițiul 9 · SINGUR · 2 min · Cardul epuizat =====
   CE FACI: Workshop CSS nu mai are locuri: îl marchezi cu clasa epuizat.
   PAȘI:
   1. Selectează toate cardurile cu querySelectorAll(".card") și pune-le în carduri9.
   2. Adaugă clasa epuizat pe al doilea card (indexul 1), cu classList.add.
   3. Cu classList.toggle("recomandat") pune clasa recomandat pe ultimul card (indexul 2).
   4. Salvează și compară cu Ținta.
   OUTPUT AȘTEPTAT:
     Pe pagină: Workshop CSS e șters și tăiat (epuizat)
     Pe pagină: Meetup primește chenar roz (recomandat)
   INDICIU: carduri9[1] e al doilea card (indexul începe de la 0) · classList.add("epuizat")
     pune clasa · classList.toggle("recomandat") o pune dacă lipsește și o scoate dacă
     există.
   GREȘEALĂ FRECVENTĂ: Scrii carduri9.classList.add(...) pe întreaga listă: clasa se pune pe
     un element, deci alegi întâi cardul, cu un index. */

console.log("--- Exercițiul 9 ---");

/* ===== Exercițiul 10 · GHIDAT · 5 min · Creăm un card nou =====
   CE FACI: Construiești de la zero un card pentru Concert și îl pui în pagină.
   PAȘI:
   1. Creează un div cu document.createElement("div") și pune-i clasa card cu classList.add.
   2. Creează un h3 cu createElement("h3") și pune-i textul „Concert” cu textContent.
   3. Pune h3-ul în card cu appendChild.
   4. Selectează #lista-evenimente și pune cardul în ea cu appendChild.
   5. Salvează și compară cu Ținta: apare al patrulea card.
   OUTPUT AȘTEPTAT:
     Pe pagină: apare un al patrulea card, „Concert”
   INDICIU: createElement("div") face elementul, dar el nu e încă în pagină ·
     card10.appendChild(titlu10) pune h3-ul în card · lista10.appendChild(card10) așază
     cardul în pagină.
   GREȘEALĂ FRECVENTĂ: Creezi cardul, dar uiți să-l pui în pagină: createElement doar face
     elementul; apare abia după appendChild. */

console.log("--- Exercițiul 10 ---");
const card10 = document.createElement("div");

const h3 = document.createElement("h3");
h3.textContent = "Concert";

card10.appendChild(h3);

const lista10 = document.getElementById("lista-evenimente");
lista10.appendChild(card10);

/* ===== Exercițiul 11 · SINGUR · 3 min · Paragraf și ștergere =====
   CE FACI: Completezi cardul Concert cu o informație și ștergi un card din pagină.
   PAȘI:
   1. Creează un p cu createElement("p") și textul „50 locuri · 70 lei” (info11).
   2. Pune-l în card10, din Exercițiul 10, cu appendChild.
   3. Selectează toate cardurile cu querySelectorAll(".card") și pune-le în carduri11.
   4. Șterge cardul epuizat, cel de pe indexul 1, cu remove().
   OUTPUT AȘTEPTAT:
     Pe pagină: cardul Concert are sub titlu „50 locuri · 70 lei”
     Pe pagină: cardul Workshop CSS dispare
   INDICIU: info11.textContent = "50 locuri · 70 lei" · card10.appendChild(info11) pune
     paragraful în card · carduri11[1].remove() scoate cardul din pagină.
   GREȘEALĂ FRECVENTĂ: Scrii info11.appendChild(card10): ai pus cardul în paragraf, nu
     paragraful în card. Cel care primește e cel care conține. */

console.log("--- Exercițiul 11 ---");
const info11 = document.createElement("p");
info11.textContent = "50 locuri · 70 lei";
card10.appendChild(info11);

card10.classList.add("card");

const carduri11 = document.querySelectorAll(".card");
// carduri11[1].remove();

/* ===== Exercițiul 12 · GHIDAT · 6 min · Funcția creeazaCard =====
   CE FACI: Pui construirea unui card într-o funcție, care primește un eveniment.
   PAȘI:
   1. Scrie funcția creeazaCard(eveniment).
   2. În ea creează un div cu clasa card, un h3 cu eveniment.nume și un p cu locurile și
      prețul.
   3. Pune h3-ul și p-ul în card, apoi întoarce cardul cu return card.
   4. Testează: pune creeazaCard(evenimente12[0]) în #lista-evenimente cu appendChild.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     Pe pagină: la sfârșitul listei apare un card nou, Hackathon, cu „20 locuri · 90 lei”
   INDICIU: info.textContent = eveniment.locuri + " locuri · " + eveniment.pret + " lei" ·
     funcția întoarce cardul cu return card · creeazaCard se declară o singură dată în
     fișier.
   GREȘEALĂ FRECVENTĂ: Uiți return card: funcția întoarce undefined, iar appendChild dă
     eroare. */

console.log("--- Exercițiul 12 ---");
const evenimente12 = [
  { nume: "Hackathon", locuri: 20, pret: 90 },
  { nume: "Workshop CSS", locuri: 0, pret: 40 },
  { nume: "Meetup", locuri: 35, pret: 0 },
];

function creeazaCard(eveniment) {
  const card10 = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.textContent = eveniment.nume;

  const info11 = document.createElement("p");
  // info11.textContent = "50 locuri · 70 lei";
  info11.textContent =
    eveniment.locuri + " locuri . " + eveniment.pret + " lei";

  card10.appendChild(h3);
  card10.appendChild(info11);

  card10.classList.add("card");

  return card10;
}

console.log(creeazaCard(evenimente12[0]));

lista10.appendChild(creeazaCard(evenimente12[0]));

/* ===== Exercițiul 13 · SINGUR · 1 min · Randăm lista din array =====
   CE FACI: Refaci lista din pagină din datele din array, cu funcția creeazaCard.
   PAȘI:
   1. Selectează #lista-evenimente și pune-o în lista13.
   2. Golește lista cu lista13.innerHTML = "";
   3. Cu forEach pe evenimente12, pune în lista13 cardul făcut de creeazaCard pentru fiecare
      eveniment.
   4. Salvează și compară cu Ținta: trei carduri, generate din array.
   OUTPUT AȘTEPTAT:
     Pe pagină: lista are exact trei carduri, făcute din array: Hackathon, Workshop CSS, Meetup
   INDICIU: lista13.innerHTML = "" scoate cardurile vechi · evenimente12.forEach((eveniment)
     => ...) cheamă funcția pentru fiecare eveniment · în funcție:
     lista13.appendChild(creeazaCard(eveniment)).
   GREȘEALĂ FRECVENTĂ: Uiți să golești lista: cardurile vechi rămân, iar cele noi se adaugă
     după ele. */

console.log("--- Exercițiul 13 ---");
lista10.innerHTML = "";
evenimente12.forEach((eveniment) =>
  lista10.appendChild(creeazaCard(eveniment)),
);

/* ===== Exercițiul 14 · SINGUR · 3 min · Evenimentele tale pe pagină =====
   CE FACI: Pui pe pagină evenimentele tale, cu contor și cu cardul plin marcat.
   PAȘI:
   1. Golește #lista-evenimente (lista14), ca la Exercițiul 13.
   2. Cu forEach pe evenimenteleMele, fă un card cu creeazaCard și pune-l într-o variabilă
      card.
   3. Dacă evenimentul e plin (ocupate egal cu locuri), adaugă pe card clasa epuizat.
   4. Pune cardul în lista14 cu appendChild.
   5. Scrie în #contor câte evenimente sunt, cu textContent.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     Pe pagină: patru carduri: Hackathon, Workshop CSS, Meetup, Concert
     Pe pagină: Concert (plin) e șters și tăiat
     Pe pagină: contorul arată 4
   INDICIU: forEach cu acolade: (eveniment) => { ... } · clasa se pune pe card, nu pe
     eveniment · numărul de evenimente: evenimenteleMele.length.
   GREȘEALĂ FRECVENTĂ: Scrii eveniment.classList.add(...): eveniment e un obiect din array,
     nu un element din pagină. Clasa se pune pe card. */

console.log("--- Exercițiul 14 ---");
const evenimenteleMele = [
  { nume: "Hackathon", locuri: 20, ocupate: 8, pret: 90 },
  { nume: "Workshop CSS", locuri: 30, ocupate: 12, pret: 40 },
  { nume: "Meetup", locuri: 35, ocupate: 34, pret: 0 },
  { nume: "Concert", locuri: 50, ocupate: 50, pret: 70 },
];

const lista14 = document.querySelector("#lista-evenimente");
lista14.innerHTML = "";

evenimenteleMele.forEach((eveniment) => {
  const card = creeazaCard(eveniment);
  if (eveniment.ocupate === eveniment.locuri) card.classList.add("epuizat");
  lista14.appendChild(card);
});

document.querySelector("#contor").textContent = evenimenteleMele.length;

/* ===== Exercițiul 15 · GHIDAT · 3 min · Detectivul: eroare în Console =====
   CE FACI: Codul are o greșeală care dă eroare în Console: o descoperi cu Copilot în modul
     Ask, apoi o repari tu.
   PAȘI:
   1. Decomentează cele două linii de sub bloc, salvează și deschide Console (F12): apare o
      eroare roșie.
   2. În Copilot Chat, modul Ask, scrie un prompt cu patru părți: #file, eroarea copiată,
      „explică-mi, nu repara”, „doar ce am învățat”.
   3. Citește răspunsul și verifică-l singur: caută în evenimente.html id-ul titlului.
   4. Repară tu selectorul, salvează și compară cu Ținta.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc, comentate.
   OUTPUT AȘTEPTAT:
     Console: TypeError: Cannot set properties of null (setting 'textContent')
     Pe pagină: după ce repari selectorul, titlul devine „Evenimentele tale”
   INDICIU: Console arată linia cu eroarea · în prompt lipești mesajul exact, nu îl rescrii
     · Copilot în modul Ask explică, nu schimbă fișierul · id-ul titlului e în
     evenimente.html.
   GREȘEALĂ FRECVENTĂ: Scrii „repară tot” fără să spui ce vezi: Copilot ghicește. Lipește
     eroarea și cere o explicație, nu o rescriere. */

console.log("--- Exercițiul 15 ---");
const titlu15 = document.querySelector("#titulu");
titlu15.textContent = "Evenimentele tale";

/* ===== Exercițiul 16 · SINGUR · 2 min · Detectivul: nicio eroare, dar nu merge =====
   CE FACI: Textul din descriere nu se schimbă, iar Console nu arată nicio eroare: găsești
     greșeala cu Copilot, apoi o repari tu.
   PAȘI:
   1. Decomentează cele două linii de sub bloc și salvează: nicio eroare, dar descrierea nu
      se schimbă.
   2. Caută un minut singur ce poate fi greșit.
   3. Întreabă Copilot în modul Ask: spune ce vezi, lipește cele două linii și cere ipoteze,
      fără reparare.
   4. Testează ipoteza lui în pagină, repară și compară cu Ținta.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc, comentate.
   OUTPUT AȘTEPTAT:
     Pe pagină: nicio eroare în Console, iar descrierea devine „Am găsit greșeala!”
   INDICIU: JavaScript nu dă eroare dacă scrii o proprietate cu un nume inventat · uită-te
     la literele mari și mici · ipoteza lui Copilot e doar o ipoteză: o testezi.
   GREȘEALĂ FRECVENTĂ: Accepți prima ipoteză a lui Copilot fără s-o verifici: o încerci în
     cod și te uiți în pagină. Dacă nu merge, o respingi. */

console.log("--- Exercițiul 16 ---");
// const descriere16 = document.querySelector("#descriere");
// descriere16.textcontent = "Am găsit greșeala!";

/* ===== TEMĂ DE ACASĂ · Lista filtrată și contorul =====
   CE FACI: Pagina evenimente.html arată doar evenimentele cu locuri libere și câte sunt.
   PAȘI:
   1. În sesiunea-17.js folosește evenimenteleMele (din Exercițiul 14) și funcția
      creeazaCard.
   2. Cu filter păstrează în cuLocuri evenimentele cu locuri libere (locuri mai mare decât
      ocupate).
   3. Golește #lista-evenimente și pune, cu forEach, câte un card pentru fiecare eveniment
      din cuLocuri; scrie în #contor câte sunt.
   4. Cu textContent scrie în #descriere „3 evenimente cu locuri libere”, cu numărul luat
      din cuLocuri.length.
   5. Pe cardul evenimentului gratuit (pret egal cu 0) adaugă clasa recomandat.
   6. De studiat singur, pe MDN: parentElement și children. Din h3-ul primului card afișează
      în Console cardul lui, apoi câți copii are lista.
   7. De studiat singur, pe MDN: setAttribute și getAttribute. Pune pe primul card atributul
      title și afișează-l în Console.
   8. Trimite lucrul pe GitHub: branch sesiunea-17, Pull Request unit în main.
   OUTPUT AȘTEPTAT (exemplu):
     Pe pagină: 3 carduri: Hackathon, Workshop CSS, Meetup (Concertul plin lipsește)
     Pe pagină: contorul arată 3
     Pe pagină: descrierea e „3 evenimente cu locuri libere”
     Pe pagină: Meetup (gratuit) are chenar roz, de la clasa recomandat
     Console: cardul care conține h3-ul, apoi numărul de copii ai listei
     Console: valoarea atributului title, citită cu getAttribute
   INDICIU: Revezi: filter (sesiunea 16), golirea cu innerHTML (ex. 13), creeazaCard (ex.
     12), forEach cu acolade și if (ex. 14) · filter: (eveniment) => eveniment.locuri >
     eveniment.ocupate · numărul în text: cuLocuri.length + " evenimente cu locuri libere" ·
     pe cardul gratuit: în forEach, if (eveniment.pret === 0)
     card.classList.add("recomandat"). · parentElement și children: în MDN, pagina
     „Element”; setAttribute(nume, valoare) și getAttribute(nume): tot acolo, același mod de
     lucru ca la textContent
   GREȘEALĂ FRECVENTĂ: Golești lista, dar parcurgi evenimenteleMele în loc de cuLocuri:
     Concertul plin apare din nou. forEach-ul trebuie făcut pe lista filtrată. */
