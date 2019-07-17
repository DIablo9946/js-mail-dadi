var stampa, email, insemail;

stampa = document.getElementById('my');

email = ["marco@gmail.com", "paolo@gmail.com", "simone@gmail.com"];
console.log("email");

insemail = prompt("Inserisci la Tua email.");
console.log("insemail");

for (var i=0, i < email.length, i++) {
  if (insemail == email) {
    stampa.innerHtml = ("Sei stato invitato")
  } else {
    stampa.innerHtml = ("Ci dispiace non sei stato selezionato")
  }
};
