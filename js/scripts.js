var pokemonRepository = (function () {
	var repo = [];
	var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

	function add(pokemon) {
		repo.push(pokemon);
	}

	function getALL() {
		return repo;
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
		}).catch(function (e) {
			console.error(e);
		});
	}

	function loadDetails(item) {
		var url = entry.detailsUrl;
		return fetch(url).then(function (response) {
			return response.json();
		}).then(function (details) {
			item.imageUrl = details.sprites.front_default;
			item.height = details.height;
			item.types = Object.keys(details.types);
		}).catch(function (e) {
			console.error(e);
		});
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
		$info_button.classList.add('info-button');
		$info_button.innerHTML = entry.name;
		$li.appendChild($info_button);
		//event listener
		$info_button.addEventListener('click', function (event) {
			console.log(entry.name, entry.detailsUrl);
		});

	}

	//function returns
	return {
		add: add,
		getALL: getALL,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails

	};

})();
//---
pokemonRepository.loadList().then(function () {
	// Now the data is loaded!
	pmon.forEach(function (entry) {
		pokemonRepository.addListItem(entry);
	});
});

//pmon is the full repository
var pmon = pokemonRepository.getALL();

console.log(pmon);
