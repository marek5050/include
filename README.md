## just_include
=========

NodeJS Module to Include private modules.

##Installation
    npm install include --save

##Usage
   ### DO NOT CALL WITH **VAR** !  // Creates a global function available in any required file ###
   ### MUST BE INITIATED IN MAIN JS FILE ! // Depends on initial __dirname, this is different in every module ###

      just_include = require('include')(__dirname);
      var helloWorld = include('helloWorld');
      helloWorld();

      // If modules are not in a 'modules' folder, specify a custom folder
      just_include = require('include')(__dirname,'private')
      var helloWorld = include('helloWorld');
      helloWorld();

###Test
      npm test

###Releast History
 * 0.1.0 Initial History

