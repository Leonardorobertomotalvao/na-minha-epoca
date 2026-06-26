/* =====================================================
   BIBLIOTECA DE BRINCADEIRAS
   Arquivo: app.js

   Responsável por:
   - Criar os cards
   - Pesquisar brincadeiras
   ===================================================== */

/* -----------------------------------------------------
   Lista de brincadeiras
   Aqui ficam todas as brincadeiras do sistema.
   Depois podemos adicionar muito mais.
----------------------------------------------------- */

const brincadeiras = [

    {
        nome: "Pega-Pega",
        categoria: "Ao Ar Livre",
        descricao: "Uma criança tenta pegar as outras.",
        imagem: ""
    },

    {
        nome: "Corrida do Saco",
        categoria: "Ao Ar Livre",
        descricao: "Pule até a linha de chegada.",
        imagem: ""
    },

    {
        nome: "Cabo de Guerra",
        categoria: "Grupo",
        descricao: "Duas equipes disputam força.",
        imagem: ""
    },

    {
        nome: "Amarelinha",
        categoria: "Coordenação",
        descricao: "Pule seguindo os números.",
        imagem: ""
    }

];

/* -----------------------------------------------------
   Pegando elementos do HTML
----------------------------------------------------- */

const cards = document.getElementById("cards");

const pesquisa = document.getElementById("pesquisa");

/* -----------------------------------------------------
   Função responsável por criar os cards.
   Recebe uma lista e mostra na tela.
----------------------------------------------------- */

function mostrarBrincadeiras(lista){

    // Limpa a tela antes de criar os cards
    cards.innerHTML = "";

    // Percorre todas as brincadeiras
    lista.forEach(brincadeira => {

        cards.innerHTML += `

            <div class="card">

                <img
                    src="${brincadeira.imagem}"
                    alt="${brincadeira.nome}"
                >

                <h2>${brincadeira.nome}</h2>

                <p>${brincadeira.descricao}</p>

            </div>

        `;

    });

}

/* -----------------------------------------------------
   Mostra todas as brincadeiras quando o site abre.
----------------------------------------------------- */

mostrarBrincadeiras(brincadeiras);

/* -----------------------------------------------------
   Pesquisa em tempo real.
----------------------------------------------------- */

pesquisa.addEventListener("input", function(){

    // Texto digitado pelo usuário
    const texto = pesquisa.value.toLowerCase();

    // Filtra a lista
    const resultado = brincadeiras.filter(brincadeira =>

        brincadeira.nome.toLowerCase().includes(texto)

    );

    // Atualiza os cards
    mostrarBrincadeiras(resultado);

});
