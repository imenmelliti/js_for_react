class Etudiant {
        constructor(nom, age) {
            this.nom = nom;
            this.age = age;
        }
        info() {
            return `etudiant nom: ${this.nom} a pour age: ${this.age}`;
        }
    }      

class Stagaire extends Etudiant {
    constructor(nom, age, stage) {
        super(nom, age);
        this.stage = stage;}
        info() {
            return `stagaiare nom: ${this.nom} a pour age: ${this.age} stage: ${this.stage}`;
        }
    }
    let stg1= new Stagaire('ali', 20, 'developpement mobile');
    console.log(stg1.info());
    let stg2= new Stagaire('ahmed', 22, 'developpement web');
    console.log(stg2.info());
     
