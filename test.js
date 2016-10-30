function setUpEvents() {
    var content = document.getElementById("content");
    var button = document.getElementById("show-more");
    var myMessage = document.getElementById("message");
    var myColorChanger = document.getElementById('color-changer');
    var colors = ['red','blue','pink','yellow'];
    var counter = 0;
    function showMessage(){
        myMessage.className = 'show';
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
}
window.onload = function () {
    setUpEvents();
}
