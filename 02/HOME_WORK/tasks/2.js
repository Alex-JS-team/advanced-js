// Сейчас в консоль выводится ReferenceError: name is not define
// Изменить код так, чтобы в консоль вывелась переменная name
function print() {
  function log() {
    name = "Beetroot";
  }
  log();
}

console.log(name);
print();
