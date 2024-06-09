#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import Customer from "./customer.js"

class MyBank{
    public customers: Customer[] = []

    async AskQuestion(names: string, typee:"input"|"number"|"list", messagee:string, choicess?: string[]){
        let ask = await inquirer.prompt({
            name: names,
            type:typee,
            message: messagee,
            choices: choicess
        })
        return ask[names]
    }
    async createAcc(){
        let a = await this.AskQuestion("firstname","input","Enter your First Name")
        let b = await this.AskQuestion("Secondname","input","Enter Your last Name")
        let d = await this.AskQuestion("age","number","Enter Your Age")
        let c = await this.AskQuestion("Gender","list","Select The Gender",["Male","Female","Other"])
        let e = await this.AskQuestion("Contact","number","Enter Your Mobile Number")
        let eA = await this.AskQuestion("address", "input", "Enter Your Email")
        let h = await this.AskQuestion("address", "input", "Enter Your Current Address")
        let f = await this.AskQuestion("accnumber","number","Enter Your Account Number")
        let g = await this.AskQuestion("balance","number","Enter Your Account Balance")
        parseInt(g)
        let cus = new Customer(a,b,d,c,e,eA,h,f,g)
        this.customers.push(cus)
        console.log(chalk.bgRed(`\nCongratulation ${cus.firstName + " " + cus.lastName} Your Account created Succesfully\nRemeber Your Account Number`))
        this.mainmenu()
    }    
    async checkDetails(){
        let ask = await this.AskQuestion("accnumber", "number", "Enter Your Account Number")
        let cus = this.customers.find(a => a.AccountNo == ask)
        if(cus){
            console.log(chalk.bgGreen(`\nAccount found Succesfully`))
            
            console.log(`
    Name:    ${cus.firstName} ${cus.lastName}
    Age:     ${cus.age}
    Gender:  ${cus.gander}
    Contact No: ${cus.contact}
    Email:   ${cus.email}
    Current Adress:${cus.address}
    AcountNo: ${cus.AccountNo}
    Balance: ${cus.balance}\n`);
    this.mainmenu()
            
        }
        else{
            console.log(`\nAccount not found\nPls Enter The Valid Account Number`)
            this.mainmenu()
        }
    
    }
    async credit(){
       
        let ask = await this.AskQuestion("a","input","Enter Your Account Number")
        let ask1 = await this.AskQuestion("a","number","Enter The Amount U want to Credit To Your Account")
        let cus = this.customers.find(a => a.AccountNo == ask)

        if(cus){
            if (ask1 <= 0){
                console.log(chalk.red(`Invalid Amount`))
                this.mainmenu()
            }else if(ask1 > 0){
               cus.balance += ask1
                console.log(`Crediting ${ask1} to ${cus.firstName +" "+cus.lastName}'s account.`);
                console.log(`\nCash credited succesfully\nAccount Balance: ${cus.balance}`)
                this.mainmenu()
            }else{
                console.log(chalk.red(`Pls Enter Valid Amount`));             
            }
            
        }else{
            console.log(chalk.red(`\nAccount not found\nPls Enter The Valid Account Number\n`))
            this.mainmenu()
        }
       
    }
    
    async debit(){
        let ask = await this.AskQuestion("a","input","Enter Your Account Number")
        let ask1 = await this.AskQuestion("a","number","Enter The Amount U want to Debit from Your Account")
        let cus = this.customers.find(a => a.AccountNo == ask)

        if(cus){
            if (ask1 <= 0){
                console.log(chalk.red(`Invalid Amount`))
                this.mainmenu()
            }else if(ask1 > 0 && cus.balance !== 0 && cus.balance > ask1){
                let oneperc = ask1 / 100
                console.log(`\n1% OF Withdrawal amount was deducted\n Fees: ${oneperc}`)
                oneperc += ask1
                cus.balance -= oneperc
                console.log(`Debiting ${ask1} from ${cus.firstName +" "+cus.lastName}'s account.`);
                console.log(`\nCash Debited succesfully\nAccount Balance: ${cus.balance}`)
                this.mainmenu()
            }else{
                console.log(chalk.red(`Pls Enter Valid Amount or check your Account balance`)); 
                this.mainmenu()           
            }
            
        }else{
            console.log(chalk.red(`\nAccount not found\nPls Enter The Valid Account Number\n`))
            this.mainmenu()
        }
    }
    exit(){
        console.log(`\nThanks For Using MY Bank\n`)
    }

    async mainmenu(){
      try 
            {const ask = await this.AskQuestion("q", "list", "Select Any one of them :", ["Create Account", "Chack Details", "Credit Amount", "Debit Amount", "Exist"])
        switch(ask){
            case "Create Account":
            this.createAcc()
            break;
            case "Chack Details":
                this.checkDetails()
            break;
            case "Credit Amount":
                this.credit()
            break;
            case "Debit Amount":
                this.debit()
            break;
            case "Exist":
                this.exit()
            break
        }
            }catch (error) {
            console.error("Error while asking the question:", error);
        }
    }
}

let start = new MyBank
start.mainmenu()