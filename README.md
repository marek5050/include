## just_include ##
========================

NodeJS Module to Include private modules.


## Installation
    npm install just_include --save

## Usage
   **** DO NOT CALL WITH ** VAR ** ! // Creates a global function available in any required file  ****
   **** MUST BE INITIATED WITHIN MAIN JS FILE !  ****


__main.js__

      just_include = require('just_include')(__dirname);
      var helloWorld = just_include('helloWorld');
      helloWorld();


__main.js__
// If modules are not in a 'modules' folder, specify a custom folder
      just_include = require('just_include')(__dirname,'private')
      var helloWorld = just_include('helloWorld');
      helloWorld();



## Test
      npm test

## Release History
 * 0.1.0 Initial History
 * 0.1.1 Styling changes.
 * 0.1.4 Still doing styling changes.
 * 0.1.5 Trying to publish....
 * 0.1.6 More spelling mistakes....
 * 0.1.7 Only odd get published?
 * 0.1.8 Maybe even even do...
