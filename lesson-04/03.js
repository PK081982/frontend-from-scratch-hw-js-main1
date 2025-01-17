/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
let array1= [9,1,2,3,5];
let array2=[3,5,8,9,8];
function findCommonElements(array1, array2) 
{
    let arra=[];
    for(let i = 0; i < array1.length; ++i)
    {
        for(let r=0; r < array2.length; ++r)
        {
            if(array1[i]===array2[r])
            {
                arra.push(array1[i]);
            }
        }
    }
    return arra;
}

/*let arra=findCommonElements(array1, array2); 

for(let i = 0; i < arra.length; ++i)
{
    console.log(arra[i]);
}*/
