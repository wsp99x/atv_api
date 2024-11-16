export async function buscarDados(name = '', status = '') {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Erro na rede');
    }
    return response.json();
}
