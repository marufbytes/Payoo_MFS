document.getElementById('add-money-btn').addEventListener('click',function(){
    const bankAccount=getValueFromInput('add-money-bank');
    if(bankAccount=="Select a Bank"){
        alert("Please select a bank");
        return;
    }

    const accno=getValueFromInput('add-money-number');
    if(accno.length!=11){
        alert("Invalid Acc No");
        return;
    }

    const amount = getValueFromInput('add-money-amount');
    const currentBalance=getBalance();
    const newBalance=currentBalance+Number(amount);

    const pin =getValueFromInput('add-money-pin');
    if(pin==1234){
        alert(`Add money successful from ${bankAccount} at ${new Date()}`)
        setBalance(newBalance);
    }
    else{
        alert("Invalid Pin")
        return;
    }
})