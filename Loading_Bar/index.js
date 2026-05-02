const percentText = document.getElementById('percent');
const bar = document.getElementById('bar');
let percent = 0;

function load(){
    if (percent<100){
        percent++;
        percentText.innerText = percent + "%";
        bar.style.width = percent + "%";
        setTimeout(load,40);
    }
}
window.onload = load;