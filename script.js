var btn=document.querySelector("#strike");
var btn2=document.querySelector("#reset");
// var ball=document.querySelector("#team1-superover .ball");
var scb_1 =document.querySelector("#score-team1")
var wick_1 =document.querySelector("#wickets-team1")
var scb_2 =document.querySelector("#score-team2")
var wick_2 =document.querySelector("#wickets-team2")

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

var ballCount = 0;
var team=1;
var score_1=0;
var score_2=0;
var w_1=0;
var w_2=0;
var tempsc=0;

const possiblevalues=[0,1,2,3,4,5,6,"w"]

function updatescore(){
    scb_1.innerText=score_1;
    wick_1.innerText=w_1;
    scb_2.innerText=score_2;
    wick_2.innerText=w_2;
}

function gameover(score_1,score_2){
    gameOverAudio.play();
    if (score_1>score_2){
        alert("India has won",score_1)
    }
    else if (score_1<score_2){
        alert("Pakistan has won",score_2)
    }
    else{
        alert("tie")
    }
}

function generaterandom(){
    return possiblevalues[Math.floor(Math.random()*8)]
}

btn.addEventListener("click",()=>{
    strikeAudio.pause();
    strikeAudio.currentTime = 0;
    strikeAudio.play()



    if(team==1){

       ballCount+=1;
       tempsc=generaterandom(); 
       document.querySelector(`#team1-superover .ball:nth-child(${ballCount})`).innerText= tempsc;
       if(tempsc!="w"){
         score_1+=tempsc;
       }
       else if(tempsc=="w"){
           w_1+=1;
       }
       updatescore()
       if(ballCount==6){
          ballCount=0;
          team=2;
       }
    }else if(team==2){
        ballCount+=1;
        tempsc=generaterandom();
        document.querySelector(`#team2-superover .ball:nth-child(${ballCount})`).innerText=tempsc;
        if(tempsc!="w"){
            score_2+=tempsc;
          }
          else{
            w_2+=1;
          }
          if(score_2>score_1 || ballCount===6 || w_2==2){
            gameover(score_1,score_2)

          }
          updatescore()

    }
})

btn2.addEventListener("click",()=>{
    window.location.reload();
})


