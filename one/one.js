//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function checkAge() {
    if (one < two) {
        return -1;
    } else if (one > two) {
        return 1;
    } else if (one == two) {
        return 0;
    }
}

let one = prompt('Сколько вам лет?');

let two = prompt('Сколько вам лет?');
console.log(checkAge())