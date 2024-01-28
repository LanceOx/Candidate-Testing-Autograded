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
  "Who was the first American woman in space? " ,  
  "True or false: 5 kilometer == 5000 meters? " ,  
  "(5 + 3)/2 * 10 = ? " ,
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? " ,
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",             
  "Trajectory",
  "3"
  ];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    
  candidateName = input.question("Please enter your first name: ");      
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    // input.question(question)
    for (let i = 0; i < questions.length; i++) {    
      let answer = input.question(questions[i]);    
      candidateAnswers.push(answer);                
    }                                               
  }

//function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 
//}
function gradeQuiz(candidateAnswers) {
  //console.log("Candidate's Responses:");                    
  let correctAmount = 0;
  for (let i = 0; i < questions.length; i++) {              
    console.log(`Question ${i + 1}: ${questions[i]}`);      
    console.log(`   Your Answer:    ${candidateAnswers[i]}`);  
    console.log(`   Correct Answer: ${correctAnswers[i]}`); 
    console.log();                                          
  }                                 

  let score = 0;                                            
  for (let i = 0; i < correctAnswers.length; i++) {        
    if (candidateAnswers[i] && 
        correctAnswers[i] &&
        candidateAnswers[i].toUpperCase() === correctAnswers[i].toString().toUpperCase()) 
    {   correctAmount++;
  }
}

//TODO 3.2 use this variable to calculate the candidates score.//

 console.log(`Candidate's Score: ${correctAmount} out of ${questions.length} (${correctAmount/questions.length*100}% correct)`);
 console.log();
  let grade = (correctAmount / questions.length) * 100;
  if (grade <= 60){
  console.log(`${grade}% - You have failed this test.`)}
  if (grade >= 80){
  console.log(`${grade}%! Great effort, you have passed this test.`)
  }
   return grade;
}

function runProgram() {
         askForName();                                                      
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello", candidateName , "it's nice to see you again!");
   askQuestion();
   gradeQuiz(candidateAnswers);
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