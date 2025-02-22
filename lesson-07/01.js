/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/
let string = "hello world from javascript";
function capitalizeWords(string) 
{
  let str=string[0].toUpperCase();
  
    for (let i = 1;i<string.length; i++)
    {

      if (string[i]===' ')
      {
        str=str  + string[i];
        str=str+string[i+1].toUpperCase();
        i++;
      }
      else
      {
        str=str  + string[i];
      } 
    }
    return str;
}
/*function capitalizeWords(string)
{
  let str=string.split(' ');
  let sstr1 = str.map(element => {
    return element[0].toUpperCase() + element.slice(1);
  });
  return sstr1.join(' ');  

} 
let str =capitalizeWords(string);
console.log(str);*/



//A:/it_incubatop2/frontend-from-scratch-hw-js-main/frontend-from-scratch-hw-js-main/lesson-07