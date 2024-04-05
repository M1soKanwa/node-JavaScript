'use strict';

const _ = require('lodash');

const randomNumber = Number(_.random(1, 10, true).toFixed(2));

console.log('--->>> Start <<<----');
console.log(randomNumber);
console.log('--->>> End <<<---');

const div = document.querySelector('#root');
div.append('HELLO WEBPACK');








/*


App.js
Dashbord.js    // Bundler(webpack) / bundle.js
About.js

Бандл - код разных модулей, собранных в одном файле.


1. Production
2. Development
3. 


*/