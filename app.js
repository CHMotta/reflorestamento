let opcoesArvores = document.querySelectorAll('input[name="arvore"]');
let temas = ["tema-pau-brasil", "tema-peroba-rosa", "tema-castanheira"];


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

let btnLogin = document.getElementById('btn-login')

btnLogin.addEventListener('click', () => {
    let temaSelecionado = document.querySelector('input[name="arvore"]:checked');//seleciona o tema
    let usuario = document.getElementById('usuario');
    let senha = document.getElementById('senha');

    localStorage.setItem("usuario", usuario.value);
    localStorage.setItem("senha", senha.value);

    if(!temaSelecionado){
        alert('Escolha uma arvore tema.');
        return
    }

    if(!usuario.value.trim() || !senha.value.trim()) {
        alert('Preencha usuário e senha corretamente.');
        return;
    }

    let usuarioObjeto = {
        usuario: usuario.value,
        senha: senha.value,
        tema: temaSelecionado.value
    }

    let usuarioJSON = JSON.stringify(usuarioObjeto);
    console.log(usuarioJSON)
})

