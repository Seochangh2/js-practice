var answer = 42;
console.log("answer == " + answer);
console.log("this.answer == " + this.answer);
console.log("has property? " + ("answer" in this));
//var은 전역 객체의 속성
let answer2 = 42;
console.log("answer == " + answer2);
console.log("this.answer == " + this.answer2);
console.log("has property? " + ("answer2" in this));
//let는 전역 객체의 속성이 아니다.

const obj = {
  value: "before",
};
console.log(obj.value); // "before"
obj.value = "after";
console.log(obj.value); // "after" , const가 참조하는 객체는 여전히 변경 가능하다.

function closuresInLoopsProblem() {
  for (var counter = 1; counter <= 3; ++counter) {
    setTimeout(function () {
      console.log(counter); //4 4 4
    }, 10);
  }
}
closuresInLoopsProblem();

function closuresInLoopsES5() {
  for (var counter = 1; counter <= 3; ++counter) {
    (function (value) {
      // 익명 함수의 시작
      setTimeout(function () {
        console.log(value); // 1,2,3
      }, 10);
    })(counter); // 끝에 counter를 넘겨 호출한다.
  }
}
closuresInLoopsES5();

function closuresInLoopsWithLet() {
  for (let counter = 1; counter <= 3; ++counter) {
    //반복마다 다른 counter 변수를 생성한다.
    setTimeout(function () {
      console.log(counter); // 1,2,3
    }, 10);
  }
}
closuresInLoopsWithLet();
