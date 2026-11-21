// Campus Hub · sesiunea 18 · DOM cu evenimente
// Fișierul stă în js și se leagă de evenimente/evenimente.html, deschis cu Live Server.
// Scrii sub fiecare bloc, salvezi și pagina se reîncarcă singură: rezultatul se vede în pagină și în Console (F12).
//
// Atenție: un nume (de variabilă sau de funcție) se declară o singură dată într-un fișier.
// Exercițiile 1-4 au nume proprii (titlu1, camp3 ...). De la Exercițiul 5, codul gata scris are numele lui
// (evenimente, lista, camp, descriere), iar funcțiile pe care le scrii au nume fixe: randeaza, adauga, sterge, editeaza, salveaza, anuleaza.
// Exercițiile merg unul după altul, pe aceeași pagină, deci nu comentezi nimic după ce termini.
// La DATE DE PORNIRE, codul de sub bloc e deja scris: nu-l modifici. Console arată o linie de titlu pentru fiecare exercițiu.

/* ===== Exercițiul 1 · GHIDAT · 6 min · Primul click =====
   CE FACI: La click pe butonul „Adaugă”, descrierea de sub titlu se schimbă.
   PAȘI:
   1. Selectează #buton-adauga în buton1 și #descriere în descriere1, cu querySelector.
   2. Cu addEventListener, ascultă evenimentul "click" pe buton1, cu o funcție arrow.
   3. În funcție, scrie în descriere1.textContent textul "Ai apăsat pe Adaugă!".
   4. Salvează, reîncarcă pagina și dă click pe „Adaugă”.
   OUTPUT AȘTEPTAT:
     La început: descrierea e „Ce se întâmplă în Campus Hub luna aceasta.”
     Click pe „Adaugă” → descrierea devine „Ai apăsat pe Adaugă!”
   INDICIU: buton1.addEventListener("click", () => { ... }) → unde, ce și ce facem ·
     descriere1.textContent = "..." → schimbi textul de pe pagină · evenimentul se scrie cu
     litere mici, între ghilimele.
   GREȘEALĂ FRECVENTĂ: Scrii "Click" cu literă mare sau fără ghilimele: evenimentul se
     numește "click", cu litere mici, între ghilimele; altfel nu se întâmplă nimic. */

console.log("--- Exercițiul 1 ---");
const buton1 = document.getElementById("buton-adauga");
const descriere1 = document.getElementById("descriere");

buton1.addEventListener("click", () => {
  console.log("Ai dat click pe adauga");
  descriere1.textContent = "Ai apăsat pe Adaugă!";
});

/* ===== Exercițiul 2 · SINGUR · 2 min · Clasa la click =====
   CE FACI: La click pe descriere, pune pe ea clasa recomandat; la al doilea click,
     scoate-o.
   PAȘI:
   1. Selectează #descriere în descriere2.
   2. Ascultă "click" pe descriere2.
   3. În funcție, cu classList.toggle, pune sau scoate clasa "recomandat".
   4. Salvează și dă click de două ori pe descriere.
   OUTPUT AȘTEPTAT:
     Click pe descriere → apare un chenar roz în jurul ei
     Încă un click → chenarul dispare
   INDICIU: descriere2.addEventListener("click", () => { ... }) ·
     classList.toggle("recomandat") → pune clasa dacă lipsește, o scoate dacă există
     (sesiunea 17).
   GREȘEALĂ FRECVENTĂ: Scrii descriere2.classList.toggle(...) direct, în afara funcției:
     clasa se schimbă o dată, la încărcarea paginii, nu la fiecare click. */

console.log("--- Exercițiul 2 ---");
const descriere2 = document.querySelector("#descriere");
descriere2.addEventListener("click", () => {
  descriere2.classList.toggle("recomandat");
});

/* ===== Exercițiul 3 · GHIDAT · 6 min · Scrii, pagina răspunde =====
   CE FACI: Pe măsură ce scrii în câmpul „Numele evenimentului”, descrierea îți spune câte
     litere ai scris.
   PAȘI:
   1. Selectează #input-eveniment în camp3 și #descriere în descriere3.
   2. Ascultă evenimentul "input" pe camp3; funcția primește parametrul event.
   3. În funcție, scrie în descriere3.textContent: "Ai scris " + event.target.value.length +
      " litere".
   4. Salvează, reîncarcă pagina și scrie „Ana” în câmp.
   OUTPUT AȘTEPTAT:
     Scrii „A” → Ai scris 1 litere
     Scrii „Ana” → Ai scris 3 litere
   INDICIU: "input" → se produce la fiecare literă scrisă sau ștearsă · (event) => ... →
     funcția primește obiectul event · event.target.value → ce e scris acum în câmp ·
     .length → câte litere are textul, ca la un array.
   GREȘEALĂ FRECVENTĂ: Scrii event.value în loc de event.target.value: obiectul event nu are
     value; value e pe elementul din event.target. */

console.log("--- Exercițiul 3 ---");
const camp3 = document.getElementById("input-eveniment");
const descriere3 = document.getElementById("descriere");

camp3.addEventListener("input", (event) => {
  descriere3.textContent = "Ai scris " + event.target.value.length + " litere";
});

/* ===== Exercițiul 4 · SINGUR · 2 min · Câmpul se colorează =====
   CE FACI: Dacă numele scris în câmp are mai mult de 20 de litere, chenarul câmpului devine
     roșu, iar descrierea rămâne ca la Exercițiul 3.
   PAȘI:
   1. Rămâi în funcția de la "input" din Exercițiul 3: nu comentezi și nu ștergi nimic,
      scrii codul nou în ea, sub linia cu descriere3.textContent.
   2. Cu un if, verifică dacă event.target.value.length e mai mare decât 20; atunci pune
      camp3.style.borderColor pe "red".
   3. Cu else, pune camp3.style.borderColor pe "#cbd5e1" (gri).
   4. Salvează, scrie un nume lung și apoi șterge din el: descrierea și chenarul se schimbă
      împreună.
   OUTPUT AȘTEPTAT:
     Scrii un nume cu 21 de litere sau mai multe → chenarul câmpului devine roșu, iar descrierea arată „Ai scris 21 litere”
     Ștergi din el, sub 21 de litere → chenarul revine la gri, iar descrierea arată câte litere au rămas
   INDICIU: Tot în funcția din Exercițiul 3, sub descriere3.textContent = ... · if
     (event.target.value.length > 20) { ... } else { ... } · style.borderColor = "red"
     (sesiunea 17).
   GREȘEALĂ FRECVENTĂ: Uiți else: după ce chenarul a devenit roșu, rămâne roșu chiar și când
     ștergi literele. Altă greșeală: scrii un al doilea addEventListener în loc să adaugi în
     funcția din Exercițiul 3. */

console.log("--- Exercițiul 4 ---");

camp3.addEventListener("input", (event) => {
  // descriere3.textContent = "Ai scris " + event.target.value.length + " litere";

  if (event.target.value.length > 20) {
    camp3.style.borderColor = "red";
  } else {
    camp3.style.borderColor = "#cbd5e1";
  }
});

/* ===== Exercițiul 5 · SINGUR · 3 min · Scrie randeaza =====
   CE FACI: Pui bucla din sesiunea 17 într-o funcție, randeaza, care desenează cardurile din
     listă și scrie în contor câte sunt.
   PAȘI:
   1. Scrie funcția randeaza().
   2. În ea, golește lista (lista.innerHTML = "") și pune în ea, cu forEach, câte un card
      făcut de creeazaCard pentru fiecare eveniment din evenimente.
   3. Tot în ea, scrie în contor.textContent câte evenimente sunt (evenimente.length).
   4. Sub funcție, cheamă randeaza(): pagina arată cardurile, cu butoane, și contorul.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     Pagina arată cardurile din listă, făcute din array: Hackathon, Workshop CSS, Meetup, fiecare cu butoanele Editează și Șterge
     Contorul arată 3
   INDICIU: lista.innerHTML = "" → scoți cardurile vechi · evenimente.forEach((eveniment) =>
     lista.appendChild(creeazaCard(eveniment))) → bucla din sesiunea 17 · contor.textContent
     = evenimente.length · fără apelul randeaza() de sub funcție nu se desenează nimic.
   GREȘEALĂ FRECVENTĂ: Uiți să golești lista: la fiecare randeaza cardurile vechi rămân, iar
     cele noi se adaugă după ele. */

console.log("--- Exercițiul 5 ---");
let evenimente = [
  { id: 1, nume: "Hackathon", locuri: 20, pret: 90 },
  { id: 2, nume: "Workshop CSS", locuri: 30, pret: 40 },
  { id: 3, nume: "Meetup", locuri: 35, pret: 0 },
];
let urmatorulId = 4;
let idInEditare = null;
const lista = document.querySelector("#lista-evenimente");
const camp = document.querySelector("#input-eveniment");
const descriere = document.querySelector("#descriere");
const contor = document.querySelector("#contor");

function creeazaButon(text, clasa, actiune, id, laClick) {
  const buton = document.createElement("button");
  buton.classList.add(clasa);
  buton.textContent = text;
  buton.setAttribute("data-actiune", actiune);
  buton.setAttribute("data-id", id);
  if (laClick) buton.addEventListener("click", laClick);
  return buton;
}

function creeazaCard(eveniment) {
  const card = document.createElement("div");
  card.classList.add("card");
  const actiuni = document.createElement("div");
  actiuni.classList.add("card-actions");

  if (eveniment.id === idInEditare) {
    const campNume = document.createElement("input");
    campNume.classList.add("card-input");
    campNume.value = eveniment.nume;
    card.appendChild(campNume);
    actiuni.appendChild(
      creeazaButon("Salvează", "btn-edit", "salveaza", eveniment.id, () =>
        salveaza(eveniment.id, campNume.value),
      ),
    );
    actiuni.appendChild(
      creeazaButon("Anulează", "btn-delete", "anuleaza", eveniment.id, () =>
        anuleaza(),
      ),
    );
  } else {
    const titlu = document.createElement("h3");
    titlu.textContent = eveniment.nume;
    const info = document.createElement("p");
    info.textContent =
      eveniment.locuri + " locuri · " + eveniment.pret + " lei";
    card.appendChild(titlu);
    card.appendChild(info);
    actiuni.appendChild(
      creeazaButon("Editează", "btn-edit", "editeaza", eveniment.id),
    );
    actiuni.appendChild(
      creeazaButon("Șterge", "btn-delete", "sterge", eveniment.id),
    );
  }
  card.appendChild(actiuni);
  return card;
}

function randeaza() {
  lista.innerHTML = "";
  evenimente.forEach((eveniment) => lista.appendChild(creeazaCard(eveniment)));
  contor.textContent = evenimente.length;
}

randeaza();

/* ===== Exercițiul 6 · GHIDAT · 10 min · Create: adaugă un eveniment =====
   CE FACI: La click pe „Adaugă”, numele din câmp devine un eveniment nou în listă, iar
     pagina se redesenează.
   PAȘI:
   1. Selectează #buton-adauga în butonAdauga.
   2. Scrie funcția adauga(). Dacă camp.value e "", scrie în descriere.textContent „Scrie
      numele evenimentului” și oprește funcția cu return.
   3. Altfel adaugă cu push în evenimente un obiect cu id urmatorulId, numele din
      camp.value, 30 de locuri și prețul 50; crește urmatorulId cu 1.
   4. Scrie în descriere.textContent „Eveniment adăugat!”, golește câmpul (camp.value = ""),
      apoi cheamă randeaza().
   5. Leagă funcția: butonAdauga.addEventListener("click", adauga), fără paranteze.
   OUTPUT AȘTEPTAT:
     Scrii „Concert” și apeși „Adaugă” → apare al patrulea card, 30 locuri · 50 lei; câmpul se golește, iar descrierea devine „Eveniment adăugat!”
     Apeși „Adaugă” cu câmpul gol → descrierea devine „Scrie numele evenimentului”, niciun card nou
   INDICIU: if (camp.value === "") { ...; return; } → ieși din funcție înainte de push ·
     evenimente.push({ id: urmatorulId, nume: camp.value, locuri: 30, pret: 50 }) ·
     urmatorulId = urmatorulId + 1 → următorul eveniment are alt id · addEventListener
     primește numele funcției, fără paranteze.
   GREȘEALĂ FRECVENTĂ: Scrii butonAdauga.addEventListener("click", adauga()), cu paranteze:
     funcția rulează imediat, la încărcarea paginii, iar la click nu se mai întâmplă nimic. */

console.log("--- Exercițiul 6 ---");
const butonAdauga = document.getElementById("buton-adauga");

function adauga() {
  const numeEveniment = camp.value;
  console.log(numeEveniment, camp.value, "1");

  if (numeEveniment === "") {
    descriere.textContent = "Scrie numele evenimentului";
    return;
  }

  const evenimentNou = {
    id: urmatorulId,
    nume: numeEveniment,
    locuri: 30,
    pret: 50,
  };

  urmatorulId = urmatorulId + 1;

  evenimente.push(evenimentNou);

  camp.value = "";
  randeaza();
}

butonAdauga.addEventListener("click", adauga);

/* ===== Exercițiul 7 · SINGUR · 3 min · Delete: șterge un eveniment =====
   CE FACI: Butonul „Șterge” de pe fiecare card cheamă sterge(id); tu scrii funcția care
     scoate evenimentul din listă.
   PAȘI:
   1. Găsește în creeazaCard linia cu butonul „Șterge”: el cheamă sterge cu id-ul
      evenimentului lui.
   2. Scrie funcția sterge(id).
   3. În ea, cu filter, păstrează evenimentele care au alt id decât id și pune lista în
      evenimente.
   4. Cheamă randeaza(), apoi dă click pe „Șterge” la Workshop CSS.
   OUTPUT AȘTEPTAT:
     Click pe „Șterge” la Workshop CSS → rămân Hackathon și Meetup, iar contorul scade la 2
   INDICIU: evenimente = evenimente.filter((eveniment) => eveniment.id !== id) → păstrezi
     tot, în afară de cardul cu id-ul primit · randeaza() redesenează lista · fără randeaza
     lista din memorie se schimbă, dar pagina nu.
   GREȘEALĂ FRECVENTĂ: Scrii === în loc de !==: păstrezi doar cardul pe care ai dat click,
     nu pe celelalte. */

console.log("--- Exercițiul 7 ---");

function sterge(id) {
  evenimente = evenimente.filter((eveniment) => eveniment.id !== id);
  randeaza();
}

/* ===== Exercițiul 8 · GHIDAT · 8 min · Update: editează numele =====
   CE FACI: „Editează” transformă numele din card într-un câmp; „Salvează” pune numele nou
     în listă.
   PAȘI:
   1. Scrie funcția editeaza(id): pune id în idInEditare, apoi cheamă randeaza(). Cardul cu
      acel id apare cu un câmp.
   2. Scrie funcția salveaza(id, numeNou) și află în ea, cu findIndex, poziția evenimentului
      care are id-ul primit; pune-o în index.
   3. Schimbă numele de pe acea poziție: evenimente[index].nume = numeNou.
   4. Pune idInEditare pe null și cheamă randeaza().
   5. Dă click pe „Editează”, schimbă numele și apasă „Salvează”.
   OUTPUT AȘTEPTAT:
     Click pe „Editează” la Workshop CSS → numele devine un câmp, cu butoanele Salvează și Anulează
     Schimbi în „Workshop JS” și apeși „Salvează” → cardul se desenează din nou, cu numele nou
   INDICIU: idInEditare = id → cardul acesta se desenează cu câmp ·
     evenimente.findIndex((eveniment) => eveniment.id === id) → poziția evenimentului cu
     id-ul primit (-1 dacă nu există), ca indexOf din sesiunea 16 · evenimente[index].nume =
     numeNou → schimbi fișa de pe acea poziție, apoi randeaza() o redesenează · idInEditare
     = null → cardul revine la normal.
   GREȘEALĂ FRECVENTĂ: Uiți idInEditare = null: după salvare cardul rămâne cu câmpul
     deschis, pentru că randeaza îl desenează tot în modul de editare. */

console.log("--- Exercițiul 8 ---");

function editeaza(id) {
  idInEditare = id;
  randeaza();
}

function salveaza(id, numeNou) {
  const index = evenimente.findIndex((ev) => ev.id === id);

  evenimente[index].nume = numeNou;

  idInEditare = null;
  randeaza();
}

/* ===== Exercițiul 9 · SINGUR · 1 min · Anulează editarea =====
   CE FACI: Butonul „Anulează” din cardul aflat în editare cheamă anuleaza(); tu scrii
     funcția.
   PAȘI:
   1. Scrie funcția anuleaza().
   2. Pune idInEditare pe null, ca niciun card să nu mai fie în editare.
   3. Cheamă randeaza().
   4. Dă click pe „Editează”, apoi pe „Anulează”: numele rămâne cel vechi.
   OUTPUT AȘTEPTAT:
     Click pe „Editează”, apoi pe „Anulează” → cardul revine, cu numele vechi
   INDICIU: anuleaza are aceleași două linii ca partea de final de la salveaza, fără să
     schimbe numele · idInEditare = null · randeaza().
   GREȘEALĂ FRECVENTĂ: Uiți randeaza(): idInEditare se schimbă în memorie, dar cardul rămâne
     pe pagină cu câmpul deschis. */

console.log("--- Exercițiul 9 ---");

function anuleaza() {
  idInEditare = null;
  randeaza();
}

/* ===== Exercițiul 10 · GHIDAT · 6 min · Un singur ascultător pe listă, cu switch =====
   CE FACI: Ștergi și editezi printr-un singur ascultător pus pe listă, nu prin câte unul pe
     fiecare buton.
   PAȘI:
   1. În creeazaCard, scoate la „Editează” și „Șterge” ultimul argument (funcția de la
      click).
   2. Scrie un singur ascultător pe listă: lista.addEventListener("click", (event) => { ...
      }).
   3. În funcție, citește actiune cu getAttribute("data-actiune") și id cu
      Number(getAttribute("data-id")).
   4. Cu switch (actiune): case "sterge" cheamă sterge(id), case "editeaza" cheamă
      editeaza(id), fiecare cu break; default: return.
   5. Adaugă un eveniment nou cu „Adaugă”, apoi șterge-l și editează-i numele: merge fără
      nicio legare în plus.
   OUTPUT AȘTEPTAT:
     Click pe „Șterge” la un card → cardul dispare, ca înainte
     Click pe „Editează” → numele devine un câmp, ca înainte
     Adaugi „Concert” cu „Adaugă”, apoi îl ștergi sau îl editezi → merge fără nicio legare în plus
   INDICIU: event.target → butonul pe care s-a dat click · getAttribute("data-actiune") →
     eticheta de pe buton, sau null dacă ai dat click în altă parte · Number(...) → data-id
     e text, iar id-ul din listă e număr · switch (actiune) { case "sterge": ... break;
     default: return; } → câte un case pentru fiecare valoare, break la fiecare, iar default
     prinde restul.
   GREȘEALĂ FRECVENTĂ: Uiți break la un case: după sterge(id), codul cade în case-ul următor
     și cheamă și editeaza(id). Altă greșeală: uiți Number, iar „2” (text) nu e egal cu 2
     (număr) în filter. */

console.log("--- Exercițiul 10 ---");

lista.addEventListener("click", (event) => {
  const actiune = event.target.getAttribute("data-actiune");
  const id = Number(event.target.getAttribute("data-id"));

  switch (actiune) {
    case "sterge":
      sterge(id);
      break;
    case "editeaza":
      editeaza(id);
      break;
    default:
      return;
  }
});

/* ===== Exercițiul 11 · SINGUR · 2 min · Evenimentul tău =====
   CE FACI: Pui în listă un eveniment real al tău, direct din cod, și îl încerci cu
     butoanele de pe card.
   PAȘI:
   1. Scrie obiectul evenimentTau cu cheile id (urmatorulId), nume, locuri și pret; alege un
      eveniment real.
   2. Crește urmatorulId cu 1.
   3. Adaugă evenimentTau în evenimente, cu push, și cheamă randeaza().
   4. Pe pagină: editează-i numele, apoi șterge un alt eveniment.
   OUTPUT AȘTEPTAT:
     La început: patru carduri; ultimul e evenimentul tău, cu butoanele Editează și Șterge
     Contorul arată 4
   INDICIU: evenimentTau = { id: urmatorulId, nume: "...", locuri: 25, pret: 0 } ·
     urmatorulId = urmatorulId + 1 → ca la adauga, ca următorul eveniment să aibă alt id ·
     evenimente.push(evenimentTau) · randeaza().
   GREȘEALĂ FRECVENTĂ: Uiți să crești urmatorulId: primul eveniment adăugat din câmp
     primește același id ca evenimentul tău, iar butoanele lor se încurcă. */

console.log("--- Exercițiul 11 ---");

/* ===== TEMĂ DE ACASĂ · Rezervă loc pe card =====
   CE FACI: Fiecare card primește un buton „Rezervă” care scade locurile libere, iar cardul
     fără locuri se marchează.
   PAȘI:
   1. În creeazaCard, lângă Editează și Șterge, adaugă un buton „Rezervă”, făcut cu
      creeazaButon, care cheamă rezerva(eveniment.id).
   2. Scrie funcția rezerva(id) și află în ea, cu findIndex, poziția evenimentului cu id-ul
      primit; pune-o în index.
   3. Dacă evenimente[index].locuri e 0, scrie în descriere.textContent „Nu mai sunt locuri”
      și oprește funcția cu return.
   4. Altfel scade evenimente[index].locuri cu 1, scrie în descriere „Loc rezervat!” și
      cheamă randeaza().
   5. În creeazaCard, pune clasa epuizat pe cardul unui eveniment cu 0 locuri; schimbă
      locurile Workshop CSS în 0 ca să-l vezi.
   6. Trimite lucrul pe GitHub: branch sesiunea-18, Pull Request unit în main.
   OUTPUT AȘTEPTAT (exemplu):
     Pe pagină: fiecare card are trei butoane: Rezervă, Editează, Șterge
     Click pe „Rezervă” la Hackathon → 19 locuri · 90 lei
     Workshop CSS (0 locuri) apare șters și tăiat; „Rezervă” → descrierea devine „Nu mai sunt locuri”
   INDICIU: Revezi: findIndex și evenimente[index] (Exercițiul 8), if cu return (Exercițiul
     6) · creeazaButon(text, clasa, actiune, id, laClick) primește la final funcția de la
     click · descriere e deja selectată în fișier · clasa epuizat e deja scrisă în
     evenimente.css (sesiunea 17) · după orice schimbare a listei, randeaza() redesenează
     cardurile.
   GREȘEALĂ FRECVENTĂ: Scazi locurile în obiect, dar uiți randeaza(): lista din memorie e
     alta, iar pagina arată încă numărul vechi. */
