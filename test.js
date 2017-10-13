const tap = require('tap');
const sf = require('./index.js');

tap.equals( sf(0), 1 );
tap.equals( sf(1), 1 );
tap.equals( sf(2), 2 );
tap.equals( sf(3), 12 );
tap.equals( sf(4), 288 );
tap.equals( sf(5), 34560 );

tap.throws( () => sf(-1) );
tap.throws( () => sf({}) );
tap.throws( () => sf('') );
