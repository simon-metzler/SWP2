function add(a, b) {
    console.log(a + b)
};

add(19, 11)

function subtract(a, b) {
    console.log(a - b)
};

subtract(10, 9)

function multiply(a, b) {
    console.log(a * b)
};

multiply(5, 5)

function supercalculation(a, b) {
    console.log((a + b) / 2 * a)
};

supercalculation(1, 2)

function printEasterDate(year) {
    N = year - 1900;
    A = N % 19;
    B = Math.floor((7 * A + 1) / 19);
    M = (11 * A + 4 - B) % 29;
    Q = Math.floor(N / 4);
    W = (N + Q + 31 - M) % 7;
    P = 25 - M - W;

    if (P > 0) {
        console.log("Ostersonntag ist der " + P + ". April")
    }
    else {
        console.log("Ostersonntag ist der " + P + 31 + ". März")
    }
}

printEasterDate(2023)