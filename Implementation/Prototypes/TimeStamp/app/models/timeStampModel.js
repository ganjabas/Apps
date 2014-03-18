
/*
 * Definiert die Struktur des Zeitstempels. Der Zeitstempel
 * enthält folgende Tabellen:
 *  - date: Datum im Textformat
 *  - time: Zeit im Textformat
 *  - total: gesammte Zeit
 * 
 */
exports.definition = {
	config: {
		columns: {
		    "startDate": "text",
		    "endDate":"text",
		    "startTime":"text",
		    "endTime":"text",
		    "total":"text"
		},
		adapter: {
			type: "sql",
			collection_name: "timeStampModel"
		}
	}
};