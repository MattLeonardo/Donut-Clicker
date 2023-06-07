var donuts = 100;
const element = document.getElementById("donutbutton");
const upgrade1 = document.getElementById("upgrade1");
element.addEventListener("click", donutClick);
// adds a donut on click
function donutClick() {
  document.getElementById("donuts").innerHTML++;
  ("1");
  donuts = donuts + 1;
  console.log(donuts);
}

var dAssist = 100;

    // auto clicker
function autoClicker() {
  // checks to see if you have enough donuts
  if (donuts >= dAssist) { 
    var donutAssist = document.getElementById("donutAssist");
    var donut = 0;
    window.setInterval(function () {
      donut = donut + donuts + 1;
      document.getElementById("donuts").innerHTML++;
      donut;
      donuts++;
      1;
    }, 1000);
  
    // removes the donuts
    document.getElementById("donuts").innerHTML -= dAssist;
    donuts = donuts - 100;   
    dAssist = dAssist + 10;
    upgrade1.innerText = "Donut Assistant- " + dAssist + " Donuts"; 
    console.log(dAssist);
  } else {
    alert("You do not have enough donuts require to purchase!");
  }
}
console.log(donuts);
