var path=require('path');
module.exports=function(name,dir){
	var directory = dir || 'modules';
	return function(what){return require(name+path.sep+directory+path.sep+what);};
}