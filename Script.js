const apiUrl = 'https://tyradex.vercel.app/api/v1/gen/1';

        // Fonction récupère id Pokémon avec url
        function getPokemonIdFromURL() {
            const parametre_lien = new URLSearchParams(window.location.search);
            return parametre_lien.get('id'); // Retourne valeur id
        }

        // Infos que je veux sur page
        function informations(pokemon) {
            document.getElementById('pokemon-name').textContent = pokemon.name.fr;
            document.getElementById('pokemon-image').src = pokemon.sprites.regular;
            document.getElementById('pokemon-image-shiny').src = pokemon.sprites.shiny;
            document.getElementById('pokemon-types').textContent = `Types: ${pokemon.types.map(type => type.name).join(', ')}`;
            document.getElementById('pokemon-stats').textContent = `HP: ${pokemon.stats.hp}, Attaque: ${pokemon.stats.atk}, Défense: ${pokemon.stats.def}, Attaque spéciale ${pokemon.stats.spe_atk}, Défense spéciale ${pokemon.stats.spe_def}, Vitesse ${pokemon.stats.vit}`;
            
 
            const typesConteneur = document.getElementById('pokemon_types_images');
            typesConteneur.innerHTML = ''; // Pour reset pour pas mettre trente imgs
            // Parcour chaque type  de api etmet image par typs
            pokemon.types.forEach(type => {
                const img = document.createElement('img');
                img.src = type.image; 
                img.alt = `Type ${type.name}`;
                img.style.margin = "5px"
                typesConteneur.appendChild(img); // Ajoute image à div
            });}
        
        // def variable avec ID
        const pokemonId = getPokemonIdFromURL();

        // met ID dans élément et rcéup infos 
        if (pokemonId) {
            // use de l'api
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Recherche du Pokémon par ID
                    const pokemon = data.find(pokemon => pokemon.pokedex_id === parseInt(pokemonId));

                    // si ça marche prend fonction et montre ce qui est mis dedans
                    if (pokemon) {
                        informations(pokemon);}})

                .catch(error => console.error('Erreur de fetch :', error));}

        
   
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {

            const pokemonsConteneur = document.getElementById('pokemons_page_accueil');
            pokemonsConteneur.innerHTML = ''; 
            data.forEach(pokemon => {
                const img = document.createElement('img');
                img.src = pokemon.sprites.regular; 
                img.alt = `pokemon.sprites.regular`;
                img.style.margin = "5px";
                img.addEventListener('click', () => {
                    window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
                });

                pokemonsConteneur.appendChild(img); // Ajoute image à div
            });
        })



    

