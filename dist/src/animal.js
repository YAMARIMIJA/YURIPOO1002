"use strict";
class ClassCat {
    hacerSonido() {
        console.log("Miau!!!");
    }
}
class ClassDog {
    hacerSonido() {
        console.log("Wuau!!");
    }
}
class ClassLion {
    hacerSonido() {
        console.log("Rooarrr!!");
    }
}
function hacerSonidosAnimales(animales) {
    animales.forEach(animal => {
        animal.hacerSonido();
    });
}
let gatoObj = new ClassCat();
let perroObj = new ClassDog();
let lionObj = new ClassLion();
let animales = [gatoObj, perroObj, lionObj];
hacerSonidosAnimales(animales);
