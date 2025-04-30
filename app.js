let opcoesArvores = document.querySelectorAll('input[name="arvore"]');
let temas = ["tema-pau-brasil", "tema-peroba-rosa", "tema-castanheira"];
let btnLogin = document.querySelector('.btn-login')

//trecho que fara troca de tema
opcoesArvores.forEach(temaPadrao => {
    temaPadrao.addEventListener('change',()=>{
        if(temaPadrao.checked){
            document.body.classList.remove(...temas);
            document.body.classList.add(temaPadrao.value);
            localStorage.setItem('tema', temaPadrao.value)
        }
    })
})

//funçaõ para não adicionar o tema salvo no localStorage na pagina de login quando abrir a pagina.
function aplicarTemaSalvo (){
    if(!window.location.href.includes('/reflorestamento/login.html')){
    let temaPadrao = localStorage.getItem('tema');
    if(temaPadrao){
        document.body.classList.add(temaPadrao);
    }
    }
}


if(btnLogin){
    btnLogin.addEventListener('click', () => {
        let usuario = document.getElementById('usuario');
        let senha = document.getElementById('senha');

        if(!usuario.value.trim() || !senha.value.trim()) {
            alert('Preencha usuário e senha corretamente.');
            return;
        }
        
        localStorage.setItem("usuario", usuario.value);
        localStorage.setItem("senha", senha.value);
        localStorage
        
        let usuarioObjeto = {
            usuario: usuario.value,
            senha: senha.value,
            tema: localStorage.getItem('tema')
        }
        
        let usuarioJSON = JSON.stringify(usuarioObjeto);
        console.log(usuarioJSON)
        
        window.location.href = "/reflorestamento/registros.html"
    });
}

aplicarTemaSalvo()



let btnRegistro = document.querySelector('.btn-registro');

if(btnRegistro){
    btnRegistro.addEventListener('click', () =>{
        let quantArvores = document.getElementById('quantidade-Arvores');
        let especieReflorestada = document.querySelector('input[name="arvores-reflorestar"]:checked');

        if(!especieReflorestada){
            alert('Selecione a espécie de arvore plantada.');
            return;
        }
        if(!quantArvores.value.trim()){
            alert('Preencha a quantidade de arvores plantadas.');
            return;
        }

        let registroReflorestamento = {
            usuario: "",
            quantArvores: quantArvores,
            especieReflorestada: especieReflorestada
        }
        let registroReflorestamentoObjeto = JSON.stringify(registroReflorestamento)
        localStorage.setItem('registros', registroReflorestamento)
        console.log(registroReflorestamento);
        console.log(registroReflorestamentoObjeto);

    })
}




let listaDeReflorestamento = {

}