const apiUrl = 'https://tyradex.vercel.app/api/v1/pokemon';        
const api_typesUrl = 'https://tyradex.vercel.app/api/v1/types';        
        
        
        // def variable avec ID
        const pokemonId = getPokemonIdFromURL();

        // met ID dans élément et rcéup infos 
        if(pokemonId){
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
                        const evolutions_pre = [
                            ...(pokemon.evolution.pre || []), // Ajoute les évolutions précédentes
                        ];
                        const evolution_next = [...(pokemon.evolution.next || [])];    // Ajoute les évolutions suivantes
                        // Parcour chaque type  de api etmet image par typs
                        const titre_chaine_evo = document.getElementById('evolutions_titre');
                        titre_chaine_evo.innerHTML = '';
                        if (pokemon.evolution.pre!=null || pokemon.evolution.next!=null) {document.getElementById('evolutions_titre').textContent = "Chaine évolutive: ";}
                        if (pokemon.evolution.pre!=null || pokemon.evolution.next!=null) {document.getElementById('evolutions_titre').textContent = "Chaine évolutive: ";
                        
                        
                        if (evolutions_pre != null){evolutions_pre.forEach(evolution => {
                            const img = document.createElement('img');
                            var idevolution = data.find(p => p.pokedex_id === evolution.pokedex_id);
                            img.src = idevolution.sprites.regular; 
                            img.alt = `${evolution.name.fr}`;
                            img.style.height = "250px";
                            img.style.width = "auto";
                            img.addEventListener('click', () => {
                                window.location.href = `pokemon.html?id=${idevolution.pokedex_id}`;
                            });
                            img.style.margin = "5px";
                            img.style.height = "250px";
                            img.style.width = "auto";
                            evolutionConteneur.appendChild(img);})}
                        const img = document.createElement('img');
                        img.src = pokemon.sprites.regular;
                        img.alt = `${pokemon.name.fr}`;
                        img.style.height = "250px";
                        img.style.width = "auto";
                        img.style.margin = "5px";
                        img.style.height = "250px";
                        img.style.width = "auto";
                        evolutionConteneur.appendChild(img);
                        

                        if (evolution_next != null){evolution_next.forEach(evolution => {
                            const img = document.createElement('img');
                            var idevolution = data.find(p => p.pokedex_id === evolution.pokedex_id);
                            img.src = idevolution.sprites.regular; 
                            img.alt = `${evolution.name.fr}`;
                            img.style.height = "250px";
                            img.style.width = "auto";
                            img.addEventListener('click', () => {
                                window.location.href = `pokemon.html?id=${idevolution.pokedex_id}`;
                            });
                            img.style.margin = "5px";
                            img.style.height = "250px";
                            img.style.width = "auto";
                            evolutionConteneur.appendChild(img);})}}
                            
                            
                            
                            const megaevolution = document.getElementById('megaevolution');
                            megaevolution.innerHTML = '';
                            if (pokemon.evolution.mega!=null) {
                                document.getElementById('megatitle').textContent = "Méga Evolution(s): ";
                                pokemon.evolution.mega.forEach(megaEvolution => {
                                const img = document.createElement('img');
                                img.src = megaEvolution.sprites.regular;
                                img.alt = megaEvolution.name;
                                img.style.height = "500px";
                                img.style.height = "auto";
                                megaevolution.appendChild(img)
                                })}

                            const gigamax = document.getElementById('version_gigamax');
                            gigamax.innerHTML = '';
                            if (pokemon.sprites.gmax!=null) {
                                document.getElementById('gigamaxtitle').textContent = "Forme Gigamax (Uniquement à Galar): ";
                                const img = document.createElement('img');
                                img.src = pokemon.sprites.gmax.regular; 
                                img.alt = `${pokemon.name.fr} Gigamax`;
                                img.style.height = "500px";
                                img.style.width = "auto";
                                gigamax.appendChild(img);
                                }

                            })


                            
                        
                .catch(error => console.error('Erreur de fetch :', error));}
        



        const type_pour_api = getTypebyUrl()
        fetch('https://tyradex.tech/api/v1/types/'+type_pour_api)
        .then(response => response.json())
            .then(data => {

            const pokemonsConteneur = document.getElementById('trié_par_type');
            pokemonsConteneur.innerHTML = ''; 
            data.pokemons.forEach(pokemon => {
                if (pokemon.pokedex_id!=0){
                const img = document.createElement('img');   //met les images de tous les pokemons sur la page d'acceuil et les link avec leur page perso
                img.src = pokemon.sprites.regular; 
                img.alt = `pokemon.sprites.regular`;
                img.style.margin = "5px";
                img.addEventListener('click', () => {
                    window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
                });
                pokemonsConteneur.appendChild(img);
                document.getElementById('titre_page_par_type').textContent = `Pokémons de type ${data.name.fr}:`;
                }})})


        
   
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {

            const pokemonsConteneur = document.getElementById('pokemons_page_accueil');
            pokemonsConteneur.innerHTML = ''; 
            data.forEach(pokemon => {
                if (pokemon.pokedex_id!=0){
                const img = document.createElement('img');   //met les images de tous les pokemons sur la page d'acceuil et les link avec leur page perso
                img.src = pokemon.sprites.regular; 
                img.alt = `pokemon.sprites.regular`;
                img.style.margin = "5px";
                img.addEventListener('click', () => {
                    window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
                });
                pokemonsConteneur.appendChild(img);}})}) // Ajoute image à div
        fetch(api_typesUrl)    //met les images de type sur la page d accueil
            .then(response => response.json())
            .then(types => {
            const types_img_conteneur = document.getElementById('tri_par_type');
            types_img_conteneur.innerHTML = '';
            types.forEach(type => {
                const img = document.createElement('img');
                img.src = type.sprites; 
                img.alt = `type.name`;
                img.style.margin = "5px";
                img.style.height = "100%";
                img.style.width = "auto";
                img.style.marginTop = "20px";
                types_img_conteneur.appendChild(img);
                img.addEventListener('click', () => {
                    window.location.href = `tri_par_type.html?type=${type.name.en.toLowerCase()}`;
                });
                })    
        })

function recherche(){
    var inputelement = document.getElementById('idpokemonrecherche')
    var verif_num_pokemon_demande = inputelement.value
    if (verif_num_pokemon_demande > 0 && verif_num_pokemon_demande < 1026){var id_de_la_recherche = document.getElementById("idpokemonrecherche").value;
    window.location.href = "pokemon.html?id="+id_de_la_recherche;}
    console.log(verif_num_pokemon_demande)



}
function envoie_au_bon_pokemon(){
        recherche()
        addEventListener('click', () => {
            window.location.href = `pokemon.html?id=${idevolution.pokedex_id}`;})}
            

        
        function getTypebyUrl() {
            const parametre_lien = new URLSearchParams(window.location.search);
            return parametre_lien.get('type'); // Retourne valeur  type
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
            document.getElementById('pokemon-category').textContent = pokemon.category;
            document.getElementById('pokemon-numero').textContent = "Numéro dans le pokédex:  "+pokemon.pokedex_id;
            document.getElementById('taux_capture').textContent = "Taux de capture: "+pokemon.catch_rate+"/255";
            document.getElementById('pokemon-image').src = pokemon.sprites.regular;
            const shiny_conteneur = document.getElementById('version_shiny')
            if (pokemon.sprites.shiny!=null){
                const img = document.createElement('img');
                img.src = pokemon.sprites.shiny; 
                img.alt = `${pokemon.name.fr} shiny`;
                img.style.height = "400px";
                img.style.width = "auto";
                shiny_conteneur.appendChild(img);
                document.getElementById('titre_shiny').textContent = "Version Shiny:";
            }
            
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
                typesConteneur.appendChild(img);}) // Ajoute image à div
            
            


             
        
                const resistancesTableau = {};

                //mettre valeurs dans tableau 
                pokemon.resistances.forEach(resistance => {
                    resistancesTableau[resistance.name] = resistance.multiplier;
                });
    
                const resistancesDiv = document.getElementById('resistances');
                resistancesDiv.innerHTML = ''; 
    
                for (const [type, multiplier] of Object.entries(resistancesTableau)) {
                    const resistanceElement = document.createElement('p');
                    resistanceElement.innerHTML = `Type: ${type} <br> ${multiplier} `;
                    resistanceElement.style.marginRight = "20px";
                    resistancesDiv.appendChild(resistanceElement);}}