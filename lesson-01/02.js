/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial
  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/
let num=1;
let nam=1;
let n=10;
while(nam<=n)
{
  num*=nam;
  nam++;
}
// your code
let factorial=num;