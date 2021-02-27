//Написать функцию, которая вычисляет факториал переданного ей числа.
function Num(a) {
    let Sum = 0;
    for (let i = 1; i <= a; i++) {
        Sum += i;
    }
    return Sum
}
console.log(Num(5))