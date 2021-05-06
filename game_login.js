function addplayer() {
    player1name = document.getElementById("p1_input").value;
    player2name = document.getElementById("p2_input").value;

    localStorage.setItem("player1",player1name);
    localStorage.setItem("player2",player2name);

    window.location = "game.html"
}