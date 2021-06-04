player1name = localStorage.getItem("player1");
player2name = localStorage.getItem("player2");
player1score = 0;
player2score = 0;
document.getElementById("player1name").innerHTML = player1name + " : ";
document.getElementById("player2name").innerHTML = player2name + " : ";
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
document.getElementById("playerQ").innerHTML = "Question Turn - " + player1name;
document.getElementById("playerans").innerHTML = "Answer Turn - " + player2name;


auctual_answer = sparseInt(Number1) * parseInt(Number2);

function send() {
    Number1 = document.getElementById("1q").value;
    Number2 = document.getElementById("2q").value;
    question = "<h4>" + Number1 + "X" + Number2 + "</h4>";
    inputbox = "<br>Answer : <input type='text' id='inputcheckbox'>";
    checkbutton = "<br><br> <button class='btn btn-info onclick='check()'>CHECK</button>";
    row = question + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("1q").value = "";
    document.getElementById("2q").value = "";
}
console.log(auctual_answer);
questionturn = "player1";
answerturn = "player2";
player1name = localStorage.getItem("player1")
player2name = localStorage.getItem("player2")

function check() {
    getanswer = document.getElementById("inputcheckbox").value;
    if (getanswer == actual_answer) {
        if (answerturn == "player1") {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        } else {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
    }

    if (questionturn == "player1") {
        questionturn = "player2"
        document.getElementById("playerQ").innerHTML = "Question Turn: " + player2ame;

    } else {
        questionturn = "player1";
        document.getElementById("playerQ").innerHTML = "Question Turn: " + player2name;
    }

    if (answerturn == "player1") {
        answerturn = "player2";
        document.getElementById("playerans").innerHTML = "Answer Turn: " + player2name;
    } else {
        answerturn = "player2";
        document.getElementById("playerans").innerHTML = "Answer Turn: " + player1name;
    }
    document.getElementById("output").innerHTML = "";

}