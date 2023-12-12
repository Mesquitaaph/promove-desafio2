let binaryArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let imagesArray = [
  "assets/placas/placa0.png",
  "assets/placas/placa0mov1.png",
  "assets/placas/placamiddle.png",
  "assets/placas/placa1_mov1.png",
  "assets/placas/placa1.png",
];


let currentImages = Array(10).fill(0); 

let randomNumber;
let score = 0;
let timer;
let timeRemaining = 60;
let ativo = false;


function toggleButton(buttonIndex) {
  //mudamos de 0 pra 1 ou vice-versa no array de bits
  binaryArray[buttonIndex] = 1 - binaryArray[buttonIndex];

  let button = document.getElementById(`btn${buttonIndex}`);
  updateDecimalValue();

  const decimalValue = parseInt(binaryArray.join(''), 2);
  if (decimalValue === randomNumber && ativo) {
    score++;
    updateScore();
    updateRandomNumber();
  }


  //animação
  let currentImage = currentImages[buttonIndex];
  let interval;

  if (currentImage === 0) {
    interval = setInterval(() => {
      currentImage++;
      button.src = imagesArray[currentImage];
      if (currentImage === 4) clearInterval(interval);
    }, 100);
    currentImages[buttonIndex] = 4;
  } else if (currentImage === 4) {
    interval = setInterval(() => {
      currentImage--;
      button.src = imagesArray[currentImage];
      if (currentImage === 0) clearInterval(interval);
    }, 100);
    currentImages[buttonIndex] = 0;
  }

}

function generateRandomNumber() {
  return Math.floor(Math.random() * 1023) + 1;
}

function updateDecimalValue() {
  const binaryString = binaryArray.join('');
  const decimalValue = parseInt(binaryString, 2);
  document.getElementById('decimalValue').innerText = decimalValue;
}

function updateRandomNumber() {
  randomNumber = generateRandomNumber();
  document.getElementById('randomNumber').innerText = randomNumber;
}

function updateScore() {
  document.getElementById('score').innerText = score;
}

function updateTimer() {
  document.getElementById('timer').innerText = timeRemaining;
}

function resetGame() {
    clearInterval(timer);
    timeRemaining = 60;
    updateTimer();
    score = 0;
    updateScore();
    //binaryArray = Array(10).fill(0);
    for (let i = 0; i < 10; i++) {
      //muda todas as placas que estavam em 1 para 0.
      if(currentImages[i] != 0) toggleButton(i);
    }
    updateRandomNumber();
    updateDecimalValue(); // Adicione esta linha para atualizar o valor decimal
  }

function startGame() {
  resetGame();
  timer = setInterval(function() {
    timeRemaining--;
    updateTimer();
    if (timeRemaining === 0) {
      clearInterval(timer);
      alert(`Tempo acabou! Sua pontuação final é: ${score}`);
      document.getElementById('playButton').innerText = 'Jogar Novamente';
      ativo = false;
    }
  }, 1000);
}

document.getElementById('playButton').addEventListener('click', function() {
  if(!ativo)
  {
    ativo = true;
    startGame();
    document.getElementById('playButton').innerText = 'Parar o Jogo';
  } 
  else
  {
    ativo = false;
    resetGame();
    document.getElementById('playButton').innerText = 'Jogar Novamente';
    document.getElementById('timer').innerText = "";
    document.getElementById('randomNumber').innerText = "";
    document.getElementById('decimalValue').innerText = "";
    document.getElementById('score').innerText = "";
  }
  
});
