// Campus Hub · sesiunea 15 · let, const, scope și obiecte
// Scrii sub fiecare bloc. Salvezi și rulezi fișierul cu Code Runner (Ctrl+Alt+N).
// Rezultatul apare în panoul Output din VS Code.
//
// Atenție: un nume (de variabilă sau de funcție) se declară o singură dată într-un fișier.
// Fiecare exercițiu are nume proprii (eveniment1, eveniment2 ...), deci nu comentezi nimic după ce termini.
// La DATE DE PORNIRE, codul de sub bloc e deja scris. La exercițiile 3 și 4 codul stricat e comentat:
// îl selectezi, îl decomentezi cu Ctrl+/ și îl repari. Output arată o linie de titlu pentru fiecare exercițiu.

/* ===== Exercițiul 1 · GHIDAT · 4 min · Alegi între let și const =====
   CE FACI: Declari titlul evenimentului (nu se schimbă) și locurile rămase (scad la fiecare
     înscriere).
   PAȘI:
   1. Declară titlul evenimentului cu const: titluEveniment
   2. Declară locurile rămase cu let: locuriRamase, cu valoarea 20
   3. Scade un loc din locuriRamase
   4. Afișează într-un mesaj titlul și locurile rămase
   OUTPUT AȘTEPTAT:
     Hackathon Campus Hub: 19 locuri
   INDICIU: const → valoare care nu se schimbă · let → valoare care se schimbă ·
     locuriRamase = locuriRamase - 1; → scade un loc · console.log(titluEveniment + ": " +
     locuriRamase + " locuri") → afișează în Output.
   GREȘEALĂ FRECVENTĂ: Declari și locurile cu const: la scădere apare „Assignment to
     constant variable”. */

console.log("--- Exercițiul 1 ---");

const titluEveniment = "Dev Talks";
let locuriRamase = 20;

locuriRamase = 15;
// titluEveniment = "Buna ziua";

console.log(titluEveniment, locuriRamase);

/* ===== Exercițiul 2 · SINGUR · 3 min · Schimbi un const: ce se întâmplă? =====
   CE FACI: Vezi ce se întâmplă când încerci să schimbi o valoare declarată cu const.
   PAȘI:
   1. Scrie const salaCurs = "A2";
   2. Pe linia următoare încearcă să-i dai valoarea "B1" și rulează: citește eroarea din
      Output
   3. Schimbă cuvântul din fața lui salaCurs, ca sala să poată fi schimbată
   4. Afișează salaCurs cu console.log și rulează din nou
   OUTPUT AȘTEPTAT:
     B1
   INDICIU: const salaCurs = "A2"; → valoare care nu se schimbă · salaCurs = "B1"; → încerci
     să o schimbi: Output arată eroarea · schimbi const în let și rulezi din nou ·
     console.log(salaCurs); → afișezi sala.
   GREȘEALĂ FRECVENTĂ: Ștergi linia cu B1 în loc să schimbi cuvântul: eroarea dispare, dar
     sala rămâne A2. */

console.log("--- Exercițiul 2 ---");
let test = "Buna";
test = 12;

/* ===== Exercițiul 3 · GHIDAT · 5 min · Variabila din interiorul if =====
   CE FACI: Funcția pretFinal dă eroarea „discount is not defined”: discount trăiește doar
     în if.
   PAȘI:
   1. Decomentează codul de pornire și rulează: citește eroarea
   2. Mută declarația let discount = 0; înainte de if
   3. În if lasă doar atribuirea: discount = 10;
   4. Rulează din nou: Output arată Preț final: 90
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc, comentate.
   OUTPUT AȘTEPTAT:
     Preț final: 90
   INDICIU: let discount = 0; → o declari înainte de if · în if doar îi dai valoarea:
     discount = 10 · return pret - discount → acum o vede.
   GREȘEALĂ FRECVENTĂ: Lași let în fața lui discount și în if: creezi altă variabilă, care
     dispare la }. */

console.log("--- Exercițiul 3 ---");

function pretFinal(esteStudent) {
  const pret = 100;
  let discount = 0;

  if (esteStudent) {
    discount = 10;
  }

  return pret - discount;
}

console.log("Preț final: " + pretFinal(true));

/* ===== Exercițiul 4 · SINGUR · 2 min · Repară: variabila din if =====
   CE FACI: Funcția mesajLocuri dă „mesaj is not defined”: mesaj e declarată în if și în
     else.
   PAȘI:
   1. Decomentează codul de pornire și rulează: citește eroarea
   2. Declară mesaj o singură dată, cu let, înainte de if
   3. În if și în else dă-i doar valoarea, fără let sau const
   4. Rulează din nou: Output arată Locuri libere
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc, comentate.
   OUTPUT AȘTEPTAT:
     Locuri libere
   INDICIU: Unde e scrisă mesaj? Între acolade, în if și în else → nu se vede la return ·
     declar-o o dată înainte de if, cu let · în if și else doar îi dai valoarea.
   GREȘEALĂ FRECVENTĂ: Lași let și în if / else: creezi două variabile noi, care dispar la
     }. */

console.log("--- Exercițiul 4 ---");

function mesajLocuri(locuri) {
  let mesaj;

  if (locuri > 0) {
    mesaj = "Locuri libere";
  } else {
    mesaj = "Plin";
  }

  return mesaj;
}

console.log(mesajLocuri(5));

/* ===== Exercițiul 5 · GHIDAT · 5 min · Primul obiect: evenimentul =====
   CE FACI: Creezi primul obiect, apoi îi citești și îi schimbi o valoare.
   PAȘI:
   1. Creează obiectul eveniment1 cu cheile nume, locuri și pret
   2. Afișează numele evenimentului
   3. Scade locurile cu 1
   4. Afișează locurile
   OUTPUT AȘTEPTAT:
     Hackathon
     19
   INDICIU: const eveniment1 = { ... }; → obiectul, între acolade · nume: "Hackathon", →
     cheie, două puncte, valoare, virgulă · locuri: 20, pret: 90, → numerele se scriu fără
     ghilimele · console.log(eveniment1.nume); → afișezi valoarea cheii nume ·
     eveniment1.locuri = eveniment1.locuri - 1; → schimbi valoarea cheii locuri.
   GREȘEALĂ FRECVENTĂ: Scrii = în loc de : între cheie și valoare, sau uiți virgula dintre
     perechi: JavaScript dă SyntaxError. */

console.log("--- Exercițiul 5 ---");

const eveniment1 = {
  nume: "Dev Talks",
  locuri: 12,
  pret: 100,
};

console.log(eveniment1);
console.log(eveniment1.nume);

let a = 12;
a = 16;

eveniment1.locuri = eveniment1.locuri - 1;
console.log(eveniment1.locuri);

// eveniment1 = {
//   buna: "ziua",
// };

/* ===== Exercițiul 6 · SINGUR · 3 min · Citești, schimbi, adaugi, ștergi =====
   CE FACI: Obiectul eveniment2 e scris deja în fișier: îl schimbi, îi adaugi și îi ștergi
     chei.
   PAȘI:
   1. Scade locurile cu 1
   2. Adaugă cheia sala cu valoarea "A2"
   3. Șterge cheia pret cu delete
   4. Afișează, pe rând, locurile, sala și pretul
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     19
     A2
     undefined
   INDICIU: eveniment2.locuri = eveniment2.locuri - 1; → schimbi valoarea unei chei care
     există · eveniment2.sala = "A2"; → adaugi o cheie nouă · delete eveniment2.pret; →
     ștergi cheia · după delete, eveniment2.pret nu mai există și afișează undefined · const
     nu te oprește: schimbi conținutul obiectului, nu variabila.
   GREȘEALĂ FRECVENTĂ: Scrii eveniment2.pret = undefined în loc de delete: cheia rămâne în
     obiect, doar valoarea ei e undefined. */

console.log("--- Exercițiul 6 ---");
const eveniment2 = { nume: "Hackathon", locuri: 20, pret: 90 };

eveniment2.locuri = eveniment2.locuri - 1;

delete eveniment2.pret;

eveniment2.sala = "A2";

console.log(eveniment2.locuri);

let ev2Locuri = eveniment2.locuri;

/* ===== Exercițiul 7 · GHIDAT · 5 min · Există cheia? =====
   CE FACI: Obiectul eveniment3 e scris deja în fișier: afli dacă are o cheie.
   PAȘI:
   1. Afișează dacă eveniment3 are cheia "sala", cu in
   2. Adaugă cheia sala cu valoarea "A2"
   3. Afișează din nou dacă eveniment3 are cheia "sala"
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     false
     true
   INDICIU: "sala" in eveniment3 → întrebi dacă obiectul are cheia sala · răspunsul e true
     (are) sau false (nu are) · cheia se scrie între ghilimele, ca text · eveniment3.sala =
     "A2"; → adaugi cheia, apoi întrebi din nou.
   GREȘEALĂ FRECVENTĂ: Scrii sala fără ghilimele: JavaScript caută o variabilă numită sala,
     nu o cheie, și dă eroare. */

console.log("--- Exercițiul 7 ---");
const eveniment3 = { nume: "Hackathon", locuri: 20, pret: 90 };

const areSala = "sala" in eveniment3;

eveniment3.sala = "A2";

console.log("Are sau nu sala", "sala" in eveniment3);

/* ===== Exercițiul 8 · SINGUR · 1.5 min · Are sau nu are cheia? =====
   CE FACI: Obiectul eveniment4 e scris deja în fișier: afișezi un mesaj după ce are sau nu
     are o cheie.
   PAȘI:
   1. Scrie un if cu condiția "sala" in eveniment4
   2. În if afișează „Are sala”
   3. Adaugă un else care afișează „Nu are sala”
   4. Rulează: obiectul nu are sala, deci apare „Nu are sala”
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     Nu are sala
   INDICIU: if ("sala" in eveniment4) { ... } else { ... } → in dă true sau false, exact ce
     are nevoie if · în if afișezi „Are sala” · în else afișezi „Nu are sala” · obiectul nu
     are încă sala, deci apare „Nu are sala”.
   GREȘEALĂ FRECVENTĂ: Scrii if (eveniment4.sala) în loc de "sala" in eveniment4: merge doar
     dacă valoarea e adevărată; o cheie cu valoarea 0 sau "" ar părea lipsă. */

console.log("--- Exercițiul 8 ---");
const eveniment4 = { nume: "Hackathon", locuri: 20, pret: 90, sala: "A2" };

if ("sala" in eveniment4) {
  console.log("Are sala");
} else {
  console.log("Nu re sala");
}

/* ===== Exercițiul 9 · GHIDAT · 5 min · Toate cheile obiectului =====
   CE FACI: Obiectul eveniment5 e scris deja în fișier: îi afișezi toate cheile și valorile,
     fără să le scrii pe rând.
   PAȘI:
   1. Scrie o buclă for...in peste eveniment5, cu variabila cheie
   2. În buclă afișează cheie, apoi două puncte
   3. Lângă ea afișează valoarea, cu eveniment5[cheie]
   4. Rulează: apare câte o linie pentru fiecare cheie
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     nume: Hackathon
     locuri: 20
     pret: 90
   INDICIU: for (const cheie in eveniment5) { ... } → cheie primește pe rând numele fiecărei
     chei · eveniment5[cheie] → valoarea cheii din variabila cheie (paranteze pătrate, nu
     punct) · cheie + ": " + eveniment5[cheie] → linia afișată.
   GREȘEALĂ FRECVENTĂ: Scrii eveniment5.cheie în loc de eveniment5[cheie]: punctul caută o
     cheie numită „cheie”, iar Output arată undefined. */

console.log("--- Exercițiul 9 ---");
const eveniment5 = { nume: "Hackathon", locuri: 20, pret: 90 };

eveniment5.locuri;

for (const key in eveniment5) {
  console.log(key, eveniment5[key]);
}

console.log(eveniment5["pret"]);

/* ===== Exercițiul 10 · SINGUR · 5 min · Funcția care judecă obiectul =====
   CE FACI: Funcția statusEveniment primește un obiect și întoarce un text despre eveniment.
   PAȘI:
   1. Creează trei obiecte: hackathon (sala A2), workshop (0 locuri, sala B1) și meetup
      (fără sală)
   2. Scrie funcția statusEveniment(eveniment): dacă locurile sunt 0, întoarce numele și
      „plin”
   3. Altfel, dacă obiectul are cheia sala (in), întoarce numele, locurile și sala
   4. Altfel, întoarce numele, locurile și „sală necunoscută”
   5. Apelează funcția pentru fiecare obiect și afișează rezultatele
   OUTPUT AȘTEPTAT:
     Hackathon: 20 locuri, sala A2
     Workshop CSS: plin
     Meetup: 35 locuri, sală necunoscută
   INDICIU: function statusEveniment(eveniment) { ... } → un singur parametru, obiectul · if
     (eveniment.locuri === 0) { return ... } → primul caz: plin · if ("sala" in eveniment) {
     return ... } → al doilea caz: are sala · return la final → cazul rămas, fără sală ·
     console.log(statusEveniment(hackathon)); → apelul.
   GREȘEALĂ FRECVENTĂ: Verifici sala înaintea locurilor: Workshop CSS are sala B1, deci
     apare cu sala, nu „plin”. Ordinea if-urilor contează. */

console.log("--- Exercițiul 10 ---");

const hackathon = {
  sala: "A2",
};

const workshop = { locuri: 0, sala: "A1" };

const meetup = {};

function statusEveniment(ev) {
  if (ev.locuri === 0) {
    return "Plin";
  }

  if ("sala" in ev) {
    return "numele locuri sala";
  }

  return "sala nu estet setata";
}

statusEveniment(hackathon);

/* ===== TEMĂ DE ACASĂ · Raportul evenimentelor tale =====
   CE FACI: Construiești un raport pentru două evenimente de la tine: obiecte, funcții,
     decizii, bucle și calcule simple, tot ce am făcut azi.
   PAȘI:
   1. Creează evenimentulA și evenimentulB, cu cheile nume, locuri, ocupate, pret; doar A
      are și cheia sala
   2. Scrie funcția raportEveniment(eveniment): calculează locurile libere (locuri -
      ocupate) și încasările (ocupate * pret)
   3. Alege starea cu if / else if / else: „Plin” (0 libere), „Ultimele locuri” (sub 5) sau
      „Locuri libere”
   4. Cu in adaugă sala în text, sau „sală necunoscută” dacă lipsește; afișează raportul
      pentru ambele obiecte
   5. Scrie funcția ceaMaiMultaIncasare(eveniment1, eveniment2), care întoarce numele
      evenimentului cu încasări mai mari
   6. Cu un for, afișează prețul pentru 1, 2 și 3 bilete la evenimentulA, cu reducere de 10%
      de la 3 bilete
   7. Cu for...in, afișează toate cheile și valorile lui evenimentulB
   8. Trimite lucrul pe GitHub: branch sesiunea-15, Pull Request unit în main
   OUTPUT AȘTEPTAT (exemplu):
     Hackathon · Ultimele locuri (4 libere) · încasări 3240 lei · sala A2
     Meetup · Locuri libere (20 libere) · încasări 200 lei · sală necunoscută
     Mai multe încasări: Hackathon
     Bilete: 1 → 90 lei
     Bilete: 2 → 180 lei
     Bilete: 3 → 243 lei
     nume: Meetup
     locuri: 30
     ocupate: 10
     pret: 20
   INDICIU: raportEveniment e ca statusEveniment de la exercițiul 10, doar că mai întâi
     calculezi locurile libere și încasările · in se scrie ca la exercițiile 7 și 8 ·
     for...in ca la exercițiul 9 · for-ul și reducerea vin din sesiunea 14: la 3 bilete sau
     mai multe, prețul total se scade cu 10% (total - total / 10) · o funcție care compară
     două obiecte primește două parametre și întoarce numele celui mai bun cu if.
   GREȘEALĂ FRECVENTĂ: Scrii „Locuri libere” primul în if / else if: acel caz prinde orice
     eveniment, iar „Plin” și „Ultimele locuri” nu mai ajung niciodată să se verifice. Cazul
     cel mai strâns merge primul. */
