const userName = document.querySelector(".userName");
const cardNumber = document.querySelector(".cardNumber");
const addBtn = document.querySelector(".addTask");
const cards = document.querySelector(".cards");

function addCard(){
  cards.innerHTML += `
  <div class="card">
  <img src ="./img/card.png"/>
  <img src ="./img/master.svg" class= "img-master"/>
  <h3>${cardNumber.value}</h3>
  <h4>Name</h4>
  <h1>${userName.value}</h1>
  </div>
`;
}
addBtn.addEventListener("click", () => addCard());
