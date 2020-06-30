
function effect(e) {
  const element = document.querySelector(`.key[data-key="${e.keyCode}"`);
  element.classList.add('playing');

  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(sound);
  sound.play();
 }
 window.addEventListener('keydown',effect);

 
// function turnRed(e) {
//   const element = document.querySelector(`.key[data-key="${e.keyCode}"`);
//   element.classList.add('playing');
//  }
//  window.addEventListener('keydown',turnRed);


// function play(e) {
//   const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   console.log(sound);
//   sound.play();
// }
// window.addEventListener('keydown',play);

