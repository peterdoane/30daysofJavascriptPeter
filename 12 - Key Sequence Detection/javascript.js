
const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice();
  pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
  if(pressed.join('').includes(secretCode)){
    console.log('DING DING!');
  }
  console.log(pressed);
})
