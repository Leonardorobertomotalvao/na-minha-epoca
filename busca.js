const campoPesquisa = document.getElementById("campoPesquisa");

campoPesquisa.addEventListener("input", () => {

    const pesquisa = campoPesquisa.value.toLowerCase();

    console.log("Pesquisando:", pesquisa);

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const nomeBrincadeira = card.querySelector(".nome-brincadeira")
            .textContent
            .toLowerCase();

        console.log(nomeBrincadeira);

        if (nomeBrincadeira.includes(pesquisa)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});