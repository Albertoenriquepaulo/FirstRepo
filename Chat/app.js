//https://stackoverflow.com/questions/42256877/how-to-create-chat-bubbles-like-facebook-messenger
//https://github.com/alexsicart/ChatBot
//https://code.tutsplus.com/es/tutorials/how-to-create-a-simple-web-based-chat-application--net-5931
//https://subscription.packtpub.com/book/application_development/9781786468949/1/ch01lvl1sec9/building-an-html-and-javascript-chat-client
// ============ C O D E W O R K S   A S S I G N M E N T ================
// By Alberto Paulo
//
// USING JAVA SCRIPT
//
// Simple chat application using HTML, CSS, JavaScript and jQuery. 
// It is a single page, that opens in the browser, and shows the 
// messages in colored bubbles (think something like WhatsApp). 
// On one side the computer will generate a random conversation, 
// on the other side the user can post messages. The screen 
// automatically flows and follows the messages posted, like in all 
// chat apps. Eachg message should also have a snall indication of 
// the time it was sent.
const computerMsg = [
    'I feel very good, what about you?',
    'This is my real first web aplication, using JS, JQuery, CSS and HTML',
    'I feel proud of you',
    'Have you noticed I write a message with no sense',
    'Somebody programed me to write this crazy messages',
    'Be carefull with the guy who developed this',
    'JS is a kind of messy languages',
    'Hi... Good day!!!',
    'Do something good for you',
    'Turtles laying eggs',
    'I love drinking',
    'Have a good behaviors',
    'One month learning JS, CSS and HTML',
    'The TypeScript layer over JS, make JS to be a Language',
    'I am studied Angular, and it is very intersting',
    'A fish rots from the head down',
    'You can lead a whore to culture but you cant make her think',
    'Zero tolerance',
    'Women and children first'
];

const userMessage = qs('.txtbox');
//const chatBox = qs('#chatbox');

qs('#btnSend').addEventListener('submit', loadMessage);

function loadMessage(e) {

    e.preventDefault();
    const liUser = createElement('li', 'user'); //creating element li to add to div
    const liTime = createElement('li', 'timeUser');
    //const liComputer = createElement('li', 'computer'); //creating element li to add to div
    //let randomNumber = getRandomNumber(computerMsg.length);
    liUser.innerHTML = userMessage.value;
    liTime.innerHTML = getTime();
    /*setTimeout(function(){ 
        liComputer.innerHTML= computerMsg[randomNumber];
        qs('#chat').appendChild(liComputer); 
    }, 1500);*/
    //liComputer.innerHTML= computerMsg[randomNumber];
    /*counter++;
    if (counter === 4) {
        document.getElementById('chat').removeChild(document.getElementById('chat').getElementsByTagName('li')[0]);
        document.getElementById('chat').removeChild(document.getElementById('chat').getElementsByTagName('li')[0]);
        counter --;
    }*/
    //Adding to HTML
    if (userMessage.value.replace(/ /g, '') !== '') {
        createAndAddComputerMessage();
        qs('#chat').appendChild(liTime);
        qs('#chat').appendChild(liUser);
        //qs('#chat').appendChild(liComputer); 
        showFormBottom('#chatbox');
        userMessage.value = '';
    } else {
        userMessage.value = '';
    }

}

//FUNCIONES
function getRandomNumber(maxNum) {
    return Math.round(Math.random() * (maxNum - 1));
}

function createElement(tipo, clase) {
    const element = document.createElement(tipo);
    element.className = clase;
    return element;
}

function showFormBottom(formName) {
    form = qs(formName);
    form.scrollTop = form.scrollHeight;
}

function createAndAddComputerMessage() {
    const liComputer = createElement('li', 'computer'); //creating element li to add to div
    const liTime = createElement('li', 'timeComputer');
    let randomNumber = getRandomNumber(computerMsg.length);
    setTimeout(function () {
        liComputer.innerHTML = computerMsg[randomNumber];
        liTime.innerHTML = getTime();
        qs('#chat').appendChild(liTime);
        qs('#chat').appendChild(liComputer);
        showFormBottom('#chatbox');
    }, 1000 * getRandomNumber(5));

}

function getTime() {
    let months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic']
    let date = new Date;
    let seconds = date.getSeconds(), minutes = date.getMinutes(), hour = date.getHours();
    let year = date.getFullYear(), month = date.getMonth(), day = date.getDate();
    //strDate = months[month] + ' ' + day + ', ' + year + '. ' hour + ':' + minutes + ':' + seconds;
    return months[month] + ' ' + day + ', ' + year + '. ' + hour + ':' + minutes + ':' + seconds;

}

function qs(value) {
    return document.querySelector(value);
}

function cl(variable) {
    console.log(variable);
}


let math=$("#chatbox");
        //math.text(math.text() + " woow...")
        console.log(math);

