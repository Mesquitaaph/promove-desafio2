document.addEventListener("DOMContentLoaded", function() {
    const characters = document.querySelectorAll('.personagem');
    const overlay = document.getElementById('overlay');
    const mensagem = document.getElementById('mensagem');
  
    characters.forEach(character => {
      character.addEventListener('click', function() {
        const randomNum = Math.random();
        let ganhou = false;
        const ide = character.id;
        if(ide === 'personagem4') ganhou = true;
  
        if (ganhou) {
          mensagem.textContent = "Parabéns! Você Encontrou o Assassino!";
        } else {
          mensagem.textContent = "Que pena! Você Selecionou um Inocente, Tente Novamente!";
        }
  
        overlay.style.display = 'flex';
      });
    });
  
    overlay.addEventListener('click', function() {
      overlay.style.display = 'none';
    });
  });
  