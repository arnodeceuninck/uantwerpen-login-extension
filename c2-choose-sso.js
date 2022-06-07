// Hit the "Log in (Single Sign-On)" at the 'choose.png' images
// https://blackboard.uantwerpen.be/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_178_1

var url_match = "https://blackboard.uantwerpen.be/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_178_1"
if (document.URL === url_match) {
    var loginButton = document.getElementById("sso-login");
    if (loginButton.innerText === "Log in (Single Sign-On)") {
        loginButton.click();
    }
}
