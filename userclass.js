//serve para construir estrura de class
class Usuario {
    constructor(nome, tema, quantidadeArvoresPlantadas){
        this.nome = nome;
        this.tema = tema;
        this.quantidadeArvoresPlantadas = quantidadeArvoresPlantadas;
    }
}
//adiciona objetos dentro da class
let Usuarios = [
    new Usuario("Carlos Motta", "tema-castanheira", 1000),
    new Usuario("Maria Souza", "tema-pau-brasil", 580),
    new Usuario("João Kozanda", "tema-peroba-rosa", 905),
    new Usuario("Ana Prado", "tema-castanheira", 100),
    new Usuario("Bruno Arruda", "tema-pau-brasil", 300)
]
//salva objeto em JSON no localStorage
localStorage.setItem("usuariosDestaque", JSON.stringify(Usuarios)); 
