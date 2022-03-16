type TRole = "admin" | "user" | "superadmin";
const role: TRole = "superadmin";

type TUser = {
  name: string;
  age: number;
};

type TSepeda = {
  merk: string;
  tipe: string;
} & TUser;

const penggunaSepedda: TSepeda = {
  merk: "Yamaha",
  age: 23,
  name: "RPL 4A",
  tipe: "Sepeda",
};
