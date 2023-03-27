/*
Consegna:
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user).
Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
*/

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];

function iconTemplate(icon) {
    const template = `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <div class="cardBody d-flex flex-column text-center p-3" style="color:${icon.color}">
                <i class="${icon.prefix}${icon.family} ${icon.prefix}${icon.name} fs-1"></i>
                <div class="text-uppercase">${icon.name}</div>
            </div>
        </div>
    </div>
    `;
    return template;
}

// la funzione crea un array chiamato cardContent mappando ogni elemento dell'argomento list alla funzione iconTemplate usando il metodo map()
// la funzione aggiunge ogni elemento dell'array cardContent all'innerhtml dell'elemento row usando un loop foreach() e l'operatore di concatenazione delle stringhe (+=)
function initIcons(list) {
    const row = document.querySelector('.row');
    row.innerHTML = '';
    let cardContent = list.map((iconTpl) => {
        return iconTemplate(iconTpl);
    });
    cardContent.forEach((content) => row.innerHTML += content);
}

// La funzione filtra l'array di icone in base al fatto che la proprietà del tipo di ogni icona corrisponda al tipo selezionato o se il tipo selezionato sia 'all', utilizzando il metodo filter() 
function selectIcon() {
    const select = document.querySelector('select');
    select.addEventListener('change', () => {
        let selectedType = select.value;
        const filteredIcons = icons.filter((icon) => icon.type == selectedType || selectedType == 'all');
        initIcons(filteredIcons);
    });
}

initIcons(icons);
selectIcon();