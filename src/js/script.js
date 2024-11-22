// Array para armazenar o Score
let scores = { humanScore: 0, computerScore: 0, empate: 0 };

// 0 = pedra    0 x 2
// 1 = papel    1 x 0
// 2 = tesoura  2 x 1

// Array para armazenar as escolhas
let choices = [];

// Mapeamento de números para strings ex: index 0 = pedra
const choiceMapping = [" pedra ", " papel ", "tesoura"];

// Gerar numero aleatorio de 0 a 2
function getHumanChoice() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

// Definir o ganhador do round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    scores.empate += 1;
    return "Empate!!!";
  } else if (
    (humanChoice === 0 && computerChoice === 2) ||
    (humanChoice === 1 && computerChoice === 0) ||
    (humanChoice === 2 && computerChoice === 1)
  ) {
    scores.humanScore += 1;
    return "Humano venceu a rodada!!!";
  } else {
    scores.computerScore += 1;
    return "Maquina venceu a rodada!!!";
  }
}

// Loop parar gerar escolhas para 5 rounds
function getRounds() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);

    // Adiciona as escolhas no array
    choices.push({
      human: humanChoice,
      computer: computerChoice,
      roundResult: roundResult,
    });
  }
}

function playGame() {
  // Zerar placar e escolhas
  scores = { humanScore: 0, computerScore: 0, empate: 0 };
  choices = [];

  getRounds();
  listChoices();
  finalPlacar();
}

// Mostrar as escolhas feitas durante o jogo
function listChoices() {
  choices.forEach((choice, index) => {
    console.log(
      `[> Rodada ${index + 1}: [ Humano - ( ${
        choiceMapping[choice.human]
      } ) ] x [ Computador - ( ${choiceMapping[choice.computer]} ) ] >>> ${
        choice.roundResult
      }`
    );
  });
}

// Mostrar o placar final após as 5 rodadas ou a vitória antecipada
function finalPlacar() {
  console.log(
    `\n[> >] Pontuação Final = [ Humano: ( ${scores.humanScore} ) | Computador: ( ${scores.computerScore} ) | Empates: ( ${scores.empate} )]\n`
  );
}

// Iniciar o jogo
playGame();
