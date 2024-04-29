// Zmienne globalne

let RTexte;
let RText

//Tworzenie animowanego tekstu

function CRTEXT() {
    const maindiv = document.querySelector('.main')
    maindiv.innerHTML = ''
    const RText = document.createElement('div')
    RText.classList.add('rainbow-text')
    maindiv.appendChild(RText)
    return RText
}

//Wstawianie każdego znaku w span

function spans(RText) {
    const text = RText.textContent
    const characters = text.split('')
    RText.textContent = ''
    characters.forEach(char => {
        const span = document.createElement('span')
        span.textContent = char
        RText.appendChild(span)
    })
}

//Inicjalizacja animowanego tekstu

document.addEventListener("DOMContentLoaded", function(event) {
    RTexte = CRTEXT()
    RTexte.textContent = 'Wybierz samochód'
    spans(RTexte)
});

//Obsługa zdarzenia najechania myszką

document.addEventListener('DOMContentLoaded', function(event) {
    const element = document.querySelector('.return')
    element.addEventListener('mouseover', function () {
        console.log("Zczytano najechanie poprawnie")
        RTexte = CRTEXT()
        RTexte.textContent = 'Wybierz samochód'
        spans(RTexte)
    })
})

//BMW
//BMW - elementy

const E36 = document.createElement("img")
E36.src = 'foto/bmw.png'
E36.classList.add("kebab")
E36.alt = "Ładne E36"

const E36p = document.createElement("p")
E36p.classList.add("kebab-p")
E36p.innerText = 'To jest normalne BMW E36. W późnych latach 80tych - przyzwoity samochód dla średnio zamożnego niemca.'

const E36b = document.createElement('button')
E36b.classList.add('kebab-b')
E36b.innerText = 'Zgruź'

//BMW - sprawdzenie grafiki

E36.addEventListener("load", function () {
    console.log("Grafika BMW została załadowana")
});

//BMW - wstawianie elementów

function wstaw1 () {
    const maindiv1 = document.querySelector('.main')
    if (maindiv1) {
        maindiv1.innerHTML = ''
        maindiv1.appendChild(E36)
        maindiv1.appendChild(E36p)
        maindiv1.append(E36b)
    } else {
        console.error("Element '.main' nie istnieje.")
    }
}

//BMW - wywołanie funkcji

const klik1 = document.querySelector('#bmw')
klik1.onclick = wstaw1

//BMW gruz - elementy

const E36_gr = document.createElement("img");
E36_gr.src = 'foto/bmw_gr.png'
E36_gr.classList.add("kebab_gr")
E36_gr.alt = "Brzydkie E36"

const E36_grp = document.createElement("p")
E36_grp.classList.add("kebab_gr-p")
E36_grp.innerText = 'To jest prawdziwy wojownik polskich autostrad międzygminnych. Aktualnie, największe marzenie przeciętnego, wiejskiego nastolatka w Polsce. W zestawie - bodykit "rusty-runner".'

const E36_grb = document.createElement('button')
E36_grb.classList.add('kebab_gr-b')
E36_grb.innerText = 'Odgruź'

//BMW gruz - sprawdzenie grafiki

E36_gr.addEventListener("load", function () {
    console.log("Grafika BMW gruz została załadowana")
});

//BMW gruz - wstawianie elementów

function wstaw_gr1 () {
    const maindiv_gr1 = document.querySelector('.main')
    if (maindiv_gr1) {
        maindiv_gr1.innerHTML = ''
        maindiv_gr1.appendChild(E36_gr)
        maindiv_gr1.appendChild(E36_grp)
        maindiv_gr1.append(E36_grb)
        console.log("Funkcja wstaw_gr została wykonana")
    } else {
        console.error("Element '.main' nie istnieje.")
    }
}

//BMW gruz - wywołanie funkcji

E36b.addEventListener('click', wstaw_gr1)
E36_grb.addEventListener('click', wstaw1)


//Opel
//Opel - elementy

const OMG = document.createElement("img");
OMG.src = 'foto/opel.png'
OMG.classList.add("omega")
OMG.alt = "Ładna Omega"

const OMGp = document.createElement("p")
OMGp.classList.add("omega-p")
OMGp.innerText = 'To jest Opel Omega B. W późnych latach 90tych i wczesnych 2000cznych jeden z największych, najbardziej luksusowych samochodów tej marki i jednocześnie ostatni tego typu sedan tworzony pod marką Opel.'

const OMGb = document.createElement('button')
OMGb.classList.add('omega-b')
OMGb.innerText = 'Zgruź'

//Opel - sprawdzenie grafiki

OMG.addEventListener("load", function () {
    console.log("Grafika Opel została załadowana")
});

//Opel - wstawienie elementów

function wstaw2 () {
    const maindiv2 = document.querySelector('.main')
    if (maindiv2) {
        maindiv2.innerHTML = ''
        maindiv2.appendChild(OMG)
        maindiv2.appendChild(OMGp)
        maindiv2.append(OMGb)
    } else {
        console.error("Element '.main' nie istnieje.")
    }
}

//Opel - wywołanie funkcji

const klik2 = document.querySelector('#opel')
klik2.onclick = wstaw2

//Opel gruz - elementy

const OMG_gr = document.createElement("img")
OMG_gr.src = 'foto/opel_gr.png'
OMG_gr.classList.add("omega_gr")
OMG_gr.alt = "Brzydka Omega"

const OMG_grp = document.createElement("p")
OMG_grp.classList.add("omega_gr-p")
OMG_grp.innerText = 'To jest aktualna Omega w średnim stanie po około 20stu latach w Polsce. Pomimo wątpliwego stanu technicznego skrzynie atomatyczne, silniki V6 oraz atrakcyjna cena stale wzbudzają zainteresowanie nabywców tego typu aut.'

const OMG_grb = document.createElement('button')
OMG_grb.classList.add('omega_gr-b')
OMG_grb.innerText = 'Odgruź'

//Opel gruz - sprawdzenie grafiki

OMG_gr.addEventListener("load", function () {
    console.log("Grafika Opel gruz została załadowana")
})

//Opel gruz - wstawienie elememtów

function wstaw_gr2 () {
    const maindiv_gr2 = document.querySelector('.main')
    if (maindiv_gr2) {
        maindiv_gr2.innerHTML = ''
        maindiv_gr2.appendChild(OMG_gr)
        maindiv_gr2.appendChild(OMG_grp)
        maindiv_gr2.append(OMG_grb)
        console.log("Funkcja wstaw_gr2 została wykonana")
    } else {
        console.error("Element '.main' nie istnieje.")
    }
}

//Opel gruz - wywołanie funkcji

OMGb.addEventListener('click', wstaw_gr2)
OMG_grb.addEventListener('click', wstaw2)

//Honda
//Honda - elementy:

const CIV = document.createElement("img")
CIV.src = 'foto/civic.png'
CIV.classList.add("civic")
CIV.alt = "Ładny Civic"

const CIVp = document.createElement("p")
CIVp.classList.add("civic-p")
CIVp.innerText = 'Oto Honda Civic piątej generacji - kiedyś ciekawy, budżetowy wybór dla miłośników niedużych samochodów ze sportowym zacięciem, sprawiający nawet wrażenie auta półsportowego.'

const CIVb = document.createElement('button')
CIVb.classList.add('civic-b')
CIVb.innerText = 'Zgruź'

//Honda - sprawdzenie grafiki

CIV.addEventListener("load", function () {
    console.log("Grafika Honda została załadowana")
});

//Honda - wstawienie elementów

function wstaw3 () {
    const maindiv3 = document.querySelector('.main')
    if (maindiv3) {
        maindiv3.innerHTML = ''
        maindiv3.appendChild(CIV)
        maindiv3.appendChild(CIVp)
        maindiv3.append(CIVb)
    } else {
        console.error("Element '.main' nie istnieje.")
    }
}

//Honda - wywołanie funkcji

const klik3 = document.querySelector('#civic')
klik3.onclick = wstaw3

//Honda gruz - elementy

const CIV_gr = document.createElement("img")
CIV_gr.src = 'foto/civic_gr.png'
CIV_gr.classList.add("civic_gr")
CIV_gr.alt = "Brzydki Civic"

const CIV_grp = document.createElement("p")
CIV_grp.classList.add("civic_gr-p")
CIV_grp.innerText = 'To jest Civic po solidnym polskim tunningu, przerobiony na tzw. "upalacz", czyli narzędzie do generowania hałasu. Najczęściej używają go zacięci wrogowie właścicieli BMW E36 o godzinie 3 w nocy, aby na głównej ulicy miasta przy pomocy pedłu gazu pokazać, kto ma PRAWDZIWY, przelotowy wydech.'

const CIV_grb = document.createElement('button')
CIV_grb.classList.add('omega_gr-b')
CIV_grb.innerText = 'Odgruź'

//Honda gruz - sprawdzenie grafiki

CIV_gr.addEventListener("load", function () {
    console.log("Grafika Honda gruz została załadowana")
});

//Honda gruz - wstawienie elememtów

function wstaw_gr3 () {
    const maindiv_gr3 = document.querySelector('.main')
    if (maindiv_gr3) {
        maindiv_gr3.innerHTML = ''
        maindiv_gr3.appendChild(CIV_gr)
        maindiv_gr3.appendChild(CIV_grp)
        maindiv_gr3.append(CIV_grb)
        console.log("Funkcja wstaw_gr3 została wykonana")
    } else {
        console.error("Element '.main' nie istnieje.")
    }
}

//Honda gruz - wywołanie funkcji

CIVb.addEventListener('click', wstaw_gr3)
CIV_grb.addEventListener('click', wstaw3)

//Golf
//Golf - elementy:

const GF = document.createElement("img")
GF.src = 'foto/golf.png'
GF.classList.add("golf")
GF.alt = "Ładny Golf"

const GFp = document.createElement("p")
GFp.classList.add("golf-p")
GFp.innerText = 'To jest Volkswagen Golf 1. Zapoczątkował on erę kompaktowych hatchbacków marki Volkswagen, oferując wygodę i niezawodność w przystępnej cenie.'

const GFb = document.createElement('button')
GFb.classList.add('golf-b')
GFb.innerText = 'Zgruź'

//Golf - sprawdzenie grafiki

GF.addEventListener("load", function () {
    console.log("Grafika Golf została załadowana")
});

//Golf - wstawienie elementów

function wstaw4 () {
    const maindiv4 = document.querySelector('.main')
    if (maindiv4) {
        maindiv4.innerHTML = ''
        maindiv4.appendChild(GF)
        maindiv4.appendChild(GFp)
        maindiv4.append(GFb)
    } else {
        console.error("Element '.main' nie istnieje.")
    }
}

//Golf - wywołanie funkcji

const klik4 = document.querySelector('#golf')
klik4.onclick = wstaw4

//Golf gruz - elementy

const GF_gr = document.createElement("img")
GF_gr.src = 'foto/golf_gr.png'
GF_gr.classList.add("golf_gr")
GF_gr.alt = "Brzydki Golf"

const GF_grp = document.createElement("p")
GF_grp.classList.add("golf_gr-p")
GF_grp.innerText = 'To jest Golf po polskich przejściach. Może i wartość spadła, może i wygląd przestał być tak cieszący oko, jednak trwałość mechaniczna pozostaje właściwie niezmienna.'

const GF_grb = document.createElement('button')
GF_grb.classList.add('golf_gr-b')
GF_grb.innerText = 'Odgruź'

//Golf gruz - sprawdzenie grafiki

GF_gr.addEventListener("load", function () {
    console.log("Grafika Golf gruz została załadowana")
});

//Golf gruz - wstawienie elememtów

function wstaw_gr4 () {
    const maindiv_gr4 = document.querySelector('.main')
    if (maindiv_gr4) {
        maindiv_gr4.innerHTML = ''
        maindiv_gr4.appendChild(GF_gr)
        maindiv_gr4.appendChild(GF_grp)
        maindiv_gr4.append(GF_grb)
        console.log("Funkcja wstaw_gr4 została wykonana")
    } else {
        console.error("Element '.main' nie istnieje.")
    }
}

//Golf gruz - wywołanie funkcji

GFb.addEventListener('click', wstaw_gr4)
GF_grb.addEventListener('click', wstaw4)

//Passat
//Passat - elementy:

const PS = document.createElement("img")
PS.src = 'foto/passat.png'
PS.classList.add("passat")
PS.alt = "Ładny Passat"

const PSp = document.createElement("p")
PSp.classList.add("passat-p")
PSp.innerText = 'To jest Volkswagen Passat B5. Był jednym z najlepszych modeli Passata, zapewniając wyrafinowane osiągi, komfort podróżowania i solidną jakość wykonania. Zyskał uznanie dzięki nowoczesnym rozwiązaniom technicznym i przestronności wnętrza.'

const PSb = document.createElement('button')
PSb.classList.add('passat-b')
PSb.innerText = 'Zgruź'

//Passat - sprawdzenie grafiki

PS.addEventListener("load", function () {
    console.log("Grafika Passat została załadowana")
});

//Passat - wstawienie elementów

function wstaw5() {
    const maindiv5 = document.querySelector('.main')
    if (maindiv5) {
        maindiv5.innerHTML = ''
        maindiv5.appendChild(PS)
        maindiv5.appendChild(PSp)
        maindiv5.append(PSb)
    } else {
        console.error("Element '.main' nie istnieje.")
    }
}

//Passat - wywołanie funkcji

const klik5 = document.querySelector('#passat')
klik5.onclick = wstaw5

//Passat gruz - elementy

const PS_gr = document.createElement("img")
PS_gr.src = 'foto/passat_gr.png'
PS_gr.classList.add("passat_gr")
PS_gr.alt = "Brzydki Passat"

const PS_grp = document.createElement("p")
PS_grp.classList.add("passat_gr-p")
PS_grp.innerText = 'To już Passat B5 po 10 latach życia w rękach polskiego rolnika. Co prawda wieczne wożenie 300 kilogramów ziemniaków z pola do domu, czy ciężkiej przyczepy z obornikiem i brak regularnych wymian oleju odrobinę ugięły kolana VW, jednak jest on nadal w stanie jezdnym.'

const PS_grb = document.createElement('button')
PS_grb.classList.add('passat_gr-b')
PS_grb.innerText = 'Odgruź'

//Passat gruz - sprawdzenie grafiki

PS_gr.addEventListener("load", function () {
    console.log("Grafika Passat gruz została załadowana")
});

//Passat gruz - wstawienie elememtów

function wstaw_gr5 () {
    const maindiv_gr5 = document.querySelector('.main')
    if (maindiv_gr5) {
        maindiv_gr5.innerHTML = ''
        maindiv_gr5.appendChild(PS_gr)
        maindiv_gr5.appendChild(PS_grp)
        maindiv_gr5.append(PS_grb)
        console.log("Funkcja wstaw_gr5 została wykonana")
    } else {
        console.error("Element '.main' nie istnieje.")
    }
}

//Passat gruz - wywołanie funkcji

PSb.addEventListener('click', wstaw_gr5)
PS_grb.addEventListener('click', wstaw5)

//Micra
//Micra - elementy:

const MIC = document.createElement("img");
MIC.src = 'foto/nissan.png'
MIC.classList.add("micra")
MIC.alt = "Ładny Nissan"

const MICp = document.createElement("p")
MICp.classList.add("micra-p")
MICp.innerText = 'To jest Nissan Micra. Na przełomie wieków zasłynął on dzięki swojej kompaktowej budowie, oszczędności paliwa i łatwości prowadzenia, co sprawiło, że był idealnym wyborem dla miejskich kierowców.'

const MICb = document.createElement('button')
MICb.classList.add('micra-b')
MICb.innerText = 'Zgruź'

//Micra - sprawdzenie grafiki

MIC.addEventListener("load", function () {
    console.log("Grafika Micra została załadowana")
});

//Micra - wstawienie elementów

function wstaw6() {
    const maindiv6 = document.querySelector('.main')
    if (maindiv6) {
        maindiv6.innerHTML = ''
        maindiv6.appendChild(MIC)
        maindiv6.appendChild(MICp)
        maindiv6.append(MICb)
    } else {
        console.error("Element '.main' nie istnieje.")
    }
}

//Micra - wywołanie funkcji

const klik6 = document.querySelector('#micra')
klik6.onclick = wstaw6

//Micra gruz - elementy

const MIC_gr = document.createElement("img")
MIC_gr.src = 'foto/nissan_gr.png'
MIC_gr.classList.add("micra_gr")
MIC_gr.alt = "Brzydki Nissan"

const MIC_grp = document.createElement("p")
MIC_grp.classList.add("micra_gr-p")
MIC_grp.innerText = 'A to Micra w rękach spadkobiercy, który odziedziczył ją po dziadku, lecz przestał jeździć. Wilgoć otoczenia sprawia, że postępująca korozja powoli sama rozkłada starego nissana. Jednakże zadbane egzemplarze to powoli cenione klasyki.'

const MIC_grb = document.createElement('button')
MIC_grb.classList.add('micra_gr-b')
MIC_grb.innerText = 'Odgruź'

//Micra gruz - sprawdzenie grafiki

MIC_gr.addEventListener("load", function () {
    console.log("Grafika Micra gruz została załadowana")
});

//Micra gruz - wstawienie elememtów

function wstaw_gr6 () {
    const maindiv_gr6 = document.querySelector('.main')
    if (maindiv_gr6) {
        maindiv_gr6.innerHTML = ''
        maindiv_gr6.appendChild(MIC_gr)
        maindiv_gr6.appendChild(MIC_grp)
        maindiv_gr6.append(MIC_grb)
        console.log("Funkcja wstaw_gr6 została wykonana")
    } else {
        console.error("Element '.main' nie istnieje.")
    }
}

//Micra gruz - wywołanie funkcji

MICb.addEventListener('click', wstaw_gr6)
MIC_grb.addEventListener('click', wstaw6)