let a = [4, 1, 2, 3];

a.push(17);
a.push(199);


let sum = 0;

for (let index = 0; index < a.length; index++) {
    console.log(a[index])
    sum = sum + a[index]

}
console.log("")
console.log(sum)
console.log("")
console.log(sum / a.length)
console.log("")



let friends = ["Susi", "Paula", "Hans"];

console.log("Meine Freunde sind " + friends[0] + ", " + friends[1] + " und " + friends[2] + ".")

console.log("")

friends.push("Sepp")

console.log("Meine Freunde sind " + friends[0] + ", " + friends[1] + ", " + friends[2] + " und " + friends[3] + ".")