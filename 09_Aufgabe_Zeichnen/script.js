for (let count1 = 0; count1 < 4; count1++) {
    if (count1 % 2 == 0){
        console.log("XXXX")
    }
    else{
        console.log("OOOO")
    }
};

let even_numbers = 0;
for (let count2 = 0; count2 < 101; count2++){
    if (count2 % 2 == 0){
        even_numbers +=  count2;
    }
}
console.log(even_numbers)