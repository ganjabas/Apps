require('timeStamp');
require('timeStampManager');
require('dateTime');

var startButtonClicked = false,
	timeStampModels = Alloy.Collections.timeStampModel,
	m_TimeStamp = TSA.app.lib.timeStamp,
	m_DateTime = TSA.app.lib.dateTime;


signup();

function startButtonClick(e) {

	if (!startButtonClicked) {	
		m_DateTime.setDateTime();
		m_TimeStamp.setAllStarts(m_DateTime.getMonth()+"/"+m_DateTime.getDay()+"/"
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
		m_TimeStamp.setAllEnds(m_DateTime.getMonth()+"/"+m_DateTime.getDay()+"/"
		+m_DateTime.getYear(),m_DateTime.getHours()+":"+m_DateTime.getMinutes()+":"
		+m_DateTime.getSeconds());
		TSA.app.lib.timeStampManager.addTimeStamp(timeStampModels, m_TimeStamp);
	}
}

function signup()
{
    var user = new Apiomat.User();
    user.setUserName("ganjabas");
    user.setPassword("pils4ever");
    Apiomat.Datastore.configure(user);
 
    var saveCB = {
        onOk: function() {
            alert('Saved user successfully');
            loadBooks();
        },
        onError: function(error) {
            alert('Some error occured. ' + error.statusCode + ' --> ' + error.message);
        }
    };
    user.loadMe({
        onOk: function() {
            alert('Successfully logged in');
            loadBooks();
        },
        onError: function(error) {
            alert('User doesn\'t exist. Will create new one...');
            user.save(saveCB);
        }
    });
}

// gets all books from the backend
function loadBooks() {
    // filter if you want to. Like "Apiomat.Book.getBooks('author=="Author Newman"', ..."
    // Apiomat.Book.getBooks(undefined, {
        // onOk: function(loadedBooks) {
            // myBooks.reset();
            // if (typeof loadedBooks !== 'undefined')
            // {
                // for (var i=0; i  ' + error.message);
        // }
    // });
}