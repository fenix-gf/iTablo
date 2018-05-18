//формат таймера в хх:хх
function format_timer(total) {
    console.log("ololo");
    var minutes = Math.trunc(total / 60);
    var seconds = Math.trunc(total % 60);
    return format(minutes) + ":" + format(seconds);
};

//базовые данные
var left_score = 5;
var right_score = 0;
var countdown = 130;
var double_hits = 0;
var is_running = false;

//заносим базовые данные в табло
window.onload = function() {
    localStorage.setItem("left_score", left_score);
    localStorage.setItem("right_score", right_score);
    localStorage.setItem("countdown", countdown);
};


//настраиваем пульт оператора
window.setInterval(function() {
    document.getElementById("left_score").innerHTML = left_score;
    document.getElementById("right_score").innerHTML = right_score;
    document.getElementById("timer").innerHTML = format_timer(countdown);
}, 100);


//заносим изменённые данные в хранилище
set_data = function(key, value) {    
    localStorage.setItem(key, value);
    console.log(key,value);
};


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
    if (x == 1) {
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





// //timer start and stop
// function controls() {
//     if (is_running == false) {
//       is_running = true;
//       console.log("is_running: " + is_running);
//     } else {
//       is_running = false;
//       console.log("is_running: " + is_running);
//     }
//   }
  
//   //timer increase and decrease
//   function timeControl(modifier) {
//     countdown = countdown + modifier;
//     if (countdown <= 0) {
//       countdown = 0;
//     }
//     document.getElementById('timer').innerHTML = format_timer(countdown);
//     console.log(countdown);
//   }
  
//   //timer itself
//   var timer = setInterval(function(){
//     if (is_running == true) {
//       countdown--;
//       if (countdown < 0) {
//         countdown = 0;
//         is_running = false;
//         alert("Fight is over")
//         }
//       document.getElementById('timer').innerHTML = format_timer(countdown);
//       console.log("countdown: " + countdown);
//       console.log("is_running: " + is_running);
//     }
//   }, 1000)



  
