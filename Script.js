

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