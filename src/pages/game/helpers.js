export const handleAnswerClick = (
  selectedAnswer,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  dispatch,
  score_user,
  score_machina,
  setShowResult
) => {
  const currentQuestion = questionArray[currentQuestionIndex]
  if (selectedAnswer === currentQuestion.answer) {
    dispatch({ type: 'SCORE_USER', payload: score_user + 1 })
  } else {
    dispatch({ type: 'SCORE_MACHINA', payload: score_machina + 1 })
  }

  if (currentQuestionIndex + 1 < questionArray.length) {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  } else {
    setShowResult(true)
  }
}

export const questionArray = [
  {
    id: 1,
    question: '¿Cómo se llama el planeta de los saiyajines?',
    options: ['Namek', 'Vegeta', 'Earth'],
    answer: 'Vegeta'
  },
  {
    id: 2,
    question: '¿Quién es el creador de las Dragon Balls?',
    options: ['Kami', 'Bulma', 'Roshi'],
    answer: 'Kami'
  },
  {
    id: 3,
    question: '¿Cómo se llama el hijo mayor de Goku?',
    options: ['Trunks', 'Goten', 'Gohan'],
    answer: 'Gohan'
  },
  {
    id: 4,
    question: '¿Cuál es la técnica especial de Vegeta?',
    options: ['Kamehameha', 'Final Flash', 'Destructo Disk'],
    answer: 'Final Flash'
  },
  {
    id: 5,
    question: '¿Quién fue el primer maestro de artes marciales de Goku?',
    options: ['Maestro Roshi', 'Kami', 'Piccolo'],
    answer: 'Maestro Roshi'
  },
  {
    id: 6,
    question:
      '¿Cómo se llama la transformación que Goku alcanza durante la batalla con Freezer en Namek?',
    options: ['Super Saiyajin', 'Kaio-ken', 'Ultra Instinct'],
    answer: 'Super Saiyajin'
  },
  {
    id: 7,
    question: '¿Quién es el dios de la destrucción del Universo 7?',
    options: ['Whis', 'Zeno', 'Beerus'],
    answer: 'Beerus'
  },
  {
    id: 8,
    question: '¿Cuál es el nombre del padre de Goku?',
    options: ['King Vegeta', 'Bardock', 'Raditz'],
    answer: 'Bardock'
  },
  {
    id: 9,
    question: '¿Cómo se llama la esposa de Goku?',
    options: ['Chi-Chi', 'Bulma', 'Launch'],
    answer: 'Chi-Chi'
  },
  {
    id: 10,
    question: '¿Quién es el principal villano en la saga de Cell?',
    options: ['Buu', 'Freezer', 'Cell'],
    answer: 'Cell'
  }
]
