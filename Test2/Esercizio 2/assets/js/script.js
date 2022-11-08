let jsp_current_page = 1;
const jsp_records_per_page = 2;

let users = [
    {id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A'},
    {id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A'},
    {id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A'},
    {id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A'},
    {id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A'},
    {id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A'},
    {id: 7, nome: 'Gianni', cognome: 'Bianchi', classe: 'A'},
    {id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A'},
];

function jsp_num_pages() {
    return Math.ceil(users.length / jsp_records_per_page);
}

//ti rioporta alla prima pagina

function jsp_prev_page() {
    if (jsp_current_page > 1) {
        jsp_current_page--;
        jsp_change_page(jsp_current_page);
    }
}
function jsp_next_page() {
    if (jsp_current_page < jsp_num_pages()) {
        jsp_current_page++;
        jsp_change_page(jsp_current_page);
    }
}

//ti riporta all'ultima pagina

function jsp_change_page(page) {
    const listing_table = document.getElementById('lista');
    let page_span = document.getElementById('page');

    if (page < 1) {
        page = 1;
    }
    if (page > jsp_num_pages()) {
        page = jsp_num_pages();
    }

    listing_table.innerHTML = '';

    for (let i = (page - 1) * jsp_records_per_page; i < (page * jsp_records_per_page) && i < users.length; i++) {
        listing_table.innerHTML += `<tr><td>${users[i].id}</td><td>${users[i].nome}</td><td>${users[i].cognome}</td><td>${users[i].classe}</td></tr>`;
    }
    page_span.innerHTML = `${page}/${jsp_num_pages()}`;

}

window.onload = () => {
    document.getElementById('btn-prev').addEventListener('click', (e) => {
        e.preventDefault();
        jsp_prev_page();
    });
    

    document.getElementById('btn-next').addEventListener('click', (e) => {
        e.preventDefault();
        jsp_next_page();
    });

    jsp_change_page(1);
};

