// Hit the "Aanmelden" button at the 'blackboard.png' images
// https://blackboard.uantwerpen.be/webapps/blackboard/content/listContent.jsp

var url_match = /https:\/\/blackboard.uantwerpen.be\/webapps\/blackboard\/content\/listContent.jsp/
if (document.URL.match(url_match)) {
    // Check whether the "Aanmelden" button is present
    var loginButton = document.getElementById("topframe.login.label");
    // Check whether the title of the button is "Aanmelden"
    if (loginButton.title === "Aanmelden") {

        // Save the current url for redirecting later
        chrome.storage.local.set({"blackboard_redirect_link": document.URL});

        // Click the "Aanmelden" button
        loginButton.click();
    }
}
