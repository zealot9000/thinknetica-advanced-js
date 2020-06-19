const ship = new Ship('Best ship');
ship.moveTo({ x: 10, y: 10 });
console.log(ship);

ship.dropAnchor();

ship.moveTo({ x: 20, y: 20 });
console.log(ship);


const ship2 = new Ship('Good ship 2');
