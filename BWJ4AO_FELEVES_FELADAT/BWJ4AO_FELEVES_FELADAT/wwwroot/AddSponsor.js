//navbar
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
        document.getElementById("header").style.backgroundColor = " #000000b3";
        //document.getElementById("header").style.borderRadius="30px";
    } else {
        document.getElementById('header').style.removeProperty("background-color");
    }
}
