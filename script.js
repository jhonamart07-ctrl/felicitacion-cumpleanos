const abrirBtn = document.getElementById("abrirBtn");
const reiniciarBtn = document.getElementById("reiniciarBtn");

const inicio = document.getElementById("inicio");
const felicitacion = document.getElementById("felicitacion");

const contenedorConfeti = document.getElementById("confeti");


abrirBtn.addEventListener("click", () => {

    inicio.style.display = "none";

    felicitacion.style.display = "flex";

    lanzarConfeti();

});


reiniciarBtn.addEventListener("click", () => {

    felicitacion.style.display = "none";

    inicio.style.display = "flex";

});


function lanzarConfeti() {

    for (let i = 0; i < 120; i++) {

        const confeti = document.createElement("div");

        confeti.classList.add("confeti");

        confeti.style.left =
            Math.random() * 100 + "vw";

        confeti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confeti.style.animationDelay =
            Math.random() * 2 + "s";

        confeti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        contenedorConfeti.appendChild(confeti);


        setTimeout(() => {

            confeti.remove();

        }, 6000);

    }

}