function setUpEvents() {
    var content = document.getElementById("content");
    var button = document.getElementById("show-more");
    var myMessage = document.getElementById("message");
    function showMessage(){
        myMessage.className = 'show';
    }
    setTimeout(showMessage, 3000);
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
}
window.onload = function () {
    setUpEvents();
}
