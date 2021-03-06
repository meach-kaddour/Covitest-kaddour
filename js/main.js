// Active link


var menu = document.querySelector(".navbar__menu");
var link = menu.querySelector(".navbar__link");
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("navbar__link--active");
        current[0].className = current[0].className.replace(" navbar__link--active", "");
        this.className += " navbar__link--active";
    });
}


// Declaration des element HTML
const dmrTest = document.querySelector('.btn__lancer');
const donnesTest = document.querySelector('#inform');
const test = document.querySelector('#questionnaire');

const currentQuestion = document.querySelector('.question');
const answerInputs = document.querySelector('.reponse-inputs');

const precBtn = document.querySelector('.precedent');
const nextBtn = document.querySelector('.suivant');


const progresBar = document.querySelector('.progress__question');
const questionNumber = document.querySelector('.question-number');

// Event Listner  
dmrTest.addEventListener('click', showTest)




// Fonctions
let currentQuestionIndex = 0;

function showTest() {
    donnesTest.style.display = 'none';
    test.style.display = 'block';
    precedentBtn();
    showQuestion(questions[currentQuestionIndex]);

    // Event Listner BtnS

    nextBtn.addEventListener('click', nextQues);
    precBtn.addEventListener('click', precedQues);
}
// Next Question

function nextQues() {
    if (currentQuestionIndex < 21) {
        showQuestion(questions[currentQuestionIndex]);
        currentQuestionIndex++;
        addBarre(currentQuestionIndex);
        precedentBtn();

    };
};
// Precedent Question
function precedQues() {

    showQuestion(questions[currentQuestionIndex]);
    currentQuestionIndex--;
    addBarre(currentQuestionIndex);
    precedentBtn();


};



//  function pour add Number et barre width of question 


function addBarre(x) {

    const qNumber = x + 1

    questionNumber.innerText = qNumber
    progresBar.style.width = `calc(${qNumber} * calc(100% / 22))`

}








// Function pour hiden Btn precedent

function precedentBtn() {

    if (currentQuestionIndex === 0) {
        precBtn.style.visibility = 'hidden';
    } else {
        precBtn.style.visibility = 'visible';

    }
}



//show Question

function showQuestion(question) {

    currentQuestion.innerText = question.question
    answerInputs.innerHTML = ''
    const inputAnswer = question.input.answer
    const input = question.input


    if (question.input.type === 'radio') {

        inputAnswer.forEach(answer => {

            answerInputs.innerHTML += `
                    <div>
                        <input type="radio" name="${input.Number}" id="${answer.text}">
                        <label for="${answer.text}">
                        <i class="fas ${answer.icon}"></i>
                        <span>${answer.text}</span> </label>
                    </div>`
        })

    } else {

        answerInputs.innerHTML += `<input type="number" name="${input.Number}" id="${input.name}" min="${input.min}" max="${input.max}" placeholder="${input.min} - ${input.max}">
                                    <span class="input-span">${input.name}</span>`
    }

}





const questions = [{
    question: 'Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?',

    input: {
        type: 'radio',
        Number: 'Q1',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Quelle est votre température corporelle ?',

    input: {
        type: 'number',
        Number: 'Q2',
        name: 'degrés',
        min: 34,
        max: 42
    }
}, {
    question: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',

    input: {
        type: 'radio',
        Number: 'Q3',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',

    input: {
        type: 'radio',
        Number: 'Q4',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Ces derniers jours, avez-vous un mal de gorge ?',

    input: {
        type: 'radio',
        Number: 'Q5',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',

    input: {
        type: 'radio',
        Number: 'Q6',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?',

    input: {
        type: 'radio',
        Number: 'Q7',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',

    input: {
        type: 'radio',
        Number: 'Q8',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',

    input: {
        type: 'radio',
        Number: 'Q9',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Actuellement, comment vous vous sentez ?',

    input: {
        type: 'radio',
        Number: 'Q10',
        answer: [{
            text: 'Bien',
            icon: ' far fa-laugh'
        }, {
            text: 'Assez bien',
            icon: ' far fa-smile'
        }, {
            text: 'Fatigué(e)',
            icon: ' far fa-frown'
        }, {
            text: 'Très fatigué',
            icon: 'far fa-dizzy'
        }]
    }
}, {
    question: 'Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.',

    input: {

        type: 'number',
        Number: 'Q11',
        name: 'ans',
        min: 15,
        max: 110
    }
}, {
    question: 'Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',

    input: {
        type: 'number',
        Number: 'Q12',
        name: 'kg',
        min: 20,
        max: 250
    }
}, {
    question: 'Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',

    input: {
        type: 'number',
        Number: 'Q13',
        name: 'cm',
        min: 80,
        max: 250
    }
}, {
    question: 'Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?',

    input: {
        type: 'radio',
        Number: 'Q14',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Êtes-vous diabétique ?',

    input: {
        type: 'radio',
        Number: 'Q15',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Avez-vous ou avez-vous eu un cancer ?',

    input: {
        type: 'radio',
        Number: 'Q16',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?',

    input: {
        type: 'radio',
        Number: 'Q17',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Avez-vous une insuffisance rénale chronique dialysée ?',

    input: {
        type: 'radio',
        Number: 'Q18',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Avez-vous une maladie chronique du foie ?',

    input: {
        type: 'radio',
        Number: 'Q19',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Êtes-vous enceinte ?',

    input: {
        type: 'radio',
        Number: 'Q20',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }, {
            text: 'Homme',
            icon: 'fa-male'

        }]
    }
}, {
    question: 'Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?',

    input: {
        type: 'radio',
        Number: 'Q21',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).',

    input: {
        type: 'radio',
        Number: 'Q22',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}]