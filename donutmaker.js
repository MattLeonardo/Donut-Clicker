// Current number of donuts
var donuts = 0;
// Total number of donuts collected overall
var donutTotal = 0;
// Main image of donut to click
const donutButton = document.getElementById("donutbutton");

// donut store upgrades
const upgrade1 = document.getElementById("upgrade1");
const donutAssistants = document.getElementById("donutAssistants");
donutAssistants.style.display = "none";
const upgrade1Container = document.getElementById("upgrade1container");
upgrade1Container.style.display = "inline";

// Opens the Donut tracking on the left side
function openLeftNav() {
  document.getElementById("stats").style.width = "250px";
  document.getElementById("statsbtn").style.marginLeft = "250px";
}
// Closes Tracking
function closeLeftNav() {
  document.getElementById("stats").style.width = "0";
  document.getElementById("statsbtn").style.marginLeft= "0";
}
// Right side donut Store
function openRightNav() {
  document.getElementById("donutstore").style.width = "250px";
  document.getElementById("storebtn").style.marginRight = "250px";
}
// Closes Store
function closeRightNav() {
  document.getElementById("donutstore").style.width = "0";
  document.getElementById("storebtn").style.marginRight= "0";
}



donutButton.addEventListener("click", donutClick);
// adds a donut on click and counts donuts
function donutClick() {
  document.getElementById("donuts").innerHTML++;
  ("1");
  document.getElementById("donutTotal").innerHTML++;
  ("1");
  donuts = donuts + 1;
  donutTotal = donutTotal + 1;
  console.log(donuts);
};

// Donut Store "prices"
var dAssist = 100;




    // auto clicker
function autoClicker() {
  // checks to see if you have enough donuts to buy the auto clicker
  if (donuts >= dAssist) { 
    var donutAssist = document.getElementById("donutAssist");
    // starts adding clicks from 0
    var donutAuto = 0;
    window.setInterval(function () {
      donutAuto = donutAuto + donuts + 1;
      // donut tracking
      document.getElementById("donuts").innerHTML++;
      donutAuto;
      donuts++;
      1;
      document.getElementById("donutTotal").innerHTML++;
      donutAuto;
      donutTotal++;
      1;
    }, 1000);
  
    // removes the donuts
    document.getElementById("donuts").innerHTML -= dAssist;   
    donuts = donuts - dAssist;
    dAssist = dAssist * 1.10;
    dAssist = Math.round(dAssist);
    upgrade1.innerText = "Donut Assistant- " + dAssist + " Donuts"; 
    donutAssistants.style.display = "inline";
    donutAssistantsCount.innerHTML ++; "1";
  } else {
    alert("You do not have enough donuts required to purchase!");
  }
}
console.log(donuts);
