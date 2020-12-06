const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

window.onscroll = function () { scroll() };

function scroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").style.backgroundColor = "#00000066";
        document.getElementById("nav").style.borderRadius = "30px";
    } else {
        document.getElementById('nav').style.removeProperty("background-color");
    }
}