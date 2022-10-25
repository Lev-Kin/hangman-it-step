const modalWindow = document.createElement("div");
const modalText = document.createElement("div");
const btnReset = document.createElement("button");



function win() {
  showModal();
  modalText.textContent = "Ты выиграл!";
  modalWindow.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
}

function lose() {
  showModal();
  modalText.textContent = "Ты проиграл!";
  modalWindow.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
}

function showModal() {  
  
  modalWindow.id = "modalWindow";
  modalWindow.style.height = "100%";
  modalWindow.style.width = "100%";
  modalWindow.style.position = "fixed";
  modalWindow.style.top = "0px";
  modalWindow.style.left = "0px";
  modalWindow.style.zIndex = "10";
    
  modalText.style.backgroundColor = "rgba(255, 255, 255)";
  modalText.style.maxHeight = "300px";
  modalText.style.maxWidth = "500px";
  modalText.style.borderRadius = "15px";
  modalText.style.position = "fixed";
  modalText.style.top = "50%";
  modalText.style.left = "50%";
  modalText.style.transform = "translate(-50%, -50%)";
    
  btnReset.textContent = "Сыграть ещё раз";
  btnReset.addEventListener("click", window.location.reload);
  btnReset.style.backgroundColor = "fff";
  btnReset.style.height = "40px";
  btnReset.style.width = "50%";
  btnReset.style.margin = "8px";
  
  wrapper.append(modalWindow);
  modalWindow.append(modalText);
  modalText.append(btnReset);
  }


export {win, lose, showModal}
