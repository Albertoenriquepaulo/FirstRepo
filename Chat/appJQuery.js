// ============ C O D E W O R K S   A S S I G N M E N T ================
// By Alberto Paulo
//
// USING JQUERYS
//
// Simple chat application using HTML, CSS, JavaScript and jQuery. 
// It is a single page, that opens in the browser, and shows the 
// messages in colored bubbles (think something like WhatsApp). 
// On one side the computer will generate a random conversation, 
// on the other side the user can post messages. The screen 
// automatically flows and follows the messages posted, like in all 
// chat apps. Eachg message should also have a snall indication of 
// the time it was sent.

const userMessage = $(".txtbox");
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

//JQuery EventListener
$("#btnSend").submit(loadMessage);

function loadMessage(e) {
    e.preventDefault();
    //creating element li to add to div
    const liUser = $("<li>").addClass("user");
    const liTime = $('<li>').addClass("timeUser");    
    liUser.text(userMessage.val());
    liTime.text(getTime());
    //Adding to HTML
    if (userMessage.val().replace(/ /g, '') !== '') {        
        createAndAddComputerMessage();
        $('#chat').append(liTime);
        $("#chat").append(liUser);
        showFormBottom('#chatbox');
    } 
    userMessage.val('');
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
    form = $(formName);
    form.scrollTop(form[0].scrollHeight);
}

function createAndAddComputerMessage() {
    const liComputer = $("<li>").addClass("computer");
    const liTime = $("<li>").addClass("timeComputer");
    let randomNumber = getRandomNumber(computerMsg.length);
    setTimeout(function () {
        liComputer.text(computerMsg[randomNumber]);
        liTime.text(getTime());
        $("#chat").append(liTime);
        $("#chat").append(liComputer);
        showFormBottom('#chatbox');
    }, 1000 * getRandomNumber(5));

}

function getTime() {
    let months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic']
    let date = new Date;
    let seconds = date.getSeconds(), minutes = date.getMinutes(), hour = date.getHours();
    let year = date.getFullYear(), month = date.getMonth(), day = date.getDate();
    return months[month] + ' ' + day + ', ' + year + '. ' + hour + ':' + minutes + ':' + seconds;

}

