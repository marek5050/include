var path=require('path');
module.exports=function(root_dir,dir){
	var directory = dir || 'modules';
    console.log(root_dir,directory);
	return function(what){return require(root_dir+path.sep+directory+path.sep+what);};
};