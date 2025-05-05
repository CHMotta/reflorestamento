//serve para construir estrura de class
class Usuario {
    constructor(nome, tema, quantidadeArvoresPlantadas, tipoArvorePlantada){
        this.nome = nome;
        this.tema = tema;
        this.quantidadeArvoresPlantadas = quantidadeArvoresPlantadas;
        this.tipoArvorePlantada = tipoArvorePlantada
    }
}
//adiciona objetos dentro da class
let Usuarios = [
    new Usuario("Carlos Motta", "tema-castanheira", 1000, "Ipês"),
    new Usuario("Maria Souza", "tema-pau-brasil", 580, "Angicos"),
    new Usuario("João Kozanda", "tema-peroba-rosa", 905, "Aroeiras"),
    new Usuario("Ana Prado", "tema-castanheira", 100, "Jequitibas"),
    new Usuario("Bruno Arruda", "tema-pau-brasil", 300, "Peroba do campo")
]
//salva objeto em JSON no localStorage
localStorage.setItem("usuariosDestaque", JSON.stringify(Usuarios)); 
