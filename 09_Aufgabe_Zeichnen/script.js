for (let count1 = 0; count1 < 4; count1++) {
    if (count1 % 2 == 0){
        console.log("XXXX")
    }
    else{
        console.log("OOOO")
    }
};

console.log("")

let even_numbers = 0;
for (let count2 = 0; count2 < 101; count2++){
    if (count2 % 2 == 0){
        even_numbers +=  count2;
    }
}
console.log(even_numbers)

console.log("")

for (let count1 = 0; count1 < 5; count1++) {
    if (count1 == 0){
        console.log("XXXX")
    }
    if (count1 == 1){
        console.log("X   ")
    }
    if (count1 == 2){
        console.log("XXXX")
    }
    if (count1 == 3){
        console.log("   X")
    }
    if (count1 == 4){
        console.log("XXXX")
    }
};