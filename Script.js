const apiUrl = 'https://tyradex.vercel.app/api/v1/pokemon';        
        
        
        
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
                        informations(pokemon);}
                        const evolutionConteneur = document.getElementById('evolutionConteneur');
                        evolutionConteneur.innerHTML = '';
                        const evolutions = [
                            ...(pokemon.evolution.pre || []), // Ajoute les évolutions précédentes
                            ...(pokemon.evolution.next || []) // Ajoute les évolutions suivantes
                        ];
                        // Parcour chaque type  de api etmet image par typs
                        const titre_chaine_evo = document.getElementById('evolutions_titre');
                        titre_chaine_evo.innerHTML = '';
                        if (pokemon.evolution!=null) {document.getElementById('evolutions_titre').textContent = "Chaine évolutive: ";}
                        evolutions.forEach(evolution => {
                            const img = document.createElement('img');
                            var idevolution = data.find(p => p.pokedex_id === evolution.pokedex_id);
                            img.src = idevolution.sprites.regular; 
                            img.alt = `${evolution.name}`;
                            img.addEventListener('click', () => {
                                window.location.href = `pokemon.html?id=${idevolution.pokedex_id}`;
                            });
                            img.style.margin = "5px";
                            img.style.height = "250px";
                            img.style.width = "auto";
                            evolutionConteneur.appendChild(img);})
                            
                            
                            
                            const megaevolution = document.getElementById('megaevolution');
                            megaevolution.innerHTML = '';
                            if (pokemon.evolution.mega!=null) {
                                document.getElementById('megatitle').textContent = "Méga Evolution(s): ";
                                pokemon.evolution.mega.forEach(megaEvolution => {
                                const img = document.createElement('img');
                                img.src = megaEvolution.sprites.regular;
                                img.alt = megaEvolution.name;
                                megaevolution.appendChild(img)
                                })
                            }

                        })
                        
                .catch(error => console.error('Erreur de fetch :', error));}

        
   
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {

            const pokemonsConteneur = document.getElementById('pokemons_page_accueil');
            pokemonsConteneur.innerHTML = ''; 
            data.forEach(pokemon => {
                if (pokemon.pokedex_id!=0){
                const img = document.createElement('img');
                img.src = pokemon.sprites.regular; 
                img.alt = `pokemon.sprites.regular`;
                img.style.margin = "5px";
                img.addEventListener('click', () => {
                    window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
                });

                pokemonsConteneur.appendChild(img);}}) // Ajoute image à div
            
        })

function recherche(){
    var id_de_la_recherche = document.getElementById("idpokemonrecherche").value;
    window.location.href = "pokemon.html?id="+id_de_la_recherche;



}



    

        // Fonction récupère id Pokémon avec url
        function getPokemonIdFromURL() {
            const parametre_lien = new URLSearchParams(window.location.search);
            return parametre_lien.get('id'); // Retourne valeur id
        }

        // Infos que je veux sur page
        function informations(pokemon) {
            document.getElementById('pokemon-name-fr').textContent = pokemon.name.fr;
            document.getElementById('pokemon-names').textContent = "(Nom anglais: "+pokemon.name.en+", Nom japonais: "+pokemon.name.jp+")";
            document.getElementById('pokemon-numero').textContent = "Pokémon numéro "+pokemon.pokedex_id;
            document.getElementById('taux_capture').textContent = "Taux de capture: "+pokemon.catch_rate+"/255";
            document.getElementById('pokemon-image').src = pokemon.sprites.regular;
            document.getElementById('pokemon-image-shiny').src = pokemon.sprites.shiny;
            document.getElementById('pokemon-types').textContent = `Types: ${pokemon.types.map(type => type.name).join(', ')}`;
            document.getElementById('pokemon-stats').textContent = `HP: ${pokemon.stats.hp}, Attaque: ${pokemon.stats.atk}, Défense: ${pokemon.stats.def}, Attaque spéciale: ${pokemon.stats.spe_atk}, Défense spéciale: ${pokemon.stats.spe_def}, Vitesse: ${pokemon.stats.vit}`;
            
 
            const typesConteneur = document.getElementById('pokemon_types_images');
            typesConteneur.innerHTML = ''; // Pour reset pour pas mettre trente imgs
            // Parcour chaque type  de api etmet image par typs
            pokemon.types.forEach(type => {
                const img = document.createElement('img');
                img.src = type.image; 
                img.alt = `Type ${type.name}`;
                img.style.margin = "5px"
                typesConteneur.appendChild(img);})} // Ajoute image à div


       function envoie_au_bon_pokemon(){

        addEventListener('click', () => {
            window.location.href = `pokemon.html?id=${idevolution.pokedex_id}`;})

       }         
        
            