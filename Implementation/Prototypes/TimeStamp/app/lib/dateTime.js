require('util').extendNamespace(TSA, 'TSA.app.lib.dateTime');
/**
 * Stellt Methoden zur Ermittlung des aktuellen
 * Datums und der aktuellen Zeit bereit.
 * 
 * @namespace TSA.app.lib
 * @class dateTime
 */

TSA.app.lib.dateTime = {
	
	m_Hours : "",
	m_Minutes : "",
	m_Seconds : "", 
	m_Month : "", 
	m_Day : "", 
	m_Year : "",
	
	/**
	 * Setz das aktuelle Datum und die aktuelle Zeit.
	 * 
	 * @method setDateTime
	 */
	setDateTime : function(){
		var currentTime = new Date(),
		hours = currentTime.getHours(),
		minutes = currentTime.getMinutes(),
		seconds = currentTime.getSeconds(), 
		month = currentTime.getMonth() + 1, 
		day = currentTime.getDate(), 
		year = currentTime.getFullYear();	
		
		this.m_Hours = hours;
		this.m_Minutes = minutes;
		this.m_Seconds = seconds; 
		this.m_Month = month; 
		this.m_Day = day;
		this.m_Year = year;
	},
	
	/**
	 * Liefert Stunden zurück.
	 * 
	 * @method getHours
	 * @return {String} m_Hours
	 */
	getHours:function(){
		if (this.m_Hours < 10) {
			this.m_Hours = "0" + this.m_Hours;
		};
		
		return this.m_Hours;
	},
	
	/**
	 * Liefert Minuten zurück.
	 * 
	 * @method getMinutes
	 * @return {String} m_Minutes
	 */
	getMinutes : function(){

		if (this.m_Minutes < 10) {
			this.m_Minutes = "0" + this.m_Minutes;
		};
	
		return this.m_Minutes;
	},
	
	/**
	 * Liefert Sekunden zurück.
	 * 
	 * @method getSeconds
	 * @return {String} m_Seconds
	 */
	getSeconds : function(){
		
		if (this.m_Seconds < 10) {
			this.m_Seconds = "0" + this.m_Seconds;
		};
	
		return this.m_Seconds;
	},
	
	/**
	 * Liefert Monat zurück.
	 * 
	 * @method getMonth
	 * @return {String} m_Month
	 */
	getMonth : function(){
		return this.m_Month;
	},

	/**
	 * Liefert Tag zurück.
	 * 
	 * @method getDay
	 * @return {String} m_Day
	 */
	getDay : function(){
		return this.m_Day;
	},
	
	/**
	 * Liefert das aktuelle Jahr zurück.
	 * 
	 * @method getYear
	 * @return {String} m_Year
	 */
	getYear : function(){
		return this.m_Year;
	}
};