// Hit the "UAntwerpen SSO" (under "Aanmelden met account van derden") button at the 'relogin.png' images
// https://blackboard.uantwerpen.be/webapps/login/?action=relogin

var url_match = "https://blackboard.uantwerpen.be/webapps/login/?action=relogin"
if (document.URL === url_match) {
    var loginRedirectProviderList = document.getElementById("loginRedirectProviderList");
    var uantwerpen_sso = loginRedirectProviderList.getElementsByTagName('a')[0];
    if (uantwerpen_sso.innerText === "UAntwerpen SSO") {
        uantwerpen_sso.click();
    }
}
