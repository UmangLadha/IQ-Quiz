var readlinesync = require("readline-sync");
const chalk = require("chalk");

var score = 0;
console.log(chalk.bold.blue.underline.bgWhite(" HELLO! USER "));
var username = readlinesync.question("-> What is your name? ");
console.log("-> Please give your answer in ",chalk.bold("YES / NO? "));
var quiz = readlinesync.question("-> So,"+username+" are you ready for the quiz? ");
console.log();

if (quiz.toUpperCase() == "YES")
{ 
  console.log("Let's  Play!");
  console.log();
  var quiz =[{ question:"Q1. “Stars and Stripes” is the nickname of the flag of which country? \n"+ "a) australia \n"+ "b) brazil \n"+ "c) america \n"+ "d) uzbakistan \n",
    answer: "c"},

  { question:"Q2. What was the first soft drink in space? \n" +"a) coco cola \n"+ "b) thums up \n"+ "c) Pepsi \n"+ "d) other \n" ,
    answer:"a" },

  { question:"Q3. What is the most consumed manufactured drink in the world? \n" +"a) coffee \n" +"b) tea \n" +"c) cold drink \n" +"d) other \n" ,
    answer:"b" },

    { question:"Q4. Which country invented ice cream? \n" +"a) america \n" +"b) china \n" +"c) india \n" +"d) japan \n" ,
      answer:"b" },

    { question:"Q5. What is the rarest M&M color? \n" +"a) yellow \n" +"b) red \n" +"c) blue \n" +"d) brown \n" ,
      answer:"d" },

    { question:"Q6. Area 51 is located in which state? \n" +"a) america \n" +"b) nevada  \n" +"c) japan \n" +"d) china \n" ,
      answer:"b" },

    { question:"Q7. What country has the most natural lakes? \n" +"a) india \n" +"b) nepal \n" +"c) pakistan \n" +"d) canada \n" ,
      answer:"d" },

    { question:"Q8. What is Earth's largest continent? \n" +"a) asia \n" +"b) africa \n" +"c) australia \n" +"d) europe \n" ,
     answer:"a" },

    { question:"Q9. What is the hottest planet in the solar system? \n" +"a) mercury \n" +"b) venus \n" +"c) mars \n" +"d) earth \n" ,
      answer:"b" },

    { question:"Q10. What is the name of Loki weapon in marvel movie series? \n" +"a) Lævateinn \n" +"b) Mjollnir \n" +"c) Double-Edged Sword \n" +"d) other \n" ,
      answer:"a" }
  ] ;

  for( var i=0;i<quiz.length;i++){
    play(quiz[i].question , quiz[i].answer);
   }
   
   console.log("Thank you.Your score is:",score);

}

else
{
  console.log("Thank you. Please visit again! :)");
  console.log();
}

function play(question,answer)
 {
  var userAnswer= readlinesync.question(question);
  if (userAnswer.toLowerCase() == answer)
  {
    console.log(chalk.green("You are right."));
    score++;
    console.log();
  }
  else
  {
    console.log(chalk.red("You are wrong."));
    console.log(chalk.green("The right answer is:"+answer));
    console.log();
  }
 }
