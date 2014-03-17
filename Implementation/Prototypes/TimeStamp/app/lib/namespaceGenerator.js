/**
 * Methode zum Anlegen vom Namensräumen.
 * 
 * @param {Object} ns
 * @param {Object} ns_string
 */
exports.extendNamespace=function( ns, ns_string ) {
    var parts = ns_string.split('.'),
        parent = ns,
        pl, i;
    if (parts[0] === "TS") {//ns.getName() 
        parts = parts.slice(1);
    }
    pl = parts.length;
    for (i = 0; i < pl; i++) {
        //create a property if it doesnt exist
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

// var mod = extendNamespace(TS, 'TS.lib.timeStamp');
