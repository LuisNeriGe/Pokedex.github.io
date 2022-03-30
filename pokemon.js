const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200") {
            console.log(res);
            pokeImage("./imagenes/no-pikachu.gif");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let elem = data.name;
        let id = data.id;
        let tipo = data.types[0].type.name;
        let mov = data.moves[0].move.name;
        let stat = data.stats[0].base_stat;
        let peso = data.weight;
        let hab = data.abilities[0].ability.name;
        pokeNombre1(elem);
        pokeData3(id);
        pokeImage(pokeImg);
        pokeData(tipo);
        pokeData1(mov);
        pokeData2(stat);
        pokeData4(peso);
        pokeData5(hab);
        console.log(elem);
        console.log(id);
        console.log(pokeImg);
        console.log(tipo);
        console.log(mov);
        console.log(stat);
        console.log(peso);
        console.log(hab);
    })
}

//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png");

const pokeNombre1 = (url) => {
    const pokenames1 = document.getElementById("elem");
    pokenames1.innerHTML = url;
}

const pokeData = (url) => {
    const pokeData = document.getElementById("tipo");
    pokeData.innerHTML = url;
}

const pokeData1 = (url) => {
    const pokeData = document.getElementById("movimiento");
    pokeData.innerHTML = url;
}

const pokeData2 = (url) => {
    const pokeData = document.getElementById("stats");
    pokeData.innerHTML = url;
}

const pokeData3 = (url) => {
    const pokeData = document.getElementById("id");
    pokeData.innerHTML = url;
}

const pokeData4 = (url) => {
    const pokeData = document.getElementById("peso");
    pokeData.innerHTML = url;
}

const pokeData5 = (url) => {
    const pokeData = document.getElementById("habilidad");
    pokeData.innerHTML = url;
}