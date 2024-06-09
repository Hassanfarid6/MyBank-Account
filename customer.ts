export default class Customer {
  firstName: string;
  lastName: string;
  age: number;
  gander: "Male" | "Female" | "Other";
  contact: number;
  email: string;
  address: string;
  AccountNo: number;
  balance: number;

  constructor(
    name1: string,
    name2: string,
    age: string,
    gnder: "Male" | "Female" | "Other",
    cntct: number,
    email: string,
    adrs: string,
    ANo: number,
    bal: number
  ) {
    this.firstName = name1;
    this.lastName = name2;
    this.age = +age;
    this.gander = gnder;
    this.contact = cntct;
    this.email = email;
    this.address = adrs;
    this.AccountNo = ANo;
    this.balance = bal;
  }
  public printinfo(): void {
    console.log(`Name:    ${this.firstName} ${this.lastName}
                 Age:     ${this.age}
                 Gender:  ${this.gander}
                 Contact: ${this.contact}
                 Email:   ${this.email}
                 Current Adres:${this.address}
                 Account No:   ${this.AccountNo}
                 Balance  ${this.balance}`);
  }
}
