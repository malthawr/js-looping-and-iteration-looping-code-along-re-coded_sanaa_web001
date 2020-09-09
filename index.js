// Code your solutions in this file
const birthday=  [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(birthday) {
  for (let i = 0; i <birthday.length; i++) {
    console.log(`Thank you, ${birthday[i]} , for the wonderful birthday gift!`);
  }
 
 return birthday;
}

let countdown = 10;
while (countdown > 0) {
  console.log(countdown--);
}

