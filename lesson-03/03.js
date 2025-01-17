// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a,b,c) 
{
    if(a>b && a>c)
    {
        return a;
    }
    else if(c>b && c>a)
    {
        return c;
    }
    else 
    {
        return b;
    }    
}
//let c = findLargest(14,15,53);
//console.log(c);