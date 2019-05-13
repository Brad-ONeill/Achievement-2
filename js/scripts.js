//setting array
var repo = [];

//setting objects
var pok1 = {
	name: "<h2>Pikachu",
	height: 0.4,
	type: ["Eletric"]
};
var pok2 = {
	name: "<h2>Gengar",
	height: 1.5,
	type: ["Ghost", "Poison"]
};
var pok3 = {
	name: "<h2>Crawdaunt",
	height: 1.1,
	type: ["Dark", "Water"]
};

repo = [pok1, pok2, pok3];

//loop
for (var i = 0; i <= 2; i++) {
	document.write(repo[i].name + ' (height: ' + repo[i].height + 'm)</h2>');

	if (repo[i].height > 1.4) {
		document.write('<b>&nbsp;-&nbsp;Woah! Look at this chonky boi.</b>')
	}
}
