/**
 * Bildet eine Datenstruktur für ein Zeitstempel.
 *
 * @namespace TSA.app.lib.datatypes
 * @class timeStamp
 */
TSA.app.lib.timeStamp = {

	m_StartDate : "",
	m_EndDate : "",
	m_StartTime : "",
	m_EndTime : "",
	m_Total : "",
	
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
	 * aus
	 * 
	 * @method setTotal
	 */
	setTotal:function(){
		//this.m_Total=
	}
};
