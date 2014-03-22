var ts = require('timeStamp');

var timeStampModels = Alloy.Collections.timeStampModel,
	opts = {
  			cancel: 1,
  			options: ['Ja', 'Nein'],
  			title: 'Eintrag löschen?'
			},
	dialog = Ti.UI.createOptionDialog(opts),
	selectedRow=-1;

timeStampModels.fetch();

	dialog.addEventListener("click", function(e){
	if(e.index === 0 && selectedRow >-1 ){
		TSA.app.lib.timeStampManager.removeTimeStamp(timeStampModels,selectedRow);
	}
});

function removeItem(e) {
	selectedRow=e.index;
	dialog.show();	
}
