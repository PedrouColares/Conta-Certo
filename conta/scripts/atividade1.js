const storySlides = [
    {
        image: '/conta/unidades/unidade1/atividades/sala1.png',
        text: 'Eu queria ter mais brinquedos para brincar.',
        nextBtnVisible: true
    },

    {
        text: 'Já sei! Vou pedir dinheiro da mamãe para comprar mais brinquedos.',
        nextBtnVisible: true
    },

    {
        image: '/conta/unidades/unidade1/atividades/sala2.png',
        text: 'Vá até a cozinha para encontrar sua mãe.',
        nextBtnVisible: false,
        clickableAreas: [
            {
                coords: 'absolute bottom-48 right-8 w-16 h-40 bg-red-600 bg-opacity-0 text-white p-4 text-center text-2xl',
                action: () => advanceSlide()
            }
        ]
    },

    {
        image: '/conta/unidades/unidade1/atividades/cozinha1.png',
        text: 'Converse com a sua mãe.',
        nextBtnVisible: true
    },

    {
        image: '/conta/unidades/unidade1/atividades/cozinha2.png',
        nextBtnVisible: true
    },

    {
        image: '/conta/unidades/unidade1/atividades/cozinha3.png',
        nextBtnVisible: true
    },

    {
        image: '/conta/unidades/unidade1/atividades/cozinha4.png',
        nextBtnVisible: true
    },

    {
        image: '/conta/unidades/unidade1/atividades/cozinha5.png',
        nextBtnVisible: true
    },

    {
        image: '/conta/unidades/unidade1/atividades/cozinha6.png',
        nextBtnVisible: true
    },

    {
        image: '/conta/unidades/unidade1/atividades/cozinha7.png',
        nextBtnVisible: true
    },

    {
        image: '/conta/unidades/unidade1/atividades/cozinha8.png',
        nextBtnVisible: true
    },

    {
        image: '/conta/unidades/unidade1/atividades/parque1.png',
        text: 'Algumas semanas depois...',
        nextBtnVisible: true,
        dinheiro: 15.00
    },

    {
        image: '/conta/unidades/unidade1/atividades/parque2.png',
        nextBtnVisible: false,
        clickableAreas: [
            {
                coords: 'absolute bottom-96 left-52 right-96 w-32 h-40 bg-red-600 bg-opacity-0 text-white p-4 text-center text-2xl',
                action: () => advanceSlide()
            }
        ]
    },

    {
        image: '/conta/unidades/unidade1/atividades/parque3.png',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/parque4.png',
        nextBtnVisible: false,
        opcoes: { 1: 'Comprar sorvete.', 2: 'Não comprar sorvete' }
    },

    {
        image: '/conta/unidades/unidade1/atividades/parque6.png',
        text: 'Você gastou R$10 das suas economias.',
        nextBtnVisible: true,
        dinheiro: -10.00
    },

    {
        image: '/conta/unidades/unidade1/atividades/parque5.png',
        text: 'Você evitou gastar R$15 das suas economias.',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/cidade1.png',
        text: 'Enquanto você estava dando uma volta na cidade, passou por uma Loja de Milkshake',
        dinheiro: 15.00,
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/cidade2.png',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/cidade3.png',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/cidade4.png',
        nextBtnVisible: false,
        opcoes: { 1: 'Comprar Milkshake', 2: 'Não comprar Milkshake' }
    },

    {
        image: '/conta/unidades/unidade1/atividades/cidade6.png',
        text: 'Você gastou R$16 das suas economias.',
        dinheiro: -16.00,
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/cidade5.png',
        text: 'Você evitou gastar R$16 das suas economias.',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/cidade7.png',
        text: ' ',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/diversao1.png',
        text: 'Enquanto você estava dando uma volta no parque, você passou por alguns brinquedos.',
        nextBtnVisible: true,
        dinheiro: 15.00
    },

    {
        image: '/conta/unidades/unidade1/atividades/diversao2.png',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/diversao3.png',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/diversao4.png',
        opcoes: { 1: 'Comprar bilhete.', 2: 'Não comprar bilhete.' }
    },

    {
        image: '/conta/unidades/unidade1/atividades/diversao5.png',
        text: 'Você gastou R$10 de suas economias.',
        nextBtnVisible: true,
        dinheiro: -10.00
    },

    {
        image: '/conta/unidades/unidade1/atividades/diversao6.png',
        text: 'Você evitou gastar R$10 das suas economias.',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/diversao7.png',
        text: ' ',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/loja1.png',
        text: 'Chegou o grande dia de comprar a sua bola.',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/loja2.png',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/loja3.png',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/loja4.png',
        bola: true,
        nextBtnVisible: true,
        dinheiro: -26.00
    },

    {
        image: '/conta/unidades/unidade1/atividades/loja5.png',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/loja6.png',
        nextBtnVisible: true,
    },

    {
        image: '/conta/unidades/unidade1/atividades/loja7.png',
        nextBtnVisible: true,
        semiFinal: true
    },

    {
        image: '/conta/unidades/unidade1/atividades/final1-1.png',
        text: 'Parabéns, você conseguiu economizar e comprar a bola.',
        final: 1
    },

    {
        image: '/conta/unidades/unidade1/atividades/final1-2.png',
        text: 'Infelizmente, você não conseguiu economizar e comprar a bola.',
        final: 2
    },
];

let currentSlide = 0;
let totalDinheiro = 0.00;
let previousText = ''; // Variable to store the previous text
let bolaComprada = false;
let sucesso = false;

const body = document.getElementById('body');

const storyImage = document.getElementById('storyImage');
const storyText = document.getElementById('storyText');
const nextBtn = document.getElementById('nextBtn');
const interactionArea = document.getElementById('interactionArea');

const dinheiroText = document.getElementById('dinheiro');
const opcoes = document.getElementById('opcoes-escolha');

const op1 = document.getElementById('opcao1')
const op2 = document.getElementById('opcao2')

function Finished() {
    const script = document.createElement('script');
    script.textContent = `const start = () => {
    setTimeout(function(){
        confetti.start(); 
    }); }; 
    start();`;
    document.body.appendChild(script);
}

function updateSlide() {
    const slide = storySlides[currentSlide];

    if (slide.opcoes) {
        opcoes.classList.remove('hidden');
        opcoes.classList.add('flex');
        op1.textContent = slide.opcoes[1];
        op2.textContent = slide.opcoes[2];
    }
    else {
        opcoes.classList.add('hidden');
        opcoes.classList.remove('flex');
    }

    if (slide.image) {
        storyImage.src = slide.image;
    }

    if (slide.text) {
        storyText.hidden = false;
        storyText.textContent = slide.text;
        if (slide.text == ' ') {
            storyText.textContent = previousText;
        }
        previousText = slide.text;
    }
    else {
        storyText.hidden = true;
    }

    if (slide.semiFinal) {
        if (!bolaComprada) {
            currentSlide++;
        }
    }

    if (slide.final === 1) {
        console.log('usuario venceu');
        currentSlide++;
        Finished();
    }

    else if (slide.final === 2) {
        console.log('usuario perdeu');
    }

    if (bolaComprada) {
        console.log('A bola foi comprada');
        currentSlide += 3;
        bolaComprada = false;
    }

    if ((currentSlide + 1 < storySlides.length - 1) && storySlides[currentSlide + 1].bola) {
        console.log('O proximo item envolve pagar a bola.');
        if (totalDinheiro >= 26.00) {
            console.log('Usuario pode comprar!');
            bolaComprada = true;
        }
        else {
            console.log('Usuario não pode comprar!');
            currentSlide++;
        }
    }

    if (slide.dinheiro) {
        totalDinheiro += slide.dinheiro;
    }

    dinheiroText.textContent = `${totalDinheiro.toFixed(2)}`;

    nextBtn.style.display = slide.nextBtnVisible ? 'block' : 'none';
    nextBtn.disabled = currentSlide === storySlides.length - 1;

    interactionArea.innerHTML = '';

    if (slide.clickableAreas) {
        slide.clickableAreas.forEach(area => {

            const clickableDiv = document.createElement('div');
            clickableDiv.className = area.coords;
            clickableDiv.addEventListener('click', area.action)
            interactionArea.appendChild(clickableDiv);
        });
    }
}

function advanceSlide() {
    if (currentSlide < storySlides.length - 1) {
        currentSlide++;
        updateSlide();
    }
}

nextBtn.addEventListener('click', advanceSlide);

op1.addEventListener('click', function () {
    if (currentSlide < storySlides.length - 1) {
        currentSlide++;
        updateSlide();
        currentSlide++;
    }
})

op2.addEventListener('click', function () {
    if (currentSlide < storySlides.length - 1) {
        currentSlide += 2;
        updateSlide();
    }
})

updateSlide();