const botaoComprar = document.querySelector(".btn-comprar");
const price = document.querySelector(".preco");
const spamton = document.getElementById("spamton");

// Evento do easter egg
botaoComprar.addEventListener("click", () => {
    
    // Ativa animações
    spamton.classList.add("spamton-active");
    price.classList.add("preco-pushed");

    // Contador de 9 crescendo
    let count = 0;

    const interval = setInterval(() => {
        count++;

        // Exemplo: R$ 9,99 → R$ 99,99 → R$ 999,99 → R$ 9999,99...
        const left = "9".repeat(count);
        const right = "9".repeat(2);

        price.textContent = `R$ ${left},${right}`;

        // Para depois de MUITOS 9 (adequado pra animação)
        if (count > 20) {
            clearInterval(interval);
        }

    }, 80);
});