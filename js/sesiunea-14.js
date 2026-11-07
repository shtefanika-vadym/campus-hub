// Campus Hub · sesiunea 14 · Funcții
// Scrii sub fiecare bloc. Salvezi și rulezi fișierul cu Code Runner (Ctrl+Alt+N).
// Rezultatul apare în panoul Output din VS Code.
//
// Atenție: un nume (de variabilă sau de funcție) se declară o singură dată într-un fișier.
// Funcțiile din primele exerciții (de exemplu calculeazaPret) le folosești și în cele
// următoare, deci le lași în fișier.
// La exercițiul 8 folosești GitHub Copilot, instalat în clasă.

/* ===== Exercițiul 1 · GHIDAT · 5 min · Prețul biletului: student sau nu =====
   CE FACI: Afișează prețul biletului: 20 dacă esteStudent este true, altfel prețul întreg.
     Scriem împreună prima ramură.
   E GATA CÂND:
   [ ] Output arată Preț bilet: 20 cu esteStudent = true
   [ ] Schimbi esteStudent în false și apare 40
   [ ] Rulează un singur console.log, nu amândouă
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     Preț bilet: 20
   INDICIU: if (esteStudent) { ... } → ramura pentru true · else { ... } → ramura pentru
     false · în fiecare ramură: console.log("Preț bilet: " + ...) · rulezi cu Code Runner ·
     schimbă esteStudent în false și verifică din nou.
   GREȘEALĂ FRECVENTĂ: Scrii esteStudent = true în paranteza lui if: un singur = pune o
     valoare. Pentru comparație folosești ===, iar pentru un boolean e suficient numele
     variabilei. */

let esteStudent = false;
let pretBilet = 40;

if (esteStudent) {
  console.log("Pretul pentru student " + 20);
} else {
  console.log("Pretul pentru adult " + pretBilet);
}

/* ===== Exercițiul 2 · SINGUR · 5 min · Mesajul pentru locurile libere =====
   CE FACI: Afișează un mesaj după locuriDisponibile: 0 → „Plin”, cel mult 5 → „Ultimele
     locuri”, altfel → „Locuri libere”. Fără demonstrație.
   E GATA CÂND:
   [ ] Cu locuriDisponibile = 3 apare „Ultimele locuri”
   [ ] Cu 0 apare „Plin”
   [ ] Cu 20 apare „Locuri libere”
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     Stare: Ultimele locuri
   INDICIU: if (locuriDisponibile === 0) → primul caz · else if (locuriDisponibile <= 5) →
     al doilea · else → restul · === pentru egal, <= pentru „cel mult”.
   GREȘEALĂ FRECVENTĂ: Pui else if înaintea primului if: ordinea contează, JavaScript se
     oprește la primul răspuns adevărat. */

let locuriDisponibile = 3;

if (locuriDisponibile === 0) {
  console.log("Stare: Plin");
} else if (locuriDisponibile <= 5) {
  console.log("Stare: Ultimele locuri");
} else {
  console.log("Stare: Locuri libere");
}

/* ===== Exercițiul 3 · GHIDAT · 6 min · Prima funcție: salut =====
   CE FACI: Scrie funcția salut(nume) care întoarce „Salut, ” + nume + „!”. Apeleaz-o pentru
     două nume și afișează rezultatele. Rulăm împreună prima linie.
   E GATA CÂND:
   [ ] Output arată Salut, Ana!
   [ ] Output arată Salut, Mihai!
   [ ] Funcția e scrisă o singură dată
   OUTPUT AȘTEPTAT:
     Salut, Ana!
     Salut, Mihai!
   INDICIU: function salut(nume) { ... } → rețeta, nume e parametrul · return ... → ce iese
     din funcție · console.log(salut("Ana")) → apelul și afișarea.
   GREȘEALĂ FRECVENTĂ: Uiți return: funcția calculează textul, dar nu îl trimite înapoi, iar
     în Output apare undefined. */

let test = "Test";

function salut(nume) {
  let calcul = 12 - 10;
  // calcule -> API

  return "Salut, " + nume + " !";
}

let anaHello = salut("Ana");
console.log(anaHello);

console.log(salut("Mihai"));

/* ===== Exercițiul 4 · SINGUR · 5 min · calculeazaPret(pret, esteStudent) =====
   CE FACI: Scrie funcția calculeazaPret care primește prețul și esteStudent: întoarce
     jumătate din preț pentru student, altfel prețul întreg. Apeleaz-o de două ori și
     afișează ambele rezultate.
   E GATA CÂND:
   [ ] calculeazaPret(40, true) arată 20 în Output
   [ ] calculeazaPret(40, false) arată 40
   [ ] Funcția are un if și două return
   OUTPUT AȘTEPTAT:
     Preț student: 20
     Preț întreg: 40
   INDICIU: function calculeazaPret(pret, esteStudent) → doi parametri · if (esteStudent) {
     return ...; } → cazul studentului · return pret; → restul cazurilor.
   GREȘEALĂ FRECVENTĂ: Pui else după return fără să ai nevoie: return oprește funcția, deci
     return pret; la final e suficient. */

function calculeazaPret(pret, esteStudent) {
  if (esteStudent) {
    return pret / 2;
  }

  return pret;
}

console.log("Preț student: " + calculeazaPret(40, true));
console.log("Preț întreg: " + calculeazaPret(40, false));

/* ===== Exercițiul 5 · GHIDAT · 5 min · Locurile de la 1 la 5 =====
   CE FACI: Afișează „Locul 1”, „Locul 2” ... „Locul 5” cu un for, nu cu cinci linii. Scriem
     împreună cele trei părți din paranteză.
   E GATA CÂND:
   [ ] Output arată Locul 1 ... Locul 5, pe rânduri separate
   [ ] Schimbi 5 în 3 și apar doar 3 linii
   [ ] Ai o singură linie console.log în buclă
   OUTPUT AȘTEPTAT:
     Locul 1
     Locul 2
     Locul 3
     Locul 4
     Locul 5
   INDICIU: let i = 1 → start · i <= 5 → condiție: cât timp e adevărată se repetă · i++ →
     pas: crește i cu 1 · în interior: console.log("Locul " + i).
   GREȘEALĂ FRECVENTĂ: Scrii i < 5 în loc de i <= 5: bucla se oprește la Locul 4. */

// if () {

// }

// 3 pasi
// i = iteratie
// 1. definirea iteratie de start = let i = 1;
// 2. structura decizionala cat timp ruleaza = i <= 3;
// 3. ce face la final de iteratie = i = i + 1;

// for (1; 2; 3;) {
// console.log()
// i++
// }

for (let i = 1; i <= 10; i++) {
  console.log("Locul " + i);
  // i++; 1 -> 2, 2 -> 3, 3 -> 4;
}

// for (let i = 1; i <= 5; i++) {
//   console.log("Locul " + i);
//   // i++; 1 -> 2, 2 -> 3, 3 -> 4;
// }

/* ===== Exercițiul 6 · SINGUR · 5 min · Totalul pentru 4 bilete =====
   CE FACI: Calculează totalul pentru 4 bilete de student: un for adună prețul fiecărui
     bilet, calculat cu calculeazaPret, și afișează totalul. Fără demonstrație.
   E GATA CÂND:
   [ ] Output arată Total 4 bilete: 80
   [ ] Totalul se adună în variabila total
   [ ] console.log-ul final e după buclă, nu în interior
   OUTPUT AȘTEPTAT:
     Total 4 bilete: 80
   INDICIU: let total = 0; → pornești de la zero · for (let i = 1; i <= 4; i++) → patru ture
     · total = total + calculeazaPret(40, true); → adaugi un bilet · console.log("Total 4
     bilete: " + total) → după buclă.
   GREȘEALĂ FRECVENTĂ: Pui let total = 0; în interiorul buclei: la fiecare tură total revine
     la 0 și rezultatul e 20. */

let total = 0;
for (let i = 1; i <= 4; i++) {
  total = total + calculeazaPret(40, true);
}
console.log("Total 4 bilete: " + total);

/* ===== Exercițiul 7 · GHIDAT · 8 min · Rezervarea biletelor =====
   CE FACI: Scriem împreună funcția rezervaBilete(locuriLibere, cereri): pentru fiecare
     cerere, un for verifică dacă mai sunt locuri. Dacă da, scade un loc și afișează
     „confirmat”; altfel afișează „Plin”. La final afișează locurile rămase. Apeleaz-o cu 2
     locuri și 4 cereri.
   E GATA CÂND:
   [ ] Output arată Bilet 1 și 2 confirmat, Bilet 3 și 4 Plin
   [ ] Ultima linie e Locuri rămase: 0
   [ ] Apelezi rezervaBilete(5, 3) și toate trei sunt confirmate, cu 2 locuri rămase
   OUTPUT AȘTEPTAT:
     Bilet 1: confirmat
     Bilet 2: confirmat
     Bilet 3: Plin
     Bilet 4: Plin
     Locuri rămase: 0
   INDICIU: function rezervaBilete(locuriLibere, cereri) → doi parametri · for (let i = 1; i
     <= cereri; i++) → o tură pe cerere · if (locuriLibere > 0) { ... } else { ... } →
     decizia · locuriLibere = locuriLibere - 1; → scazi un loc · console.log după buclă
     pentru locurile rămase.
   GREȘEALĂ FRECVENTĂ: Uiți să scazi locul după confirmare: toate cererile ies „confirmat”,
     chiar dacă locurile s-au terminat. */

function rezervaBilete(locuriLibere, cereri) {
  // 5 cereri
  for (let i = 1; i <= cereri; i++) {
    // Daca sunt locuri disponibile

    if (locuriLibere > 0) {
      locuriLibere = locuriLibere - 1;
      console.log("Bilet " + i + ": confirmat");

      // Daca nu sunt locuri disponibile
    } else {
      console.log("Bilet " + i + ": Plin");
    }
  }
}

rezervaBilete(2, 4);

// O functie care aduna doua numere
function aduna(a, b) {
  return a + b;
}

/* ===== Exercițiul 8 · SINGUR · 4 min · Harta locurilor, cu Copilot =====
   CE FACI: Cere-i lui GitHub Copilot funcția afiseazaHarta(locuriTotale, locuriOcupate):
     pentru fiecare loc de la 1 la locuriTotale afișează „Locul i: ocupat” dacă i <=
     locuriOcupate, altfel „Locul i: liber”. Tu scrii comentariul, Copilot propune codul, tu
     verifici în Output.
   E GATA CÂND:
   [ ] Output arată Locul 1 și 2 ocupat, Locul 3, 4 și 5 liber
   [ ] afiseazaHarta(4, 4) arată toate locurile ocupate
   [ ] Ai citit sugestia lui Copilot și ai înțeles fiecare linie înainte s-o accepți
   OUTPUT AȘTEPTAT:
     Locul 1: ocupat
     Locul 2: ocupat
     Locul 3: liber
     Locul 4: liber
     Locul 5: liber
   INDICIU: Scrie un comentariu clar: ce primește funcția, ce face pentru fiecare loc și ce
     afișează · Tab acceptă sugestia · rulezi cu Code Runner și compari cu lista de mai jos
     · dacă nu iese, rescrie comentariul mai precis.
   GREȘEALĂ FRECVENTĂ: Accepți sugestia fără s-o rulezi: Copilot poate greși, de exemplu
     pornește de la 0 în loc de 1. Verifică mereu în Output. */

/* ===== TEMĂ DE ACASĂ · Raportul evenimentului tău, într-o funcție =====
   CE FACI: Scrie funcția raportEveniment(nume, locuriTotale, locuriOcupate, pret) pentru un
     eveniment al tău (un meci, un concert, un meetup). În ea: calculezi locurile libere
     într-o variabilă, afișezi starea cu if / else if / else („Plin”, „Ultimele locuri” sau
     „Locuri libere”) și un for afișează totalul pentru 1, 2 și 3 bilete. Apeleaz-o de două
     ori: cu evenimentul tău și cu unul plin.
   E GATA CÂND:
   [ ] Funcția raportEveniment e în js/sesiunea-14.js și are cei patru parametri
   [ ] locuriLibere e calculat cu locuriTotale - locuriOcupate, nu scris de mână
   [ ] Un apel arată „Locuri libere”, iar cel cu locuriOcupate egal cu locuriTotale arată
     „Plin”
   [ ] Output arată totalul pentru 1, 2 și 3 bilete, fiecare pe linia lui
   [ ] Ai trimis lucrul pe GitHub: branch sesiunea-14, Pull Request unit în main
   OUTPUT AȘTEPTAT (exemplu):
     Hackathon: Locuri libere
     Bilete: 1, total: 40
     Bilete: 2, total: 80
     Bilete: 3, total: 120
     Concert: Plin
     Bilete: 1, total: 35
     Bilete: 2, total: 70
     Bilete: 3, total: 105
   INDICIU: Aceleași piese ca la exercițiile din clasă: function nume(parametri) { ... } ·
     let locuriLibere = locuriTotale - locuriOcupate; · if / else if / else cu === 0 și <= 5
     · let total = 0; și un for cu total = total + pret; console.log("Bilete: " + i + ",
     total: " + total) · apelurile de la final: raportEveniment("Hackathon", 40, 28, 40) și
     raportEveniment("Concert", 100, 100, 35).
   GREȘEALĂ FRECVENTĂ: Pui let total = 0; în interiorul buclei: la fiecare tură total revine
     la 0 și toate rândurile arată același preț. */
