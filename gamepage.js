var player1_name=localStorage.getItem("player1");
var player2_name=localStorage.getItem("player2");
//var score=localStorage.getItem("score");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
var number1;
var number2;
function send()
{
     number1=parseInt(document.getElementById("num1").value);
      number2=parseInt(document.getElementById("num2").value);
    console.log(number1,number2);

    var ques="<h4>"+number1+" X "+number2+"</h4>";
    console.log(ques);
    var answer="<br><br><input type='text' class='form-control' placeholder='answer' id='ip'>"
    var btn="<br><br><button type='submit' onclick=check() class='btn btn-warning'>Check</button>";
    var row=ques+answer+btn;
    document.getElementById("output").innerHTML=row;
}
var question_turn="player1";
var answer_turn ="player2";
function check()
{
    var get_answer=document.getElementById("ip").value;
    console.log(get_answer);
    var ans=number1*number2;
    console.log(ans);
    if(get_answer==ans)
    {
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player1_score").innerHTML=player2_score;
    }
    if(question_turn=="player1")
{
    question_turn="player2";
    document.getElementById("player_question").innerHTML="Question turn:"+player2_name;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question turn:"+player1_name;
}
if(answer_turn=="player1")
{
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="answer turn:"+player2_name;
}
else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="answer turn:"+player1_name;
}
document.getElementById("output").innerHTML="";
}
