// Pick the first account at the 'microsoft.png' image
// https://login.microsoftonline.com/

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function pick_first_account() {
    var accountButtons = document.getElementsByClassName("table-cell text-left content");
    var firstAccountButton = accountButtons[0];
    var email = firstAccountButton.childNodes[1].innerText;
    if (email.match(/@ad\.ua\.ac\.be$/)) {
        firstAccountButton.click();
    }
}

var url_match = /https:\/\/login\.microsoftonline\.com\//
if (document.URL.match(url_match)) {
    // Microsoft has a small animation when showing the account picker, wait till everything is loaded
    delay(500).then(() => pick_first_account());

}
