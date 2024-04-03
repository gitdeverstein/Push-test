function deplacerRobot(position, direction) {
    switch (direction) {
        case 'haut':
            return { x: position.x, y: position.y - 1 };
        case 'bas':
            return { x: position.x, y: position.y + 1 };
        case 'gauche':
            return { x: position.x - 1, y: position.y };
        case 'droite':
            return { x: position.x + 1, y: position.y };
        default:
            console.error('Direction invalide');
            return position;
    }
}

let positionRobot = { x: 0, y: 0 };

positionRobot = deplacerRobot(positionRobot, 'haut');
console.log(positionRobot);

positionRobot = deplacerRobot(positionRobot, 'droite');
console.log(positionRobot);

positionRobot = deplacerRobot(positionRobot, 'bas');
console.log(positionRobot);

positionRobot = deplacerRobot(positionRobot, 'gauche');
console.log(positionRobot);
