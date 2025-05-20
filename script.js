


// function updateVideos() {
//     const videosToRemove = document.querySelectorAll('.video-remove');
//     const videosContainer = document.body;

//     if (window.innerWidth <= 1300) {
//         window.reload();
//         videosToRemove.forEach(video => {
//             if (!video.classList.contains('removed')) {
//                 video.classList.add('removed');
//                 video.remove(); 
//             }
//         });
//     } else {
//         videosToRemove.forEach(video => {
//             if (video.classList.contains('removed')) {
//                 const newVideo = document.createElement('video');
//                 newVideo.src = video.src;
//                 newVideo.controls = true;
//                 videosContainer.appendChild(newVideo); 
//                 video.classList.remove('removed'); 
//             }
//         });
//     }
// }

// updateVideos();
// window.addEventListener('resize', updateVideos);

document.addEventListener('DOMContentLoaded', function() {
    const largura = window.innerWidth;
    const altura = window.innerHeight;

    console.log(`Largura: ${largura}px`);
    console.log(`Altura: ${altura}px`);

    if (largura <= 1000) {
        console.log("1")
        var botao1 = document.getElementById("toggleButton1")
        var botao2 = document.getElementById("toggleButton2")
        botao1.style.display = "none"
        botao2.style.display = "flex"
    } else {
        
        var botao1 = document.getElementById("toggleButton1")
        var botao2 = document.getElementById("toggleButton2")
        botao1.style.display = "flex"
        botao2.style.display = "none"
        console.log("2")
    }


  });









function subirElemento(elemento, posicao, tempo) {
    elemento.style.transition = `transform ${tempo}s ease`;
    
    elemento.style.transform = `translateY(${posicao}dvh)`;
}

function descerElemento(elemento, posicao, tempo) {
    elemento.style.transition = `transform ${tempo}s ease`;
    
    elemento.style.transform = `translateY(${posicao}%)`;
}


function escurecer(elemento, tempo) {
    
    elemento.style.transition = `opacity ${tempo}s ease`;
    
    elemento.style.display = "flex"
    elemento.style.transition = `display ${tempo}s ease`

    elemento.style.opacity = `0.5`;
    elemento.style.zIndex = "1000";
}


function clarear(elemento, tempo) {
    elemento.style.transition = `opacity ${tempo}s ease`;
    
    elemento.style.opacity = `0`;
    elemento.style.zIndex = "-100";
    elemento.style.display = "none"
}

function animarInput() {
    const input = document.getElementById("inputAnimado");
    input.classList.toggle("ativo");

    if (input.classList.contains("ativo")) {
      setTimeout(() => input.focus(), 400);
    }
  }




var verificapesquisa = false;

function Pesquisa() {
    var pesquisa = document.getElementById("conteiner_pesquisa");
    
    if(verificapesquisa === false) {
        subirElemento(pesquisa, 0, 2 );
        verificapesquisa = true
    } else {
        console.log("ola")
        descerElemento(pesquisa, 100, 2);
        verificapesquisa = false
    }
    
}






document.getElementById("realizarPostagem").addEventListener("click", function() {

    var fundo = document.getElementById("fundoPost");
    escurecer(fundo, 5)

    var conteiner = document.getElementById("conteinerPost");
    subirElemento(conteiner, -150, 3)

    
})

document.getElementById("botaofechar").addEventListener("click", function() {
    var conteiner = document.getElementById("conteinerPost");
    var fundo = document.getElementById("fundoPost");
    clarear(fundo, 3)
    descerElemento(conteiner, 450, 4)
})



document.getElementById("notificacao").addEventListener("click", function() {
    var area = document.getElementById("areaTogglenotificacao");

    if (area.style.display === "flex") {
        area.style.animation = "togglecima 0.5s ease-in-out forwards";
        
        setTimeout(function() {
            area.style.display = "none";
        }, 500);
    } else {
        var area1 = document.getElementById("areaTogglenotificacao");
        if(area1.style.display === "flex") {
            area1.style.animation = "togglecima 0.5s ease-in-out forwards";
        
            setTimeout(function() {
            area1.style.display = "none";
            }, 500);

            area.style.display = "flex";
            area.style.animation = "togglebaixo 0.5s ease-in-out forwards";

        } else {
            area.style.display = "flex";
            area.style.animation = "togglebaixo 0.5s ease-in-out forwards";
        }
        area.style.display = "flex";
        area.style.animation = "togglebaixo 0.5s ease-in-out forwards";
    }
});



document.getElementById("home").addEventListener("click", function() {
    var conteiner = document.getElementById("c-home");

    // Usando transform: translateX() para mover o contêiner
    conteiner.style.transform = "translateX(0%)";
    // this.style.borderBottom = "4px solid #bf4a30";
    console.log("Movendo o contêiner para a página 1.");
});

document.getElementById("chat").addEventListener("click", function() {
    var conteiner = document.getElementById("c-home");

    // Usando transform: translateX() para mover o contêiner para a página 2
    conteiner.style.transform = "translateX(-50%)";
    console.log("Movendo o contêiner para a página 2.");
});

function logadoHome() {
    var logado = localStorage.getItem("logado");
    var fotoPerfil = document.getElementById("fPerfil");

    if (logado === "true") {
        var foto = localStorage.getItem("fotoPerfil");
        var nome = localStorage.getItem("nome")
        if (foto) {
            // Limpa o conteúdo anterior
            fotoPerfil.innerHTML = "";
            fotoPerfil.setAttribute("onclick", "irPerfil()");
            fotoPerfil.innerHTML = `
            <img id="paraPerfil" src="${foto}" class="imagemPerfil" style="cursor: pointer; alt="">

            <marquee direction="right" style="cursor: pointer;">
      
            </marquee>
            `
        } else {
            var nome = localStorage.getItem("nome")
            console.log("Nenhuma foto de perfil encontrada.");
            fotoPerfil.innerHTML = "";
            fotoPerfil.setAttribute("onclick", "irPerfil()");
            fotoPerfil.innerHTML = `<i class="bi bi-person-circle" cursor: pointer;" ></i>
            <marquee direction="right" style="cursor: pointer;">
            

            </marquee>
            `
        }
    } else {
        console.log("Usuário não está logado.");
    }
}

function irPerfil() {
    var area1 = document.getElementById("areaToggle2");

    if (area1.style.display === "flex") {
        area1.style.animation = "togglecima 0.5s ease-in-out forwards";
        
        setTimeout(function() {
            area1.style.display = "none";
        }, 500);
    } else {
        var area = document.getElementById("areaToggle");
        if(area.style.display === "flex") {
            area.style.animation = "toggleEsquerda 0.5s ease-in-out forwards";
        
            setTimeout(function() {
            area.style.display = "none";
            }, 500);

            area1.style.display = "flex";
            area1.style.animation = "togglebaixo 0.5s ease-in-out forwards";

        } else {
            area1.style.display = "flex";
            area1.style.animation = "togglebaixo 0.5s ease-in-out forwards";
        }
    }
}

function notificacaotoggle() {
    var area1 = document.getElementById("areaToggle2");

    if (area1.style.display === "flex") {
        area1.style.animation = "togglecima 0.5s ease-in-out forwards";
        
        setTimeout(function() {
            area1.style.display = "none";
        }, 500);
    } else {
        var area = document.getElementById("areaToggle");
        if(area.style.display === "flex") {
            area.style.animation = "toggleEsquerda 0.5s ease-in-out forwards";
        
            setTimeout(function() {
            area.style.display = "none";
            }, 500);

            area1.style.display = "flex";
            area1.style.animation = "togglebaixo 0.5s ease-in-out forwards";

        } else {
            area1.style.display = "flex";
            area1.style.animation = "togglebaixo 0.5s ease-in-out forwards";
        }
    }
}



function Tperfil() {
    var logadoP = localStorage.getItem("logado");
    
    if (logadoP === "true") {
        console.log("Usuário está logado.");
        irPerfil()
        // Aqui você pode fazer o que precisar para exibir informações do usuário, etc.
    } else {
        console.log("Usuário não está logado.");
        // Aqui você pode redirecionar para a página de login, se necessário
    }
}

window.onload = function() {
    var logado = localStorage.getItem("logado");
  
    if (logado === "true") {
        console.log("Usuário está logado.");
        logadoHome();
        atualizarNome()
        // Aqui você pode fazer o que precisar para exibir informações do usuário, etc.
    } else {
        console.log("Usuário não está logado.");
        redirecionarLogin()
        // Aqui você pode redirecionar para a página de login, se necessário
    }
}

function redirecionarLogin() {
    window.location.href = "./login2/index.html";
}

function redirecionarPerfil() {
    window.location.href = "./TelaPerfil/index.html";
}

function deslogar() {
    var logado1 = localStorage.getItem("logado");

    if(logado1 === "true") {
        localStorage.clear()
        location.reload();
    }
}



function atualizarNome() {
    var foto = localStorage.getItem("fotoPerfil");
    var nome = localStorage.getItem("nome");

    var LE = document.getElementsByClassName("lado_esquerdo");

    // Verifica se há elementos com a classe "lado_esquerdo"
    if (LE.length > 0) {
        for (let i = 0; i < LE.length; i++) {
            LE[i].innerHTML = `<img src="${foto}" alt="Foto de perfil">
                               <h4>${nome ? nome : 'Usuário'}</h4>`;
        }
    }
    
}


function salvarItem() {
    var foto = localStorage.getItem("fotoPerfil")
    const input = document.getElementById("post");
    const item = input.value.trim(); // Pega o valor do input e remove espaços extras
    const nome = localStorage.getItem("nome"); // Obtém o nome armazenado no localStorage

    

    if (item) {
        if(foto) {
            console.log("olaaaaaaaaaaaa")
            // Gera um índice único para a chave do item
            const index = localStorage.length; // A chave será o índice atual
    
            // Cria o conteúdo HTML dinâmico com a interpolação correta
            const htmlContent = `
                <div class="publi2">
                    <div class="cima">
                        <div class="lado_esquerdo" id="LE">
                            
                        </div>
                        <i class="bi bi-sliders"></i>
                    </div>
                    <div class="meio">
                        <h1>${item}</h1>
                    </div>
                    <div class="baixo">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-chat-left-text"></i>
                        <i class="bi bi-share"></i>
                    </div>
                </div>
            `;
    
            // Armazena o conteúdo HTML com a chave sendo um índice único
            localStorage.setItem(`item_${index}`, htmlContent);
    
            // Limpa o campo de input
            input.value = '';
    
            // Chama a função para exibir os itens
            // exibirItensLocalStorage();
        } else {
            console.log("ola")
            // Gera um índice único para a chave do item
            const index = localStorage.length; // A chave será o índice atual
    
            // Cria o conteúdo HTML dinâmico com a interpolação correta
            const htmlContent = `
                <div class="publi2">
                    <div class="cima">
                        <div class="lado_esquerdo" id="LE">
                            <i class="bi bi-person"></i>
                            <h4>${nome}</h4>
                        </div>
                        <i class="bi bi-sliders"></i>
                    </div>
                    <div class="meio">
                        <h1>${item}</h1>
                    </div>
                    <div class="baixo">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-chat-left-text"></i>
                        <i class="bi bi-share"></i>
                    </div>
                </div>
            `;
    
            // Armazena o conteúdo HTML com a chave sendo um índice único
            localStorage.setItem(`item_${index}`, htmlContent);
    
            // Limpa o campo de input
            input.value = '';
    
            // Chama a função para exibir os itens
            // exibirItensLocalStorage();
        }
    }
}

function exibirItensLocalStorage() {
    var espaçoPubli = document.getElementById("espaçoPublis");

    // Verifica se o elemento existe no DOM
    if (!espaçoPubli) {
        console.error("Elemento com id 'espaçoPublis' não encontrado.");
        return;
    }

    // Limpa o conteúdo atual antes de exibir os novos itens
    espaçoPubli.innerHTML = '';

    // Cria uma variável para acumular os itens HTML
    let htmlContent = '';

    // Itera sobre todos os itens do LocalStorage
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i); // Pega a chave do item
        const valor = localStorage.getItem(chave); // Pega o valor (HTML) do item

        // Verifica se a chave começa com "item_" antes de adicionar o conteúdo
        if (chave.startsWith("item_")) {
            htmlContent += valor; // Adiciona o conteúdo HTML do item que corresponde ao padrão
        }
    }

    // Atualiza o conteúdo de espaçoPubli de uma vez só
    espaçoPubli.innerHTML = htmlContent;
    // location.reload();
}


// Espera o DOM estar carregado antes de adicionar o listener
document.addEventListener("DOMContentLoaded", function() {
    // Adiciona o evento de clique ao botão de salvar
    document.getElementById("saveButton").addEventListener("click", salvarItem);

    // Chama a função para exibir os itens ao carregar a página
    exibirItensLocalStorage();
});
var aberto = true;

document.getElementById("comentarios-expancao").addEventListener("click", function() {
    var comentarios = document.getElementById("parte-comentarios")
    var areacoment = document.getElementById("publicoment")
    if (aberto) {
        comentarios.style.transition = "0.5s"
        comentarios.style.opacity = "100%"
        areacoment.style.transition = "0.5s"
        areacoment.style.height = "700px"
        aberto = false
    } else {
        comentarios.style.transition = "0.5s"
        comentarios.style.opacity = "0%"
        areacoment.style.transition = "0.5s"
        areacoment.style.height = "400px"
        aberto = true
    }
})