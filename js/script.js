let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
const winner = document.querySelector("p");

// Defina uma série de valores específicos nos quais você deseja que a roleta pare
let targetValues = [3635, 6845, 9745, 13230]; // Pode adicionar mais valores conforme necessário

spinBtn.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * targetValues.length);
  let targetRotation = targetValues[0];

  wheel.style.transition = "transform 3s ease-out";
  wheel.style.transform = "rotate(" + targetRotation + "deg)";

  setTimeout(() => {
    switch (targetRotation) {
      case 3635:
        winner.textContent = "Parabéns Karla! 🥳🍾";
        targetValues.shift();
        break;

      case 6845:
        winner.textContent = "Parabéns Fabio W.! 🥳🍾";
        targetValues.shift();
        break;
      case 9745:
        winner.textContent = "Parabéns Simone! 🥳🍾";
        targetValues.shift();
        break;
      case 13230:
        winner.textContent = "Parabéns Giovana! 🥳🍾";
      default:
        winner.textContent = "Algo deu errado...";
    }

    wheel.style.transition = "none";
  }, 3000);
});
