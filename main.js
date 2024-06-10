const dialogElement = document.querySelector('dialog');

document.querySelector('button').addEventListener('click', () => {
    dialogElement.showModal();
});

document.querySelector('#close-modal').addEventListener('click', () =>{
    dialogElement.close();
});

dialogElement.addEventListener('click', (event) => {
   if (event.target == dialogElement){
        dialogElement.close();
   }
});