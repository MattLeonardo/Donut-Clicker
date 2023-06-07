const element = document.getElementById("donutbutton");
element.addEventListener("click", donutClick);

function donutClick() {
  document.getElementById("collected").innerHTML ++; "1";
}
