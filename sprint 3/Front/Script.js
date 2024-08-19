const input = document.getElementById("checkin");
const input2 = document.getElementById("checkout");

input.addEventListener("focus", function () {
  this.type = "date";
});

input.addEventListener("blur", function () {
  if (!this.value) {
    this.type = "text";
  }
});

