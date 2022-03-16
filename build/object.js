"use strict";
var _a;
let mobil2 = {
    merk: "Toyota",
    tipe: "Avanza",
    tahun: 2019,
    power: "100hp",
    nama: "Dealer Toyota Bandung",
    alamat: "Jl. Raya Bandung",
    telepon: "0812-3456-7890",
};
class Mobil {
    constructor(merk, tipe, tahun, power, nama, alamat, telepon) {
        this.merk = merk;
        this.tipe = tipe;
        this.tahun = tahun;
        this.power = power;
        this.nama = nama;
        this.alamat = alamat;
        this.telepon = telepon;
    }
}
function printHargaMobil(harga) {
    console.log(harga);
}
printHargaMobil((_a = mobil2.harga) !== null && _a !== void 0 ? _a : 0);
