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

	function add(pokemon) {
		repo.push(pokemon);
	}

	function addListItem(monsters) {

		var pmonButtonText = document.createTextNode(pmon.name);
		//element definitions
		var $div = document.createElement('div');
		var $ul = document.createElement('ul');
		var $li = document.createElement('li');
		var $pokebutton = document.createElement('button');
		//classes
		$pokebutton.classList.add('pokebut');
		$div.classList.add('dex');
		//DOM elements
		$pokebutton.appendChild(pmonButtonText);
		$ul.appendChild($li);
		$li.appendChild($pokebutton);
	}

	function getALL() {
		return repo;
	}

	return {
		add: add,
		getALL: getALL,
		addListItem: addListItem,
	};

})(); //end of IIFE

var pmon = pokemonRepository.getALL();

console.log(pmon);



pmon.forEach(function (monsters) {
	pmon.addListItem(monsters);
});





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
