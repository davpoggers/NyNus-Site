// --------------------------  AVISO  -------------------------- //

// JAVASCRIPT FEITO 99.99% POR IA!!! (obrigado pela sua existência Gemini <3)


document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona os elementos
    const buyButton = document.querySelector('.btn-comprar');
    const priceElement = document.querySelector('.preco');
    const spamtonGif = document.getElementById('spamton');
    const spamtonLaughAudio = new Audio('../pasta/spamtonLaugh.mp3'); 
    
    // Lista de sons aleatórios (VERIFIQUE SE OS CAMINHOS ESTÃO CORRETOS)
    const RANDOM_SOUNDS = [
        '../pasta/audios/snd_badexplosion.wav',
        '../pasta/audios/snd_bell.wav',
        '../pasta/audios/snd_bigcut.wav',
        '../pasta/audios/snd_break1.wav',
        '../pasta/audios/snd_damage.wav',
    ];

    // Função auxiliar para tocar um som aleatório
    function playRandomSound() {
        const soundPath = RANDOM_SOUNDS[Math.floor(Math.random() * RANDOM_SOUNDS.length)];
        const audio = new Audio(soundPath);
        return new Promise((resolve) => {
            audio.addEventListener('ended', resolve);
            // Timeout de segurança (Máximo de espera de 3 segundos)
            setTimeout(resolve, 3000); 
            audio.play().catch(e => {
                console.log("Erro ao tocar áudio aleatório:", e);
                resolve(); 
            });
        });
    }

    // 2. Variáveis de controle
    let isSpamtonActive = false;
    let permanentTremorInterval = null; 
    
    const startDelay = 2000; 
    const targetCountValue = 999999999.99; 
    const finalPriceLength = 30; 
    
    // Duração TOTAL de 11.5 segundos (11500ms)
    const animationDuration = 11500; 
    
    // Tempos em milissegundos para sincronização:
    const STOP_ONE_START = 3000;  // 3000ms: Chega no preço
    const STOP_ONE_END = 5000;    // 5000ms: Fim da pausa visual (Preço sobe aqui)
    const STOP_TWO_START = 7000;  // 7000ms: Chega no ponto da risada
    const STOP_TWO_END = 9000;    // 9000ms: Fim da risada 
    
    const JUMP_FACTOR = 500.0; 
    const SLOWER_STACKING_INTERVAL = 100; 
    

    // 3. Função para iniciar o tremor PÓS-ANIMAÇÃO
    function startPermanentTremor() {
        if (permanentTremorInterval) return;
        permanentTremorInterval = setInterval(() => {
            const xShake = Math.random() * 2 - 1; 
            priceElement.style.transform = `translateX(${xShake}px)`;
        }, 50);
    }

    // 4. Funções de formatação
    function formatPrice(number, decimals = 2) {
        const integerPart = Math.floor(number).toLocaleString('pt-BR');
        const decimalStr = number.toFixed(decimals).split('.')[1] || '00';
        return `R$ ${integerPart},${decimalStr}`;
    }

    // 5. Função FASE 2: Empilhamento de 9s contínuo (MAIS DEVAGAR)
    function startChaosStacking(currentPrice) {
        let priceParts = currentPrice.split(',');
        let currentInteger = priceParts[0] || 'R$ 999.999.999';
        let currentDecimal = priceParts[1] || '00';
        
        let count = 0;
        let stackingDecimal = currentDecimal;

        const stackingInterval = setInterval(() => {
            if (count >= finalPriceLength) {
                clearInterval(stackingInterval);
                priceElement.style.transform = 'none'; 
                return;
            }

            stackingDecimal += '9';
            priceElement.textContent = `${currentInteger},${stackingDecimal}`;
            
            const xShake = Math.random() * 8 - 4;
            priceElement.style.transform = `translateX(${xShake}px)`;

            count++;
        }, SLOWER_STACKING_INTERVAL);
    }

    // 6. Função FASE 1: Crescimento ULTRA RÁPIDO
    function rapidlyIncreasePrice() {
        let currentNumber = 0.00;
        priceElement.style.fontSize = '3em'; 
        
        const countInterval = setInterval(() => {
            const baseJump = 100000;
            const jump = (Math.floor(Math.random() * 50000) + baseJump) * JUMP_FACTOR;
            currentNumber += jump / 100;

            if (currentNumber >= targetCountValue) {
                currentNumber = targetCountValue;
                clearInterval(countInterval);
                const finalFormattedPrice = formatPrice(currentNumber);
                startChaosStacking(finalFormattedPrice); 
                return;
            }
            
            priceElement.textContent = formatPrice(currentNumber);
            const xShake = Math.random() * 8 - 4;
            priceElement.style.transform = `translateX(${xShake}px)`;

        }, 1); 
    }

    // 7. Função principal (gatilho)
    async function startSpamtonEasterEgg(event) {
        event.preventDefault(); 
        if (isSpamtonActive) return; 
        
        isSpamtonActive = true; 
        
        let animationStartTimestamp; 

        // Atraso inicial para o choque (2 segundos)
        setTimeout(async () => {
            
            animationStartTimestamp = Date.now();
            // A. INICIA ANIMAÇÃO DO SPAMTON
            spamtonGif.classList.add('animate');
            
            // B. SINCRONIZAÇÃO 1: PARADA E SOM ALEATÓRIO (Chega em 3000ms)
            await new Promise(resolve => setTimeout(resolve, STOP_ONE_START)); 
            
            // NOVO: Reset forçado do preço
            priceElement.textContent = "R$ 00,00";
            
            // Toca um som aleatório e ESPERA ele acabar.
            await playRandomSound(); 
            
            // C. CORREÇÃO: GARANTIA DE SINCRONIZAÇÃO DA PARTIDA DO SPAMTON (5000ms)
            const timeSinceAnimationStart = Date.now() - animationStartTimestamp;
            const timeToWaitUntilMove = STOP_ONE_END - timeSinceAnimationStart;

            // Espera o tempo restante para o Spamton começar a andar.
            if (timeToWaitUntilMove > 0) {
                await new Promise(resolve => setTimeout(resolve, timeToWaitUntilMove));
            }

            // O preço dispara AGORA (em 5000ms ou depois, se o som foi longo)
            rapidlyIncreasePrice(); 
            
            // D. SINCRONIZAÇÃO 2: PARADA E RISADA (Chega em 7000ms)
            // Espera o Spamton andar do ponto 50% até 70% (2000ms)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Toca a risada
            spamtonLaughAudio.currentTime = 0; 
            spamtonLaughAudio.play().catch(e => console.log("Erro ao tocar risada:", e));
            
            // E. LIMPEZA FINAL (Espera a risada terminar e ele sair)
            // Espera o resto da animação: STOP_TWO_START (7000ms) até o fim (11500ms) = 4500ms
            const timeAfterLaughStart = animationDuration - STOP_TWO_START;
            await new Promise(resolve => setTimeout(resolve, timeAfterLaughStart)); 

            // LIMPEZA
            spamtonGif.classList.remove('animate'); 
            isSpamtonActive = false; 
            startPermanentTremor(); 
            
        }, startDelay); 
    }

    // Adiciona o 'async' na função principal e ajusta o event listener
    buyButton.addEventListener('click', startSpamtonEasterEgg);
});












// que bixo INFERNAL de fazer funcionar. 
// bom, são 04h09 da madrugada mas pelo menos esse djabo funciona do jeito que eu queria >:)