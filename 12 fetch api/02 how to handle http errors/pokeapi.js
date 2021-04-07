// Prevent redirection on form submit
document.querySelector('#form').addEventListener('submit', event => event.preventDefault())

// Add click event
document.querySelector('#catch-button').addEventListener('click', loadPokemon);

// 
/**
* Fetching a JSON file across the network 
*/
async function loadPokemon() {
    document.querySelector('#result').innerHTML = ""
    const name = document.querySelector('#pokemon').value;

    try {
        // Trying to fetch a pokemon which might not exist
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`);

        if (response.ok) {
            // Executed if the response was successfull (HTTP status code in the range 200-299)
            const pokemon = await response.json();
            document.getElementById('result').innerHTML = `You catched a ${pokemon.name} with a height of ${pokemon.height} decimetres.`;
        } else {
            // Executed if the response fails e.g. if server returns HTTP status code 404 (NOT FOUND)
            alert(`Error: Could not fetch Pokemon "${name}"`);
        }
    } catch (error) {
        // Executed if the server doesn't response e.g. if there is no network connection
        alert(error);
    }
}