## just_include
========================

NodeJS Module to Include private modules.


## Installation
    npm install include --save

## Usage
   **** DO NOT CALL WITH ** VAR ** !  // Creates a global function available in any required file  ****
   **** MUST BE INITIATED WITHIN MAIN JS FILE !  ****


__main.js__

      just_include = require('include')(__dirname);
      var helloWorld = include('helloWorld');
      helloWorld();


OR
   __main.js__
   // If modules are not in a 'modules' folder, specify a custom folder

      just_include = require('include')(__dirname,'private')
      var helloWorld = include('helloWorld');
      helloWorld();



## Test
      npm test

## Releast History
 * 0.1.0 Initial History
 * 0.1.1 Styling changes.

