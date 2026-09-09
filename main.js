
function playerRating(win, loss) {
    const ratingChange = win - loss;

    let nivel;

    if (win <= 10 ) {
        nivel = "Ferro";
    } else if (win >= 11 && win <= 20) {
        nivel = "Bronze";
    } else if (win >= 21 && win <= 50) {
        nivel = "Prata";
    } else if (win >= 51 && win <= 80) {
        nivel = "Ouro";
    } else if (win >= 81 && win <= 90){
        nivel = "Diamante";
    } else if (win >= 91 && win <= 100) {
        nivel = "Lendário";
    } else if (win >= 101) {
        nivel = "Imortal";
    }

    return { saldo: ratingChange, nivel: nivel };
}

const jogadores = [
    { win: 60, loss: 20 },
    { win: 10, loss: 5 },
    { win: 105, loss: 50 }
];

for (let i = 0; i < jogadores.length; i++) {
    const resultado = playerRating(jogadores[i].win, jogadores[i].loss);
    console.log(`O Herói tem de saldo de ${resultado.saldo}, está no nível de ${resultado.nivel}`);
}