/**
 * Diese Klasse kümmert sich um die Zeitstempel. Sie 
 * bietet Methoden zum Hinzufügen und zum Entfernen
 * der Zeitstempel in die Liste und die Datenbank.
 *
 * @namespace TS
 * @class timeStamp
 * @module ts
 */
TS.timeStamp = {

	/**
	* Fügt einen Zeitstempel in die Liste und in
	* die Datenbank ein.
	*
	* @method addTimeStamp
	* @param {Collection} eine Liste mit Models
	*/
	addTimeStamp : function(collection) {
		
		var currentTime = new Date(),
			hours = currentTime.getHours(),
			minutes = currentTime.getMinutes(),
			seconds = currentTime.getSeconds(),
			month = currentTime.getMonth() + 1,
			day = currentTime.getDate(),
			year = currentTime.getFullYear(); 
	
		if (hours < 10) {
			hours = "0" + hours;
		};
		if (minutes < 10) {
			minutes = "0" + minutes;
		};
		if (seconds < 10) {
			seconds = "0" + seconds;
		};
	
		var model = Alloy.createModel('timeStampModel', {
			date : day + "." + month + "." + year,
			time : hours + ":" + minutes + ":" + seconds,
			total : day + "." + month + "." + year + " - " + hours + ":" + minutes + ":" + seconds
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
	* @param {Collection} eine Liste mit Models
	* @param {index} Index der Zeile die entfernwerden soll.
	*/
	removeTimeStamp : function(collection, index) {
		var model = collection.at(index);
	
		collection.remove(model);
		model.destroy();
		collection.fetch();
	}

};
