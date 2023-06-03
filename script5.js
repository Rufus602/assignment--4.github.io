let arr = prompt("Введите слово:");
let result = "";
for (let i = arr.length - 1; i >= 0; i--) {
  result += arr[i];
}
alert(result);
console.log(result);
document.write(result);