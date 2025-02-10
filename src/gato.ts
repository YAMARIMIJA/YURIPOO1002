class gato{
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
    }

    class gato1 extends gato {
        isNasty: boolean;
        meow: boolean;
    
        constructor(name: string, sex: number, age: number, weight: number, color: string, textura: string, isNasty: boolean, meow: boolean) {
            super(name, sex, age, weight, color, textura);
            this.isNasty = isNasty;
            this.meow = meow;
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
    }
    
    
    const miGato1 = new gato1("Michi", 1, 3, 5, "gris", "suave", true, true);
    console.log(miGato1.name); 
    console.log(miGato1.isNasty);
    
    const miGato2 = new gato2("bolita", 0, 5, 8, "naranja", "gruesa", true, false);
    console.log(miGato2.color); 
    console.log(miGato2.bestfriend);
    