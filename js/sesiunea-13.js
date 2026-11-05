// Campus Hub · sesiunea 13 · JavaScript - Tipuri de date
// Scrii sub fiecare bloc. Salvezi și rulezi fișierul cu Code Runner (Ctrl+Alt+N).
// Rezultatul apare în panoul Output din VS Code.
//
// Atenție: într-un fișier nu poți declara același nume de două ori cu let.
// Dacă ai deja sala, pentru Workshop CSS folosește salaWorkshop.

/* ===== Exercițiul 1 · GHIDAT · 5 min · Datele evenimentului în variabile =====
   CE FACI: În js/sesiunea-13.js pune numele și sala hackathonului în două variabile cu let,
     apoi afișează-le cu console.log. Rulezi fișierul cu Code Runner. Facem împreună prima
     variabilă.
   E GATA CÂND:
   [x] Output arată Hackathon și Sala A2
   [x] Fișierul sesiunea-13.js este salvat înainte de Run
   [x] În console.log numele variabilei nu are ghilimele
   OUTPUT AȘTEPTAT:
     Hackathon
     Sala A2
   INDICIU: let nume = valoare → cutie nouă cu etichetă · numele variabilei fără ghilimele,
     textul între ghilimele · console.log(nume) → afișezi ce e în cutie · Run Code
     (Ctrl+Alt+N) → vezi rezultatul în Output.
   GREȘEALĂ FRECVENTĂ: Scrii console.log("eveniment") cu ghilimele: apare cuvântul
     eveniment, nu valoarea din cutie. */

let eveniment = "Hackaton";
let sala = "Sala A2";

console.log(eveniment, sala);
// console.log(sala);

/* ===== Exercițiul 2 · SINGUR · 2 min · Locurile libere, în variabilă =====
   CE FACI: Creează o variabilă locuriLibere cu valoarea 40 și afișeaz-o cu console.log.
   E GATA CÂND:
   [ ] Output arată 40
   [ ] Variabila se numește exact locuriLibere
   OUTPUT AȘTEPTAT:
     40
   INDICIU: let locuriLibere = 40 → cutia nouă, cu eticheta locuriLibere ·
     console.log(locuriLibere) → afișezi ce e în cutie, fără ghilimele.
   GREȘEALĂ FRECVENTĂ: Scrii console.log("locuriLibere") cu ghilimele: apare numele, nu
     valoarea 40. */

let locuriLibere = 40;
console.log(locuriLibere);

/* ===== Exercițiul 3 · GHIDAT · 4 min · Ce tip are fiecare valoare? =====
   CE FACI: Află tipul a trei valori cu typeof: textul „Hackathon”, numărul 40 și valoarea
     true. Facem împreună primul typeof.
   E GATA CÂND:
   [ ] Consola arată string, number, boolean
   [ ] Fiecare typeof este în interiorul unui console.log
   [ ] Textul Hackathon are ghilimele
   OUTPUT AȘTEPTAT:
     string
     number
     boolean
   INDICIU: typeof valoare → îți spune tipul · string = text, number = număr, boolean =
     adevărat sau fals · îl pui în console.log ca să-l vezi.
   GREȘEALĂ FRECVENTĂ: Scrii typeof "40" și te miri că iese string: ghilimelele fac din
     cifre un text. */
console.log(typeof "Buna ziua");
console.log(typeof 109);
console.log(typeof false);

/* ===== Exercițiul 4 · SINGUR · 4 min · Workshop CSS, pe tipuri =====
   CE FACI: Descrie Workshop CSS în variabile: workshop (text), locuriWorkshop 25 (număr),
     esteGratuitWorkshop false (boolean) și salaWorkshop fără valoare. Afișează tipul
     fiecăreia.
   E GATA CÂND:
   [ ] Consola arată string, number, boolean, undefined
   [ ] 25 și false nu au ghilimele
   [ ] salaWorkshop nu are nicio valoare
   OUTPUT AȘTEPTAT:
     string
     number
     boolean
     undefined
   INDICIU: Text între ghilimele · număr și true/false fără ghilimele · let salaWorkshop
     (fără =) lasă cutia goală · typeof salaWorkshop → undefined.
   GREȘEALĂ FRECVENTĂ: Scrii "false" cu ghilimele: devine text, nu boolean. */

/* ===== Exercițiul 5 · GHIDAT · 5 min · Toți operatorii, pe rând =====
   CE FACI: Încearcă pe rând câte un operator din fiecare familie, pe datele hackathonului
     (40 de locuri, 28 de înscriși), și afișează fiecare rezultat cu console.log. Facem
     împreună, câte un rând.
   E GATA CÂND:
   [ ] Output arată 68, 12, 80, 20 pentru cele patru calcule
   [ ] Output arată true, true, true, false pentru cele patru comparări
   [ ] Output arată false, true, false pentru && || !
   OUTPUT AȘTEPTAT:
     68
     12
     80
     20
     true
     true
     true
     false
     false
     true
     false
   INDICIU: + - * / → aritmetic, dau un număr · < > === !== → comparare, dau true sau false
     · && || ! → logic, combină true și false · fiecare calcul stă într-un console.log.
   GREȘEALĂ FRECVENTĂ: Scrii 40 = 40 în loc de 40 === 40: cu un singur = pui o valoare, nu
     compari. */

console.log(12 + 12, 12 - 12, 2 * 2, 2 / 2);
console.log(10 > 5, 10 < 5, 6 >= 8, 6 === "6");
console.log(true && false, true && true, true || false);
console.log(10 + "10");

/* ===== Exercițiul 6 · GHIDAT · 5 min · Câte locuri mai sunt libere? =====
   CE FACI: Din 40 de locuri, 28 sunt ocupate. Calculează locurile rămase cu variabile și
     operatorul -, apoi afișează un mesaj cu +. Facem împreună calculul.
   E GATA CÂND:
   [ ] Output arată Locuri libere: 12
   [ ] locuriRamase este calculat, nu scris de mână
   OUTPUT AȘTEPTAT:
     Locuri libere: 12
   INDICIU: locuri - inscrisi → scade două numere · rezultatul se salvează într-o variabilă
     nouă · "text" + variabilă → lipește textul de valoare.
   GREȘEALĂ FRECVENTĂ: Uiți spațiul din text: iese Locuri libere:12, lipit. */

let locuri = 40;
let ocupate = 28;
let libere = locuri - ocupate;
console.log(libere, " Locuri libere");

/* ===== Exercițiul 7 · SINGUR · 4 min · Se mai poate înscrie cineva? =====
   CE FACI: În același fișier: hackathonul primește înscrieri dacă mai are locuri rămase și
     e gratuit (pret 0). Calculează cele două condiții cu comparări, combină-le cu && și
     afișează rezultatul.
   E GATA CÂND:
   [ ] Output arată true
   [ ] Ai folosit === (trei egaluri), nu =
   OUTPUT AȘTEPTAT:
     true
   INDICIU: locuriRamase > 0 → true dacă mai sunt locuri · pret === 0 → true dacă e gratuit
     · && → true doar când ambele sunt true.
   GREȘEALĂ FRECVENTĂ: Scrii pret = 0 în loc de pret === 0: cu un singur = pui o valoare, nu
     compari. */

let pret = 10;
let areLocuri = libere > 0; // true | false
let esteGratuit = pret === 0; // true | false
let sePoateInscrie = areLocuri && esteGratuit;
console.log(sePoateInscrie, "sePoateInscrie");

/* ===== Exercițiul 8 · SINGUR · 3 min · Evenimentul tău =====
   CE FACI: Alege un eveniment real, al tău: un meci, un concert, un meetup. Pune în
     variabile numele (numeTau), locurile (locuriTau) și prețul (pretTau), află dacă e
     gratuit (gratuitTau) și afișează numele și răspunsul.
   E GATA CÂND:
   [ ] Output arată numele evenimentului și true sau false
   [ ] gratuitTau este calculat cu ===, nu scris de mână
   [ ] Datele sunt ale tale: nu trebuie să semene cu ale colegului
   OUTPUT AȘTEPTAT:
     numele evenimentului tău
     true sau false
   INDICIU: numeTau e text, locuriTau și pretTau sunt numere · gratuitTau = pretTau === 0 →
     true dacă prețul e 0 · console.log(numeTau) și console.log(gratuitTau) → afișezi.
   GREȘEALĂ FRECVENTĂ: Schimbi numele locuriTau sau pretTau: sesiunea 14 le reia, deci
     păstrează-le exact așa. */

/* ===== TEMĂ DE ACASĂ · Meetup-ul, descris în JavaScript =====
   CE FACI: Descrie în js/sesiunea-13.js evenimentul Meetup din Campus Hub, cu variabile și
     operatori, și afișează rezultatul cu console.log. Folosești nume noi pentru variabile
     (de exemplu numeMeetup, locuriMeetup), ca să nu le repeți pe cele de mai sus.
   E GATA CÂND:
   [ ] Ai variabile pentru Meetup: nume, zi, oră, preț și număr de locuri
   [ ] Toate variabilele sunt create cu let, fiecare cu numele și valoarea ei
   [ ] Locurile libere sunt calculate cu un operator, nu scrise de mână
   [ ] Un console.log afișează un mesaj cu +, de exemplu Locuri libere: 18
   [ ] Cu typeof afișezi tipul a trei variabile și poți spune de ce e fiecare string, number
     sau boolean
   [ ] Ai trimis lucrul pe GitHub: branch sesiunea-13, Pull Request unit în main
   OUTPUT AȘTEPTAT (exemplu):
     Meetup JS
     Locuri libere: 18
     string
     number
     boolean
   INDICIU: Aceleași mișcări ca la exercițiile din clasă: let nume = valoare · text între
     ghilimele, numere și true/false fără · locuri - inscrisi → locurile rămase, salvate
     într-o variabilă nouă · "Locuri libere: " + variabila → mesajul · typeof variabila →
     tipul.
   GREȘEALĂ FRECVENTĂ: Scrii typeof "40" și te miri că iese string: ghilimelele fac din
     cifre un text. */
