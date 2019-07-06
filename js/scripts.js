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

		//step 1
		var $li = document.createElement('li'); 							// creates li element
		$li.classList.add('pokedex_item'); 									// add the class 'pokedex_item' to the li element

		//step 2
		var $ul = document.querySelector('ul'); 							//select ul from the document
		$ul.appendChild($li); 												// add the li element from step 1 to the ul element

		//step 3
		var $info_button = document.createElement('button'); 				// create the 'button' element
		$info_button.classList.add('info-button'); 							// add 'info-button' as a class to the button element
		$info_button.setAttribute('id', "modal-button");					// add 'modal-button' as an id to the button lement
		$info_button.innerHTML = entry.name; 								// add the entry name of the PokéMon to the button element
		$li.appendChild($info_button);										// add the button to the li element

		//event listener
		$info_button.addEventListener('click', function (event) { 			// listening for a click action on the button to add name and details URL to the console
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



pokemonRepository.loadList().then(function () {
	// Now the data is loaded!
	pmon.forEach(function (entry) {
		pokemonRepository.addListItem(entry);
	});
});

//pmon is the full repository
var pmon = pokemonRepository.getALL();

console.log(pmon);
