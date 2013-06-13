var b = require('bonescript');
var rightBtnPin = "P9_17";
var leftBtnPin = "P9_18";
var startBtn = "p9_19";

b.pinMode(startBtn, b.INPUT);
b.pinMode(rightBtnPin, b.INPUT);
b.pinMode(leftBtnPin, b.INPUT);

while (b.digitalRead(startBtn) == b.HIGH)
{
	if (b.digitalRead(rightBtnPin) == b.HIGH)
	{
		console.log("Right button pressed");
	}
	if (b.digitalRead(leftBtnPin) == b.HIGH)
	{
		console.log("Left button pressed");
	}
}
