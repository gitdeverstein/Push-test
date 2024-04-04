let plateau = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function displayPlateau(plateau) {
    console.log('-------------');
    for (let i = 0; i < plateau.length; i++) {
        let ligne = '';
        for (let j = 0; j < plateau[i].length; j++) {
            ligne += '| ' + plateau[i][j] + ' ';
        }
        ligne += '|';
        console.log(ligne);
        console.log('-------------');
    }
}

function playerTour(plateau, joueur, x, y) {
    if (plateau[x][y] === '') {
        plateau[x][y] = joueur;
        return true;
    } else {
        console.log('Cette case est déjà occupée.');
        return false;
    }
}

function verifierVictoire(plateau, joueur) {
    for (let i = 0; i < 3; i++) {
        if (plateau[i][0] === joueur && plateau[i][1] === joueur && plateau[i][2] === joueur) {
            return true;
        }
        if (plateau[0][i] === joueur && plateau[1][i] === joueur && plateau[2][i] === joueur) {
            return true;
        }
    }
    if (plateau[0][0] === joueur && plateau[1][1] === joueur && plateau[2][2] === joueur) {
        return true;
    }
    if (plateau[0][2] === joueur && plateau[1][1] === joueur && plateau[2][0] === joueur) {
        return true;
    }
    return false;
}

let joueurActuel = 'X';
let partieTerminee = false;

while (!partieTerminee) {
    afficherPlateau(plateau);
    console.log('Joueur ' + joueurActuel + ', entrez vos coordonnées (x y):');
    let x = prompt('Entrez la coordonnée x:');
    let y = prompt('Entrez la coordonnée y:');
    if (jouerTour(plateau, joueurActuel, x, y)) {
        if (verifierVictoire(plateau, joueurActuel)) {
            console.log('Joueur ' + joueurActuel + ' a gagné!');
            partieTerminee = true;
        } else {
            joueurActuel = joueurActuel === 'X' ? 'O' : 'X';
        }
    }
}
