var stampa;

stampa = document.getElementById('my');

var num1 = Math.floor(Math.random() * 5) + 1;
var num2 = Math.floor(Math.random() * 5) + 1;

if (num1 > num2) {
  stampa.innerHTML = "Ha vinto il primo lancio del dado";
} else {
  stampa.innerHTML = "Ha vinto il secondo lancio del dado";
}

console.log(num1);
console.log(num2);
document.getElementById('my').innerHTML = num1;
document.getElementById('my').innerHTML = num2;
