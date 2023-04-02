document.addEventListener("keydown", function (event) {
    var key = document.getElementById("key-" + event.keyCode);
    if (key) {
        key.classList.add("active");
    }
});

document.addEventListener("keyup", function (event) {
    var key = document.getElementById("key-" + event.keyCode);
    if (key) {
        key.classList.remove("active");
    }
});


// My JavaScripts Code

document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');
    display.value = event.key;
  });
  