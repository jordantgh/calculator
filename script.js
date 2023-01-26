let screen = document.querySelector("#screen");
let buttons = document.getElementsByTagName("button");

for (b of buttons) {
  if (b.innerHTML !== "=") {
    b.addEventListener('click', event => {
      screen.innerHTML += event.target.innerHTML;
    })  
  }
}

let equals = document.querySelector("#=");

equals.addEventListener('click', operate(screen.innerHTML));

const add = function(a, b) {
    return a + b;
  };
  
  const subtract = function(a, b) {
    return a - b;
  };
  
  const sum = function(array) {
    return array.reduce(
      (total, current) => {
        return total + current;
      },
    0)
  };
  
  const multiply = function(array) {
    return array.reduce(
      (total, current) => {
        return total * current;
      },
    1)
  };