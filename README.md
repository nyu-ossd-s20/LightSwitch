# LightSwitch

This is a FireFox extension will check the time of the user and change the theme of the browser (or page) accordingly. During morning times, the theme will reflect a lighter color scheme (a morning shift), and durning the night time there will be a darker color scheme ( night shift).
The lightswitch extension detects the time of day. If it is day time, the decoration that lights up the website is turned off. DUring the night time, the decoration is turned off. This can be done both automatically (the computer will periodically check the user time) or manually. If the user chooses, the lights can be turn on or off.  

# Installation

To install this firefox extension, first check if all the files needed are located in the right places.
This extension includes three folders, content_scripts (this contains lightswitch.js), data (this contains the images that will popup), popup (which contains menu.js. This function to send message to extension tab instance), and the manifest.json file. 

To install and use the extension on firefox, open the browser and navigate to the "about:debugging" page. Next, find the "This FireFox" tab and click "Load Temorpary Add-on". Finally, select manifest.json and load the extension.
