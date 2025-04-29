let opcoesArvores = document.querySelectorAll('input[name="arvore"]');
let temas = ["tema-pau-brasil", "tema-peroba-rosa", "tema-castanheira"];

//o próximo trecho tem objetivo de carregar um tema salvo se ele existir
let temaSalvo = localStorage.getItem('tema');
if(temaSalvo && temas.includes(temaSalvo)){
    document.body.classList.remove(...temas)//3 pontos servem para a leitura da array ser dos itens separados.
    document.body.classList.add(temaSalvo);
    document.querySelector(`input[value ="${temaSalvo}"]`).checked = true;
}

//trecho que fara troca de tema
opcoesArvores.forEach(radio => {
    radio.addEventListener('change',()=>{
        if(radio.checked){
            document.body.classList.remove(...temas);
            document.body.classList.add(radio.value);
            localStorage.setItem('tema', radio.value);
        }
    })
})