let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
const winner = document.querySelector("p");

// Defina uma série de valores específicos nos quais você deseja que a roleta pare
let targetValues = [3635, 6885, 9745, 13319, 15980, 18920, 23150, 26052]; // Pode adicionar mais valores conforme necessário

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

      case 6885:
        winner.textContent = "Parabéns Andréa M.! 🥳🍾";
        targetValues.shift();
        break;
      case 9745:
        winner.textContent = "Parabéns Simone! 🥳🍾";
        targetValues.shift();
        break;
      case 13319:
        winner.textContent = "Parabéns Antônio! 🥳🍾";
        targetValues.shift();
        break;
      case 15980:
        winner.textContent = "Parabéns Sandra! 🥳🍾";
        targetValues.shift();
        break;
      case 18920:
        winner.textContent = "Parabéns Ademar! 🥳🍾";
        targetValues.shift();
        break;
      case 23150:
        winner.textContent = "Parabéns Bruna! 🥳🍾";
        targetValues.shift();
        break;
      case 26052:
        winner.textContent = "Parabéns Janaína! 🥳🍾";
        targetValues.shift();
        break;
    }

    wheel.style.transition = "none";
  }, 3000);
});
