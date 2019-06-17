//start of IIFE
var pokemonRepository = (function () {
	var repository = [];
	var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

	function add(pokemon) {
		repository.push(pokemon);
	}

	function getALL() {
		return repository;
	}

	function loadList() {
		return fetch(apiUrl).then(function (response) {
			return response.json();
		}).then(function (json) {
			json.results.forEach(function (item) {
				var pokemon = {
					name: item.name,
					detailsUrl: item.url
				};
				add(pokemon);
			});
		});
	}

	function addListItem(item) {

		//defining li and class
		var $li = document.createElement('li');
		$li.classList.add('pokedex_item');

		//assigning li to ul parent
		var $ul = document.querySelector('ul');
		$ul.appendChild($li);

		//button creation
		var $info_button = document.createElement('button');
		$info_button.classList.add('p-button');
		$info_button.innerHTML = item.name;
		$li.appendChild($info_button);

		//event listener
		$info_button.addEventListener('click', function (event) {
			console.log(item.name);
		});

	}

	function loadDetails(item) {
		var url = item.detailsUrl;
		return fetch(url).then(function (response) {
			return response.json();
		}).then(function (details) {
			// Now we add the details to the item
			item.imageUrl = details.sprites.front_default;
			item.height = details.height;
			item.types = Object.keys(details.types);
		}).catch(function (e) {
			console.error(e);
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
		showDetails: showDetails,
		loadList: loadList

	};

})();
//end of IIFE
pokemonRepository.loadList().then(function () {
	// Now the data is loaded!
	pokemonRepository.getAll().forEach(function (pokemon) {
		addListItem(pokemon);
	});
});

//pmon is the full repository
var pmon = pokemonRepository.getALL();

console.log(pmon);

pmon.forEach(function (item) {
	pokemonRepository.addListItem(item);
});
