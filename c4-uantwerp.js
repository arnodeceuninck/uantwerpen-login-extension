// Hit the "Aanmelden" button at the 'blackboard.png' images
// https://idpx.uantwerpen.be/idp/profile/SAML2/Redirect/SSO

// For some reason, the password here gets always seen as not entered (probably some chrome password manager security feature)
// So this click still needs to be done manually.

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function password_entered() {
    // Check whether there is text in the input field
    var pwd_input = document.getElementById('password');
    return pwd_input.value.length > 0
}

function login() {
    if (password_entered()) {
        // Click the button
        var loginButton = document.getElementsByName('_eventId_proceed')[0];
        if (loginButton.innerText === 'Login') {
            loginButton.click();
        }
    } else {
        console.log('No password entered');
    }
}

var url_match = /https:\/\/idpx\.uantwerpen\.be\/idp\/profile\/SAML2\/Redirect\/SSO/
if (document.URL.match(url_match)) {
    // Wait a small delay for the password manager to automatically fill in the password
    delay(1000).then(() => login());
}
