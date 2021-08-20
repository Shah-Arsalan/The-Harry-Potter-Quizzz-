var readlinesync = require('readline-sync');
console.log(`Welcome  to The Harry Potter quiz!!!\n---------------------------------\nThis Quiz is made to test your knowledge about the magical world of Harry Potter\n-----------------------------------\n `)
console.log("Each right answer will give you a +1\n\nPlay the game and see if you can beat the High Score!\n\n")
console.log("****Answer with a,b,c,d (use smallcase only)******\n\n")
var userName = readlinesync.question('Enter your name');
 var score = 0;
 function quiz(question,answer){
    var answerByUser = readlinesync.question(question)
    if(answerByUser=== answer){
      console.log("The answer is right")
      score ++;
    }
    else{
      console.log("The answer is wrong")
    }
    console.log("Your score : " + score)
    console.log("--------------------------\n")
 }


 
 var questions = [  firstQuestion ={
    question : "What is the name of Harry Potter's Owl?\na.Hedwig\nb.Groot\nc.Peter\nd.Lily\nYour Answer : ",
  
    answer: "a"
  },

  secondQuestion ={
    question : " What is the name of Luna Lovegood's father?\na.Lucius\nb.Arnold\nc.Stephen\nd.Xenophillius\nYour Answer : ",
    answer: "d"
  },


 thirdQuestion ={
    question : "Name the killing Curse :\na.Alohomaora\nb.Avada Kedavra\nc.Expelliarmus\nd.Expecto Patronum\nYour Answer : ",
    answer: "b"
  }
,
fourthQuestion ={
    question : "What subject does Hagrid teach?\na.Potions\nb.Care of magical creatures\nc.Spells\nd.Dark Arts\nYour Answer : ",
    answer: "b"
  }
,

 fifthQuestion ={
    question : "What position does Harry play in Quidditch team?\na.Seeker\nb.Chaser\nc.Beater\nd.Keeper\nYour Answer : ",
    answer: "a"
  }
  ,
  
  sixthQuestion ={
    question : "What is Harry's Patronus?\na.Stag\nb.Dove\nc.Owl\nd.Deer\nYour Answer : ",
    answer: "a"
  }
  ,
  seventhQuestion ={
    question : "What Flavour are Bertie Bott's Beans?\na.Vomit\nb.Chocolate\nc.Every Flavour\nd.Orange\nYour Answer : ",
    answer: "c"
  }
  ,
  eighthQuestion ={
    question : "What animal represents Hufflepuff house?\na.Racoon\nb.Hawk\nc.Otter\nd.Badger\nYour Answer : ",
    answer: "d"
  }
  ,
  ninthQuestion ={
    question : "Which number on Privet Drive do the Dursley family live at?\na.number 4\nb.number 6\nc.number 7\nd.number 9\nYour Answer : ",
    answer: "a"
  }
  ,
  finalQuestion ={
    question : "What color ink are Hogwarts invitation letters written in?\na.red\nb.green\nc.Black\nd.Invisible ink\nYour Answer : ",
    answer: "b"
  }
  
  ]

 for (i=0; i<questions.length; i++){
   var currentQuestion = questions[i]
   quiz(currentQuestion.question , currentQuestion.answer)

 }


var highscores = [
  arsalan = {
score : "10"
  },

  ankit ={
    score : "10"
  },

  anjum = {
    score : "10"
  }
]

console.log("Your final Score is : " + score)
console.log("\n-------------------------------------\n")
 console.log("Our Hall of Fame :")
 console.log("Arsalan :" + arsalan.score  )
 console.log("Ankit :" + ankit.score  )
 console.log("Anjum :" + anjum.score  )
console.log("\n-------------------------------------\n")
if (score == arsalan.score){
  console.log(`Congratulations!! ${userName} You have tied your score with Hall of Famers`)
  console.log("Send a snapshot of your score to Arsalan . He will add you to the Hall of Fame")
}else {
  console.log(`Sorry ${userName} you couldn't match the highscore.Try again`)
}