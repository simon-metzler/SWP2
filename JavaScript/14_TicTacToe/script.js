
let field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];


field[0][1] = 1;
field[1][1] = 2;
printField();

function printField() {
    for (let row = 0; row < field.length; row++) {
        let actualRow = field[row];
        let output = "";
        for (let col = 0; col < actualRow.length; col++) {
            let sign=" ";
            if (actualRow[col] == 1) {
                sign = "O";
            } else if(actualRow[col] == 2){
                sign = "X";
            }
                
            output += sign + " | ";
        }
        console.log(output);
    }
}