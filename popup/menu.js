function clickListener() {

}

function alertError(error) {
  alert(`Failed to execute script: ${error.message}`);
}

browser.tabs.executeScript({file: "/content_scripts/lightswitch.js"})
.then(clickListener)
.catch(alertError);