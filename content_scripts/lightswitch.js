// const style = `
// .lights {
//   position: absolute;
//   z-index: 999999;
//   top: 5px;
//   bottom: 5px;
//   left: 5px;
//   right: 5px;
// }

// .lights.on {
//   border: 5px solid #fff300;
//   box-shadow: inset 0px 0px 93px 79px rgba(255,243,0,0.76);
// }

// .lights.off {
//   border: 5px solid #2e2e2e;
//   box-shadow: inset 0x 0px 1px #fff;
// }
// `;

(function() {

  const styles = {
    box: "position: fixed;z-index: 999999;top: 0px;bottom: 0px;left: 0px;right: 0px;pointer-events:none;",
    on: "border: 5px solid #fff300;box-shadow: inset 0px 0px 93px 79px rgba(255,243,0,0.76);",
    off: "border: 5px solid #2e2e2e;box-shadow: inset 0x 0px 6px 10px #fff;"
  }

  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  // determines whether it's daytime
  let currentTime = new Date().getHours();
  let day = (currentTime >= 8 && currentTime <= 18) ? true : false;

  var light = document.createElement("div");
  light.style = day ? styles.off + styles.box : styles.on + styles.box;
  light.id = "light_switch";
  document.body.appendChild(light);

  browser.runtime.onMessage.addListener((message) => {
    var lightNode = document.getElementById("light_switch");
    if (message.command === "on") lightNode.style = styles.box + styles.on;
    else if (message.command === "off") lightNode.style = styles.box + styles.off;
  });

})();