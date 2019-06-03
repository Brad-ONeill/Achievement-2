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
	
	//defining content areas
	var $header = document.createElement('header');
	var $div = document.createElement('div');
	var $ul = document.createElement('ul');
	var $li = document.createElement('li');
	var $footer = document.createElement('footer');

	//blueprint of page
	var $body = document.querySelector('body');
	$body.appendChild($header);
	
	var $body = document.querySelector('body');
	$body.appendChild($div);
	
	var $bdiv = document.querySelector('div');
	$div.appendChild($ul);
	
	var $ul = document.querySelector('ul');
	$ul.appendChild($li);
	
	var $body = document.querySelector('body');
	$body.appendChild($footer);
	
	$header.classList.add('title')
	$header.innerText = 'Pokedex';
	$li.classList.add('pokedex_item')
	


	function add(pokemon) {
		repo.push(pokemon);
	}

	function getALL() {
		return repo;
	}

	//function returns
	return {
		add: add,
		getALL: getALL

	};

})();
//end of IIFE

//pmon is the full repository
var pmon = pokemonRepository.getALL();

console.log(pmon);






/*
pmon.forEach(function (entry) {
	document.write('<h2>' + entry.name + '</h2><br>Height: ' + entry.height + 'm<br><br>');

	//no change
	if (entry.height > 1.4) {
		document.write('<b>&nbsp;-&nbsp;Woah! Look at this chonky boi.</b>')
	}
});
*/
