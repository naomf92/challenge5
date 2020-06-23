
function turnRed(e) {

  const element =document.querySelector(`.key[data-key=${e.keyCode}`);
  console.log(element);


  window.addEventListener('keydown',turnRed);{

    console.log();
  }








  // for (let key of red){
  //   key.classList.add('playing');
  //   console.log();
  // }
 }
 turnRed();

// const action =document.querySelectorAll('[data-action="addStyle"]');
// console.log(action[0].dataset);
//
