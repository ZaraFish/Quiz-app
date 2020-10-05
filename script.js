const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question 
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target 
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')  
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }

}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Which of these is the least densley populated country in the world?',
        answers: [
            { text: 'Falkland Islands', correct:false},
            { text: 'Greenland', correct:true},
            { text: 'Mongolia', correct:false},
            { text: 'Namibia', correct:false}
        ]

    },


    {
        question: 'Which of these is the smallest country in the world?',
        answers: [
            { text: 'Vatican City', correct:true},
            { text: 'Monaco', correct:false},
            { text: 'San Marino', correct:false},
            { text: 'Maldives', correct:false}
        ]

    },


    {
        question: 'Which of these countries has the shortest people in the world?',
        answers: [
            { text: 'Bolivia', correct:false},
            { text: 'Ecuador', correct:false},
            { text: 'Vietnam', correct:false},
            { text: 'Indonesia', correct:true}
        ]
    },

    {
        question: 'Which of these countries has the highest amount of prisoners per capita?',
        answers: [
            { text: 'El Salvador', correct:false},
            { text: 'USA', correct:true},
            { text: 'Rwanda', correct:false},
            { text: 'Cuba', correct:false}
        ]
    },


    {
        question: 'Which of these countries has the lowest life expectancy in the world at 53 years?',
        answers: [
            { text: 'Afghanistan', correct:false},
            { text: 'Congo', correct:false},
            { text: 'Central African Republic', correct:true},
            { text: 'Chad', correct:false}
        ]
    },

    {
        question: 'Which country first gave women the vote in 1893?',
        answers: [
            { text: 'New Zealand', correct:true},
            { text: 'Finland', correct:false},
            { text: 'Denmark', correct:false},
            { text: 'Russia', correct:false}
        ]

    },


    {
        question: 'Which of these countries has the longest shared border?',
        answers: [
            { text: 'Argentina-Chile', correct:false},
            { text: 'Russia-Kazakhstan', correct:false},
            { text: 'China-Russia', correct:false},
            { text: 'Canada-USA', correct:true}
        ]
    },

    {
        question: 'Which of these countries had the highest population growth in 2019??',
        answers: [
            { text: 'Guinea', correct:false},
            { text: 'Syrian Arab Republic', correct:false},
            { text: 'Niger', correct:true},
            { text: 'Namibia', correct:false}
        ]
    },
]

//24.25 video//