import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {   
    readline.question("", (userRes) => {
      resolve(userRes);
      readline.close();
    });
  });
};


let running = true;
let balance = 0;

console.log("Selektieren Sie die gewünschte Funktion:")
console.log("   1. Einzahlen")
console.log("   2. Abheben")
console.log("   3. Kontostand")
console.log("   4. Ende")

while (running){
    console.log("")
    let action = await readLineAsync();
    console.log("")

    if (action == 1){
        console.log("Geben Sie den Betrag ein den Sie einzahlen möchten:")
        let deposit = await readLineAsync();
        let balance = balance + deposit;
        console.log("Sie haben " + deposit + " Euro eingezahlt!")
    }
    if (action == 2){
        console.log("Machine stopped!")
        running = false;
    }
    if (action == 3){
        console.log("Ihr Kontostand beträgt: " + balance)
        
    }

    if (action == 4){
        console.log("Machine stopped!")
        running = false;
    }
    

}

