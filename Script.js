const apiUrl = 'https://tyradex.vercel.app/api/v1/pokemon';        
const api_typesUrl = 'https://tyradex.vercel.app/api/v1/types';        
        
        let listePokemons = []; //lié avec fonction rechercher_pokemon() à la fin du code
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
                        informations(pokemon);
                        const evolutionConteneur = document.getElementById('evolutionConteneur');
                        evolutionConteneur.innerHTML = '';
                        if (pokemon.evolution != null){
                        const evolutions_pre = [
                            ...(pokemon.evolution.pre || []), // Ajoute les évolutions précédentes
                        ];
                        const evolution_next = [...(pokemon.evolution.next || [])];    // Ajoute les évolutions suivantes
                    
                        const titre_chaine_evo = document.getElementById('evolutions_titre');
                        titre_chaine_evo.innerHTML = '';

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
                            img.style.margin = "auto";
                            img.style.height = "auto";
                            img.style.width = "17%";
                            evolutionConteneur.appendChild(img);})}
                        const img = document.createElement('img');
                        img.src = pokemon.sprites.regular;
                        img.alt = `${pokemon.name.fr}`;
                        img.style.height = "auto";
                        img.style.width = "17%";
                        img.style.margin = "auto";
                        evolutionConteneur.appendChild(img);
                        

                        if (evolution_next != null){evolution_next.forEach(evolution => {
                            const img = document.createElement('img');
                            var idevolution = data.find(p => p.pokedex_id === evolution.pokedex_id);
                            img.src = idevolution.sprites.regular; 
                            img.alt = `${evolution.name.fr}`;
                            img.style.height = "auto";
                            img.style.width = "17%";
                            img.addEventListener('click', () => {
                                window.location.href = `pokemon.html?id=${idevolution.pokedex_id}`;
                            });
                            img.style.margin = "auto";
                            evolutionConteneur.appendChild(img);})}}
                            
                            
                            
                            const megaevolution = document.getElementById('megaevolution');
                            megaevolution.innerHTML = '';
                            const nom_mega_gemme = document.getElementById('nom_mega_gemme');
                            nom_mega_gemme.innerHTML = '';
                            if (pokemon.evolution.mega!=null) {
                                document.getElementById('megatitle').textContent = "Méga Evolution(s): ";
                                pokemon.evolution.mega.forEach(megaEvolution => {
                                const nom_gemme = document.createElement('h3');
                                nom_gemme.textContent = "Gemme nécessaire: "+megaEvolution.orbe;
                                megaevolution.appendChild(nom_gemme);
                                const img = document.createElement('img');
                                img.src = megaEvolution.sprites.regular;
                                img.alt = megaEvolution.name;
                                img.style.height = "auto";
                                img.style.width = "36%";
                                megaevolution.appendChild(img);
                                
                                })}}

                            const gigamax = document.getElementById('version_gigamax');
                            gigamax.innerHTML = '';
                            if (pokemon.sprites.gmax!=null) {
                                document.getElementById('gigamaxtitle').textContent = "Forme Gigamax (Uniquement à Galar): ";
                                const img = document.createElement('img');
                                img.src = pokemon.sprites.gmax.regular; 
                                img.alt = `${pokemon.name.fr} Gigamax`;
                                img.style.height = "auto";
                                img.style.width = "36%";
                                gigamax.appendChild(img);
                                }

                    }})


                            
                        
                .catch(error => console.error('Erreur de fetch :', error));}
        



        const type_pour_api = getTypebyUrl()
        if(type_pour_api){fetch('https://cors-anywhere.herokuapp.com/https://tyradex.tech/api/v1/types/'+type_pour_api)
        .then(response => response.json())
            .then(data => {

            const pokemonsConteneur = document.getElementById('trié_par_type');
            pokemonsConteneur.innerHTML = ''; 
            data.pokemons.forEach(pokemon => {
                if (pokemon.pokedex_id!=0){
                const img = document.createElement('img');   
                img.src = pokemon.sprites.regular; 
                img.alt = `pokemon.sprites.regular`;
                img.style.margin = "auto";
                img.addEventListener('click', () => {
                    window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
                });
                pokemonsConteneur.appendChild(img);
                document.getElementById('titre_page_par_type').textContent = `Pokémons de type ${data.name.fr}:`;
                }})})}


        
        fetch(apiUrl)
                
        .then(response => response.json())
        .then(data => {
    
        const mega_evoConteneur = document.getElementById('tri_par_mega_evo');   // met les pokemons ayant des megas evo dans leurs conteneurs
        mega_evoConteneur.innerHTML = ''; 
        if (mega_evoConteneur){
        data.forEach(pokemon => {
            if (pokemon.evolution != null){
            if (pokemon.pokedex_id!=0  && pokemon.evolution.mega !=null){
            pokemon.evolution.mega.forEach(megaEvolution => {const img = document.createElement('img');   
            img.src = megaEvolution.sprites.regular; 
            img.alt = `Méga pokemon.name.fr`;
            img.style.margin = "auto";
            
            img.addEventListener('click', () => {
                window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
            });
            mega_evoConteneur.appendChild(img);})}}})}
        
        })
            fetch(apiUrl)
                
            .then(response => response.json())
            .then(data => {
            const gmaxConteneur = document.getElementById('tri_par_gmax');    // met les pokemons ayant des formes gmax dans leurs conteneurs
            gmaxConteneur.innerHTML = ''; 
            data.forEach(pokemon => {
                if (pokemon.sprites.gmax != null){
                const img = document.createElement('img');   
                img.src = pokemon.sprites.gmax.regular; 
                img.alt = pokemon.name.fr + " gigamax";
                img.style.margin = "auto";
                    
                img.addEventListener('click', () => {
                    window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
                });
                gmaxConteneur.appendChild(img);}})})


            fetch(apiUrl)
                
            .then(response => response.json())
            .then(data => {
            listePokemons = data;
            const pokemonsConteneur = document.getElementById('pokemons_page_accueil');
            pokemonsConteneur.innerHTML = ''; 
            data.forEach(pokemon => {
                if (pokemon.pokedex_id!=0){
                const img = document.createElement('img');   //met les images de tous les pokemons sur la page d'acceuil et les link avec leur page perso
                img.src = pokemon.sprites.regular; 
                img.alt = `pokemon.sprites.regular`;
                img.style.margin = "auto";
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
                img.style.margin = "0.3%";
                img.style.height = "auto";
                img.style.width = "4%";
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
    }


function tri_par_gen(){
    var inputelement = document.getElementById('num_gen')
    var verif_num_pokemon_demande = inputelement.value
    if (verif_num_pokemon_demande > 0 && verif_num_pokemon_demande < 10){
        window.location.href = "tri_par_generation.html?gen="+verif_num_pokemon_demande;
    }
    }


    function pokemon_aleatoire(min, max) {
        const nb_random = Math.floor(Math.random() * (max - min)) + min + 1;
        window.location.href = "pokemon.html?id="+nb_random;
      }

function envoie_au_bon_pokemon(){
        recherche()
        addEventListener('click', () => {
            window.location.href = `pokemon.html?id=${idevolution.pokedex_id}`;})}
            

        
        function getTypebyUrl() {
            const parametre_lien = new URLSearchParams(window.location.search);
            return parametre_lien.get('type'); // Retourne valeur  type
        }

        function getGenbyUrl() {
            const parametre_lien = new URLSearchParams(window.location.search);
            return parametre_lien.get('gen'); // return valeur  generation
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
            document.getElementById('generation_num').textContent = "Génération "+pokemon.generation;
            document.getElementById('pokemon-numero').textContent = "Numéro dans le pokédex:  "+pokemon.pokedex_id;
            document.getElementById('taux_capture').textContent = "Taux de capture: "+pokemon.catch_rate+"/255";
            const img = document.createElement('img');
            const pokemon_conteneur_img = document.getElementById('conteneur_pokemon_img')
            img.src = pokemon.sprites.regular; 
            img.alt = `${pokemon.name.fr}`;
            img.style.height = "auto";
            img.style.width = "40%";
            pokemon_conteneur_img.appendChild(img);
            const shiny_conteneur = document.getElementById('version_shiny')
            if (pokemon.sprites.shiny!=null){
                const img = document.createElement('img');
                img.src = pokemon.sprites.shiny; 
                img.alt = `${pokemon.name.fr} shiny`;
                img.style.height = "auto";
                img.style.width = "30%";
                shiny_conteneur.appendChild(img);
                document.getElementById('titre_shiny').textContent = "Version Shiny:";
            }
            const formes_specifiques = document.getElementById('versions_régionales')
            if (pokemon.formes != null){
                pokemon.formes.forEach(formes=>{
                    document.getElementById('titre_regionnal').textContent = "Forme(s) régionale(s):";
                    fetch('https://tyradex.vercel.app/api/v1/pokemon/'+pokemon.name.fr+'/'+formes.region)
                    .then(response => response.json())
                    .then(data => {
                    
                        const img = document.createElement('img');
                    img.src = data.sprites.regular; 
                    img.alt = `${pokemon.name.fr}`;
                    img.style.height = "auto";
                    img.style.width = "28%";
                    formes_specifiques.appendChild(img);


                
                    })

            })
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
                img.style.margin = "0.3%"
                img.style.height="auto";
                img.style.width="5%"
                console.log(type.name)
                if(type.name==="Électrik"){
                    img.addEventListener('click', () => {
                        window.location.href = `tri_par_type.html?type=electric`;})
                    typesConteneur.appendChild(img);}
                else if(type.name==="Fée"){
                img.addEventListener('click', () => {
                    window.location.href = `tri_par_type.html?type=fairy`;})
                    typesConteneur.appendChild(img);}
                else if(type.name==="Ténèbres"){
                    img.addEventListener('click', () => {
                        window.location.href = `tri_par_type.html?type=dark`;})
                        typesConteneur.appendChild(img);}

                else{img.addEventListener('click', () => {
                    window.location.href = `tri_par_type.html?type=${type.name.toLowerCase()}`;})
                    typesConteneur.appendChild(img);}
                })
                
            
            


             
        
                const resistancesTableau = {};

                //mettre valeurs dans tableau 
                pokemon.resistances.forEach(resistance => {
                    resistancesTableau[resistance.name] = resistance.multiplier;
                });
    
                const resistancesDiv = document.getElementById('resistances');
                resistancesDiv.innerHTML = ''; 
    
                for (const [type, multiplier] of Object.entries(resistancesTableau)) {
                    const resistanceElement = document.createElement('p');
                    resistanceElement.innerHTML = `${type}: <br> ×${multiplier} `;
                    resistanceElement.style.margin = "auto";
                    resistancesDiv.appendChild(resistanceElement);}}




                





                        const num_gen_pour_api = getGenbyUrl()
                        fetch('https://tyradex.vercel.app/api/v1/gen/'+num_gen_pour_api)
                            .then(response => response.json())
                            
                                .then(data => {
                    
                                const pokemonsConteneur = document.getElementById('tri_par_gen');
                                pokemonsConteneur.innerHTML = ''; 
                                data.forEach(pokemon => {
                                    const img = document.createElement('img');   //met les images de tous les pokemons sur la page d'acceuil et les link avec leur page perso
                                    img.src = pokemon.sprites.regular; 
                                    img.alt = `pokemon.sprites.regular`;
                                    img.style.margin = "auto";
                                    img.addEventListener('click', () => {
                                        window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
                                    });
                                    pokemonsConteneur.appendChild(img);
                                    document.getElementById('titre_tri_par_gen').textContent = "Pokémons de la "+num_gen_pour_api+"ème génération:";
                                    })})



                                
                        
        function rechercherPokemon() {
            const rechercheTexte = document.getElementById('nom_pokemon_cherché').value.trim().toLowerCase(); 
            console.log(listePokemons)                                           
            const pokemonTrouve = listePokemons.find(pokemon => pokemon.name.fr.toLowerCase() === rechercheTexte);                            
            if (pokemonTrouve) {                    
                    window.location.href = `pokemon.html?id=${pokemonTrouve.pokedex_id}`;}
            else{
                const pokemonTrouve_en = listePokemons.find(pokemon => pokemon.name.en.toLowerCase() === rechercheTexte);
                if (pokemonTrouve_en){
                    window.location.href = `pokemon.html?id=${pokemonTrouve_en.pokedex_id}`;
                }
            }                    
                                    
                                    }


