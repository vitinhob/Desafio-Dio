const entrada = require ("prompt-sync")({sigint: true});

let nomeHeroi;

nomeHeroi = entrada("Qual o nome do seu persongem: ")
console.log("Seja bem vindo " + nomeHeroi + "\n")

console.log("Se você tiver menos de 1000 de xp Digite 1")
console.log("Se você tiver entre 1001 e 2000 de xp Digite 2")
console.log("Se você tiver entre 2001 e 5000 de xp Digite 3")
console.log("Se você tiver entre 6001 e 7000 de xp Digite 4")
console.log("Se você tiver entre 7001 e 8000 de xp Digite 5")
console.log("Se você tiver entre 8001 e 9000 de xp Digite 6")
console.log("Se você tiver entre 9001 e 10000 de xp Digite 7")
console.log("Se você tiver mais de 10001 de xp Digite 8\n")

let xp;
xp = entrada("Agora digite o nível do seu herói: ")
console.log("")

switch (xp)
{
    case "1":
    console.log(nomeHeroi + " Está no nível Ferro")
    break

    case "2":
    console.log(nomeHeroi + " Está no nível Bronze")
    break

    case "3":
    console.log(nomeHeroi + " Está no nível Prata")
    break

    case "4":
    console.log(nomeHeroi + " Está no nível Ouro")
    break

    case "5":
    console.log(nomeHeroi + " Está no nível Platina")
    break

    case "6":
    console.log(nomeHeroi + " Está no nível Ascendente")
    break

    case "7":
    console.log(nomeHeroi + " Está no nível Imortal")
    break

    case "8":
    console.log(nomeHeroi + " Está no nível Radiante")
    break
}

