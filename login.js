function login()
{
    var play1=document.getElementById("player1_name").value;
    var play2=document.getElementById("player2_name").value;
    localStorage.setItem("player1",play1);
    localStorage.setItem("player2",play2);
    window.location="gamepage.html"
}
