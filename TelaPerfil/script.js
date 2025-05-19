// var nome = localStorage.getItem("nome");

// console.log(nome);

// var fotoPerfil = localStorage.getItem("fotoPerfil");

// var areaFperfil = document.getElementById("imagemPerfil");

// areaFperfil.innerHTML = `
// <img src="${fotoPerfil}" alt="">
// <h1>${nome}</h1>
// `;
function logadoHome() {
  var logado = localStorage.getItem("logado");

  var nome = localStorage.getItem("nome");

  console.log(nome);

  var fotoPerfil = localStorage.getItem("fotoPerfil");

  var areaFperfil = document.getElementById("imagemPerfil");

//   areaFperfil.innerHTML = `
// <img src="${fotoPerfil}" alt="">
// <h1>${nome}</h1>`;

  if (logado === "true") {
    atualizarNome()
    var foto = localStorage.getItem("fotoPerfil");
    
    var nome = localStorage.getItem("nome");
    if (foto) {
      // Limpa o conteúdo anterior
      areaFperfil.innerHTML = "";
      areaFperfil.innerHTML = `
            <img id="paraPerfil" src="${foto}" class="imagemPerfil" style="cursor: pointer; alt="">

            <div class="conteiner_nome">
              <h1>${nome}</h1>
              <i class="bi bi-pen" onclick="config()"></i>
            </div>
            `;

      // // Cria um novo elemento de imagem
      // var img = document.createElement("img");
      // img.className = "imagemPerfil"
      // img.src = foto; // Define a fonte da imagem
      // img.alt = "Foto do perfil"; // Atributo alt
      // img.width = 1; // Define a largura da imagem

      // // Adiciona a imagem ao elemento fotoPerfil
      // fotoPerfil.appendChild(img);
    } else {
      var nome = localStorage.getItem("nome");
      console.log("Nenhuma foto de perfil encontrada.");
      areaFperfil.innerHTML = "";
      areaFperfil.innerHTML = `
      <img src="../imgs/icon_user.png" alt="">

      <div class="conteiner_nome">
        <h1>${nome}</h1>
        <i class="bi bi-pen" id="pen" onclick="config()"></i>
      </div>
            `;
    }
  } else {
    console.log("Usuário não está logado.");
  }
}

function redirecionarLogin() {
  window.location.href = "../login2/index.html";
}

// window.onload = function () {
//   var logado = localStorage.getItem("logado");

//   if (logado === "true") {
//     console.log("Usuário está logado.");
//     logadoHome();
//     // Aqui você pode fazer o que precisar para exibir informações do usuário, etc.
//   } else {
//     console.log("Usuário não está logado.");
//     redirecionarLogin();
//     // Aqui você pode redirecionar para a página de login, se necessário
//   }
// };

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
}


window.onload = function () {
  var logado = localStorage.getItem("logado");
  // var espaçoPubli = document.getElementById("espaçoPublis");

  if (logado === "true") {
    console.log("Usuário está logado.");
    logadoHome();
    if (exibirItensLocalStorage()) {
      exibirItensLocalStorage()
    } else {
      console.log("nada")
    }
    // exibirItensLocalStorage()
    // for(let i = 0; 1 < localStorage.length; i++) {
    //   const chave = localStorage.key(i)
    //   const valor = localStorage.getItem(chave)
    //   if (chave.startsWith("item_")) {
    //     espaçoPubli
    //   }
    // }
  } else {
    console.log("Usuário não está logado.");
    redirecionarLogin();
    // Aqui você pode redirecionar para a página de login, se necessário
  }
};




function mudarNome() {
  var inputNome = document.getElementById("nome").value
  if(inputNome.trim() !== "") {
    localStorage.removeItem("nome")
    localStorage.setItem("nome", inputNome)

    atualizarNome()
  }
}


function atualizarNome() {
  var foto = localStorage.getItem("fotoPerfil");
  var nome = localStorage.getItem("nome");

  var LE = document.getElementsByClassName("lado_esquerdo");
  
  // Verifica se há elementos com a classe "lado_esquerdo"
  if (LE.length === 0) {
    console.log("Olá, tudo bem?");
    
    // Se não houver foto no localStorage, defina uma imagem padrão
    foto = foto ? foto : '../imgs/icon_user.png'; // Substitua pelo caminho da sua imagem padrão
    
    // Atualiza o conteúdo HTML dos elementos encontrados com a classe "lado_esquerdo"
    for (let i = 0; i < LE.length; i++) {
      LE[i].innerHTML = `<img src="${foto}" alt="Foto de perfil">
                         <h4>${nome}</h4>`;
    }
  } 
}


function config() {
  var form = document.getElementById("formCliente")
  
  if(form.style.display === "none") {
    form.style.display = "flex"
  } else {
    form.style.display = "none"
  }

}


// function atualizarNome() {
  
//   var foto = localStorage.getItem("fotoPerfil");
//   var nome = localStorage.getItem("nome");

//   var LE = document.getElementsByClassName("lado_esquerdo");
  
//   // Verifica se há elementos com a classe "lado_esquerdo"
//   if (LE.length > 0) {
//     console.log("ola tudo bem")
//       for (let i = 0; i < LE.length; i++) {
//           LE[i].innerHTML = `<img src="${foto}" alt="Foto de perfil">
//                              <h4>${nome ? nome : 'Usuário'}</h4>`;
//       }
//   } 
  
// }



// function dadosPerfil(event) {
//   event.preventDefault(); // Impede o envio do formulário

//   var nome = document.getElementById("nome").value;
//   var senha = document.getElementById("senha").value;

//   // Verifique se nome e senha não estão vazios
//   if (nome.trim() === "" || senha.trim() === "") {
//       alert("Por favor, preencha todos os campos.");
//       return; // Impede o envio dos dados se os campos estiverem vazios
//   }

//   // Salvar dados no localStorage
//   localStorage.setItem("nome", nome);
//   localStorage.setItem("senha", senha);
//   localStorage.setItem("logado", "true");

//   // Redirecionar após o envio
//   redirecionar();
// }

// function redirecionar() {
//   console.log("redirecionando");
//   window.location.href = "../index.html";
// }

// function imagemPerfil() {
//   var fotoInput = document.getElementById("foto");
//   var imagemElemento = document.getElementById("imagem");

//   var file = fotoInput.files[0]; // Obtém o primeiro arquivo selecionado
//   if (file) {
//       var reader = new FileReader();
//       reader.onload = function (e) {
//           // Limpa o conteúdo anterior
//           imagemElemento.innerHTML = ""; 
          
//           // Cria um novo elemento de imagem
//           var img = document.createElement("img");
//           img.src = e.target.result; // Define a fonte da imagem
//           img.alt = "Foto do perfil"; // Atributo alt
//           img.width = 150; // Define a largura da imagem
          
//           // Adiciona a imagem ao elemento imagemElemento
//           imagemElemento.appendChild(img);
          
//           // Salva a imagem em localStorage
//           localStorage.setItem("fotoPerfil", e.target.result);
//       };
//       reader.readAsDataURL(file); // Converte o arquivo para Base64
//   }
// }

// window.onload = function() {
//   var imagemElemento = document.getElementById("imagem");
//   var fotoPerfil = localStorage.getItem("fotoPerfil");
  
//   if (fotoPerfil) {
//       // Cria um novo elemento de imagem
//       var img = document.createElement("img");
//       img.src = fotoPerfil; // Define a fonte da imagem
//       img.alt = "Foto do perfil"; // Atributo alt
//       img.width = 150; // Define a largura da imagem
      
//       // Adiciona a imagem ao elemento imagemElemento
//       imagemElemento.appendChild(img);
//   }
// }



// document.getElementById("pen").addEventListener("click", function () {
//   const mudarPerfil = ``
// })
