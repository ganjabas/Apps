// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

//Alloy.createCollection("name der model datei");
Alloy.Collections.timeStampModel = Alloy.createCollection("timeStampModel");


/**
 *  Namespace Function 
 * 
 * @module tsa
 * */
var TSA = TSA || {};
// var mod = require('namespaceGenerator');
// mod.extendNamespace(TS, 'TS.timeStamp');
TSA.namespace = function ( ns_string ) {
	var parts = ns_string.split( '.' ),
		parent = TSA, i;
	if ( parts[ 0 ] === "TS" ) {
		parts = parts.slice( 1 );
	}
	for ( i = 0; i < parts.length; i += 1 ) {
		if ( typeof parent[ parts[ i ] ] === "undefined" ) {
			parent[ parts[ i ] ] = {};
		}
		parent = parent[ parts[ i ] ];
	}
	return parent;
};

TSA.namespace( 'app.lib.timeStampManager' );
TSA.namespace( 'app.lib.timeStamp' );
TSA.namespace( 'app.lib.dateTime' );
