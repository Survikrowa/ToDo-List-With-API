const modalTurnButton = document.querySelector("#js-turn-modal");
const modal = document.querySelector("#js-modal");
console.log(modal);
modalTurnButton.addEventListener("click", () => {
  modal.showModal();
  console.log(modal);
});
