// Button 

// Variables
var button = D1;
pinMode(button, 'input-pulldown');

// Testing component, toggle on and off onboard LED (tested on Espruino Pico)
var button = D2;
pinMode(button,'input_pulldown');

setWatch(function(e) {
  console.log("Button pressed");
 toggle();
}, button, { repeat: true, edge: 'rising' });


  var on = false;
  function toggle() {
  on = !on;
  digitalWrite(LED3, on);
  
}
