let phrases = [
  "As I see it yes",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don’t count on it",
  "It is certain",
  "It is decidedly so",
  "Most likely",
  "My reply is no",
  "My sources say no",
  "Outlook good",
  "Outlook not so good",
  "Reply hazy try again",
  "Signs point to yes",
  "Very doubtful",
  "Without a doubt",
  "Yes",
  "Yes, definitely",
  "You may rely on it",
];
console.log("\033[2J");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What's your name? \n`, (name) => {
  console.log(`Hello ${name} \n`);
  console.log("Clear your mind and ask me a yes or no question.... \n \n");
  setTimeout(function () {
    console.log("Let me think.... \n");
  }, 2000);
  setTimeout(function () {
    console.log("............ \n");
  }, 2000);
  setTimeout(function () {
    console.log("............ \n");
  }, 3000);
  setTimeout(function () {
    let randomIndex = Math.floor(Math.random() * phrases.length);
    let response = phrases[randomIndex];
    console.log(response + "\n \n \n \n");
  }, 4000);
  readline.close();
});
