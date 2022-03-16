function doSomething<T>(args: T): {
  result: T;
  name: string;
  age: string;
} {
  return {
    result: args,
    name: "RPL 4A",
    age: "23",
  };
}

const arg: string[] = ["RPL 4A", "23"];

interface ISepeda {
  merk: string;
  tipe: string;
}

const sepeda: ISepeda = {
  merk: "Yamaha",
  tipe: "Sepeda",
};

interface IMobile {
  merkMobil: string;
  tipeMobil: string;
}

const mobil: IMobile = {
  merkMobil: "Toyota",
  tipeMobil: "Avanza",
};

const sepedaMobile: ISepeda & IMobile = {
  merk: "Yamaha",
  tipe: "Sepeda",
  merkMobil: "Toyota",
  tipeMobil: "Avanza",
};

doSomething<ISepeda & IMobile>(sepedaMobile).result;

doSomething<typeof arg>(arg).result;

doSomething<number>(10).result;
