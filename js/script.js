for (let i = 0; i < 20; i++) {
    let immagine = document.createElement("img");

    immagine.src = "img/icona.png";
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
