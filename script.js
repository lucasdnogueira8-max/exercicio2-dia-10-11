
async function buscarPokemon() {

    // Pegar o nome digitado
    let nomePokemon = document.getElementById("nomePokemon").value;

    // Verificar se o campo está vazio
    if (nomePokemon == "") {
        document.getElementById("mensagem").innerText =
            "Digite o nome de um Pokemon!";
        return;
    }

    try {

        // Consultar a API
        let resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`
        );

        // Verificar se encontrou o Pokemon
        if (!resposta.ok) {
            throw new Error("Pokemon não encontrado!");
        }

        // Transformar os dados em JSON
        let dados = await resposta.json();

        // Mostrar as informações na tela
        document.getElementById("nome").innerText = dados.name;

        document.getElementById("id").innerText =
            "ID: " + dados.id;

        document.getElementById("altura").innerText =
            (dados.height / 10) + " m";

        document.getElementById("peso").innerText =
            (dados.weight / 10) + " kg";

        document.getElementById("imagem").src =
            dados.sprites.other["official-artwork"].front_default ||
            dados.sprites.front_default;

        // Limpar mensagem
        document.getElementById("mensagem").innerText = "";

    } catch (erro) {

        // Mostrar mensagem de erro
        document.getElementById("mensagem").innerText =
            "Pokemon não encontrado!";

    }

}
