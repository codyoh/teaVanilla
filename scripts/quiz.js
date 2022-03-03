const quizQuestionArea = document.querySelector('#questions');

// structured list of questions and their answers
const quizQuestions = {
    1: {
        question: "How would you describe your body type & how you look?",
        answers: {
            pitta: "Slender & light frame with difficulty developing muscle",
            vata: "Medium, balanced build with good muscle development",
            kapha: "Broader, well-built & curvy frame"
        }
    }
}

// create the element that is the question on the page
// this includes the radio selection from the answers
const newQuizQuestion = document.createElement('li');
newQuizQuestion.append(quizQuestions[1].question)
const answerOption = document.createElement('input');
const answerLabel = document.createElement('label');
answerOption.type = "radio"
answerOption.name = 1
answerOption.value = Object.keys(quizQuestions[1].answers)[0]
answerOption.id = Object.values(quizQuestions[1].answers)[0]
answerLabel.for = Object.values(quizQuestions[1].answers)[0]
answerLabel.append(Object.values(quizQuestions[1].answers)[0])

newQuizQuestion.append(answerOption)
newQuizQuestion.append(answerLabel)

// add the questions to the question area
quizQuestionArea.append(newQuizQuestion)
