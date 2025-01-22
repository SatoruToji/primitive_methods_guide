const price = 99.68
const urChromosomes = 42.123
const amiDaun = true
const liar = "69696969"

console.log("toFixed   округляет число, какое число будет в методе, такае число будет после запятой ");
console.log("toFixed: ",price.toFixed());
console.log("toFixed: ",price.toFixed(1));

console.log("toPrecision   я хз, этот бро обрезает число в зависимости от заданного колличетва в скобках");
console.log("toPrecision: ", urChromosomes.toPrecision(2));

console.log("toString   хехе, ну этот оператор преобразует числа или еще что то в строку");
console.log("toString: ", amiDaun.toString());
console.log("и без toString: ", amiDaun);

console.log("math   эта штука хранит кучу математических других штук (формулы, функции, константы)");
console.log("Math.random: ", Math.random());
console.log("Math.round: ", Math.round(3.5));
console.log("Math.round: ", Math.round(3.3));
console.log("Math.round: ", Math.round(37.7));
console.log("Math.round: ", Math.round(-37.499999));
console.log("Math.floor: ", Math.floor(37.7499999));
console.log("Math.floor: ", Math.floor(-37.7499999));

console.log("number   распарсит твою строку в число или же сделает из string в number");
console.log("без Number: ", liar);
console.log("Number: ", Number(liar));
console.log("с опертором '+':", +liar);

console.log(Math.round(Math.random() * 10));
