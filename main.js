
function turnRed(e) {

  const red =document.querySelector(`.key[data-key="65"]`);
  console.log(red);

   // key.addEventListener('keydown', evt => {
   //
   // });

  // for (let key of red){
  //   key.classList.add('playing');
  //   console.log();
  // }
 }
 turnRed();

// const action =document.querySelectorAll('[data-action="addStyle"]');
// console.log(action[0].dataset);
//
// for (let key of action) {
//   key.addEventListener('keydown',evt =>{
//     console.log(event.keyCode);
//
//   });
// }

// class名の取得をクエリでする場合は、querySelector('.class名')と表現します。タグ名はquerySelector('タグ名')です
  // ヒント1: HTMLにあるデータ属性の取得表現は、querySelector('[data属性名="data属性内の値"]')です
  // ヒント2: class名.keyのdata属性data-key="キー番号"の取得は、上記の組み合わせですね。テンプレートリテラルを使うとひとまとめにできます
  // querySelector(`.class名[data属性名="data属性内の値"]`) と、書けそうです
