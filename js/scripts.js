//new global variable
var pokemonRepository = (function () {
	//this is now a 'local variable'
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

	function add(pokemon) {
		repo.push(pokemon);
	}

	//defining function 'getALL'
	function getALL() {
		return repo; //returns contents of 'local variable'
	}

	return {
		add: add,
		getALL: getALL
	};

})(); //end of IIFE

//new variable (pmon) outside of the IIFE, for loop to reference
var pmon = pokemonRepository.getALL();

console.log(pmon); //printing to console?

//Updated loop to point to new variable, 'pmon'
pmon.forEach(function (entry) {
	document.write('<h2>' + entry.name + '</h2><br>Height: ' + entry.height + 'm<br><br>');

//no change
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
