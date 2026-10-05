        document.addEventListener('DOMContentLoaded', () => {
            // Seleção de elementos da DOM
            const btnAjuda = document.querySelector('.botao-ajuda');
            const btnFecharModal = document.querySelector('.botao-fechar');
            const btnFecharX = document.querySelector('.botao-fechar-x');
            const modal = document.getElementById('modalAjuda');

            // Função para Abrir o Modal
            function abreModal() {
                if (modal) {
                    modal.classList.add('visivel');
                    btnAjuda.setAttribute('aria-expanded', 'true');
                    // Trava o scroll da página ao fundo
                    document.body.style.overflow = 'hidden';
                    // Foca no botão fechar para acessibilidade por teclado
                    if (btnFecharX) btnFecharX.focus();
                }
            }

            // Função para Fechar o Modal
            function fechaModal() {
                if (modal) {
                    modal.classList.remove('visivel');
                    btnAjuda.setAttribute('aria-expanded', 'false');
                    // Restaura o scroll do corpo
                    document.body.style.overflow = '';
                    // Devolve o foco ao botão que abriu o modal
                    if (btnAjuda) btnAjuda.focus();
                }
            }

            // Event Listeners seguros (com checagem de existência)
            if (btnAjuda) {
                btnAjuda.addEventListener('click', abreModal);
            }

            if (btnFecharModal) {
                btnFecharModal.addEventListener('click', fechaModal);
            }

            if (btnFecharX) {
                btnFecharX.addEventListener('click', fechaModal);
            }

            // Fechar ao clicar fora da caixa branca (Overlay)
            if (modal) {
                modal.addEventListener('click', (evento) => {
                    if (evento.target === modal) {
                        fechaModal();
                    }
                });
            }

            // Fechar com a tecla ESC (Acessibilidade)
            document.addEventListener('keydown', (evento) => {
                if (evento.key === 'Escape' && modal.classList.contains('visivel')) {
                    fechaModal();
                }
            });
        });