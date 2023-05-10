let randomNumber1 = Math.floor(Math.random() * 100);
let randomNumber2 = Math.floor(Math.random() * 100);

console.log("Zahl1: " + randomNumber1 + ", Zahl2: " + randomNumber2);

if ((randomNumber1 < randomNumber2) && (randomNumber1 < 50)) {
    console.log("Zahl1 ist kleiner als Zahl2 und Mini");
};
if ((randomNumber1 < 30) || (randomNumber2 < 30)) {
    console.log("Eine der beiden ist kleiner als 30");
};
if ((randomNumber1 < 50) && (randomNumber2 != 50)) {
    console.log("Erste Zahl klein, zweite kein 50iger");
};
