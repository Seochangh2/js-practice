const Doomed = () => {};
const d = new Doomed(); // TypeError: Doomed is not a constructor

function Thingy() {}
var t = new Thingy();
console.log(Object.getPrototypeOf(t) === Thingy.prototype); // true

//화살표 함수는 생성자가 될  수 없다.

function animate(type = "fadeout", duration) {
  console.log(type + ", " + duration);
}
animate("fadeout", 300); // "fadeout, 300"
animate(undefined, 300); // "fadeout, 300" (다시)
animate("fadein", 300); // "fadein, 300"
animate(); // "fadeout, undefined"

function stillOne(a, b = 42) {}
console.log(stillOne.length); // 1
function oneYetAgain(a, b = 42, c) {}
console.log(oneYetAgain.length); // 1
//기본값은 함수의 인자값에 포함되지 않음.

const extend = (target, ...sources) => {
  sources.forEach((source) => {
    Object.keys(source).forEach((key) => {
      target[key] = source[key];
    });
  });
  return target;
};
const obj = extend({}, { a: 1 }, { b: 2 });
console.log(obj); // {a: 1, b: 2} , 나머지 연산자의 활용법
