window.setInterval(function() {
    left_score = localStorage.getItem("left_score");
    document.getElementById("left_score").innerHTML = left_score;

    right_score = localStorage.getItem("right_score");
    document.getElementById("right_score").innerHTML = right_score;

    timer = localStorage.getItem("countdown");
    document.getElementById("timer").innerHTML = timer;
}, 100);


