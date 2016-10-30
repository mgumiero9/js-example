function setUpEvents() {
    var content = document.getElementById("content");
    var button = document.getElementById("show-more");
    var myMessage = document.getElementById("message");
    var myColorChanger = document.getElementById("color-changer");
    var colors = ["red", "blue", "pink", "yellow"];
    var counter = 0;

    function showMessage() {
        myMessage.className = "show";
    }
    setTimeout(showMessage, 2000);
    button.onclick = function () {
        if (content.className == "open") {
            //shrink
            content.className = "";
            button.innerHTML = "Show More";
        }
        else {
            //increase
            content.className = "open";
            button.innerHTML = "Show Less";
        }
    }

    function colorChanger() {
        if (counter >= 4) counter = 0;
        myColorChanger.style.background = colors[counter];
        counter++;
    }
    var myInterval = setInterval(colorChanger, 2000);
    myColorChanger.onclick = function () {
        clearInterval(myInterval);
        myColorChanger.innerHTML = 'TIMER STOPPED';
    }
}
window.onload = function () {
    setUpEvents();
}
