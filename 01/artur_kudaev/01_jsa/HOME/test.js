function iCantThinkOfAName(num, obj) {
  // This array variable, along with the 2 parameters passed in,
  // are 'captured' by the nested function 'doSomething'
  var array = [1, 2, 3];
  function doSomething(i) {
    num += i;
    array.push(num);
    console.log('num: ' + num);
    console.log('array: ' + array);
    console.log('obj.value: ' + obj.value);
  }

  return doSomething;
}

var referenceObject = { value: 10 };
var foo = iCantThinkOfAName(2, referenceObject); // closure #1
var bar = iCantThinkOfAName(6, referenceObject); // closure #2

foo(2);
/*
  num: 4
  array: 1,2,3,4
  obj.value: 10
*/

//bar(2);
/*
  num: 8
  array: 1,2,3,8
  obj.value: 10
*/

//referenceObject.value++;

//foo(4);
/*
  num: 8
  array: 1,2,3,4,8
  obj.value: 11
*/

//bar(4);
/*
  num: 12
  array: 1,2,3,8,12
  obj.value: 11
*/