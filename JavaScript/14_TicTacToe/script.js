import { createInterface } from "readline";
let field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];



const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {   
    readline.question("", (userRes) => {
      resolve(userRes);
      //readline.close();
    });
  });
};


  
  function checkWinner(board) {
      for (var row = 0; row < 3; row++) {
        if (board[row][0] != "" && board[row][0] == board[row][1] && board[row][1] == board[row][2]) {
          return board[row][0];
        }
      }
    
      for (var col = 0; col < 3; col++) {
        if (board[0][col] != "" && board[0][col] == board[1][col] && board[1][col] == board[2][col]) {
          return board[0][col];
        }
      }
    
      if (board[0][0] != "" && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
        return board[0][0];
      }
      if (board[0][2] != "" && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
        return board[0][2];
      }
    
  
      return null;
    }
  
  
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



while (checkWinner(field) != 1 && checkWinner(field) != 2){

    printField()
    console.log("Player 1 Reihe:  ");
    let input_column = await readLineAsync();
    console.log("Player 1 Spalte:  ");
    let input_row = await readLineAsync();
    field[input_column][input_row] = 1
    console.log("")

    if (checkWinner(field) == 1) {
        console.log("Player 1 hat gewonnen!");
        printField();
        break;
    }




    printField()
    console.log("Player 2 Reihe:  ");
    let input_column2 = await readLineAsync();
    console.log("Player 2 Spalte:  ");
    let input_row2 = await readLineAsync();
    field[input_column2][input_row2] = 2
    console.log("")

    if (checkWinner(field) == 2) {
        console.log("Player 2 hat gewonnen!");
        printField();
        break;
    }


}