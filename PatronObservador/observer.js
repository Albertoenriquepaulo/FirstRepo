// PATRÓN DE DISEÑO OBERVADOR
// Este es hecho por mi y como modificación del otro que es de un video
// Aqui no rpecargo los articulos, el otro es el original del video 
// obseverPreCargadoArry.js https://www.youtube.com/watch?v=dAjMVQ5jCGE&t=66s

class Article {
    arryArticles = [];
    subsciptors = [];
    constructor() {
    }

    addArticle(article) {
        this.arryArticles.push(article);
        this.addSubscriptor(view.render);
        this.notifySubscriptor();
    }

    addSubscriptor(functionToExecute) {
        this.subsciptors.push(functionToExecute);
    }

    notifySubscriptor() {
        this.subsciptors.forEach(subscriptorFunctionToExecute => {
            subscriptorFunctionToExecute(this.arryArticles);
        });
    }
}

class View {
    constructor() {
        // articles.addSubscriptor(this.render);
    }

    render(arryArticles) {
        document.querySelector('ul').innerHTML = arryArticles.map(article => `<li>${article}</li>`).join('');
    }
}

// const articles = ['Apple', 'Orange'];
// document.querySelector('ul').innerHTML = articles.map( article => `<li>${article}</li>`).join('');
// document.querySelector('input').value = '';
document.querySelector('button').addEventListener('click', e => {
    e.preventDefault();
    articles.addArticle(document.querySelector('input').value);
})

const articles = new Article();
const view = new View();
