const arrow = (params) => {
    console.log(`${params}`);
}

arrow("halo guys");

let bilangan = [3, 2, 5];

const faktorial = bilangan => {
    if (bilangan == 1) {
        return 1;
    } else {
        return bilangan * faktorial(bilangan - 1);
    }
}

let bilanganBaru = bilangan.map( bilangan => ({
    bilangan: bilangan,
    faktorial: faktorial(bilangan)
}))

console.log(bilanganBaru);