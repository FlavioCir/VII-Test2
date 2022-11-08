var persone = []; 
class Persone {
    constructor(_name, _eta) {
    this.name = _name; 
    this.eta = _eta;
}
}

const p1 = new Persone('Paolo', 50);
const p2 = new Persone('Luca', 30); 
const p3 = new Persone('Mario', 25); 

persone.push(p1, p2, p3); 

calcolo(p1, p2); 
calcolo(p2, p1); 
calcolo(p3, p1); 

function calcolo (x,y) {
    if(x.eta > y.eta) {
    console.log(`${x.name} è più grande di ${y.name}`);
    } else if(x.eta < y.eta) {
    console.log(`${x.name} è più piccolo di ${y.name}`);
    }else {
    console.log(`${x.name} ha la stessa età di ${y.name}`);
    }
}




