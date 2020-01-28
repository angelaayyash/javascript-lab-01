let name = "Angela";
let age = 27;
let birthday = "May 8";
let detroitGC = true;
let lifeEvents = [
  "I was born in Livonia, Michigan",
  "I went to GVSU",
  "I am a Grand Circus Student",
  "I love my dog"
];

if (detroitGC === true) {
  console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan.
        I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
  console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan.
    I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber = Math.floor(Math.random() * 10 + 1);

while (true) {
  if (randomNumber !== 5) {
    console.log("randomNumber !== 5");
    break;
  } else {
    console.log(
      "5 === 5. It took counter iterations to randomly generate the number 5."
    );
    break;
  }
}
