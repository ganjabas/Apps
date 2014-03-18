/**
 * Bildet eine Datenstruktur für ein Zeitstempel.
 *
 * @namespace TSA.app.lib.datatypes
 * @class timeStamp
 */
TSA.app.lib.timeStamp = {

	m_StartDate : "null",
	m_EndDate : "null",
	m_StartTime : "null",
	m_EndTime : "null",
	m_Total : "null",
	
	/**
	 * Setzt m_StartDate und m_StartTime. Ersetzt noch 
	 * den Konstruktor. //TODO: Konstruktor-Funktion
	 * 
	 * @method setAllStarts
	 * @param {String} startDate
	 * @param {String} startTime
	 * 
	 */
	setAllStarts:function(startDate, startTime){
		this.m_StartDate=startDate;	
		this.m_StartTime=startTime;
	},
	
	/**
	 * Setzt m_EndDate und m_EndTime. Ersetzt Konstruktor.
	 * 
	 * @method setAllEnds
	 * @param {String} endDate
	 * @param {String} endTime 
	 */
	setAllEnds:function(endDate, endTime){
		this.m_EndDate=endDate;
		this.m_EndTime=endTime;	
		this.setTotal();
	},
	
	/**
	 * Lierert Startdatum des Zeitstempels zurück.
	 *
	 * @method getStartDate
	 * @return {String} startDate
	 */
	getStartDate : function() {
		return this.m_StartDate;
	},

	/**
	 * Lierert Enddatum des Zeitstempels zurück.
	 *
	 * @method getEndDate
	 * @return {String} endDate
	 */
	getEndDate : function() {
		return this.m_EndDate;
	},

	/**
	 * Lierert Startzeit des Zeitstempels zurück.
	 * 
	 * @method getStartTime
	 * @return {String} startZeit
	 */
	getStartTime : function() {
		return this.m_StartTime;
	},
	
	/**
	 * Lierert Endzeit des Zeitstempels zurück.
	 * 
	 * @method getEndTime
	 * @return {String} endTime
	 */
	getEndTime : function() {
		return this.m_EndTime;
	},
	
	/**
	 * Addiert Start und Ende des Zeitstempels
	 * und gibt als Gesamtzeit zurück.
	 * 
	 * @method getTotal
	 * @return {String} total
	 */
	getTotal : function() {
		return this.m_Total;
	},
	
	/**
	 * Setzt Startdatum des Zeitstempels.
	 * 
	 * @method setStartDate
	 * @param {String} startDat
	 */
	setStartDate:function(startDate){
		this.m_StartDate=startDate;
	},
	
	/**
	 *Setzt die Startzeit des Zeitstempels.
	 *  
	 * @method setStartTime
 	 * @param {String} startTime
	 */
	setStartTime:function(startTime){
		this.m_StartTime=startTime;
	},
	
	/**
	 * Setzt Enddatum des Zeitstempels.
	 * 
	 * @method setEndDate
	 * @param {String} endDate
	 */
	setEndDate:function(endDate){
		this.m_EndDate=endDate;
	},
	
	/**
	 * Setzt Endzeit des Zeitstempels.
	 * 
	 * @method setEndTime
     * @param {String} endTime
	 */
	setEndTime:function(endTime){
		this.m_EndTime=endTime;
	},
	
	/**
	 * Rechnet die Gesamtzeit des Zeitstempels
	 * aus. Berechnung ÜBERPRÜFEN
	 * 
	 * @method setTotal
	 */
	setTotal:function(){
		
		var splitedEndDate = this.m_EndDate.split('/');
		var splitedEndTime = this.m_EndTime.split(':');
		
		// Set the unit values in milliseconds.
		var msecPerMinute = 1000 * 60;
		var msecPerHour = msecPerMinute * 60;
		var msecPerDay = msecPerHour * 24;
		
		// Set a date and get the milliseconds
		var date = new Date(this.m_StartDate);
		var dateMsec = date.getTime();
		
		// Set the date to January 1, at midnight, of the specified year.
		//date.setMonth(splitedEndDate[0]);
		date.setDate(this.m_EndDate);
		//date.setFullYear(splitedEndDate[2]);
		date.setHours(splitedEndTime[0], splitedEndTime[1], splitedEndTime[2],0);
		
		// Get the difference in milliseconds.
		var interval = dateMsec - date.getTime();
		
		// Calculate how many days the interval contains. Subtract that
		// many days from the interval to determine the remainder.
		var days = Math.floor(interval / msecPerDay );
		interval = interval - (days * msecPerDay );
		
		// Calculate the hours, minutes, and seconds.
		var hours = Math.floor(interval / msecPerHour );
		interval = interval - (hours * msecPerHour );
		
		var minutes = Math.floor(interval / msecPerMinute );
		interval = interval - (minutes * msecPerMinute );
		
		var seconds = Math.floor(interval / 1000 );
		
		// Display the result.
		console.log(days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds");
		this.m_Total=days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
		
		//Output: 164 days, 23 hours, 0 minutes, 0 seconds.
	}
};
