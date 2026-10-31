class Etudiant{
    constructor (nom,age){
        this.nom=nom;
        this.age=age;
    }
}
let et1= new Etudiant("imen",23)
console.log (et1);
let et2= new Etudiant("mohamed",21)
console.log (et2);
info()
{
    return`Etudiant nom:${this.nom} a pour age: ${this.age}`;
}
let et1 = new Etudiant("imen",23);
console.log(et1.info());
let et2 = new Etudiant("mohamed",21);
console.log(et2.info());