class Banking{
constructor(id, description, balance){
    this.id=id;
    this.description=description;
    this.balance=balance;
}
accountDeposit(id, accId, balance, amt){
while(this.id=accId){
    this.balance+=amt;
}
return this.balance
}
accountWithdraw(){

}
accountTransfer(){

}

}

let process1 = new Banking(1, "test",1000.0);
process1.accountDeposit(100.00);

/*
class savings{
    contructor (id, desc){
        this.id=id;
        this.desc=desc;
        this.bal=0;
    }
deposit(amt){
    if (typeof amt !== "number"){
        console.error("amount is not a number");
        return false;
    }
    if(amt<=0){
        console.error("amount must be greater than zero");
        return false
    }
    this.bal += amt;
    return true;
}
withdraw(amt){
    if(amt<=0){

    }
    if(amt>this.bal){
        console.error("insufficient funds");
        return false;
    }
}




}




*/