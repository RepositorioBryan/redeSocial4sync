// antigo

// function dadosPerfil(event) {
//   event.preventDefault(); // Impede o envio do formulário

//   var nome = document.getElementById("nome").value;
//   var senha = document.getElementById("senha").value;

//   // Verifique se nome e senha não estão vazios
//   if (nome.trim() === "" || senha.trim() === "") {
//     alert("Por favor, preencha todos os campos.");
//     return; // Impede o envio dos dados se os campos estiverem vazios
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
//     var reader = new FileReader();
//     reader.onload = function (e) {
//       // Limpa o conteúdo anterior
//       imagemElemento.innerHTML = ""; 
      
//       // Cria um novo elemento de imagem
//       var img = document.createElement("img");
//       img.src = e.target.result; // Define a fonte da imagem
//       img.alt = "Foto do perfil"; // Atributo alt
//       img.width = 150; // Define a largura da imagem
      
//       // Adiciona a imagem ao elemento imagemElemento
//       imagemElemento.appendChild(img);
//     };
//     reader.readAsDataURL(file); // Converte o arquivo para Base64
//   }
// }

// novo

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
//   var file = fotoInput.files[0]; // Obtém o primeiro arquivo selecionado
//   if (file) {
//       var reader = new FileReader();
//       reader.onload = function (e) {
//           // Salva a imagem em localStorage
//           localStorage.setItem("fotoPerfil", e.target.result);
//       };
//       reader.readAsDataURL(file); // Converte o arquivo para Base64
//   }
// }

// window.onload = function() {
//   var fotoPerfil = localStorage.getItem("fotoPerfil");
//   if (fotoPerfil) {
//       // Aqui você pode usar a imagem se necessário, mas a função agora não faz nada
//   }
// }

function dadosPerfil(event) {
  event.preventDefault(); // Impede o envio do formulário

  var nome = document.getElementById("nome").value;
  var senha = document.getElementById("senha").value;

  // Verifique se nome e senha não estão vazios
  if (nome.trim() === "" || senha.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return; // Impede o envio dos dados se os campos estiverem vazios
  }

  // Salvar dados no localStorage
  localStorage.setItem("nome", nome);
  localStorage.setItem("senha", senha);
  localStorage.setItem("logado", "true");

  // Redirecionar após o envio
  redirecionar();
}

function redirecionar() {
  console.log("redirecionando");
  window.location.href = "../index.html";
}

function imagemPerfil() {
  var fotoInput = document.getElementById("foto");
  var imagemElemento = document.getElementById("imagem");

  var file = fotoInput.files[0]; // Obtém o primeiro arquivo selecionado
  if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
          // Limpa o conteúdo anterior
          imagemElemento.innerHTML = ""; 
          
          // Cria um novo elemento de imagem
          var img = document.createElement("img");
          img.src = e.target.result; // Define a fonte da imagem
          img.alt = "Foto do perfil"; // Atributo alt
          img.width = 150; // Define a largura da imagem
          
          // Adiciona a imagem ao elemento imagemElemento
          imagemElemento.appendChild(img);
          
          // Salva a imagem em localStorage
          localStorage.setItem("fotoPerfil", e.target.result);
      };
      reader.readAsDataURL(file); // Converte o arquivo para Base64
  }
}

window.onload = function() {
  var imagemElemento = document.getElementById("imagem");
  var fotoPerfil = localStorage.getItem("fotoPerfil");
  
  if (fotoPerfil) {
      // Cria um novo elemento de imagem
      var img = document.createElement("img");
      img.src = fotoPerfil; // Define a fonte da imagem
      img.alt = "Foto do perfil"; // Atributo alt
      img.width = 150; // Define a largura da imagem
      
      // Adiciona a imagem ao elemento imagemElemento
      imagemElemento.appendChild(img);
  }
}