let opcoesArvores = document.querySelectorAll('input[name="arvore"]');
let temas = ["tema-pau-brasil", "tema-peroba-rosa", "tema-castanheira"];
let btnLogin = document.querySelector('.btn-login')

//trecho que fara troca de tema
opcoesArvores.forEach(temaPadrao => {
    temaPadrao.addEventListener('change', () => {
        if (temaPadrao.checked) {
            document.body.classList.remove(...temas);
            document.body.classList.add(temaPadrao.value);
            localStorage.setItem('tema', temaPadrao.value)
        }
    })
})

//funçaõ para não adicionar o tema salvo do localStorage na pagina de login quando abrir a pagina.
function aplicarTemaSalvo() {
    if (!window.location.href.includes('/reflorestamento/index.html')) {
        let temaPadrao = localStorage.getItem('tema');
        temaPadrao ? document.body.classList.add(temaPadrao) : null; //substitui um if
    }
}
aplicarTemaSalvo()

if (btnLogin) {
    btnLogin.addEventListener('click', () => {
        let usuario = document.getElementById('usuario');
        let senha = document.getElementById('senha');

        if (!usuario.value.trim() || !senha.value.trim()) {
            alert('Preencha usuário e senha corretamente.');
            return;
        }

        localStorage.setItem("usuario", usuario.value);
        localStorage.setItem("senha", senha.value);

        let usuarioObjeto = {
            usuario: usuario.value,
            senha: senha.value,
            tema: localStorage.getItem('tema')
        }
        console.log(JSON.stringify(usuarioObjeto));

        window.location.href = "/reflorestamento/registros.html"
    });
}

let btnRegistro = document.querySelector('.btn-registro');
if (btnRegistro) {
    btnRegistro.addEventListener('click', () => {
        let quantArvores = document.getElementById('quantidade-Arvores');
        let especieReflorestada = document.querySelector('input[name="arvores-reflorestar"]:checked');

        if (!especieReflorestada) {
            alert('Selecione a espécie de arvore plantada.');
            return;
        }
        if (!quantArvores.value.trim()) {
            alert('Preencha a quantidade de arvores plantadas.');
            return;
        }

        let registroReflorestamento = {
            usuario: localStorage.getItem('usuario'),
            quantArvores: quantArvores.value,
            especieReflorestada: especieReflorestada.value
        }
        let registroReflorestamentoObjeto = JSON.stringify(registroReflorestamento);
        localStorage.setItem('registros', registroReflorestamento);
        console.log(registroReflorestamento);
        console.log(registroReflorestamentoObjeto);
    })
}


//não precisa fazer variavel para imagem, mas assim é melhor para código mais limpo e reutilizavel 
let imgSemente = "imagens/semente.jpg";
let imgBroto = "imagens/broto.jpg";
let imgCastanheiraJovem = "imagens/castanheira-jovem.jpg";
let imgPerobaRosaJovem = "imagens/peroba-rosa-jovem.jpg";
let imgPauBrasilJovem = "imagens/pau-brasil-jovem.jpg";
let imgCastanheiraAdulta = "imagens/castanheira.jpg";
let imgPerobaRosaAdulta = "imagens/peroba-rosa.jpg";
let imgPauBrasilAdulto = "imagens/pau-brasil.jpg";

if (window.location.href.includes('/reflorestamento/perfil.html')) {
    document.getElementById('nomeUsuarioPerfil').innerHTML = localStorage.getItem('usuario')
    let fotoPerfil = document.getElementById('foto-perfil');
    let quantidadeArvoresPlantadas = 300;

    document.getElementById("quantidadeArvoresPlantadas").textContent = quantidadeArvoresPlantadas
    document.getElementById('area-texto').value = localStorage.getItem('bio')

    if (quantidadeArvoresPlantadas <= 100) {
        fotoPerfil.src = imgSemente;
    } else if (quantidadeArvoresPlantadas <= 300) {
        fotoPerfil.src = imgBroto
    }

    if (localStorage.getItem('tema') == "tema-pau-brasil") {
        if (quantidadeArvoresPlantadas > 300 && quantidadeArvoresPlantadas <= 700) {
            fotoPerfil.src = imgPauBrasilJovem;
        } else if (quantidadeArvoresPlantadas > 700) {
            fotoPerfil.src = imgPauBrasilAdulto;
        }
    }
    if (localStorage.getItem('tema') == "tema-peroba-rosa") {
        if (quantidadeArvoresPlantadas > 300 && quantidadeArvoresPlantadas <= 700) {
            fotoPerfil.src = imgPerobaRosaJovem;
        } else if (quantidadeArvoresPlantadas > 700) {
            fotoPerfil.src = imgPerobaRosaAdulta;
        }
    }
    if (localStorage.getItem('tema') == "tema-castanheira") {
        if (quantidadeArvoresPlantadas > 300 && quantidadeArvoresPlantadas <= 700) {
            fotoPerfil.src = imgCastanheiraJovem;
        } else if (quantidadeArvoresPlantadas > 700) {
            fotoPerfil.src = imgCastanheiraAdulta;
        }
    }
    let btnSalvarBio = document.querySelector(".btn-salvar-bio");
    if (btnSalvarBio) {
        btnSalvarBio.addEventListener('click', () => {
            let areaTexto = document.getElementById("area-texto");
            localStorage.setItem('bio', areaTexto.value)
        })
    }
}

if (window.location.href.includes("/reflorestamento/destaques.html")) {
    //recupera localStorage em json e converte para JS
    const usuarios = JSON.parse(localStorage.getItem("usuariosDestaque"))
    //serve para organizar um item dentro dos usuarios
    usuarios.sort((a, b) => b.quantidadePlantada - a.quantidadePlantada);
    //slice serve para copiar parte da array, no caso do indice zero (0) até ANTES do ultime indece (3)
    let top3 = usuarios.slice(0, 3)


    top3.forEach((usuario, index) => {
        let imgUsuario = document.getElementById(`img-usuario${index + 1}`);
        let nomeUsuario = document.getElementById(`usuario${index + 1}`);
        nomeUsuario.textContent = usuario.nome;

        if (usuario.quantidadeArvoresPlantadas <= 100) {
            imgUsuario.src = imgSemente;
        } else if (usuario.quantidadeArvoresPlantadas <= 300) {
            imgUsuario.src = imgBroto
        }
        if (usuario.tema == "tema-pau-brasil") {
            if (usuario.quantidadeArvoresPlantadas > 300 && usuario.quantidadeArvoresPlantadas <= 700) {
                imgUsuario.src = imgPauBrasilJovem;
            } else if (usuario.quantidadeArvoresPlantadas > 700) {
                imgUsuario.src = imgPauBrasilAdulto;
            }
        }
        if (usuario.tema == "tema-peroba-rosa") {
            if (usuario.quantidadeArvoresPlantadas > 300 && usuario.quantidadeArvoresPlantadas <= 700) {
                imgUsuario.src = imgPerobaRosaJovem;
            } else if (usuario.quantidadeArvoresPlantadas > 700) {
                imgUsuario.src = imgPerobaRosaAdulta;
            }
        }
        if (usuario.tema == "tema-castanheira") {
            if (usuario.quantidadeArvoresPlantadas > 300 && usuario.quantidadeArvoresPlantadas <= 700) {
                imgUsuario.src = imgCastanheiraJovem;
            } else if (usuario.quantidadeArvoresPlantadas > 700) {
                imgUsuario.src = imgCastanheiraAdulta;
            }
        }
    })
}

if (window.location.href.includes("/reflorestamento/relatorio.html")) {
    //recupera loscalStorage em json e converte para JS
    const usuarios = JSON.parse(localStorage.getItem("usuariosDestaque"));

    const tbody = document.getElementById('corpo-tabela')
    tbody.innerHTML = '';


    usuarios.forEach(usuario => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${usuario.nome}</td>
        <td>${usuario.tipoArvorePlantada}</td>
        <td>${usuario.quantidadeArvoresPlantadas}</td>
        `;

        tbody.appendChild(linha)
    })

    const inputBucar = document.getElementById("input-busca-nome");
    const tabelaUsuarios = document.getElementById("resultados-busca")

    inputBucar.addEventListener('keyup', () => {
        let expressao = inputBucar.value.toLowerCase();

        let linhas = tbody.getElementsByTagName('tr');

        for (let posicao in linhas) {
            if (true === isNaN(posicao)) {
                continue;
            }

            let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();

            if (true === conteudoDaLinha.includes(expressao)) {
                linhas[posicao].style.display = '';
            } else {
                linhas[posicao].style.display = 'none'
            }
        }

    })
}