// select studentenportaal in blackboard-studentenportaal.js
var url_match = /https:\/\/blackboard.uantwerpen.be\//;
if (document.URL.match(url_match)) {

    var buttons = document.getElementsByClassName("ua-login-box-button");
    var firstButton = buttons[0];

    if (firstButton.innerText === "Studentenportaal") {
        firstButton.click();
    }
}