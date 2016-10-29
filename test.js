var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function() {

    if (content.className == "open") {
        //shrink
        content.className = "";
        button.innerHTML = "Show More";

    } else {
        //increase
        content.className = "open";
        button.innerHTML = "Show Less";
    }

}
