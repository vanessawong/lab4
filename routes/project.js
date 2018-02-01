exports.viewProject = function(req, res) {
	var name = req.params.projectName; 
  	console.log("The project name is: " + name);
	res.render('project', {
		'projectName' : name 
	});
	}
