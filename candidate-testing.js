const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
 let question = "Who was the first American woman in space? ";
 let correctAnswer = "Sally Ride";
 let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? " , //set the questions in order, inside of an array with a space at theend//
  "True or false: 5 kilometer == 5000 meters? " , //spelling needs to be exact or test will fail//
  "(5 + 3)/2 * 10 = ? " ,
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? " ,
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
 "true",
  "40",             //set the correct answers inside an array//
   "Trajectory",
   "3"
  ];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    candidateName = input.question("Please enter your name ");      //request the user to input their name//
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    // input.question(question)
    for (let i = 0; i < questions.length; i++) {    //the function will go through the line of code and ask each question//
      let answer = input.question(questions[i]);    //input.question will ask the user each question individually and// 
      candidateAnswers.push(answer);                //store the answer provided by user//
    }                                               //each answer the user provides, gets added to candidateAnswers and// 
  }                                                 // .push will add the provided answer to line up with the question//

//function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 
//}
function gradeQuiz() {
  console.log("Candidate's Responses:");                    //the function will go through and grade the answers of the//
  for (let i = 0; i < questions.length; i++) {              // user. do console.log to show its the users answers.//
    console.log(`Question ${i + 1}: ${questions[i]}`);      // set the score to 0 so it will begin grading users answers//
    console.log(`   Your Answer: ${candidateAnswers[i]}`);  //the 1st for loop will ask each question printing it outwith//
    console.log(`   Correct Answer: ${correctAnswers[i]}`); //the question, user answer and correct answer//
    console.log();                                          
  }                                                         //the 2nd for loop with the if statement, will run the users//
                                                            //provided answer and check if it is true/false by putting it//
  let score = 0;                                            //in all caps to compare to correct answer regardless of how//
  for (let i = 0; i < correctAnswers.length; i++) {         //the answer is typed//
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toString().toUpperCase()) {
      score++;
    }
  }

  console.log(`Candidate's Score: ${score} out of ${correctAnswers.length}`); //this log will print out the users score//
}                                                            //showing how many were right/wrong out of all questions//


  /*/ if (correctAnswer = "") {
  //   console.log("Awesome! That is correct.");
  // }
   
  //  else  {
  //   console.log("Bummer... incorrect.");
  //  }*/


//let grade //TODO 3.2 use this variable to calculate the candidates score.//


//   return grade;//
// }

function runProgram() {
  askForName();                                                       //these functions will run without console.log//
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello", candidateName , "it's nice to see you again!");
  askQuestion();
  gradeQuiz();
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};