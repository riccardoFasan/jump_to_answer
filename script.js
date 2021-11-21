const body = document.querySelector('body');
const correctAnswer = body.querySelector('.accepted-answer');

const darkColor = '#273C3B';
const lightColor = '#D9FFE4';

const iconPath = 'icons/stackOverflowBulb.svg';

if (correctAnswer) {
    changeAnswerColor();
    injectButton();
    setScrollBehaviorAsSmooth();
} else {
    console.log('JumpToAnswer: No correct answers yet 😭.');
}

function changeAnswerColor() {
    correctAnswer.style.backgroundColor = getColor();
}

function getColor() {
    const isDarkTheme = body.classList.contains('theme-dark');
    return isDarkTheme ? darkColor : lightColor;
}

function injectButton(){
    const button = document.createElement('a');
    button.setAttribute('id', 'jumpToAnswerButton');
    button.setAttribute('class', 'ws-nowrap s-btn s-btn__primary');
    button.setAttribute('href', `#${getAnswerId()}`);

    const text = document.createElement('div');
    text.setAttribute('class', 'text');
    text.innerText = 'Jump to Answer';
    
    const icon = document.createElement('div');
    icon.setAttribute('class', 'icon');
    icon.style.backgroundImage = `url(${getImageURL()})`;

    const questionHeader = body.querySelector('#question-header');

    questionHeader.appendChild(button);
    button.appendChild(icon);
    button.appendChild(text);
}

function getAnswerId() {
    return correctAnswer.getAttribute('id');
}

function getImageURL() {
    return chrome.runtime.getURL(iconPath);
}

function setScrollBehaviorAsSmooth() {
    const html = document.querySelector('html');
    html.style.scrollBehavior = 'smooth';
}