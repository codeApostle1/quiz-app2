const questionSect = document.querySelector('.question')
const options = document.querySelector('.options')

const next = document.getElementById('next')
const error = document.querySelector('.error')
const endBtn = document.getElementById('end')


const quizQuestions = [
  {
    question: "What is the syntax for declaring a variable in JavaScript?",
    answers: ["let x = 5;", "var x = 5;", "const x = 5;", "All of the above"],
    correct: 3
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answers: ["To refer to the global object", "To refer to the current object", "To create a new object", "To delete an object"],
    correct: 1
  },
  {
    question: "What is the difference between null and undefined in JavaScript?",
    answers: ["Null is an object, undefined is a type", "Null is a type, undefined is an object", "Null and undefined are the same", "Null is a value, undefined is the absence of a value"],
    correct: 3
  },
  {
    question: "What is the purpose of the 'map()' function in JavaScript?",
    answers: ["To filter an array", "To reduce an array", "To transform an array", "To sort an array"],
    correct: 2
  },
  {
    question: "What is the syntax for creating a new object in JavaScript?",
    answers: ["let obj = {};", "let obj = new Object();", "let obj = Object.create();", "All of the above"],
    correct: 3
  }
];

const NigerianHistory = [
  {
    question: "Who was Nigeria’s first President?",
    answers: ["Nnamdi Azikiwe", "Tafawa Balewa", "Olusegun Obasanjo", "Ahmadu Bello"],
    correct: 0
  },
  {
    question: "In what year did Nigeria gain independence?",
    answers: ["1957", "1960", "1963", "1970"],
    correct: 1
  },
  {
    question: "Which Nigerian region attempted to secede as Biafra?",
    answers: ["North", "East", "West", "South-West"],
    correct: 1
  },
  {
    question: "Who led the military coup of 1966?",
    answers: ["Yakubu Gowon", "Chukwuma Kaduna Nzeogwu", "Sani Abacha", "Murtala Mohammed"],
    correct: 1
  }
];

const bibleQuestions = [
  {
    question: "How many days did God take to create the world?",
    answers: ["5", "6", "7", "8"],
    correct: 1
  },
  {
    question: "Who was swallowed by a great fish?",
    answers: ["Moses", "Jonah", "Paul", "David"],
    correct: 1
  },
  {
    question: "What was the first miracle of Jesus?",
    answers: ["Healing a blind man", "Walking on water", "Turning water into wine", "Feeding 5,000"],
    correct: 2
  },
  {
    question: "What is the last book of the Bible?",
    answers: ["Acts", "Revelation", "John", "Genesis"],
    correct: 1
  }
];

const trickyQuestions = [
  {
    question: "Which weighs more: 1kg of feathers or 1kg of bricks?",
    answers: ["Feathers", "Bricks", "They weigh the same", "Can't say"],
    correct: 2
  },
  {
    question: "If you have 10 apples and you eat 4, how many do you have?",
    answers: ["6", "4", "10", "0"],
    correct: 2
  },
  {
    question: "A plane crashes on the border of Nigeria and Cameroon. Where do they bury the survivors?",
    answers: ["Nigeria", "Cameroon", "Nowhere – they’re alive", "In the ocean"],
    correct: 2
  },
  {
    question: "If you throw a red stone into the blue sea, what will it become?",
    answers: ["Blue", "Wet", "Red", "Heavy"],
    correct: 1
  }
];

let array = []

let firstOption = document.querySelectorAll('.option')

firstOption.forEach((option)=>{
  option.addEventListener('click',()=>{
   // option.style.backgroundColor = '#33ff33'
   
//NA AI I LEARN THISNONE FROM
    firstOption.forEach((b) => {
    b.style.backgroundColor = '#fff'
    //b.classList.remove("active"));

    // Add "active" only to the clicked button
    option.style.backgroundColor = '#33ff33'});

   
    if (option.textContent === 'Coding'){
      array = quizQuestions;
    }
    if(option.textContent === 'History') {
      array = NigerianHistory;
    }
    
    if(option.textContent === 'Bible Quiz'){
      array = bibleQuestions;
    }
    
    if (option.textContent === 'Tricky') {
      array = trickyQuestions
    }
  })
})


let start = 0
function showQuestion() {
questionSect.innerHTML = array[start].question


 
options.innerHTML = array[start].answers.map((opt,i)=> {
  let index = i + 1 
  return`
  <button class ='option'>${index} ${opt}</button>
  
  `
}).join('')

}

//showQuestion();

function go() {
 
  if (array.length !== 0) {
    questionSect.removeAttribute('style')
    questionSect.style.color= 'green';
    questionSect.style.fontWeight = 'bold'
    error.textContent = ''
  start += 1
  
  if (start >= array.length) {
    questionSect.innerHTML = "Quiz Completed!";
    options.innerHTML = "";
    next.style.display = "none";
    endBtn.textContent = 'Restart'
    endBtn.setAttribute('href', 'index.html')
    return;
  }
  
  showQuestion()
  next.textContent = 'next'}
  else {
    error.style.color = 'red'
    error.textContent = "you haven't made a Choice boss"
  }
}


next.addEventListener('click', go)

