/* 
Сечас переменная name выводится в следующем порядке 
        Fill 
        Tom
        Bill

Не меняя областей видимости изменить код так, чтобы последовательность вывода была
        Bill
        Fill
        Tom 
*/
let name = "Bill";
{
  let name = "Tom";

  {
    let name = "Fill";
    console.log(name);
  }
  console.log(name);
}
console.log(name);
