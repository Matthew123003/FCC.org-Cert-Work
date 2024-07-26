document.getElementById('search-button').addEventListener('click', searchPokemon);

function searchPokemon() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            displayPokemon(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayPokemon(pokemon) {
    document.getElementById('pokemon-name').textContent = pokemon.name.toUpperCase();
    document.getElementById('sprite').src = pokemon.sprites.front_default;
    document.getElementById('sprite').hidden = false;
    document.getElementById('pokemon-id').textContent = `ID: ${pokemon.id}`;
    document.getElementById('weight').textContent = `Weight: ${pokemon.weight}`;
    document.getElementById('height').textContent = `Height: ${pokemon.height}`;
    document.getElementById('hp').textContent = `HP: ${pokemon.stats[0].base_stat}`;
    document.getElementById('attack').textContent = `Attack: ${pokemon.stats[1].base_stat}`;
    document.getElementById('defense').textContent = `Defense: ${pokemon.stats[2].base_stat}`;
    document.getElementById('special-attack').textContent = `Special Attack: ${pokemon.stats[3].base_stat}`;
    document.getElementById('special-defense').textContent = `Special Defense: ${pokemon.stats[4].base_stat}`;
    document.getElementById('speed').textContent = `Speed: ${pokemon.stats[5].base_stat}`;

    const typesContainer = document.getElementById('types');
    typesContainer.innerHTML = ''; // Clear previous types
    pokemon.types.forEach(typeInfo => {
        const typeElement = document.createElement('div');
        typeElement.textContent = typeInfo.type.name.toUpperCase();
        typeElement.className = 'type';
        typesContainer.appendChild(typeElement);
    });

    document.querySelector('.pokemon-info').style.display = 'block';
}
