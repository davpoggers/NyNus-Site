document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona os elementos
    const buyButton = document.querySelector('.btn-comprar');
    const priceElement = document.querySelector('.preco');
    const spamtonGif = document.getElementById('spamton');

    // O elemento chaosContainer é mantido no DOM, mas não é usado neste código.

    // 2. Variáveis de controle
    let isSpamtonActive = false;
    const startDelay = 2000; // Atraso de 2 segundos antes de tudo começar
    const targetCountValue = 999999999.99; // Onde a contagem para e a pilha de 9s começa
    const finalPriceLength = 30; // Define o quão longe a pilha de 9s vai
    const priceStartTime = 5000; // Sincronização com o Spamton (50% de 10s)

    // NOVO: Ajuste este valor para controlar a velocidade de contagem (ex: 2.0 = 2x mais rápido)
    const JUMP_FACTOR = 100.0;


    // NOVO: 3. Função para iniciar o tremor PERMANENTE
    function startPermanentTremor() {
        // Roda a cada 50ms para um tremor contínuo e sutil
        setInterval(() => {
            // Aplica o tremor SÓ SE a animação caótica não estiver rodando
            if (!isSpamtonActive) {
                const xShake = Math.random() * 2 - 1; // Tremor sutil (-1px a +1px)
                priceElement.style.transform = `translateX(${xShake}px)`;
            }
        }, 50);
    }

    // Funções de formatação personalizadas para o caos
    function formatPrice(number, decimals = 2) {
        // Formata a parte inteira (com pontos de milhar)
        const integerPart = Math.floor(number).toLocaleString('pt-BR');

        // Formata a parte decimal
        const decimalStr = number.toFixed(decimals).split('.')[1] || '00';

        // Retorna a formatação: R$999.999,99
        return `R$ ${integerPart},${decimalStr}`;
    }

    // 3. Função FASE 2: Empilhamento de 9s contínuo
    function startChaosStacking(currentPrice) {
        // Pega a string do preço atual e a quebra para o empilhamento
        let priceParts = currentPrice.split(',');
        let currentInteger = priceParts[0] || 'R$ 999.999';
        let currentDecimal = priceParts[1] || '00';


        let count = 0;
        let stackingDecimal = currentDecimal;

        // O intervalo é mantido em 1ms para a transição ser imediata e insana
        const stackingInterval = setInterval(() => {
            if (count >= finalPriceLength) {
                clearInterval(stackingInterval);
                return;
            }

            // Adiciona um '9' ao lado direito da parte decimal
            stackingDecimal += '9';

            // Atualiza o texto do preço com a nova formatação caótica
            priceElement.textContent = `${currentInteger},${stackingDecimal}`;

            // Mantém o tremor enquanto empilha
            const xShake = Math.random() * 8 - 4;
            priceElement.style.transform = `translateX(${xShake}px)`;

            count++;
        }, 80); // Continua a cada 1ms, sem pausa
    }

    // 6. Função FASE 1: Crescimento ULTRA RÁPIDO
    function rapidlyIncreasePrice() {
        let currentNumber = 0.00;

        priceElement.style.fontSize = '3em';

        const countInterval = setInterval(() => {
            // Aumento de velocidade controlado pelo JUMP_FACTOR
            const baseJump = 100000;
            const jump = (Math.floor(Math.random() * 50000) + baseJump) * JUMP_FACTOR;
            currentNumber += jump / 100;

            if (currentNumber >= targetCountValue) {
                currentNumber = targetCountValue;

                // FIM DA FASE 1 - INÍCIO IMEDIATO DA FASE 2
                clearInterval(countInterval);

                const finalFormattedPrice = formatPrice(currentNumber);

                // Início do empilhamento imediatamente
                startChaosStacking(finalFormattedPrice);
                return;
            }

            // Formata o número (R$ 999.999.999,00)
            priceElement.textContent = formatPrice(currentNumber);

            // Aplica o tremor FORTE durante a contagem
            const xShake = Math.random() * 8 - 4;
            priceElement.style.transform = `translateX(${xShake}px)`;

        }, 1);
    }


    // 5. Função principal (gatilho)
    function startSpamtonEasterEgg(event) {
        event.preventDefault();
        if (isSpamtonActive) return;

        isSpamtonActive = true;

        // Atraso inicial para o choque (2 segundos)
        setTimeout(() => {
            // A. Inicia a animação do Spamton (10 segundos)
            spamtonGif.classList.add('animate');

            // NOVO: Tocar o áudio da risada do Spamton
            const audio = new Audio('../pasta/spamtonLaugh.mp3');
            audio.play().catch(e => console.log("Erro ao tocar áudio:", e));

            // B. Sincroniza o preço com a chegada do Spamton (5000ms)
            setTimeout(() => {
                rapidlyIncreasePrice(); // Começa a contagem de preço (Fase 1)
            }, priceStartTime);

            // C. Limpa tudo depois que a animação do Spamton termina (10s)
            setTimeout(() => {
                spamtonGif.classList.remove('animate');
                priceElement.style.transform = 'none';
                isSpamtonActive = false;
            }, 10000 + priceStartTime);

        }, startDelay);
    }

    // Adiciona o "ouvinte" de clique no botão
    buyButton.addEventListener('click', startSpamtonEasterEgg);
});