
function turnRed(e) {

  const element =document.querySelector(`.key[data-key="${e.keyCode}"`);
  console.log(element);

  window.addEventListener('keydown',turnRed);{
    for(let key of element) {
      key.classList.add('playing');
    }
  }


 }
 turnRed();

// const action =document.querySelectorAll('[data-action="addStyle"]');
// console.log(action[0].dataset);
//
