let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

let timer = false;

function StartTimer() {
  timer = true;
  stopWatchTimer();
}
function StopTimer() {
  timer = false;
}
function RestartTimer() {
  timer = false;

  hour = 0;
  minute = 0;
  second = 0;
  count = 0;

  document.getElementById("count").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("mint").innerHTML = "00";
  document.getElementById("hr").innerHTML = "00";
}

function stopWatchTimer() {
  if (timer == true) {
    count = count + 1;
  }
  if (count == 100) {
    second = second + 1;
    count = 0;
  }
  if (second == 59) {
    minute = minute + 1;
    second = 0;
  }
  if (minute == 59) {
    hour = hour + 1;
    second = 0;
    minute = 0;
  }
  let hourString = hour;
  let minuteString = minute;
  let secondString = second;
  let countString = count;

  if (hour < 10) {
      hourString = '0' + hourString
  }
  if (minute < 10) {
      minuteString = '0' + minuteString
  }
  if (second < 10) {
      secondString = '0' + secondString
  }
  if (count < 10) {
      countString = '0' + countString
  }

  document.getElementById("count").innerHTML = countString;
  document.getElementById("sec").innerHTML = secondString;
  document.getElementById("mint").innerHTML = minuteString;
  document.getElementById("hr").innerHTML = hourString;

  setTimeout("stopWatchTimer()", 10);
}
