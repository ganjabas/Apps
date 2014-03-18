require('timeStamp');
require('timeStampManager');
require('dateTime');

var startButtonClicked = false,
	timeStampModels = Alloy.Collections.timeStampModel,
	m_TimeStamp = TSA.app.lib.timeStamp,
	m_DateTime = TSA.app.lib.dateTime;

function startButtonClick(e) {

	if (!startButtonClicked) {	
		m_DateTime.setDateTime();
		m_TimeStamp.setAllStarts(m_DateTime.getDay()+"."+m_DateTime.getMonth()+"."
		+m_DateTime.getYear(),m_DateTime.getHours()+":"+m_DateTime.getMinutes()+":"
		+m_DateTime.getSeconds());
		
		startButtonClicked = true;

		$.startButtonLabel.applyProperties({
		text : 'STOP'
		});
	} else {
		startButtonClicked = false;
		$.startButtonLabel.applyProperties({
			text : 'START'
		});
		m_DateTime.setDateTime();
		m_TimeStamp.setAllEnds(m_DateTime.getDay()+"."+m_DateTime.getMonth()+"."
		+m_DateTime.getYear(),m_DateTime.getHours()+":"+m_DateTime.getMinutes()+":"
		+m_DateTime.getSeconds());
		TSA.app.lib.timeStampManager.addTimeStamp(timeStampModels, m_TimeStamp);
	}
}