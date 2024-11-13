const apiUrl = 'https://tyradex.app/api/v1/pokemon';        
const api_typesUrl = 'https://tyradex.app/api/v1/types';        
        
        let listePokemons = []; //lié avec fonction rechercher_pokemon() à la fin du code
        // def variable avec ID
        const pokemonId = getPokemonIdFromURL();
        // met ID dans élément et rcéup infos 
        const pokemonRegion = getregbyUrl()
        const pokemonNom = getNombyUrl()
        if(pokemonRegion){
            fetch('https://tyradex.vercel.app/api/v1/pokemon/'+pokemonNom+'/'+pokemonRegion)
                .then(response => response.json())
                .then(data => {
                informations(data);})}
                
        


        if(pokemonId){
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
                            }



                    

                        
                    })


                            
                        
                .catch(error => console.error('Erreur de fetch :', error));}
        



        const type_pour_api = getTypebyUrl()
        if(type_pour_api){
        fetch('https://tyradex.app/api/v1/types/'+type_pour_api)
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
                img.style.width = "15%";
                img.addEventListener('click', () => {
                    window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
                });
                pokemonsConteneur.appendChild(img);
                document.getElementById('titre_page_par_type').textContent = `Pokémons de type ${data.name.fr}:`;
                }})})}


        const mega_evo_verif_bonne_page = getMegabyUrl()
        if (mega_evo_verif_bonne_page){
        fetch(apiUrl)
                
        .then(response => response.json())
        .then(data => {
        listePokemons = data;
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
            img.style.width = "15%";
            
            img.addEventListener('click', () => {
                window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
            });
            mega_evoConteneur.appendChild(img);
            document.getElementById('titre_tri_par_mega').textContent = `Pokémon Méga évolués:`;
        })}}})}})}
        
        const gmax_verif_bonne_page = getGmaxbyUrl()
        if (gmax_verif_bonne_page){
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
                img.style.width = "15%";
                    
                img.addEventListener('click', () => {
                    window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
                });
                gmaxConteneur.appendChild(img);
                document.getElementById('titre_tri_par_gmax').textContent = `Pokémon avec une forme Gigamax:`;
            }})})}

function charger_pokemon_accueil(){

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
                img.style.margin = "auto";
                img.style.width = "15%"
                img.addEventListener('click', () => {
                    window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
                });
                pokemonsConteneur.appendChild(img);}})})
                document.getElementById('titre_pokemon_au_dessus_conteneur').textContent = "Pokémon:";
                const boutons = document.querySelectorAll('.bouton_charger_pokemon'); 
                    boutons.forEach(bouton => {
                    bouton.style.display = "none"; 
                    });
                
            
            } 


        var verif_page_pour_img_type = location.href
        var verif_page_pour_img_type2 = verif_page_pour_img_type.split('/') // découpe chaine caractère en morceau a chaque / en tableau array
        var verif_page_pour_img_type3 = verif_page_pour_img_type2.pop('/') // prend derniere partie du tab array
        if (verif_page_pour_img_type3 === "SiteWeb.html"){
        fetch(api_typesUrl)    
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
                    window.location.href = `tri_par_caractéristiques.html?type=${type.name.en.toLowerCase()}`;
                });
                })    
        })}

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
        window.location.href = "tri_par_caractéristiques.html?gen="+verif_num_pokemon_demande;
    }
    }


function tri_par_stat(){
        var inputelement = document.getElementById('stat_voulu')
        var verif_stat_demande = inputelement.value.toLowerCase()
        if (verif_stat_demande === "hp" ||  verif_stat_demande === "vitesse" ||verif_stat_demande === "attaque" ||verif_stat_demande === "défense" ||verif_stat_demande === "attaque spéciale" ||verif_stat_demande === "défense spéciale" ){
            window.location.href = "tri_par_caractéristiques.html?stat="+verif_stat_demande;
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
            
// Fonction récupère id Pokémon avec url
        function getPokemonIdFromURL() {
            const parametre_lien = new URLSearchParams(window.location.search);
            return parametre_lien.get('id'); // Retourne valeur id
        }
        
        
        function getTypebyUrl() {
            const parametre_lien = new URLSearchParams(window.location.search);
            return parametre_lien.get('type'); // Retourne valeur  type
        }

        function getGenbyUrl() {
            const parametre_lien = new URLSearchParams(window.location.search);
            return parametre_lien.get('gen'); // return valeur  generation
        }

        function getNombyUrl() {
            const parametre_region = new URLSearchParams(window.location.search);
            return parametre_region.get('nom'); 
        }

        function getregbyUrl() {
            const parametre_region = new URLSearchParams(window.location.search);
            return parametre_region.get('region'); 
        }

        function getStatbyUrl() {
            const parametre_region = new URLSearchParams(window.location.search);
            return parametre_region.get('stat'); 
        }

        function getMegabyUrl() {
            const parametre_region = new URLSearchParams(window.location.search);
            return parametre_region.get('mega'); 
        }

        function getGmaxbyUrl() {
            const parametre_region = new URLSearchParams(window.location.search);
            return parametre_region.get('gmax'); 
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
            if (pokemon.formes != null && pokemonRegion==null){
                pokemon.formes.forEach(formes=>{
                    document.getElementById('titre_regionnal').textContent = "Forme(s) régionale(s):";
                    fetch('https://tyradex.app/api/v1/pokemon/'+pokemon.name.fr+'/'+formes.region)
                    .then(response => response.json())
                    .then(data => {
                    
                        const img = document.createElement('img');
                    img.src = data.sprites.regular; 
                    img.alt = `${data.name.fr}`;
                    img.style.height = "auto";
                    img.style.width = "28%";
                    formes_specifiques.appendChild(img);
                    img.addEventListener('click', () => {
                        window.location.href = `pokemon.html?nom=${pokemon.name.fr.toLowerCase()}&region=${formes.region}`;})

                
                    })

            })
        }

        

            document.getElementById('pokemon-types').textContent = `Types: ${pokemon.types.map(type => type.name).join(', ')}`;
            document.getElementById('pokemon-stats').textContent = `HP: ${pokemon.stats.hp}, Attaque: ${pokemon.stats.atk}, Défense: ${pokemon.stats.def}, Attaque spéciale: ${pokemon.stats.spe_atk}, Défense spéciale: ${pokemon.stats.spe_def}, Vitesse: ${pokemon.stats.vit}`;
            
 
            const typesConteneur = document.getElementById('pokemon_types_images');
            typesConteneur.innerHTML = ''; 
            // Parcour chaque type  de api etmet image par typs
            pokemon.types.forEach(type => {
                const img = document.createElement('img');
                img.src = type.image; 
                img.alt = `Type ${type.name}`;
                img.style.margin = "0.3%"
                img.style.height="auto";
                img.style.width="5%"
                if(type.name==="Électrik"){
                    img.addEventListener('click', () => {
                        window.location.href = `tri_par_caractéristiques.html?type=electric`;})
                    typesConteneur.appendChild(img);}
                else if(type.name==="Fée"){
                img.addEventListener('click', () => {
                    window.location.href = `tri_par_caractéristiques.html?type=fairy`;})
                    typesConteneur.appendChild(img);}
                else if(type.name==="Ténèbres"){
                    img.addEventListener('click', () => {
                        window.location.href = `tri_par_caractéristiques.html?type=dark`;})
                        typesConteneur.appendChild(img);}

                else{img.addEventListener('click', () => {
                    window.location.href = `tri_par_caractéristiques.html?type=${type.name.toLowerCase()}`;})
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




                




                        let map_img_fond = ['url(https://i.redd.it/6gbw6h6x5k911.jpg)','url(https://static.wikia.nocookie.net/nintendo/images/f/fe/Johto_HGSS.png/revision/latest?cb=20221011145708&path-prefix=en)','url(https://th.bing.com/th/id/R.f6412c5783813e9eca2e160b440ca05b?rik=U6fpTGLc8xa0tQ&riu=http%3a%2f%2fi1-news.softpedia-static.com%2fimages%2fnews2%2fPokemon-Omega-Ruby-and-Alpha-Sapphire-Full-Hoenn-Map-Is-Revealed-Gallery-457256-3.jpg&ehk=W6wiIuGhEdKVMqrid9TWKtiR5gb6jDpshyVZ9yy7%2fiU%3d&risl=&pid=ImgRaw&r=0)','url(https://wallpapercave.com/wp/wp9457758.jpg)','url(https://images8.alphacoders.com/285/285457.jpg)','url(https://i.etsystatic.com/11277520/r/il/a28921/2154569851/il_fullxfull.2154569851_f4um.jpg)','url(https://static.wikia.nocookie.net/nintendo/images/3/3e/Alola.jpg/revision/latest?cb=20160814212538&path-prefix=en)','url(https://th.bing.com/th/id/R.322b483d7671bf3f27190be1a8c1c4cd?rik=c6HeA%2fnqwbxcPQ&riu=http%3a%2f%2fimages.nintendolife.com%2f4758ae93f17ed%2fgalar.original.jpg&ehk=RxO0gxJk7pqVw%2b1DsGko1spceSROedwt97SEJyVAsAM%3d&risl=&pid=ImgRaw&r=0)','url(https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-scarlet-violet/e/ef/Pokemon_Paldea_Map.jpg)']
                        const num_gen_pour_api = getGenbyUrl()
                        if(num_gen_pour_api){
                        fetch('https://tyradex.app/api/v1/gen/'+num_gen_pour_api)
                            .then(response => response.json())
                            
                                .then(data => {
                                
                                const pokemonsConteneur = document.getElementById('tri_par_gen');
                                pokemonsConteneur.innerHTML = '';
                                    

                                const parallaxContainer = document.createElement('div');
                                parallaxContainer.id = 'parallax-container';
                                
                                // Appliquer les styles directement avec JavaScript
                                Object.assign(parallaxContainer.style, {
                                  position: 'relative',
                                  height: '100vh', // Ajustez la hauteur selon vos besoins
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  backgroundAttachment: 'fixed',
                                  transition: 'background-image 0.5s ease',
                                  backgroundImage: map_img_fond[num_gen_pour_api-1] // Transition douce pour le changement d'image
                                });
                                parallaxContainer.innerHTML = `
                                    <span>Scroll</span>
                                    <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <polyline points="19 12 12 19 5 12"></polyline>
                                    </svg>
                                     `;
                                document.body.prepend(parallaxContainer);
                                    const scrollPosition = window.scrollY;
                                    
                                    // Choisissez une image en fonction de la position de défilement
                                    let imageIndex = Math.floor(scrollPosition / 500) % map_img_fond.length; // Change toutes les 500px
                                    
                                  
                                data.forEach(pokemon => {
                                    const img = document.createElement('img');   //met les images de tous les pokemons sur la page d'acceuil et les link avec leur page perso
                                    img.src = pokemon.sprites.regular; 
                                    img.alt = `pokemon.sprites.regular`;
                                    img.style.margin = "auto";
                                    img.style.width = "15%";
                                    if(pokemon.formes==null){
                                    img.addEventListener('click', () => {
                                        window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
                                    });}
                                    else{
                                        let premierePartie = pokemon.name.fr.toLowerCase().split(' ')[0]
                                        img.addEventListener('click', () => {
                                            window.location.href = `pokemon.html?nom=${premierePartie}&region=${pokemon.formes[0].region}`;
                                        });}
                                    pokemonsConteneur.appendChild(img);
                                    document.getElementById('titre_tri_par_gen').textContent = "Pokémon de la "+num_gen_pour_api+"ème génération:";
                                    })})
                                }



                                
                        
        function rechercherPokemon() {
            const rechercheTexte = document.getElementById('nom_pokemon_cherché').value.trim().toLowerCase();                                          
            const pokemonTrouve = listePokemons.find(pokemon => pokemon.name.fr.trim().toLowerCase() === rechercheTexte);
            const pokemonTrouve_en = listePokemons.find(pokemon => pokemon.name.en.trim().toLowerCase() === rechercheTexte);
            const pokemonTrouve_jp = listePokemons.find(pokemon => pokemon.name.jp.trim().toLowerCase() === rechercheTexte);                            
            if (pokemonTrouve) {                    
                    window.location.href = `pokemon.html?id=${pokemonTrouve.pokedex_id}`;}
            if(pokemonTrouve_en){              
                window.location.href = `pokemon.html?id=${pokemonTrouve_en.pokedex_id}`;    
            }
            if (pokemonTrouve_jp){
                window.location.href = `pokemon.html?id=${pokemonTrouve_jp.pokedex_id}`;
            }
                                
            }


        const stat_voulu = getStatbyUrl()
        if(stat_voulu){
        fetch(apiUrl)
            .then(response => response.json())
                                        
                .then(data => {
                    var statistique = ""
                    if (stat_voulu=="hp"){ var statistique = "hp"};
                    if (stat_voulu=="attaque"){ var statistique = "atk"};
                    if (stat_voulu=="défense"){ var statistique = "def"};
                    if (stat_voulu=="attaque spéciale"){ var statistique = "spe_atk"};
                    if (stat_voulu=="défense spéciale"){ var statistique = "spe_def"};
                    if (stat_voulu=="vitesse"){ var statistique = "vit"};
                                
                const pokemonsConteneur = document.getElementById('tri_par_stat');
                pokemonsConteneur.innerHTML = ''; 
                const pokemonTrie = data
                    .filter(pokemon => pokemon.stats && pokemon.stats[statistique] !== undefined) // Garde ceux qui ont la stat
                    .sort((a, b) => b.stats[statistique] - a.stats[statistique]); // Trie  plus grande à plus petite
    
                
                pokemonTrie.forEach(pokemon => {
                    if (pokemon.pokedex_id !=0){
                    const img = document.createElement('img');   
                    img.src = pokemon.sprites.regular; 
                    img.alt = `pokemon.sprites.regular`;
                    img.style.margin = "auto";
                    img.style.width = "15%";
                    img.addEventListener('click', () => {
                        window.location.href = `pokemon.html?id=${pokemon.pokedex_id}`;
                    });
                    pokemonsConteneur.appendChild(img);
                    document.getElementById('titre_stat').textContent = "Pokémon avec la plus grande "+stat_voulu;
                    if (stat_voulu==="hp"){document.getElementById('titre_stat').textContent = "Pokémon avec le plus de points de vie";}
                    }})})
                }



                    
                    
                      
             