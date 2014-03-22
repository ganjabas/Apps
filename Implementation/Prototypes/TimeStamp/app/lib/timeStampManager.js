require('util').extendNamespace(TSA, 'TSA.app.lib.timeStampManager');
/**
 * Diese Klasse kümmert sich um die Zeitstempel. Sie
 * bietet Methoden zum Hinzufügen und zum Entfernen
 * der Zeitstempel in die Liste und die Datenbank.
 *
 * @namespace TSA
 * @class timeStampManager
 */
TSA.app.lib.timeStampManager = {

	/**
	 * Fügt einen Zeitstempel in die Liste und in
	 * die Datenbank ein.
	 *
	 * @method addTimeStamp
	 * @param {Collection} eine Liste mit Models
	 * @param {Object} timeStamp
	 */
	addTimeStamp : function(collection, timeStamp) {

		var model = Alloy.createModel('timeStampModel', {
		startDate : timeStamp.getStartDate(),
		endDate : timeStamp.getEndDate(),
		startTime : timeStamp.getStartTime(),
		endTime: timeStamp.getEndTime(),
		total : timeStamp.getStartTime()+"-"+timeStamp.getEndTime()
		});

		collection.add(model);
		model.save();
		collection.fetch();
	},

	/**
	 * Entfernt einen Zeitstempel aus der Liste und aus der
	 * Datenbank.
	 *
	 * @method removeTimeStamp
	 * @param {Collection} collection eine Liste mit Models
	 * @param {Integer} index Index der Zeile die entfernwerden soll.
	 */
	removeTimeStamp : function(collection, index) {

		var model = collection.at(index);

		collection.remove(model);
		model.destroy();
		collection.fetch();
	},
	
	/**
	 * Daten in die Apiomatcloud schreiben.
	 * 
 	 * @param {timeStamp} timeStamp
	 */
	uploadTimeStamp : function(timeStamp){
		
		var timeStamp = new Apiomat.timeStampModelApiomat();
		timeStamp.setStartDate(timeStamp.getStartDate());
		timeStamp.setEndDate(timeStamp.getEndDate());
		timeStamp.setStartTime(timeStamp.getStartTime());
		timeStamp.setEndTime(timeStamp.getEndTime());
		timeStamp.setTotal(timeStamp.getStartTime()+"-"+timeStamp.getEndTime());

		// Save the book on apiOmat
		timeStamp.save({
			onOk : function() {
				myTimeStampModelApiomats.add([{
					startDate : timeStamp.getStartDate(),
					endDate : timeStamp.getEndDate(),
					startTime : timeStamp.getStartTime(),
					endTime : timeStamp.getEndTime(),
					total : timeStamp.getTotal()
				}]);
				myTimeStampModelApiomats.trigger('change');
				//$.addbook.close();
			},
			onError : function(error) {
				alert('Some error occured. ' + error.statusCode + ' --> ' + error.message);
				//$.addbook.close();
			}
		});
	}
};
