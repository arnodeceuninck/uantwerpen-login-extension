// Redirect to the previously saved url from the frontpage.png image

var url_match = /https:\/\/blackboard\.uantwerpen\.be\/webapps\/portal\/execute\/tabs\/tabAction/

if (document.URL.match(url_match)) {
    // Redirect to previously saved url
    chrome.storage.local.get(['blackboard_redirect_link'], function (result) {
        console.log(result);
        if (result.blackboard_redirect_link) {
            // If there is a previously saved url, remove it, so you won't get redirected the next time you're on the welcome page
            chrome.storage.local.remove('blackboard_redirect_link');
            window.location.href = result.blackboard_redirect_link;
        }
    });
}
