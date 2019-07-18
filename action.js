var stampa, email, insemail;
var trova = false;

stampa = document.getElementById('my');

email = ["marco@gmail.com", "paolo@gmail.com", "simone@gmail.com"];
console.log("Email delle persone invitate sono " + email);

insemail = prompt("Inserisci la Tua email.");
console.log("La email da Te scelta è " + insemail);

for (var i = 0; i < email.length; i++) {
  if (insemail == email[i]) {
    trova = true;
  }
};


if (trova) {
  stampa.innerHTML = "Quindi sei stato invitato";
} else {
  stampa.innerHTML = "Ci dispiace non sei stato selezionato";
}
