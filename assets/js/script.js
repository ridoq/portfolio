const nav = document.querySelector(".navbar")
let lastScrollY = 0

window.addEventListener("scroll", function(){
    if(window.scrollY > lastScrollY){
        nav.classList.add("scrl")
    }else{
        nav.classList.remove("scrl")
    }
    lastScrollY = window.scrollY
})

const expCount = document.getElementById('exp-count');
  const now = new Date();
  const targetDate = new Date(2022, 12, 1);
  const diffInYears = (now - targetDate) / (1000 * 60 * 60 * 24 * 365.25);
  expCount.textContent = Math.floor(diffInYears) + '+';

const prjCount = document.getElementById('prj-count');
const cards = document.querySelectorAll('#nav-project div.card');
prjCount.textContent = cards.length + '+';

const crfCount = document.getElementById('crf-count');
const crf = document.querySelectorAll('#nav-certificate div.card');
crfCount.textContent = crf.length + '+';