// Завдання 1
// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення 
// кожну секунду за допомогою setInterval. Після 
// 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.
 let count = 0;
 const intervalId = setInterval(() => {
       count++;
   alert(`Повідомлення номер ${count}`);
   if (count === 5) {
         clearInterval(intervalId);
     alert('Інтервал зупинено');
   }
 }, 1000);
// Завдання 2
// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і 
// реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через 
// певний інтервал за допомогою setInterval.
const square = document.getElementById("square")
// Функція для анімації елемента
const animateSquare =(maxWidth, maxHeight)=> {
    let positionX = 0;
    let positionY = 0;
    let size = 50;
    let directionX = 1;
    let directionY = 1;

    const intervalId = setInterval(() => {
        positionX += 5 * directionX;
        if (positionX <= 0 || positionX >= maxWidth - size) {
            directionX *= -1;
        }

       
        positionY += 5 * directionY;
        if (positionY <= 0 || positionY >= maxHeight - size) {
            directionY *= -1;
        }
       square.style.left = positionX + 'px';
        square.style.top = positionY + 'px';
    }, 100);
}
animateSquare(400, 400);



// Завдання 3

// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець
//  має натискати на елементи на сторінці протягом певного інтервалу часу, 
//  використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте 
//  кількість натисків гравця.


let score = 0;
let timeLeft = 10;
let isGameActive = false;
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const clickButton = document.getElementById('clickButton');
const resultMessage = document.getElementById('resultMessage');
const startGame =()=> {
    score = 0;
    timeLeft = 10;
    isGameActive = true;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    clickButton.disabled = false;
    resultMessage.textContent = '';
    
    const intervalId = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            endGame();
        }
    }, 1000); 
}

const endGame =()=> {
    isGameActive = false;
    clickButton.disabled = true;
    resultMessage.textContent = `Гра завершена! Ви набрали ${score} очок.`;
}

clickButton.addEventListener('click', () => {
    if (isGameActive) {
        score++;
        scoreDisplay.textContent = score;
    }
});
startGame();


// Завдання 4
// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу 
// встановити певний час (у секундах) за допомогою введення з клавіатури. 
// Потім використовуйте setTimeout або setInterval,
//  щоб після встановленого часу вивести повідомлення 
const input = document.querySelector("#numberId")
const btn = document.querySelector(".btnTimer")
const getNum = document.querySelector("#getNumber")
let secondsTimer = input.value

 const clockwiseTimer = setTimeout(()=>{
    console.log("Time is over!");
      }, secondsTimer * 1000)

      const startTimer =()=>{

    let time =+ input.value

    const counter = setInterval(()=>{
        time --
    getNum.textContent = time
         if(time === 0){
            getNum.textContent =""
            clearInterval(counter)
            alert("Тime is over!")
            
            }
        }, 1000)

    }

 btn.addEventListener("click", startTimer)