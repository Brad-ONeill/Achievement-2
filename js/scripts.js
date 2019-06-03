//start of IIFE
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
	//end of repo

	function add(pokemon) {
		repo.push(pokemon);
	}

	function getALL() {
		return repo;
	}

	function addListItem(entry) {

		//defining li and class
		var $li = document.createElement('li');
		$li.classList.add('pokedex_item');

		//assigning li to ul parent
		var $ul = document.querySelector('ul');
		$ul.appendChild($li);

		//button creation
		var $info_button = document.createElement('button');
		$info_button.classList.add('p-button');
		$info_button.innerHTML = entry.name;
		$li.appendChild($info_button);

		//event listener
		$info_button.addEventListener('click', function (event) {
		console.log(entry.name)				
		});

	}
	
	function showDetails(pokemon) {
		console.log(pokemon);
	}

	//function returns
	return {
		add: add,
		getALL: getALL,
		addListItem: addListItem,
		showDetails: showDetails

	};

})();
//end of IIFE

//pmon is the full repository
var pmon = pokemonRepository.getALL();

console.log(pmon);

pmon.forEach(function (entry) {
	pokemonRepository.addListItem(entry);
});
