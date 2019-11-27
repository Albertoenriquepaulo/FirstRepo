//Variables
//const tweetList = document.querySelector('#lista-tweets');
const tweetList = QSelector('#lista-tweets');
console.log(tweetList);

//Event Lsteners

EventListeners();

function EventListeners(){
    //Cuando se envia el formulario
    QSelector('#formulario').addEventListener('submit', AddTweet);
    //Delete tweets
    tweetList.addEventListener('click', DeleteTweet);
    //Load content from LS
    document.addEventListener('DOMContentLoaded', LSLoaded)
}

//Funciones
function QSelector(value){
    return document.querySelector(value);
}

//Añadir tweet del formulario
function AddTweet(e){
    e.preventDefault();
    //e.stopPropagation();
    //Leer el valor del text area
    //const tweetText = document.getElementById('tweet').value;
    //const tweetText = document.querySelector('#tweet').value;
    const tweetText = QSelector('#tweet').value;
    if (tweetText != '') {
        AddTweetSupport(tweetText);
        //Añadir a local storage
        AddTweetToLS(tweetText);
    }else{
        QSelector('#tweet').focus();
    }
}

function AddTweetSupport(tweetText){
    //crar boton Eliminar, conn un enlace
    const btnDel = document.createElement('a');
    btnDel.classList = 'borrar-tweet';
    btnDel.textContent = 'X';
    
    //Creando elemento lista y lo añadimos
    const listElement = document.createElement('li');
    listElement.textContent = tweetText; //también podria hacerse con innerText
    listElement.appendChild(btnDel); //adding el boton eliminar al elemento de la lista
    tweetList.appendChild(listElement); //add tweet to the list
    QSelector('#tweet').value = '';
    QSelector('#tweet').focus();
}

function DeleteTweet(e){
    //e.stopPropagation();
    e.preventDefault();
    if (e.target.classList.contains('borrar-tweet')) {
        e.target.parentElement.remove();
        DelTweetLS(e.target.parentElement.textContent);
        //console.log(e.target.parentElement.textContent);
    }
}

function AddTweetToLS(tweet){
    let tweets;
    tweets = GetTweetLS();
    //Adding new tweet
    tweets.push(tweet);
    //Converting from array to string for LS
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function GetTweetLS(){
    let tweets;
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        //convierte el string en LS en Array
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;

}

function DelTweetLS(tweet){
    let tweets;
    tweets = GetTweetLS();
    tweet = DelLastChar(tweet);
    tweets.forEach(function(tweetLS, index) {
        if (tweetLS === tweet) {
            tweets.splice(index, 1);
        }
    });
    //console.log(DelX(tweet));
    //return tweets;
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function DelLastChar(str){
    return str.substring(0, str.length - 1);
}

//Show LS data in the List
function LSLoaded(){
    let tweets;
    tweets = GetTweetLS();
    tweets.forEach(function(tweet) {
        AddTweetSupport(tweet);
    });
}