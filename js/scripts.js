//IIFE
var pokemonRepository = (function () {
	//local variable
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

	function getALL() {
		return repo;
	}

	function add(pokemon) {
		repo.push(pokemon);
	}

	return {
		add: add,
		getALL: getALL

	};

})(); //end of IIFE

//pmon is the full repository
var pmon = pokemonRepository.getALL();

console.log(pmon);

//Updated loop to point to new variable, 'pmon'
/*
pmon.forEach(function (entry) {
	document.write('<h2>' + entry.name + '</h2><br>Height: ' + entry.height + 'm<br><br>');

	//no change
	if (entry.height > 1.4) {
		document.write('<b>&nbsp;-&nbsp;Woah! Look at this chonky boi.</b>')
	}
});
*/
