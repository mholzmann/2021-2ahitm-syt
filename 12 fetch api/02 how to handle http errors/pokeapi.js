// Prevent redirection on form submit
document.querySelector('#form').addEventListener('submit', event => event.preventDefault())

/**
* Fetching a JSON file across the network 
*/
async function loadPokemon() {
    document.getElementById('result').innerHTML = ""
    const name = document.getElementById('pokemon').value;

    try {
        // Trying to fetch a pokemon which might not exist
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`);

        if (response.ok) {
            const pokemon = await response.json();
            document.getElementById('result').innerHTML = `You catched a ${pokemon.name} with a height of ${pokemon.height} decimetres.`;
        } else {
            // Executed e.g. if server returns HTTP Code 404 (NOT FOUND)
            alert(`Error: Could not fetch Pokemon "${name}"`);
        }
    } catch (error) {
        // executed e.g. if there is no network connection
        alert(error);
    }
}