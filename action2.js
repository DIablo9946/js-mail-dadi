var stampa;

stampa = document.getElementById('my');

var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

if (num1 > num2) {
  stampa.innerHTML = "Ha vinto il primo lancio del dado";
  console.log("Ha vinto il primo lancio del dado");
} else if (num1 === num2){
  stampa.innerHTML = "Pareggio";
  console.log("Pareggio");
} else {
  stampa.innerHTML = "Ha vinto il secondo lancio del dado";
  console.log("Ha vinto il secondo lancio del dado");
}

console.log(num1);
console.log(num2);
stampa.innerHTML = num1;
stampa.innerHTML = num2;
