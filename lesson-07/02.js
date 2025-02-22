/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) 
{
  // your code
  for(let i=0;i<str.length; i++)
  {
    console.log(str.codePointAt(i));
    if(str.codePointAt(i)===47 || str.codePointAt(i)< 46 || 57<str.codePointAt(i) )
    {
      return false;
    }
  }
  return true;
}

//let str = '9';
//console.log(isNumeric("123")) // Ожидаемый результат: true
 //console.log(isNumeric("12.3")) // Ожидаемый результат: true
 //console.log(isNumeric("123abc")) // Ожидаемый результат: false
 //console.log(isNumeric("abc")) // Ожидаемый результат: false
//console.log(isNumeric(" ")) // Ожидаемый результат: false*/
