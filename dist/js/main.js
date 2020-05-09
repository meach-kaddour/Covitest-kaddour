//Active link


// var menu = document.querySelector(".navbar__menu");
// var link = menu.querySelector(".navbar__link");
// for (var i = 0; i < link.length; i++) {
//     link[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("navbar__link--active");
//         current[0].className = current[0].className.replace(" navbar__link--active", "");
//         this.className += " navbar__link--active";
//     });
// }


// Declaration des element HTML
const dmrTest = document.querySelector('.btn__lancer');
const donnesTest = document.querySelector('#inform');
const test = document.querySelector('#questionnaire');

// const first = document.querySelector('.circle');
// const second = document.querySelector('.steper__question');
// const third = document.querySelector('.steper__resultat');

const precBtn = document.querySelector('.precedent');
const nextBtn = document.querySelector('.suivant');
const currentQuestion = document.querySelector('.question');
const answerInputs = document.querySelector('.reponse-inputs')
const progresBar = document.querySelector('.barre')
const questionNumber = document.querySelector('.question-number')



//
// debut du test


function showTest() {
    // first[0].classList.remove('porte-par');
    // first[1].classList.add('porte-par');

    // second.classList.add('porte-par');
    donnesTest.style.display = 'none';
    test.style.display = 'block';
    precedentBtn()
}

// Function  Btn  Precedent

let currentQuestionIndex = 0

function precedentBtn() {

    if (currentQuestionIndex === 0) {
        precBtn.style.visibility = 'hidden';
    } else {
        precBtn.style.visibility = 'visible';

    }
}