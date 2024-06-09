export default class Customer {
    firstName;
    lastName;
    age;
    gander;
    contact;
    email;
    address;
    AccountNo;
    balance;
    constructor(name1, name2, age, gnder, cntct, email, adrs, ANo, bal) {
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
    printinfo() {
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
