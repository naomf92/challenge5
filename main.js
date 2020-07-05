
function effect(e) {
  const element = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  element.classList.add('playing');

  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(sound);
  sound.play();
 }
 window.addEventListener('keydown',effect);

 
function effectOff(e) {
  const element = document.querySelector(`.key[data-key="${e.keyCode}"`);
  element.classList.remove('playing');

  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  sound.pause();
  sound.currentTime = 0;
}
window.addEventListener('keyup',effectOff);
