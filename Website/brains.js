function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = 'AM';
  if (hour > 12) {
    hour -= 12;
    am_pm = 'PM';
  }
  if (hour == 0) {
    hr = 12;
    am_pm = 'AM';
  }
  if (sec<10){
    sec = "0" + sec;
  }
  let currentTime = `${hour}:${min}:${sec} ${am_pm}`;
  document.getElementById("time").innerHTML = currentTime;
  setTimeout(showTime, 1000);
};

const sevenDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

var date = new Date();
let cfker = sevenDays[date.getDay()];
const date__day = date.getDate();
const date__year = date.getFullYear();
document.getElementById("check").innerHTML =`${cfker},${date__day}, ${date__year}` ;

let boring = ` ${date.getMonth()}${date.getDate()} `;
boring = Number(boring);
document.getElementById(boring).style.backgroundColor = "	rgba(255, 153, 0, .6)" ;


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
