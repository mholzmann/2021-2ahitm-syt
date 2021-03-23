/**
 * Fetching a JSON file across the network 
 */
async function loadPokemon() {
    // The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object).
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/');

    // You could extract the JSON body content this way
    // const body = await response.text();
    // const pokemon = JSON.parse(body);

    // But it is much simpler to use the json() method
    const pokemon = await response.json();

    console.log(pokemon);
    document.getElementById('result').innerHTML = `You catched a ${pokemon.name} with a height of ${pokemon.height} decimetres.`;
}