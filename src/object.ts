interface IDealer {
  nama: string;
  alamat: string;
  telepon: string;
}

interface IMobil extends IDealer {
  merk: string;
  tipe: string;
  tahun: number;
  harga?: number;
  power: string;
}

let mobil2: IMobil = {
  merk: "Toyota",
  tipe: "Avanza",
  tahun: 2019,
  power: "100hp",
  nama: "Dealer Toyota Bandung",
  alamat: "Jl. Raya Bandung",
  telepon: "0812-3456-7890",
};

class Mobil implements IMobil {
  merk: string;
  tipe: string;
  tahun: number;
  harga?: number | undefined;
  power: string;
  nama: string;
  alamat: string;
  telepon: string;

  constructor(
    merk: string,
    tipe: string,
    tahun: number,
    power: string,
    nama: string,
    alamat: string,
    telepon: string
  ) {
    this.merk = merk;
    this.tipe = tipe;
    this.tahun = tahun;
    this.power = power;
    this.nama = nama;
    this.alamat = alamat;
    this.telepon = telepon;
  }
}

function printHargaMobil(harga: number): void {
  console.log(harga);
}

printHargaMobil(mobil2.harga ?? 0);
