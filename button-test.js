### Button 
var button = D1;
pinMode(button, 'input-pulldown');

#### Button is pressed test
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
  //analogWrite(BUZZER, 0.5, { freq: 1000 } );
  
}
