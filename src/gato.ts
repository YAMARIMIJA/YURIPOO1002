class gato {
    name:string;
    sex: number;
    age:number;
    weight:number;
    color:string;
    textura:string;

constructor(name: string, sex: number, age:number, weight: number, color:string, textura:string) {
       this.name = name;
       this.sex = sex; 
       this.age = age;
       this.weight = weight;
       this.color = color;
       this.textura = textura; 
     }


   imprimir() {
       console.log("Nombre:", this.name);
       console.log("Sexo:", this.sex);
       console.log("Edad:", this.age);
       console.log("Peso:", this.weight);
       console.log("Color:", this.color);
       console.log("Textura:", this.textura);
   }
}

class gato1 extends gato {

isNasty: boolean;
       meow: boolean;
   
       constructor(name: string, sex: number, age: number, weight: number, color: string, textura: string, isNasty: boolean, meow: boolean) {
           super(name, sex, age, weight, color, textura);
           this.isNasty = isNasty;
           this.meow = meow;
       }
   
   imprimir() {        
super.imprimir(); 
       console.log("Travieso:", this.isNasty);
       console.log("Maulla:", this.meow);
   }
}

class gato2 extends gato {
   bestfriend: boolean;
       bark: boolean;
   
       constructor(name: string, sex: number, age: number, weight: number, color: string, textura: string, bestfriend: boolean, bark: boolean) {
           super(name, sex, age, weight, color, textura);
           this.bestfriend = bestfriend;
           this.bark = bark;
       }

   imprimir() {
       super.imprimir();
       console.log("Mejor amigo:", this.bestfriend);
       console.log("Ladra:", this.bark);
   }
}

const miGato1 = new gato1("Michi", 1, 3, 5, "gris", "suave", true, true);
console.log("Gato 1:");
miGato1.imprimir();

const miGato2 = new gato2("Bolita", 2, 5, 8, "naranja", "gruesa", true, false);
console.log("\nGato 2:");
miGato2.imprimir();