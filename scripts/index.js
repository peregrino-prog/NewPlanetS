const locationDict = {
    'mapa': 'index.html'
};

function goTo(location) {
    window.location.href = locationDict[location];
};

const mapContainer = document.getElementById("svg-container");
const cursorImage = document.getElementById("cursor");

mapContainer.addEventListener("mousemove", function(event) {
    let rect = this.getBoundingClientRect();
    let x = Math.round(event.clientX - rect.left);
    let y = Math.round(event.clientY - rect.top);

    

    document.getElementById("coordinates").innerText = "Coordenadas: (" + x + ", " + y + ")";

    /*
    cursorImage.style.left = `${event.clientX}px`;
    cursorImage.style.top = `${event.clientY}px`;
    cursorImage.style.display = "block";
    */
});





const mapRedirectsDict = {
    '': '',
    'ilha-do-bahava': 'ilha_bahava.html',
    'transilvania': 'ilha_transilvania.html',
    'ilha-dos-cavaleiros': 'ilha_cavaleiros.html',
    'subterranea': 'ilha_cavaleiros.html',
    'cidade-smullyan': 'ilha_cavaleiros.html',
    'arabian-knights': 'ilha_cavaleiros.html',
    'vila-normal': 'ilha_cavaleiros.html',
    'veneza': 'ilha_cavaleiros.html',
    'arabian-knights': 'ilha_cavaleiros.html',
    'ilha-dos-questionadores': 'ilha_cavaleiros.html',
    'ilha-dos-mortos-vivos': 'ilha_cavaleiros.html',
    'ilha-dos-robots': 'ilha_robots.html',
    'floresta-do-esquecimento':'ilha_cavaleiros.html'
};

/*
    Para cada chave no dicionário mapRedirectsDict, vai procurar o path com esse id no svg e:
        - adicionar a classe CSS 'clickable-svg-element' ao path
        - adicionar um evento on click para redirecionar a página correta
*/
Object.keys(mapRedirectsDict).forEach(elementId => {
    const el = document.getElementById(elementId);
    if (el) {
        el.classList.add('clickable-svg-element');
        el.addEventListener('click', () => {
            window.location.href = mapRedirectsDict[elementId];
        });
    }
});