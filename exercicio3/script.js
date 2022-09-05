const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const copiaPokemon1 = {
    ...pokemon1,

}
console.log(pokemon1)
console.log("copia:",copiaPokemon1)

copiaPokemon1.nome = "Squirtle"
console.log("Copia nome alterado:", copiaPokemon1)

copiaPokemon1.tipo = "Água"
console.log("Copia nome alterado:", copiaPokemon1)


//3-b
pokemon1.ataques = []
console.log("mais um ataque criado",pokemon1.ataques)

const ataque1 = {nome:"Investida",
dano: 40,
tipo: "Normal",
precisa: 100
}
pokemon1.ataques.push(ataque1)
console.log(pokemon1.ataques) // ataque1, ataque2

//3-c

console.log(copiaPokemon1) //Squirtle

copiaPokemon1.ataques=[]
console.log(copiaPokemon1) //Squirtle

// []    = [...]

copiaPokemon1.ataques= [...pokemon1.ataques]

 //3-d
 pokemon1.ataques=[
	{ataque2:"Folha navalha",
	dano:45,
	tipo:"grama",
	precisao: 100 
 }
 ]
 //3-e
 copiaPokemon1.ataques.push(
	{ataque3:"jato de água",
	dano:40,
	tipo:"aguia",
	precisao: 100 
 })
 //3-f
 console.log(pokemon1)
 console.log(copiaPokemon1)






