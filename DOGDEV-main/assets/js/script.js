//menu
let menuOpener = document.querySelector('.menu-opener');
//nav
let nav = document.querySelector('header nav');
//ouvinte para o eventoclick do menuOpener
menuOpener.addEventListener('click', ()=>{
    if(nav.classList.contains('opened')){
        nav.classList.remove('opened');
        menuOpener.querySelector('.close-icon') .style .display='none';
        menuOpener.querySelector('.hamburger-icon') .style .display='flex';
    }else{
        nav.classList.add('opened');
        menuOpener.querySelector('.close-icon') .style .display='flex';
        menuOpener.querySelector('.hamburger-icon')  .style .display='none';
    }
});
//daqui para baixo é testemonial
let testemonials = [
    { quote:'"Mais do que nunca, os animais de estimação são "'+ 
        '"tratados como menbros da família."', origin: 'cbs.svg'},
    { quote:'"DogDev é um serviço de entrega direto ao consumidor,"'+
        '" preparado na hora com ingredientes 100% reais."'+
        '" Ingredientes que humanos recenheceriam."',
         origin: 'forbes.svg'},
    { quote:'"DogDev usa ingredientes simples e limpos em seus "'+
        '"pratos."', origin: 'fox.svg'},
    { quote:'"Vejo você [João] como um verdadeiro herói"',
         origin: 'sharktank.svg'}
];
let testemonialQuote = document.querySelector('.testemonials .quote'); // Seleciona o elemento com a classe 'quote' dentro de 'testimonials'
let testemonialIcons = document.querySelector('.testemonials .icons'); // Seleciona o elemento com a classe 'icons' dentro de 'testimonials'

// Loop para criar as imagens de origem dos depoimentos
for(let tindex in testemonials){
    let img = document.createElement('img'); // Cria um elemento <img>
    img.setAttribute('src', './assets/images/' + testemonials[parseInt(tindex)].origin); // Define o atributo 'src' da imagem
    img.style.cursor = 'pointer'; // Define o cursor como 'pointer' para indicar que é clicável
    img.addEventListener('click', () => fillTestemonial(parseInt(tindex))); // Adiciona um listener de evento de clique para preencher o depoimento
    testemonialIcons.appendChild(img); // Adiciona a imagem ao elemento 'testimonialIcons'
}

let currentTestemonial = 0; // Variável para controlar o depoimento atual
let testemonialTimer; // Variável para armazenar o timer do depoimento

// Função para preencher o depoimento com base no índice
const fillTestemonial = (index) =>{
    clearTimeout(testemonialTimer); // Limpa o timer anterior
    currentTestemonial = index; // Define o depoimento atual
    testemonialQuote.innerHTML = testemonials[currentTestemonial].quote; // Define o HTML do elemento 'testimonialQuote' com o depoimento atual
    let imgs = testemonialIcons.querySelectorAll('img'); // Seleciona todas as imagens dentro de 'testimonialIcons'
    for(let img of imgs) img.style.opacity =0.2; // Define a opacidade de todas as imagens como 0.2
    imgs[currentTestemonial].style.opacity = 1; // Define a opacidade da imagem do depoimento atual como 1
    testemonialTimer = setTimeout(nextTestemonial, 3000); // Define um timer para passar para o próximo depoimento após 3 segundos
}

// Função para passar para o próximo depoimento
const nextTestemonial = () => {
    if(testemonials[currentTestemonial + 1]){ // Verifica se existe um próximo depoimento
        fillTestemonial(currentTestemonial + 1); // Preenche o depoimento com o próximo índice
    } else{
        fillTestemonial(0); // Se não houver próximo, volta para o primeiro depoimento
    }
}

nextfTestemonial(); // Inicia a exibição dos depoimentos