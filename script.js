function releaseCountdown() {
    const releaseDate = new Date('July 07, 2022 09:00');
    const today = new Date();
    const difference = releaseDate - today;
   
    // Высчитываем время в миллисекундах
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    // Отображаем время (дни, часы, минуты и секунды) на сайте
    const displayDay = Math.floor(difference/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHours = Math.floor((difference%msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHours;

    const displayMinutes = Math.floor((difference%msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinutes;

    const displaySeconds = Math.floor((difference%msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySeconds;

    // Останавливаем счетчик, когда он доходит до конца нужной даты
    if (difference <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timer);
        console.log(timer);
        isNowAvailable();
    }
}

// Запускаем отсчет
let timer = setInterval(releaseCountdown, 1000);

// Меняем параграф по истечении времени
function isNowAvailable() {
    const availableHeading = document.querySelector('p');
    availableHeading.textContent = 'finally available';
}

// Кнопка с музыкой
const button = document.querySelector('#btn');
const audio = document.querySelector('#song');

button.addEventListener ('click', function() {

    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
})