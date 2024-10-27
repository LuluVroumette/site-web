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

        

        





    

    
















function conseil_pokemon(){
const userInput = prompt("Choissiez votre type:");
if (userInput !== null){
alert("Vous voulez un pokemon de type " + userInput + "!");
} else {
alert("Vous avez annulez cette aide.");
}
}



function aideChoix() {
    const choix = document.getElementById('choix_type').value;
    if (choix === 'option1') {
        alert('Vous avez choisi le type feu');
    } else if (choix === 'option2') {
        alert('Vous avez choisi le type eau');
    } else if (choix === 'option3') {
        alert('Vous avez choisi le type plante');
    } else if (choix === 'option4') {
        alert('Vous avez choisi le type electrik');
    } else if (choix === 'option5') {
        alert('Vous avez choisi le type normal');
    } else if (choix === 'option6') {
        alert('Vous avez choisi le type combat');
    } else if (choix === 'option7') {
        alert('Vous avez choisi le type glace');
    } else if (choix === 'option8') {
        alert('Vous avez choisi le type roche');
    } else if (choix === 'option9') {
        alert('Vous avez choisi le type insecte');
    } else if (choix === 'option10') {
        alert('Vous avez choisi le type poison');
    } else if (choix === 'option11') {
        alert('Vous avez choisi le type psy');
    } else if (choix === 'option12') {
        alert('Vous avez choisi le type vol');
    } else if (choix === 'option13') {
        alert('Vous avez choisi le type fée');
    } else if (choix === 'option14') {
        alert('Vous avez choisi le type spectre');
    } else if (choix === 'option15') {
        alert('Vous avez choisi le type dragon');
    } else {
        alert('Choix invalide');
    }
}
