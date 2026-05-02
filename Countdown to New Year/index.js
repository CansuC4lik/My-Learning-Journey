const now =new Date()
const nextYear = now.getFullYear() + 1;
const targetDate = new Date(`January 1, ${nextYear} 00:00:00`);

document.getElementById('target-year').textContent = nextYear

function updateCountdown(){
    const currentTime = new Date();
    const diff = targetDate - currentTime;
    if (diff <= 0){
        document.getElementById('days').textContent = 0;
        document.getElementById('hours').textContent = 0;
        document.getElementById('minutes').textContent = 0;
        document.getElementById('seconds').textContent = 0;
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor(diff / (1000 * 60 * 60) % 24)
    const minutes = Math.floor(diff / (1000 * 60) % 60)
    const seconds = Math.floor(diff / (1000) %60)

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}
setInterval(updateCountdown,1000)
updateCountdown();