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
	
	function addListItem(){
		//defining li and class
		var $li = document.createElement('li');
			$li.classList.add('pokedex_item');
		//assigning li to ul parent
		var $ul = document.querySelector('ul');
			$ul.appendChild($li);
	
	}

	//function returns
	return {
		add: add,
		getALL: getALL,
		addListItem: addListItem

	};

})();
//end of IIFE

//pmon is the full repository
var pmon = pokemonRepository.getALL();
var list = pokemonRepository.addListItem();


console.log(pmon);


