import { buscarDados } from '/src/js/componentes/api.js';
import { mostrarCard } from '/src/js/componentes/ui.js';

async function carregarDados(name, status) {
    try {
        const dadosExternos = await buscarDados(name, status);
        const appContainer = document.getElementById('app');
        appContainer.innerHTML = ''; // Limpar os resultados anteriores
        mostrarCard(appContainer, dadosExternos);
    } catch (error) {
        console.error('Erro ao buscar os dados', error);
    }
}

document.getElementById('searchForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o recarregamento da página
    const name = document.getElementById('name').value;
    const status = document.getElementById('status').value;
    carregarDados(name, status);
});
