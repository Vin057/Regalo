let vite = 2;
let numeroIndizi = 0;

function controllaNumero() {
    let numero = document.getElementById("numero").value;
    let risultato = document.getElementById("risultato");
    let viteHTML = document.getElementById("vite");
    let indizi = document.getElementById("indizi");

    let min = 1;
    let max = 5000;

    if (numero < min || numero > max) {
        alert("Inserisci un numero compreso tra 1 e 5000!");
        return;
    }

    if (numero == 20) {
        risultato.textContent = "Hai indovinato!";
        risultato.classList.add("risultato");
        indizi.innerHTML = "";

        let nuovoBottone = document.createElement("button");
        nuovoBottone.textContent = "Continua";
        nuovoBottone.classList.add("bottone-continua");

        nuovoBottone.onclick = function() {
        window.open("foglio2.html", "_blank");
        };

        indizi.appendChild(nuovoBottone);
        for (let i = 0; i < 20; i++) {
            let immagine = document.createElement("img");

            immagine.src = "../img/regalo1.png";
            immagine.classList.add("icona-casuale");

            let x, y;

            do {
                x = Math.random() * 90;
                y = Math.random() * 90;
            } while (
                x > 25 && x < 75 &&
                y > 30 && y < 70
            );

            immagine.style.left = x + "vw";
            immagine.style.top = y + "vh";

            // Durata casuale dell'animazione
            immagine.style.animationDuration =
                (2 + Math.random() * 3) + "s";

            document.body.appendChild(immagine);
        }

        return;
    }

    vite--;
    viteHTML.textContent = "Vite: " + vite;

    if (vite == 0) {
        risultato.textContent = "Hai finito le vite!";

        numeroIndizi++;

        if (numeroIndizi == 1) {
            indizi.innerHTML += "<p>Indizio 1: Il numero e pari!(non mi faceva mettere la e con l'accento)</p>";
        }

        if (numeroIndizi == 2) {
            indizi.innerHTML += "<p>Indizio 2: Insieme a 0</p>";
        }

        if (numeroIndizi == 3) {
            indizi.innerHTML += "<p>Indizio 3: Che scarsa,sara l'eta...Conta!</p>";
        }

        if (numeroIndizi == 4) {
            indizi.innerHTML += "<p>Indizio 4: Non sai dove? Guarda in alto</p>";
        }

        if (numeroIndizi == 5) {
            indizi.innerHTML += "<p>Indizio 5: Tra le schede</p>";
        }

        if (numeroIndizi == 6) {
            indizi.innerHTML += "<p>Indizio 6: .../07</p>";
        }

        if (numeroIndizi == 7) {
            indizi.innerHTML += "<p>Indizio 7: E va bene...Quanti anni hai fatto?</p>"; 
        }

        vite = 2;
        viteHTML.textContent = "Vite: " + vite;
    } else {
        risultato.textContent = "Sbagliato! Riprova!";
    }
}

