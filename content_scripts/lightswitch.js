(function() {
  // static styles for the lighting border
  const styles = {
    box:
      "width:100%;position:fixed;z-index: 999999;top: 0px;bottom: 0px;left: 0px;right: 0px;pointer-events:none;background-blend-mode:screen",
    day:
      "border: 5px solid #fff300;box-shadow: inset 0px 0px 93px 79px rgba(255,243,0,0.5);",
    night:
      "border: 5px solid #292f60;box-shadow: inset 0px 0px 93px 79px rgba(41,47,96,0.5);",
    off: "border: 5px solid #2e2e2e;box-shadow: inset 0x 0px 6px 10px #fff;"
  };

  // checks if there is an instance of extension running
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  // determines whether it's daytime
  let currentTime = new Date().getHours();
  let day = currentTime >= 8 && currentTime <= 18 ? true : false;

  // creates border element with style according to daytime
  var light = document.createElement("div");
  light.style = day ? styles.day + styles.box : styles.night + styles.box;
  light.id = "light_switch";

  //add images
  const img = document.createElement("img");
  img.id = "img";
  if (day) {
    img.setAttribute(
      "src",
      "http://pic.616pic.com/ys_b_img/00/12/84/epM34F7YDe.jpg"
    );
    img.style = `width: 110px;opacity: 0.7;
mask-image: radial-gradient(circle,black 60%,transparent 70%);
position: absolute;top: 20px;left: 100px;`;
  } else {
    img.setAttribute(
      "src",
      "https://pic.pngsucai.com/00/15/32/c0b2a048c05f82ed.jpg"
    );
    img.style = `width: 110px;opacity: 0.7;
mask-image: radial-gradient(circle,black 50%,transparent 0%);
position: absolute;top: 20px;left: 100px;`;
  }
  light.appendChild(img);

  document.body.appendChild(light);

  // receives messages from menu for turn on / turn off
  browser.runtime.onMessage.addListener(message => {
    var lightNode = document.getElementById("light_switch");
    if (message.command === "on") {
      let currentTime = new Date().getHours();
      let day = currentTime >= 8 && currentTime <= 18 ? true : false;
      lightNode.style = day
        ? styles.day + styles.box
        : styles.night + styles.box;

      if (document.getElementById("img") === null) {
        const img = document.createElement("img");
        img.id = "img";
        if (day) {
          img.setAttribute(
            "src",
            "http://pic.616pic.com/ys_b_img/00/12/84/epM34F7YDe.jpg"
          );
          img.style = `width: 110px;opacity: 0.7;
mask-image: radial-gradient(circle,black 60%,transparent 70%);
position: absolute;top: 20px;left: 100px;`;
        } else {
          img.setAttribute(
            "src",
            "https://pic.pngsucai.com/00/15/32/c0b2a048c05f82ed.jpg"
          );
          img.style = `width: 110px; opacity: 0.7; mask-image: radial-gradient(circle,black 50%,transparent 0%);
position: absolute;top: 20px;left: 100px;`;
        }

        lightNode.appendChild(img);
      }
    } else if (message.command === "off") {
      const img = document.getElementById("img");
      lightNode.style = styles.box + styles.off;
      lightNode.removeChild(img);
    }
  });
})();
