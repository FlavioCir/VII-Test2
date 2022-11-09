class Pagination {
    constructor (items = [], pageSize = 10) { //colui che costruisce l'istanza di classe, quello che c'è stra le parentesi tonde sono i parametri di cui la classe a bisopgno di lavorare
        this.items = items; //nelle parentesi graffe ci va la definizione dei parametri
        this.pageSize = Math.floor(pageSize); //quando dovrai usare questo usa il valore che ti è arrivata dall'istanza
        this.totalPages = Math.ceil(items.length / this.pageSize) || 1; //valori fissi 
        this.currentPage = 1; //valori fissi
    }
    
    prevPage() { //metodi
        this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;
        return this; //ritorna il metodo
    }

    nextPage() {
        this.currentPage = (this.currentPage + 1 <= this.totalPages) ? this.currentPage + 1 : this.currentPage;
        return this;
    }

    firstPage() {
        this.currentPage = 1;
        return this;
    }

    lastPage() {
        this.currentPage = this.totalPages;
        return this;
    }

    getVisibleItems() {
        const start = this.currentPage * this.pageSize - this.pageSize;
        const end = this.currentPage * this.pageSize;
        const lista = this.items.slice(start, end);
        const wrapper = document.querySelector('#wrapper');
        let strHtml = '';
        lista.forEach((item) => {
            strHtml += `<tr><td>${item.id}</td><td>${item.nome}</td><td>${item.cognome}</td><td>${item.classe}</td></tr>`;
        });
        wrapper.innerHTML = strHtml;
    }
}

const users = [
    {id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A'},
    {id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A'},
    {id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A'},
    {id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A'},
    {id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A'},
    {id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A'},
    {id: 7, nome: 'Gianni', cognome: 'Bianchi', classe: 'A'},
    {id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A'},
];

p = new Pagination(users, 2);
p.getVisibleItems();
const primo = document.querySelector('#primo');
primo.addEventListener('click', function() {
    p.firstPage();
    p.getVisibleItems();
});
const ultimo = document.querySelector('#ultimo');
ultimo.addEventListener('click', function() {
    p.lastPage();
    p.getVisibleItems();
});
const precedente = document.querySelector('#precedente');
precedente.addEventListener('click', function() {
    p.prevPage();
    p.getVisibleItems();
});
const successivo = document.querySelector('#successivo');
successivo.addEventListener('click', function() {
    p.nextPage();
    p.getVisibleItems();
});
