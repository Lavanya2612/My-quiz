class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  

  play(){
    //write code here to hide question elements
    Question.this.title.hide();
    Question.this.button.hide();
    Question.this.input2.hide();
    //write code to change the background color here
background('yellow')
    //write code to show a heading for showing the result of Quiz
textSize(25)
var results= createElement('h2')
results.html('RESULTS')
    //call getContestantInfo( ) here
contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
if(allContestants!== undefined) {
fill('blue')
textSize(20)
text('*NOTE: Contestant who aswered correct are highlighted with green color!', 130,230)
}
    
for(var plr in allContestants){
  var CorrectAns= '2'
  if(CorrectAns===allContestants[plr].answer)
  fill('green')
  else
    fill('red')}
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

  }

