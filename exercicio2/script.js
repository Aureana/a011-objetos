const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"},  // cada chave que se fecha representa um indice, aqui neste caso indice 0
		{canal: "Canal Brasil", horario: "19h"}, // aqui indice 1
		{canal: "Globo", horario: "14h"} // aqui indice 2
		]
};

// respostas aqui ⬇️

console.log("Nome do primeiro ator(a):", filme.elenco[0])  
console.log("Nome do último ator(a):", filme.elenco[3]) //console.log("Nome do último ator(a):", filme.elenco[filme.elenco.length-1])
console.log(filme.transmissoesHoje) 
console.log("transmissão ás:",filme.transmissoesHoje[1].horario)