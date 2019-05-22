//setting objects
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

repo.forEach(function(entry) {
	document.write('<h2>' + entry.name + '</h2><br>Height: ' + entry.height + 'm<br><br>');

	console.log(entry);
	if (entry.height > 1.4) {
		document.write('<b>&nbsp;-&nbsp;Woah! Look at this chonky boi.</b>')
	}
});

