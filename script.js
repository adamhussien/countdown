const dayElement = document.querySelector('.days');
const hourElement = document.querySelector('.hours');
const minuteElement = document.querySelector('.minutes');
const secondElement = document.querySelector('.seconds')
const countdown = () => {
    const dateTime = new Date("2024-06-30T00:00:00");
    const now = new Date().getTime();
    const datenow = dateTime - now;
    const day = Math.floor(datenow / (1000 * 60 * 60 * 24));
    const hour = Math.floor((datenow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((datenow % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((datenow % (1000 * 60 )) / 1000);
    dayElement.textContent = day;
    hourElement.textContent = hour.toString().padStart(2, '0');
    minuteElement.textContent = minutes.toString().padStart(2, '0');
    secondElement.textContent = seconds.toString().padStart(2, '0');
    if (datenow <= 0) {
        clearInterval(timeinterval);
        dayElement.textContent = "0";
        hourElement.textContent = '00';
        minuteElement.textContent = '00';
        secondElement.textContent = '00';
    }
};

countdown();
const timeinterval = setInterval(countdown, 1000);



