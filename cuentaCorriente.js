// Creacion de la clase 

class cuentaCorriente{
    constructor(numCuenta, titular, saldo){
        
        // Atributos
        
        this.numCuenta=numCuenta;
        this.titular=titular;
        this.saldo=saldo;
    }

    // Metodos

    MostrarnumCuenta(){
        return `${this.numCuenta}`;
    }
    Vertitular(){
        return `${this.titular}`;
    }
    Versaldo(){
        return `${this.saldo}`;
    }
}

// Objetos

let cuentaCorriente1 = new cuentaCorriente( 2024123,"Sergui Yat", 35000 );
let cuentaCorriente2 = new cuentaCorriente( 2024456, "Pablo Rax", 25000 );
let cuentaCorriente3 = new cuentaCorriente( 2024789, "Anthony Sub", 30000 );

// Impresion de los objetos

console.log(cuentaCorriente1);
console.log(cuentaCorriente2);
console.log(cuentaCorriente3);