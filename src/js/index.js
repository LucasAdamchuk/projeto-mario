
const botaoTrailer = document.querySelector(".botao-trailer"); //pega o valor do botao para modificar e fazer abrir o modal

const modal = document.querySelector(".modal"); //pega o elemento da modal e salva em uma variavel

const video = document.getElementById("video")//pega o elemento pelo id para remover o src e nao ficar tocando o video depois de fechar o modal

const linkVideo = video.src; //pega o link do video que esta no src para setar ele novamente quando o modal abrir dnv

const botaoFecharModal = document.querySelector(".fechar-modal"); //pega o elemendo fechar modal

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");  //modificar a classe do modal para aberto que fizemos no css
    video.setAttribute("src", linkVideo);
}); 
//metodo para identificar qudando o usuario clicar no botao o "click" e para capturar o evento de clicar e a segunda função e o que o botao vai fazer  

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");//remove o aberto da classe do modal e fecha ele
    video.setAttribute("src", ""); // éga o src e define ele como sem valor parando o som do video
});



