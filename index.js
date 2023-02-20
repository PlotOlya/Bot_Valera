const bntPush = document.getElementById("push");
const inp = document.querySelector("#input-main");
const chat = document.querySelector("#chat");
const arrAnswer = [
  "Звезды говорят, что да",
  "Знаки говорят, что нет",
  "Возможно",
  "Не расчитывай на это",
  "Перспектива не очень хорошая",
  "Соберись с мыслями и спроси снова",
  "Спроси позже",
  "Мои источники говорят, что нет",
  "Вероятнее всего",
  "Это бесспорно",
  "Перспектива хорошая",
  "Ты в своем уме?",
];

bntPush.addEventListener("click", () => {
  addStr();
  inp.value = "";
});
inp.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    addStr();
    inp.value = "";
  }
});

function addStr() {
  let valInp = inp.value;
  if (!valInp) return;
  const newQuestion = document.createElement("div");
  newQuestion.classList = "right-side";
  chat.appendChild(newQuestion);
  const newQuestionText = document.createElement("div");
  newQuestionText.classList = "question message";
  newQuestionText.innerText = valInp;
  newQuestion.append(newQuestionText);
  newAvatar = document.createElement("img");
  newAvatar.src = "./img/icons8-пользователь-мужчина-в-кружке-48.png";
  newAvatar.classList = "valera";
  newQuestion.append(newAvatar);

  const newAnswer = document.createElement("div");
  newAnswer.classList = "left-side";
  chat.appendChild(newAnswer);
  newValera = document.createElement("img");
  newValera.src = "./img/icons8-мужчина-в-голубой-куртке-50.png";
  newValera.classList = "valera";
  newAnswer.append(newValera);
  const newAnswerText = document.createElement("div");
  newAnswerText.classList = "answer message";
  newAnswerText.innerText = randAnswer(arrAnswer);
  newAnswer.appendChild(newAnswerText);

  function randAnswer(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }
}
