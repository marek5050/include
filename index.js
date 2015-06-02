var path=require('path');
module.exports=function(root_dir,dir){
	var directory = dir || 'modules';
	return function(what){
		return require(root_dir+path.sep+directory+path.sep+what);};
};