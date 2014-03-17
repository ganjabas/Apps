var startButtonClicked = false;
var timeStampModels = Alloy.Collections.timeStampModel;
var ts = require('timeStamp');


function startButtonClick(e) {

	if (!startButtonClicked) {

		startButtonClicked = true;

		$.startButtonLabel.applyProperties({
			text : 'STOP'
		});
		TS.timeStamp.addTimeStamp(timeStampModels);
	} else {
		startButtonClicked = false;
		$.startButtonLabel.applyProperties({
			text : 'START'
		});
		TS.timeStamp.addTimeStamp(timeStampModels);
	}
}