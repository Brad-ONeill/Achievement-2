//setting array
var repo = [];

//setting objects
var pok1 = {
	name: "Pikachu",
	height: 0.4,
	type: ["Eletric"]
};
var pok2 = {
	name: "Gengar",
	height: 1.5,
	type: ["Ghost", "Poison"]
};
var pok3 = {
	name: "Crawdaunt",
	height: 1.1,
	type: ["Dark", "Water"]
};

repo = [pok1, pok2, pok3];

//loop
for (var i = 0; i <= 2; i++) {
	document.write('<p>' + repo[i].name + ' (height: ' + repo[i].height + 'm)</p>');

	if (repo[i].height > 1.4) {
		document.write('<b>Woah! Look at that chonky boi.</b>')
	}
}
