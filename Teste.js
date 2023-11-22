console.log("**Digite seu nome de herói**")
let nomeHeroi = prompt()

console.log("Seja bem vindo " + nomeHeroi)

console.log("Agora digite o nível de experiência do seu herói: ")
let xp = prompt()

switch (xp)
{
    case 0 <= 1000:
    console.log(nomeHeroi + "Está no nível Ferro")
    break

    case 1001 <= 2000:
    console.log(nomeHeroi + "Está no nível Bronze")
    break

    case 2001 <= 5000:
    console.log(nomeHeroi + "Está no nível Prata")
    break

    case 5001 <= 6000:
    console.log(nomeHeroi + "Está no nível Ouro")
    break

    case 6001 <= 7000:
    console.log(nomeHeroi + "Está no nível Platina")
    break

    case 7001 <= 8000:
    console.log(nomeHeroi + "Está no nível Ascendente")
    break

    case 8001 <= 9000:
    console.log(nomeHeroi + "Está no nível Imortal")
    break

    case 9001 <= 10000:
    console.log(nomeHeroi + "Está no nível Radiante")
    break
}

