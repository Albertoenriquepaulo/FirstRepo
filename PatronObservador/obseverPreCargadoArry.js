// PATRÓN DE DISEÑO OBERVADOR
// https://www.youtube.com/watch?v=dAjMVQ5jCGE&t=66s
// lo que está en el video

class Article{
    arryArticles = [];
    subsciptors = [];
    constructor() {
        this.arryArticles = ['Apple', 'Orange'];
    }

    addArticle (article){
        this.arryArticles.push(article);
        this.notifySubscriptors();
        console.log(view.render);
    }

    addSubscriptor(functionToExecute){
        this.subsciptors.push(functionToExecute);
    }

    notifySubscriptors(){
        this.subsciptors.forEach(subscriptorFunctionToExecute => {
            subscriptorFunctionToExecute(this.arryArticles);
        });
    }
}

class View {
    constructor() {
        articles.addSubscriptor(this.render);
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
