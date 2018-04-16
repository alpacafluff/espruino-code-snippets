// Buzzer 
var buzzer = D1;
pinMode(buzzer, 'output');
analogWrite(BUZZER, 0.5, { freq: 1000 } );

// Making sound

var buzzer=D1;
var silenceTimeout;


analogWrite(buzzer, 0.5, { freq: 1000 } );
if (silenceTimeout!==undefined) {
clearTimeout(silenceTimeout);
}

silenceTimeout = setTimeout(function() {
    silenceTimeout = undefined;
    // make sure we turn out beeping off
    digitalRead(buzzer);
  }, 0);

analogWrite(buzzer, 0.5, { freq: 500 } );
if (silenceTimeout!==undefined) {
clearTimeout(silenceTimeout);
}

silenceTimeout = setTimeout(function() {
    silenceTimeout = undefined;
    // make sure we turn out beeping off
    digitalRead(buzzer);
  }, 15);
