module.exports.message = function(exception) {           
	var error = exception.toString().split(/\n/g);
	console.log(error[0]);
};