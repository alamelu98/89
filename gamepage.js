var player1_name=localStorage.getItem("player1");
var player2_name=localStorage.getItem("player2");
var score=localStorage.getItem("score");

document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;
document.getElementById("player1_score").innerHTML=score;
document.getElementById("player2_score").innerHTML=score;

function send()
{
    var number1=document.getElementById("num1").value;
    var number2=document.getElementById("num2").value;
    console.log(number1,number2);

    var ques="<h4>"+number1+" X "+number2+"</h4>";
    console.log(ques);
    var answer="<br><br><input type='text' class='form-contro' placeholder='answer'>"
    var btn="<br><br><button type='submit' onclick=check() class='btn btn-warning'>Check</button>";
    var row=ques+answer+btn;
    document.getElementById("output").innerHTML=row;
}