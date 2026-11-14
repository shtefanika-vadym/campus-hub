// Campus Hub · sesiunea 16 · hoisting și array
// Scrii sub fiecare bloc. Salvezi și rulezi fișierul cu Code Runner (Ctrl+Alt+N).
// Rezultatul apare în panoul Output din VS Code.
//
// Atenție: un nume (de variabilă sau de funcție) se declară o singură dată într-un fișier.
// Fiecare exercițiu are nume proprii (asteptare3, evenimente7 ...), deci nu comentezi nimic după ce termini.
// La DATE DE PORNIRE, codul de sub bloc e deja scris. La exercițiile 1 și 2 codul stricat e comentat:
// îl selectezi, îl decomentezi cu Ctrl+/ și îl repari. Output arată o linie de titlu pentru fiecare exercițiu.

/* ===== Exercițiul 1 · GHIDAT · 4 min · var, let și hoisting =====
   CE FACI: Vezi pe viu ce face JavaScript cu o variabilă folosită înainte de declarare.
   PAȘI:
   1. Decomentează cele două linii de la Exercițiul 1: console.log(oras1); și var oras1 =
      "Cluj";
   2. Rulează și vezi ce afișează Output.
   3. Schimbă var în let, rulează și citește eroarea.
   4. Mută console.log(oras1); sub linia cu declarația și rulează din nou.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc, comentate.
   OUTPUT AȘTEPTAT:
     Cluj
   INDICIU: var → afișează undefined · let → Cannot access 'oras1' before initialization ·
     mută console.log sub linia cu declarația.
   GREȘEALĂ FRECVENTĂ: Muți declarația, dar uiți s-o muți înaintea console.log: eroarea
     rămâne. */

console.log("--- Exercițiul 1 ---");
console.log(oras1);
var oras1 = "Cluj";

// console.log("Buna ziua");

/* ===== Exercițiul 2 · SINGUR · 2 min · Repară: ordinea declarației =====
   CE FACI: Codul dă eroarea „Cannot access 'totalBilete2' before initialization” și se
     repară doar din ordinea liniilor.
   PAȘI:
   1. Decomentează codul de la Exercițiul 2 și rulează: citește eroarea.
   2. Pune let totalBilete2 = 0; pe prima linie.
   3. Mută console.log după buclă.
   4. Rulează și compară cu Ținta.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc, comentate.
   OUTPUT AȘTEPTAT:
     Total: 120
   INDICIU: let totalBilete2 = 0; se declară înainte să fie folosit · bucla for adună în el
     · console.log vine la final, după buclă.
   GREȘEALĂ FRECVENTĂ: Muți doar declarația și lași console.log deasupra buclei: afișează 0,
     nu 120. */

console.log("--- Exercițiul 2 ---");
let totalBilete2 = 0;

for (let i = 1; i <= 3; i++) {
  totalBilete2 = totalBilete2 + 40;
}

console.log("Total: " + totalBilete2);

/* ===== Exercițiul 3 · GHIDAT · 4 min · Lista de așteptare: push și pop =====
   CE FACI: Lista asteptare3 e scrisă deja în fișier; o completăm și o scurtăm împreună.
   PAȘI:
   1. Adaugă "Radu" la final cu push și afișează lista.
   2. Scoate ultimul element cu pop și afișează-l.
   3. Afișează din nou lista.
   4. Rulează și compară cu Ținta.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     [ 'Dan', 'Eva', 'Radu' ]
     Radu
     [ 'Dan', 'Eva' ]
   INDICIU: asteptare3.push("Radu"); → adaugă la final · asteptare3.pop(); → scoate ultimul
     element și ți-l dă înapoi · console.log(asteptare3); → afișezi lista.
   GREȘEALĂ FRECVENTĂ: Scrii asteptare3.push = "Radu" în loc de asteptare3.push("Radu"):
     push e o funcție, o chemi cu paranteze. */

console.log("--- Exercițiul 3 ---");
const asteptare3 = ["Dan", "Eva"];

asteptare3.push("Radu");

console.log(asteptare3, "pana la pop");

const ultimulSters = asteptare3.pop();

console.log(asteptare3[0], ultimulSters, "dupa la pop");

/* ===== Exercițiul 4 · SINGUR · 1 min · Coada la intrare: shift și unshift =====
   CE FACI: Lista coada4 e scrisă deja în fișier; o schimbi la început.
   PAȘI:
   1. Scoate primul element cu shift și afișează-l.
   2. Adaugă "Radu" la început, cu unshift.
   3. Afișează lista.
   4. Rulează și compară cu Ținta.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     Dan
     [ 'Radu', 'Eva' ]
   INDICIU: coada4.shift() → scoate primul element și ți-l dă înapoi ·
     coada4.unshift("Radu") → adaugă la început · console.log(coada4) → afișezi lista.
   GREȘEALĂ FRECVENTĂ: Încurci shift cu pop: shift lucrează la început, pop la sfârșit. */

console.log("--- Exercițiul 4 ---");
const coada4 = ["Dan", "Eva"];

/* ===== Exercițiul 5 · GHIDAT · 4 min · includes: e deja înscris? =====
   CE FACI: Întrebi lista participanti5 dacă un nume e înscris.
   PAȘI:
   1. Afișează participanti5.includes("Ion").
   2. Afișează participanti5.includes("Dan").
   3. Rulează și compară cu Ținta: true, apoi false.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     true
     false
   INDICIU: participanti5.includes("Ion") → întreabă lista dacă are elementul acesta ·
     răspunsul e true sau false, nu o poziție · literele contează: "ion" nu e "Ion".
   GREȘEALĂ FRECVENTĂ: Scrii participanti5.includes("ion"): literele mici nu se potrivesc cu
     "Ion", deci răspunsul e false. */

console.log("--- Exercițiul 5 ---");
const participanti5 = ["Ana", "Ion", "Maria"];

console.log(participanti5.includes("Ion"), participanti5.includes("Dan"));

/* ===== Exercițiul 6 · SINGUR · 1 min · indexOf: unde e pe listă? =====
   CE FACI: Întrebi lista participanti6 unde se află un nume.
   PAȘI:
   1. Afișează poziția lui "Maria", cu indexOf.
   2. Afișează poziția lui "Dan".
   3. Rulează și compară cu Ținta.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     2
     -1
   INDICIU: participanti6.indexOf("Maria") → poziția elementului în listă, începând de la 0
     · dacă elementul nu e în listă, răspunsul e -1.
   GREȘEALĂ FRECVENTĂ: Crezi că indexOf întoarce true sau false: el întoarce poziția, iar
     true / false vine de la includes. */

console.log("--- Exercițiul 6 ---");
const participanti6 = ["Ana", "Ion", "Maria"];

/* ===== Exercițiul 7 · GHIDAT · 8 min · Lista evenimentelor din Campus Hub =====
   CE FACI: Facem lista evenimentelor din Campus Hub și o citim.
   PAȘI:
   1. Scrie lista evenimente7 cu trei obiecte: Hackathon, Workshop CSS și Meetup.
   2. Afișează numele evenimentului de pe poziția 1.
   3. Afișează lungimea listei.
   4. Cu un for, afișează numele și locurile fiecărui eveniment.
   OUTPUT AȘTEPTAT:
     Workshop CSS
     3
     Hackathon: 20 locuri
     Workshop CSS: 0 locuri
     Meetup: 35 locuri
   INDICIU: const evenimente7 = [ { ... }, { ... }, { ... } ]; → un array cu trei obiecte ·
     evenimente7[1].nume → întâi indexul, apoi cheia · for (let i = 0; i <
     evenimente7.length; i++) → parcurgi toate pozițiile · evenimente7[i].nume → numele de
     la tura i.
   GREȘEALĂ FRECVENTĂ: Uiți virgula dintre două obiecte din listă: JavaScript dă SyntaxError
     chiar la începutul celui de-al doilea. */

console.log("--- Exercițiul 7 ---");

const evenimente7 = [
  { nume: "Hackathon", locuri: 20, pret: 90 },
  { nume: "Workshop CSS", locuri: 0, pret: 40 },
  { nume: "Meetup", locuri: 35, pret: 0 },
];

console.log("1. ", evenimente7[0].nume);
console.log("2. ", evenimente7.length);

for (let i = 0; i < evenimente7.length; i++) {
  const ev = evenimente7[i];

  console.log(ev);
}

/* ===== Exercițiul 8 · GHIDAT · 5 min · forEach: afișezi fiecare eveniment =====
   CE FACI: Afișezi fiecare eveniment din evenimente8, cu o funcție cu nume, dată lui
     forEach.
   PAȘI:
   1. Scrie funcția afiseazaEveniment(eveniment), care afișează un mesaj de forma
      „Hackathon: 20 locuri”.
   2. Dă funcția lui forEach, după nume: evenimente8.forEach(afiseazaEveniment);
   3. Rulează și compară cu Ținta: trei linii.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     Hackathon: 20 locuri
     Workshop CSS: 0 locuri
     Meetup: 35 locuri
   INDICIU: function afiseazaEveniment(eveniment) { ... } → funcția cu nume; eveniment e
     elementul primit · evenimente8.forEach(afiseazaEveniment); → o dai lui forEach după
     nume, fără paranteze, iar forEach o cheamă pentru fiecare eveniment.
   GREȘEALĂ FRECVENTĂ: Scrii evenimente8.forEach(afiseazaEveniment()) cu paranteze: forEach
     primește funcția, nu rezultatul ei, deci numele se scrie fără (). */

console.log("--- Exercițiul 8 ---");
const evenimente8 = [
  { nume: "Hackathon", locuri: 20, pret: 90 },
  { nume: "Workshop CSS", locuri: 0, pret: 40 },
  { nume: "Meetup", locuri: 35, pret: 0 },
];

function afiseazaEveniment(eveniment) {
  console.log(eveniment.nume + ": " + eveniment.locuri + " locuri");
}

// () => console.log()

evenimente8.forEach((ev) => console.log(ev));

/* ===== Exercițiul 9 · SINGUR · 1 min · forEach: rescrie cu funcția arrow =====
   CE FACI: Codul de pornire afișează evenimentele cu o funcție cu nume; tu îl rescrii cu o
     funcție arrow.
   PAȘI:
   1. Șterge apelul evenimente9.forEach(afiseazaEveniment9);
   2. Scrie același lucru cu o funcție arrow, direct în forEach:
      evenimente9.forEach((eveniment) => { ... });
   3. Rulează și compară cu Ținta: aceleași trei linii.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     Hackathon: 20 locuri
     Workshop CSS: 0 locuri
     Meetup: 35 locuri
   INDICIU: Funcția arrow ia locul numelui funcției: (eveniment) => { ... } se scrie între
     parantezele lui forEach, cu același mesaj în interior.
   GREȘEALĂ FRECVENTĂ: Uiți să ștergi apelul vechi: evenimentele se afișează de două ori, o
     dată cu funcția cu nume și o dată cu arrow. */

console.log("--- Exercițiul 9 ---");
const evenimente9 = [
  { nume: "Hackathon", locuri: 20, pret: 90 },
  { nume: "Workshop CSS", locuri: 0, pret: 40 },
  { nume: "Meetup", locuri: 35, pret: 0 },
];
function afiseazaEveniment9(eveniment) {
  console.log(eveniment.nume + ": " + eveniment.locuri + " locuri");
}
evenimente9.forEach(afiseazaEveniment9);

/* ===== Exercițiul 10 · GHIDAT · 4 min · filter: doar evenimentele cu locuri =====
   CE FACI: Păstrezi din evenimente10 doar evenimentele cu locuri libere.
   PAȘI:
   1. Salvează în cuLocuri10 rezultatul lui evenimente10.filter(...), cu testul
      eveniment.locuri > 0.
   2. Cu forEach, afișează numele evenimentelor din cuLocuri10.
   3. Rulează și compară cu Ținta.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     Hackathon
     Meetup
   INDICIU: evenimente10.filter(...) → întoarce o listă nouă, doar cu elementele care trec
     testul · (eveniment) => eveniment.locuri > 0 → testul dă true sau false · salvezi
     rezultatul într-o variabilă: cuLocuri10.
   GREȘEALĂ FRECVENTĂ: Nu salvezi rezultatul: evenimente10.filter(...) singur nu schimbă
     lista; rezultatul trebuie pus într-o variabilă. */

console.log("--- Exercițiul 10 ---");
const evenimente10 = [
  { nume: "Hackathon", locuri: 20, pret: 90 },
  { nume: "Workshop CSS", locuri: 0, pret: 40 },
  { nume: "Meetup", locuri: 35, pret: 0 },
];

const cuLocuri10 = evenimente10.filter((ev) => ev.locuri === 99);

cuLocuri10.forEach((ev) => console.log(ev));

console.log(cuLocuri10);

/* ===== Exercițiul 11 · SINGUR · 1 min · filter: doar evenimentele gratuite =====
   CE FACI: Păstrezi din evenimente11 doar evenimentele gratuite.
   PAȘI:
   1. Salvează în gratuite11 rezultatul lui evenimente11.filter(...), cu testul
      eveniment.pret === 0.
   2. Cu forEach, afișează numele evenimentelor din gratuite11.
   3. Rulează și compară cu Ținta.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     Meetup
   INDICIU: Testul e eveniment.pret === 0 · trei semne de egal compară, unul singur pune o
     valoare.
   GREȘEALĂ FRECVENTĂ: Scrii eveniment.pret = 0 în loc de ===: un singur = pune valoarea, nu
     o compară. */

console.log("--- Exercițiul 11 ---");
const evenimente11 = [
  { nume: "Hackathon", locuri: 20, pret: 90 },
  { nume: "Workshop CSS", locuri: 0, pret: 40 },
  { nume: "Meetup", locuri: 35, pret: 0 },
];

/* ===== Exercițiul 12 · GHIDAT · 4 min · map: lista numelor =====
   CE FACI: Faci din evenimente12 o listă nouă, doar cu numele evenimentelor.
   PAȘI:
   1. Salvează în nume12 rezultatul lui evenimente12.map(...), care întoarce eveniment.nume.
   2. Afișează nume12.
   3. Rulează și compară cu Ținta.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     [ 'Hackathon', 'Workshop CSS', 'Meetup' ]
   INDICIU: evenimente12.map(...) → întoarce o listă nouă, la fel de lungă · (eveniment) =>
     eveniment.nume → din fiecare eveniment iese doar numele.
   GREȘEALĂ FRECVENTĂ: Folosești forEach în loc de map și primești undefined: forEach nu
     întoarce nimic, doar map face o listă nouă. */

console.log("--- Exercițiul 12 ---");
const evenimente12 = [
  { nume: "Hackathon", locuri: 20, pret: 90 },
  { nume: "Workshop CSS", locuri: 0, pret: 40 },
  { nume: "Meetup", locuri: 35, pret: 0 },
];

const nume12 = evenimente12.map((ev) => ev.nume + ". " + ev.pret);

console.log(nume12);

/* ===== Exercițiul 13 · SINGUR · 1 min · map: lista prețurilor =====
   CE FACI: Faci din evenimente13 o listă nouă, doar cu prețurile evenimentelor.
   PAȘI:
   1. Salvează în preturi13 rezultatul lui evenimente13.map(...), care întoarce
      eveniment.pret.
   2. Afișează preturi13.
   3. Rulează și compară cu Ținta.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     [ 90, 40, 0 ]
   INDICIU: Aceeași formă ca la nume: (eveniment) => eveniment.pret · numerele rămân numere
     în lista nouă.
   GREȘEALĂ FRECVENTĂ: Uiți să salvezi rezultatul lui map: fără o variabilă, lista nouă se
     pierde. */

console.log("--- Exercițiul 13 ---");
const evenimente13 = [
  { nume: "Hackathon", locuri: 20, pret: 90 },
  { nume: "Workshop CSS", locuri: 0, pret: 40 },
  { nume: "Meetup", locuri: 35, pret: 0 },
];

/* ===== Exercițiul 14 · GHIDAT · 4 min · find: primul eveniment gratuit =====
   CE FACI: Cauți în evenimente14 primul eveniment gratuit.
   PAȘI:
   1. Salvează în gratuit14 rezultatul lui evenimente14.find(...), cu testul eveniment.pret
      === 0.
   2. Afișează gratuit14.nume.
   3. Afișează gratuit14.locuri.
   4. Rulează și compară cu Ținta.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     Meetup
     35
   INDICIU: evenimente14.find(...) → întoarce primul element care trece testul, nu o listă ·
     rezultatul e un obiect, deci afișezi gratuit14.nume și gratuit14.locuri.
   GREȘEALĂ FRECVENTĂ: Scrii eveniment.pret = 0 în loc de ===: un singur = pune valoarea, nu
     o compară. */

console.log("--- Exercițiul 14 ---");
const evenimente14 = [
  { nume: "Hackathon", locuri: 20, pret: 90 },
  { nume: "Workshop CSS", locuri: 0, pret: 40 },
  { nume: "Meetup", locuri: 35, pret: 0 },
];

const gratuit14 = evenimente14.find((ev) => ev.nume);
console.log(gratuit14);

// || - SAU
// && - SI
//  !== 0

/* ===== Exercițiul 15 · SINGUR · 1 min · find: primul eveniment fără locuri =====
   CE FACI: Cauți în evenimente15 primul eveniment fără locuri libere.
   PAȘI:
   1. Salvează în plin15 rezultatul lui evenimente15.find(...), cu testul eveniment.locuri
      === 0.
   2. Afișează plin15.nume.
   3. Afișează plin15.pret.
   4. Rulează și compară cu Ținta.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     Workshop CSS
     40
   INDICIU: Testul e eveniment.locuri === 0 · rezultatul e un obiect, deci citești cheile cu
     punct.
   GREȘEALĂ FRECVENTĂ: Scrii eveniment.locuri == 0 cu două semne de egal: merge, dar în curs
     folosim mereu ===. */

console.log("--- Exercițiul 15 ---");
const evenimente15 = [
  { nume: "Hackathon", locuri: 20, pret: 90 },
  { nume: "Workshop CSS", locuri: 0, pret: 40 },
  { nume: "Meetup", locuri: 35, pret: 0 },
];

/* ===== Exercițiul 16 · SINGUR · 5 min · Recapitulare: filter, map, find și indexOf =====
   CE FACI: Folosești la un loc ce ai învățat azi, cu câte o variabilă pentru fiecare
     rezultat.
   PAȘI:
   1. Păstrează în cuLocuri16 evenimentele cu locuri libere, cu filter.
   2. Fă în nume16 lista numelor din cuLocuri16, cu map.
   3. Caută în evenimente16 primul eveniment gratuit, cu find, și salvează-l în
      primulGratuit16.
   4. Află cu indexOf pe ce poziție e "Meetup" în nume16 și salvează numărul în poz16.
   5. Afișează nume16, primulGratuit16.nume și poz16, apoi compară cu Ținta.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     [ 'Hackathon', 'Meetup' ]
     Meetup
     1
   INDICIU: filter dă lista evenimentelor cu locuri · map pe cuLocuri16 dă lista numelor ·
     find dă un singur eveniment, deci îi citești cheile cu punct · indexOf pe lista numelor
     dă poziția lui "Meetup", numărând de la 0.
   GREȘEALĂ FRECVENTĂ: Pui map pe evenimente16 în loc de cuLocuri16: lista numelor are
     atunci și evenimentul fără locuri, iar poziția lui Meetup se schimbă. */

console.log("--- Exercițiul 16 ---");
const evenimente16 = [
  { nume: "Hackathon", locuri: 20, pret: 90 },
  { nume: "Workshop CSS", locuri: 0, pret: 40 },
  { nume: "Meetup", locuri: 35, pret: 0 },
];

/* ===== TEMĂ DE ACASĂ · Evenimentele tale: raport complet =====
   CE FACI: Un raport pentru evenimentele tale, cu liste, decizii și calcule.
   PAȘI:
   1. Scrie lista evenimenteleMele în js/sesiunea-16.js: 4 obiecte (nume, locuri, ocupate,
      pret).
   2. Adaugă un eveniment cu push și scoate primul eveniment cu shift.
   3. Cu forEach calculează, pentru fiecare eveniment, locurile libere (locuri - ocupate) și
      încasările (ocupate * pret).
   4. Cu if / else if / else alege starea („Plin”, „Ultimele locuri” = cel mult 5 libere,
      „Locuri libere”) și afișează o linie.
   5. Cu filter păstrează în cuLocuri evenimentele cu locuri libere; cu map fă lista numelor
      lor, numeCuLocuri.
   6. Cu find caută primul eveniment gratuit; cu includes și indexOf verifică „Meetup” în
      numeCuLocuri.
   7. De studiat: Object.keys și Object.values pe javascript.info; încearcă-le pe un obiect
      de-al tău.
   8. Trimite lucrul pe GitHub: branch sesiunea-16, Pull Request unit în main.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc, comentate.
   OUTPUT AȘTEPTAT (exemplu):
     Workshop CSS: 18 libere · 480 lei · Locuri libere
     Meetup: 1 libere · 0 lei · Ultimele locuri
     Concert: 0 libere · 3500 lei · Plin
     Curs JS: 15 libere · 600 lei · Locuri libere
     [ 'Workshop CSS', 'Meetup', 'Curs JS' ]
     Primul gratuit: Meetup
     true
     1
   INDICIU: Revezi: push și shift (ex. 3 și 4), forEach (ex. 8), filter (ex. 10), map (ex.
     12), find (ex. 14), includes (ex. 5) și indexOf (ex. 6); exercițiul 16 le leagă pe
     ultimele · if / else if / else: întâi cazul „Plin” (libere === 0), apoi „Ultimele
     locuri” (libere <= 5), în rest „Locuri libere” · încasările: ocupate * pret · folosești
     evenimente de la tine, nu cele din exemplu.
   GREȘEALĂ FRECVENTĂ: Ordinea ramurilor: dacă pui întâi libere <= 5, evenimentul plin (0
     libere) ajunge la „Ultimele locuri”; verifică mai întâi libere === 0. */

// const evenimenteleMele = [
//   { nume: "Hackathon", locuri: 20, ocupate: 8, pret: 90 },
//   { nume: "Workshop CSS", locuri: 30, ocupate: 12, pret: 40 },
//   { nume: "Meetup", locuri: 35, ocupate: 34, pret: 0 },
//   { nume: "Concert", locuri: 50, ocupate: 50, pret: 70 },
// ];
