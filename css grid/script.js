//Função para exibir uma mensagem quando um link danavegação for clicado
function exibirMensagem(event){
    event.preventDefault();
    const link = event.target;
    const mensagem = 'Você clicou no link "${link.innerText}".';
    alert(mensagem);
}

//Adicionando um ouvinte de eventos aos links da navegação
const linksNavegação = document.querySelectorAll('nav a');
linksNavegação.forEach(function(link){
    link.addEventListener('click', exibirMensagem)
})