//New global variable
var pokemonRepository = (function () {
	//this is now a local variable
	var repo = [
		{
		  name: "Pikachu",
		  height: 0.4,
		  type: ["Eletric"]
		},
		{
		  name: "Gengar",
		  height: 1.5,
		  type: ["Ghost", "Poison"]
		},
		{
		  name: "Crawdaunt",
		  height: 1.1,
		  type: ["Dark", "Water"]
		}

	];

	//functions inside of new global variable
	function add(pmon) {
		repo.push(pmon);
	}

	//defining new function 'getALL'
	function getALL() {
		return repo; //returns contents of local variable
	}

	return {
		add: add,
		getALL: getALL
	};

})(); //end of IIFE

repo.forEach(function (entry) {
	document.write('<h2>' + entry.name + '</h2><br>Height: ' + entry.height + 'm<br><br>');


	if (entry.height > 1.4) {
		document.write('<b>&nbsp;-&nbsp;Woah! Look at this chonky boi.</b>')
	}
});

/*
--- previous loop for reference ---

repo.forEach(function (entry) {
	document.write('<h2>' + entry.name + '</h2><br>Height: ' + entry.height + 'm<br><br>');

	console.log(entry);
	if (entry.height > 1.4) {
		document.write('<b>&nbsp;-&nbsp;Woah! Look at this chonky boi.</b>')
	}
});
*/
