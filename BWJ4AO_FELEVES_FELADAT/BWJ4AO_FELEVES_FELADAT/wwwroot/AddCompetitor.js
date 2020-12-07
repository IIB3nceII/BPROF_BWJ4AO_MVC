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

//Progress
const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let max = 4;
let current = 1;

firstNextBtn.addEventListener("click", function () {
    slidePage.style.marginLeft = "-25%";
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    current += 1;
});

nextBtnSec.addEventListener("click", function () {
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});

nextBtnThird.addEventListener("click", function () {
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});

submitBtn.addEventListener("click", function () {
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
    setTimeout(function () {
        alert("Competitor added");
        location.reload();
    }, 800);
});

prevBtnSec.addEventListener("click", function () {
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnThird.addEventListener("click", function () {
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});