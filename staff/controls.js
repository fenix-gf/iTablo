//секция по хранилищу
//базовые данные
var left_score = 0;
var right_score = 0;
var countdown = 120;
var doublehits = 0;
var is_running = false;
var strike = false;

//заносим базовые данные в табло
window.onload = function() {
    localStorage.setItem("left_score", left_score);
    localStorage.setItem("right_score", right_score);
    localStorage.setItem("countdown", countdown);
    localStorage.setItem("doublehits", doublehits);
    localStorage.setItem("strike", strike);
};

//настраиваем пульт оператора
window.setInterval(function() {
    document.getElementById("left_score").innerHTML = format(left_score);
    document.getElementById("right_score").innerHTML = format(right_score);
    document.getElementById("timer").innerHTML = format_timer(countdown);
    document.getElementById("doublehits").innerHTML = doublehits;
}, 100);

//заносим изменённые данные в хранилище
set_data = function(key, value) {    
    localStorage.setItem(key, value);
    console.log(key,value);
};



//секция про очки
//добавляем очки левому
manage_left_score = function(x) {
    if (x == 1) {
        left_score = left_score + 1;
    } else {
        left_score = left_score - 1;
    };
    set_data("left_score", left_score);
};

//добавляем очки правому
manage_right_score = function(x) {
    if (x == 1) {
        right_score = right_score + 1;
    } else {
        right_score = right_score - 1;
    };
    set_data("right_score", right_score);
};



//секция про таймер
//запуск и остановка таймера
start_stop_timer = function(x) {
    if (is_running == false) {
        is_running = true;
    } else {
        is_running = false;
    };
    console.log("is_running: " + is_running);
};

//таймер сам по себе
var timer = setInterval(function(){
    if (is_running == true) {
        countdown--;
        if (countdown < 0) {
            countdown = 0;
            is_running = false;
            alert("Fight is over")
        };
        set_data("countdown", countdown);
    }
}, 1000);




//секция про обоюдки
//добавляем и убавляем обоюдки
function doublehit(modifier) {
    doublehits = doublehits + modifier;
    set_data("doublehits", doublehits);
    console.log(doublehits);
}

//обновляем количество статус "страйка"
function strike_check() {
    if (strike) {
        strike = false;
        document.getElementById("strike").classList.remove("strike");
        document.getElementById("strike").classList.add("strike_hidden");
    } else {
        strike = true;
        document.getElementById("strike").classList.remove("strike_hidden");
        document.getElementById("strike").classList.add("strike");
    };
    set_data("strike", strike);
};


//вспомогательные функции
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

//ловим пробел
window.addEventListener('keydown',this.check,false);

function check(e) {
    var code = e.keyCode;
    switch (code) {  
        case 83:
        start_stop_timer();
          break;
        default:
          console.log(code); //Everything else
    }
}