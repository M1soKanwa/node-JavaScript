'use strict';

 /*

 require (path)

 how require works : 

 resolving -->> loading -->> wrappening -->> evaluation -->> caching 

 RESOLVING :
    1) Core modules 
    2) File
    *.js  // *.json
    3) 
        3. 1) package json -> *main*
        3. 2) index.js || index.json
    4) node_modules     
    5) throw new Error().
 */