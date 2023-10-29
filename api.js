const API="https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
const body=document.querySelector("body");

async function mostrarPokemons() {
    const resultado= await fetch(API);
    const info= await resultado.json();
   /*  console.log(info.sprites.back_default);
    document.querySelector("body")+=` <img src="${info.sprites.back_default}">`; */
   /*  let imagen=info.name; */
   let resultadoPokemon="temporal";
   info.results.forEach(async(pokemon) => {
    resultadoPokemon=await fetch(pokemon.url)
    resultadoPokemon= await resultadoPokemon.json();
     body.innerHTML +=`<h1>${resultadoPokemon.name}</h1>
    <img src="${resultadoPokemon.sprites.front_default}">`
   });
   
    
}
mostrarPokemons()