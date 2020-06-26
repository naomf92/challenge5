
function turnRed(e) {
  const element =document.querySelector(`.key[data-key="${e.keyCode}"`);
  element.classList.add('playing');
 }
 window.addEventListener('keydown',turnRed);


// function play(e) {
//   const sound = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   console.log(sound);
// }
// window.addEventListener('keydown',play);

