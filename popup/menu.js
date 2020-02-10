// function to send message to extension tab instance

//menu. js provides a navigation method for the extension. Allows for a toggle in order to select a command

function queryMessage(msg) {
  browser.tabs
    .query({
      currentWindow: true,
      active: true
    })
    .then(tabs => {
      browser.tabs.sendMessage(tabs[0].id, { command: msg });
    })
    .catch(alertError);
}

function alertError(error) {
  alert(`Failed to execute script: ${error.message}`);
}

// event listener function that reacts to clicks on menu
function clickListener() {
  document.addEventListener("click", e => {
    x = e.target.id;
    if (x === "on") {
      e.target.classList.add("selected");
      document.getElementById("off").classList.remove("selected");
    } else if (x === "off") {
      e.target.classList.add("selected");
      document.getElementById("on").classList.remove("selected");
    }
    if (x === "on" || x === "off") queryMessage(x);
  });
}

browser.tabs
  .executeScript({ file: "/content_scripts/lightswitch.js" })
  .then(clickListener)
  .catch(alertError);
