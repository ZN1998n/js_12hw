
let x
let i = 0

do {
    x = +prompt("Введите пароль")
    i++
    switch (i) {
        case 1:
            if (x === 7777) {
                alert("Верный пароль");
                break;
            }
            alert("Попытка номер 2");
            break;
        case 2:
            if (x === 7777) {
                alert("Верный пароль");
                break;
            }
            alert("Попытка номер 3");
            break;
        case 3:
            if (x === 7777) {
                alert("Верный пароль");
                break;
            }
            alert("Попытка номер 4");
            break;
        case 4:
            if (x === 7777) {
                alert("Верный пароль");
                break;
            }
            alert("Попытка номер 5");
            break;
        default:
            break;
    }

} while (x !== 7777 & i < 5)


// for (let i = 0; i <= 10; i++) {
//     setTimeout(() => {
//       console.log("I love u " + i + " times")
//       console.log(i);
//     }, 700 * i);
//   }