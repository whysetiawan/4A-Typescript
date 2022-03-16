"use strict";
function doSomething(args) {
    return {
        result: args,
        name: "RPL 4A",
        age: "23",
    };
}
const arg = ["RPL 4A", "23"];
const sepeda = {
    merk: "Yamaha",
    tipe: "Sepeda",
};
const mobil = {
    merkMobil: "Toyota",
    tipeMobil: "Avanza",
};
const sepedaMobile = {
    merk: "Yamaha",
    tipe: "Sepeda",
    merkMobil: "Toyota",
    tipeMobil: "Avanza",
};
doSomething(sepedaMobile).result;
doSomething(arg).result;
doSomething(10).result;
