const Etablissement='GENIO'
class Etudiant{
constructor(nom,age){
this.nom=nom;

9 / 24

this.age=age
}
}
function info(etudiant){
return `nom:${etudiant.nom} age:${etudiant.age}`
}
export default Etudiant
export {Etablissement,info}