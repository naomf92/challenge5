
function turnRed() {
  const red =document.getElementsByClassName('key')
  for (let key of red){
    key.classList.add('playing');
    console.log();
  }
}
turnRed();

const action =document.querySelectorAll('[data-action="addStyle"]');
console.log(action[0].dataset);

for (let key of action) {
  key.addEventListener('keydown',evt =>{
    console.log(event.key);

  });
}
