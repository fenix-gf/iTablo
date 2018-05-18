window.setInterval(function() {
    left_score = localStorage.getItem("left_score");
    document.getElementById("left_score").innerHTML = format(left_score);

    right_score = localStorage.getItem("right_score");
    document.getElementById("right_score").innerHTML = format(right_score);

    timer = localStorage.getItem("countdown");
    document.getElementById("timer").innerHTML = format_timer(timer);

    doublehits = localStorage.getItem("doublehits");
    document.getElementById("doublehits").innerHTML = doublehits;

    strike = localStorage.getItem("strike");
    strike_func(strike);    
}, 100);


//формат таймера в хх:хх
function format_timer(total) {
    var minutes = Math.trunc(total / 60);
    var seconds = Math.trunc(total % 60);
    return minutes + ":" + format(seconds);
};

//Формат счёта в два знакоместа
function format(val) {
    if (val < 10)
        val = "0" + val;
        return val;
}

//обновляем количество статус "страйка"
function strike_func(x) {
    if (x == "true") {
        document.getElementById("strike").classList.remove("strike_hidden");
        document.getElementById("strike").classList.add("strike");
        console.log(x + " должен быть тру");
    } else {
        document.getElementById("strike").classList.remove("strike");
        document.getElementById("strike").classList.add("strike_hidden");
        console.log(x + " должен быть фолс");
    };
};
