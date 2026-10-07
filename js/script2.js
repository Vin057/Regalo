let bottone = document.getElementById("premio");

let sequenza = [1, 2, 3, 2, 1, 4, 5, 4, 1, 2, 3, 2, 1, 4, 5, 4, 1];
let posizione = 0;

bottone.onclick = function() {
    bottone.style.display = "none";

    let immagine = document.createElement("img");
    immagine.src = "../img/regalo1.png";
    immagine.id = "immagine";

    document.body.appendChild(immagine);

    immagine.onclick = function() {
        posizione++;

        if (posizione < sequenza.length) {
            immagine.src = "../img/regalo" + sequenza[posizione] + ".png";
        }  else {         // La sequenza è finita
                let rosa = document.createElement("img");
                rosa.src = "../img/rosa.png";
                rosa.id = "rosa";

                document.body.appendChild(rosa);

                setTimeout(function() {
                    rosa.classList.add("rosa-grande");
                }, 100);

                for (let i = 0; i < 7; i++) {
                    let immagine = document.createElement("img");

                    immagine.src = "../img/animazione.png";
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
            };
    }
};
