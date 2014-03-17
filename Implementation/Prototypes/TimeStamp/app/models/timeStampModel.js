
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
		    "date": "text",
		    "time":"text",
		    "total":"text"
		},
		adapter: {
			type: "sql",
			collection_name: "timeStampModel"
		}
	}
};