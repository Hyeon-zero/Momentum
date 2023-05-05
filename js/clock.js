const clockContainer = document.querySelector('.class-clock'),
    clockTitle = clockContainer.querySelector('div');

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}
function init() {
    setInterval(getTime, 1000);
}
init();

// :${seconds < 10 ? `0${seconds}` : seconds}

function getGreeting() {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) return "Good morning";
    else if (currentHour >= 12 && currentHour < 18) return "Good afternoon";
    else return "Good evening";
}

const greetingElement = document.querySelector('.class-name');
greetingElement.textContent = getGreeting() + ", ";