// Написать функцию map, которая будет принимать в качестве
// аргумента массив arr и функцию, которая в свою очередь будет
// осуществлять преобразование массива arr  в вид
// [ "<li class="list-group-item">Tom</li>", ....]
// и выводить элементы массива в ul с id="res"
// Вывод должен осуществляться в отсортированном по алфавиту виде

const arr = ['Tom', 'Steve', 'Bill', 'Rita', 'Pete', 'Ashley']
const list = document.querySelector('#list')

arr
  .sort()
  .map(name => `<li class="list-group-item">${name}</li>`)
  .forEach(li => { list.innerHTML += li })
