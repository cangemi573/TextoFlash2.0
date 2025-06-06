document.getElementById('btnAnalyze').addEventListener('click', () => {
    const text = document.getElementById('inputText').value.trim();

    if (!text) {
        alert('Por favor, ingresá un texto.');
        return;
    }

    // Ejemplo simple: resumen con los primeros 2 párrafos
    const summary = text.split('\n').slice(0, 2).join('\n');

    // Análisis básico: contar palabras
    const wordCount = text.split(/\s+/).filter(w => w).length;

    document.getElementById('summary').innerText = `Resumen:\n${summary}`;
    document.getElementById('analysis').innerText = `Cantidad de palabras: ${wordCount}`;
    document.getElementById('results').style.display = 'block';
});
