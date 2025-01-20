// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
let amigos = [];
let listaDeAmigos = document.getElementById('listaAmigos');
let inputAmigos = document.getElementById('amigo');

// Escutar o evento "keydown" no campo de entrada
inputAmigos.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});

function adicionarAmigo() {
  let amigo = inputAmigos.value.trim(); // Remove espaços extras
  if (amigo) { // Verifica se o campo não está vazio
    amigos.push(amigo); //Adiciona o amigo a lista
    listaDeAmigos.innerHTML = amigos.join(', '); // Mostra os amigos separados por vírgula
    inputAmigos.value = ''; // Limpa o campo de entrada
  }
}

function sortearAmigo() {
  if (amigos.length > 0) {
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    listaDeAmigos.innerHTML = `O amigo(a) sorteado foi: ${sorteado}`
  } else {
    listaDeAmigos.innerHTML = "Nenhum amigo na lista para sortear."
  }
}
