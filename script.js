document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');

    // Função para mudar o passo (tela) do jogo
    function mudarPasso(proximoPassoId) {
        // Esconde todos os passos
        const todosOsPassos = document.querySelectorAll('.passo');
        todosOsPassos.forEach(passo => {
            passo.classList.remove('ativo');
        });

        // Mostra o passo desejado
        const proximoPasso = document.getElementById(`passo-${proximoPassoId}`);
        if (proximoPasso) {
            proximoPasso.classList.add('ativo');
            // Leva o usuário ao topo da tela, útil para telas menores
            main.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Adiciona um listener de clique a todos os botões de próxima etapa
    main.addEventListener('click', (event) => {
        const target = event.target;

        // Se o clique foi em um botão que tem o atributo 'data-proximo'
        if (target.classList.contains('btn-proximo')) {
            const proximoPassoId = target.getAttribute('data-proximo');
            if (proximoPassoId) {
                mudarPasso(proximoPassoId);
            }
        }
        
        // Se o clique foi em um botão de reiniciar
        if (target.classList.contains('btn-reiniciar')) {
            // Volta para o passo inicial (passo-0)
            mudarPasso(0);
        }
    });

    // Inicia o jogo no passo 0 (garante que está ativo ao carregar)
    mudarPasso(0);
});