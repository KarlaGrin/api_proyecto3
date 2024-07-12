const API_URL = "https://mindicador.cl/api";



// Obtener los valores del día actual al cargar la página
window.addEventListener('load', async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        document.getElementById('dollarValue').innerText = `$${data.dolar.valor}`;
        document.getElementById('euroValue').innerText = `€${data.euro.valor}`;
        document.getElementById('ufValue').innerText = `UF ${data.uf.valor}`;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
});


