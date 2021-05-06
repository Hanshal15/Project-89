
function send() {
Number1=document.getElementById("1q").value;
Number2=document.getElementById("2q").value;
auctual_answer=parseInt(Number1) * parseInt(Number2);
question = "<h4>" + Number1 + "X" + Number2 + "</h4>";
inputbox= "<br>Answer : <input type='text' id='inputcheckbox'>";
checkbutton="<br><br> <button class='btn btn-info onclick='check()'>CHECK</button>";
row= question + inputbox + checkbutton;
document.getElementById("output").innerHTML = row;
document.getElementById("1q").value = "";
document.getElementById("2q").value = "";

console.log(auctual_answer);
}